import{E as o,F as n}from"./EntityFinder.7715c5dc.js";import{E as e}from"./EntityTypeUtils.55859888.js";import"./assert.e08ffd64.js";import{j as r}from"./jsx-runtime.2e925369.js";import"./pluralize.9a5ef702.js";import"./iframe.574ed928.js";import"./index.f61a1456.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.670aaa99.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Alert.5f67d407.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.8d049b2f.js";import"./index.06f4a415.js";import"./toString.8ef640ae.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.2998c199.js";import"./react-sizeme.64385783.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.4a41f208.js";import"./Tooltip.8a506c05.js";import"./createSvgIcon.0bfcb8f8.js";import"./slicedToArray.e9a7fa03.js";import"./useTheme.05af6e65.js";import"./makeStyles.72aedf90.js";import"./InfoOutlined.d201fe9f.js";import"./use-deep-compare-effect.esm.76673280.js";import"./useGetEntityChildren.ce7b5bf6.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.e37b74c8.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";import"./HelpPopover.95fe0cf1.js";import"./MarkdownPopover.7d03cc32.js";import"./usePopperMarginModifiers.4ced5867.js";import"./useWaitForDOMRef.37941199.js";import"./hasClass.56fd144a.js";import"./MarkdownSynapse.bd7b7bb1.js";import"./UserCard.be6d5307.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.4bbec449.js";import"./times.bd0563ab.js";import"./toInteger.d33a1bdb.js";import"./Skeleton.3847d4da.js";import"./ToastMessage.6439b7b0.js";import"./FullWidthAlert.279e31cc.js";import"./Typography.3a9e45b6.js";import"./removeClass.27874bcb.js";import"./uniqueId.fa0dadf5.js";import"./Overlay.bf042904.js";import"./factory.4cfac25f.js";import"./SynapseVideo.404bcbca.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.9e4fb016.js";import"./moment.53181859.js";import"./HelpOutlineTwoTone.6ff08a10.js";import"./LoadingScreen.efad5b29.js";import"./Modal.9056450d.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.85bb9cd4.js";import"./useEntityBundle.7adfeb10.js";import"./EntityIcon.2f7e07c2.js";import"./SynapseTableConstants.07ecdebd.js";import"./SchemaDrivenAnnotationEditor.c43ea180.js";import"./isEmpty.f77aa994.js";import"./lodash.fec0b3a2.js";import"./CalendarWithIconFormGroup.e7713136.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./Collapse.8d0a3062.js";import"./groupBy.507f8cf9.js";import"./_baseMap.2238c370.js";import"./_baseIsEqual.90b6f225.js";import"./_cacheHas.869a5a8d.js";import"./_setToArray.a82100c8.js";import"./EntityModal.73a40768.js";import"./ExternalFileHandleInterface.9e90061a.js";import"./WarningModal.1c7626c2.js";import"./LockTwoTone.67127f07.js";import"./cloneDeep.7ae5207b.js";import"./Dropdown.b16d4176.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.0b7b2443.js";import"./EntityLink.967993f4.js";import"./useFavorites.43edae33.js";import"./FileEntity.4f8cb425.js";import"./TypeUtils.a2c41307.js";var zt={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import EntityFinder from './EntityFinder'
import { FinderScope } from './tree/EntityTree'
import { EntityType } from '../../utils/synapseTypes'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/EntityFinder',
  component: EntityFinder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof EntityFinder>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EntityFinder> = args => (
  <EntityFinder {...args} />
)

export const DualPane = Template.bind({})
DualPane.args = {
  mustSelectVersionNumber: true,
  treeOnly: false,
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: 'syn23567475',
  initialContainer: 'syn24183903',
  selectMultiple: true,
  visibleTypesInList: Object.values(EntityType),
  showVersionSelection: true,
  onSelectedChange: selected => {
    console.log('Selection changed:', selected)
  },
  selectableTypes: Object.values(EntityType),
  selectedCopy: count => {
    return \`\${count} Item\${count > 1 ? 's' : ''} Selected\`
  },
}

export const SinglePane = Template.bind({})

SinglePane.args = {
  treeOnly: true,
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: 'syn23567475',
  initialContainer: 'syn24183903',
  selectMultiple: false,
  visibleTypesInTree: [EntityType.PROJECT, EntityType.FOLDER, EntityType.TABLE],
  showVersionSelection: true,
  onSelectedChange: selected => {
    console.log('Selection changed:', selected)
  },
  selectableTypes: [EntityType.PROJECT, EntityType.FOLDER],
}
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}},"single-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{}};const i=t=>r(o,{...t}),p=i.bind({});p.args={mustSelectVersionNumber:!0,treeOnly:!1,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const m=i.bind({});m.args={treeOnly:!0,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const Gt=["DualPane","SinglePane"];export{p as DualPane,m as SinglePane,Gt as __namedExportsOrder,zt as default};
//# sourceMappingURL=EntityFinder.stories.584d8a16.js.map
