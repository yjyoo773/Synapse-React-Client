import { EvaluationRound, EvaluationRoundLimit } from 'lib/utils/synapseTypes'
import React, { useCallback, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
  Row,
} from 'react-bootstrap'
import 'react-datetime/css/react-datetime.css'
import moment, { Moment } from 'moment'
import { CalendarWithIconFormGroup } from './CalendarWithIconFormGroup'
import { EvaluationRoundLimitOptionsList } from './round_limits/EvaluationRoundLimitOptionsList'
import { faClipboardCheck, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useListState } from '../../utils/hooks/useListState'
import {
  convertEvaluationRoundToInput,
  EvaluationRoundInput,
  EvaluationRoundLimitInput,
} from './input_models/models'
import {
  updateEvaluationRound,
  createEvaluationRound,
  deleteEvaluationRound,
  SynapseClientError,
} from '../../utils/SynapseClient'
import { EvaluationRoundEditorDropdown } from './EvaluationRoundEditorDropdown'
import { Error } from '../Error'

export type EvaluationRoundEditorProps = {
  sessionToken: string
  evaluationRoundInput: EvaluationRoundInput
  //If true, dates for start/end are displayed in UTC instead of local time
  utc: boolean
  onDelete: () => void
  onSave: (evaluationRound: EvaluationRoundInput) => void
}

const disallowCalendarDateBefore = (date: Moment) => (currentDate: Moment) =>
  currentDate.isSameOrAfter(date)

const determineRoundStatus = (evaluationRoundInput: EvaluationRoundInput) => {
  const now = moment()
  // based off of start/end datetime from props so that users making
  // unsaved changes to the start/end dates do not change the status
  if (now.isSameOrAfter(evaluationRoundInput.roundStart)) {
    if (now.isBefore(evaluationRoundInput.roundEnd)) {
      return (
        <div className="status-in-progress">
          <FontAwesomeIcon icon={faSyncAlt} /> <span>IN PROGRESS</span>
        </div>
      )
    } else {
      return (
        <div className="status-completed">
          <FontAwesomeIcon icon={faClipboardCheck} /> <span>COMPLETED</span>
        </div>
      )
    }
  } else {
    return (
      <div className="status-not-yet-started">
        <span>NOT YET STARTED</span>
      </div>
    )
  }
}

export const EvaluationRoundEditor: React.FunctionComponent<EvaluationRoundEditorProps> = ({
  sessionToken,
  evaluationRoundInput,
  onSave,
  onDelete,
  utc,
}) => {
  const [error, setError] = useState<string | SynapseClientError | undefined>()
  const [startDate, setStartDate] = useState<string | Moment>(
    moment(evaluationRoundInput.roundStart),
  )
  const [endDate, setEndDate] = useState<string | Moment>(
    moment(evaluationRoundInput.roundEnd),
  )

  const [totalSubmissionLimit, setTotalSubmissionLimit] = useState<string>(
    evaluationRoundInput.totalSubmissionLimit,
  )

  const [advancedMode, setAdvancedMode] = useState<boolean>(false)

  const {
    list: advancedLimits,
    handleListRemove,
    handleListChange: handleAdvancedLimitsChange,
    appendToList: addAdvancedLimit,
  } = useListState<EvaluationRoundLimitInput>(evaluationRoundInput.otherLimits)

  // if we remove the last advanced limit, hide the advanced limits
  const handleAdvancedLimitsRemove = useCallback(
    (index: number) => {
      const generatedDeleteFromListFunc = handleListRemove(index)
      return () => {
        //we are deleting the last advanced limit

        generatedDeleteFromListFunc()
        if (advancedLimits.length === 1) {
          // NOTE: we dont check for length == 0 because we don't modify the original list,
          // instead the generated function will setState() with a NEW empty list
          // so the original list we reference still has 1 element
          setAdvancedMode(false)
        }
      }
    },
    [handleListRemove, advancedLimits],
  )

  const convertInputsToEvaluationRound = (): EvaluationRound => {
    const limits: EvaluationRoundLimit[] = []
    if (totalSubmissionLimit) {
      limits.push({
        limitType: 'TOTAL',
        maximumSubmissions: parseInt(totalSubmissionLimit),
      })
    }
    advancedLimits.forEach(limitInput => {
      if (limitInput.maxSubmissionString) {
        limits.push({
          limitType: limitInput.type,
          maximumSubmissions: parseInt(limitInput.maxSubmissionString),
        })
      }
    })

    return {
      id: evaluationRoundInput.id,
      etag: evaluationRoundInput.etag,
      evaluationId: evaluationRoundInput.evaluationId,
      roundStart: moment.utc(startDate).toJSON(),
      roundEnd: moment.utc(endDate).toJSON(),
      limits: limits,
    }
  }

  const handleSave = () => {
    const evaluationRound = convertInputsToEvaluationRound()

    const promise = evaluationRound.id
      ? updateEvaluationRound(evaluationRound, sessionToken)
      : createEvaluationRound(evaluationRound, sessionToken)

    promise
      .then(createdOrUpdatedRound => {
        const newInput = convertEvaluationRoundToInput(
          createdOrUpdatedRound,
          evaluationRoundInput.reactListKey,
        )
        //clear out previous error if any
        setError(undefined)
        onSave(newInput)
      })
      .catch(error => setError(error))
  }

  const handleDelete = () => {
    if (evaluationRoundInput.id) {
      deleteEvaluationRound(
        evaluationRoundInput.evaluationId,
        evaluationRoundInput.id,
        sessionToken,
      )
        .then(onDelete)
        .catch(error => setError(error))
    } else {
      onDelete()
    }
  }

  const disallowDatesBeforeNow = disallowCalendarDateBefore(
    moment().startOf('day'),
  )

  // https://react-bootstrap.github.io/components/forms/#forms-validation-native
  return (
    <div className="evaluation-round-editor">
      <Card>
        <Card.Body>
          <Form>
            <Row>
              <Col>
                <h5>ROUND STATUS</h5>
              </Col>
              <Col>
                <EvaluationRoundEditorDropdown
                  onDelete={handleDelete}
                  onSave={handleSave}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <div className="round-status">
                  {determineRoundStatus(evaluationRoundInput)}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>DURATION</h5>
              </Col>
            </Row>

            <Row>
              <Col>
                <CalendarWithIconFormGroup
                  value={startDate}
                  setterCallback={setStartDate}
                  label="Round Start"
                  utc={utc}
                  isValidDate={disallowDatesBeforeNow}
                  disabled={moment().isSameOrAfter(
                    evaluationRoundInput.roundStart,
                  )}
                />
              </Col>
              <Col>
                <CalendarWithIconFormGroup
                  value={endDate}
                  label="Round End"
                  setterCallback={setEndDate}
                  utc={utc}
                  isValidDate={disallowDatesBeforeNow}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>SUBMISSION LIMITS</h5>
              </Col>
            </Row>

            <Row>
              <Col>
                <FormGroup>
                  <label>Total Submissions / Round</label>
                  <InputGroup>
                    <FormControl
                      value={totalSubmissionLimit}
                      type="text"
                      pattern="[0-9]*"
                      onChange={event =>
                        setTotalSubmissionLimit(event.target.value)
                      }
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Button
                  variant="link"
                  className="advanced-limits-link font-weight-bold SRC-primary-text-color"
                  onClick={() => setAdvancedMode(!advancedMode)}
                >
                  Advanced Limits
                </Button>
              </Col>
            </Row>

            {advancedMode && (
              <EvaluationRoundLimitOptionsList
                limitInputs={advancedLimits}
                handleChange={handleAdvancedLimitsChange}
                handleDeleteLimit={handleAdvancedLimitsRemove}
                onAddNewLimit={addAdvancedLimit}
              />
            )}

            {error && (
              <Row className="my-3">
                <Col>
                  <Error error={error} token={sessionToken} />
                </Col>
              </Row>
            )}

            <Row className="mt-3">
              <Col>
                <Button
                  className="float-right SRC-primary-background-color border-0"
                  onClick={handleSave}
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}
