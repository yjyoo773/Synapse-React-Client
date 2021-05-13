import React from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { ErrorBanner } from '../ErrorBanner'
import * as ReactBootstrap from 'react-bootstrap'
import { QueryClient, QueryClientProvider } from 'react-query'
import DownloadListTableV2, { DownloadListTableV2Props } from './DownloadListTableV2'

export default function AvailableForDownloadTable(props: DownloadListTableV2Props) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 50 * 1000, // 5s
                retry: false, // SynapseClient knows which queries to retry
            },
        },
    })
    const ErrorFallback: React.FunctionComponent<FallbackProps> = ({
        error,
        resetErrorBoundary,
    }) => {
        return (
            <div role="alert" className="SRC-marginBottomTop">
                <ErrorBanner error={error}></ErrorBanner>
                <ReactBootstrap.Button onClick={resetErrorBoundary}>Reload</ReactBootstrap.Button>
            </div>
        )
    }
    if (!props.token) {
        return <></>
    }
    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <DownloadListTableV2 token={props.token} />
            </ErrorBoundary>
        </QueryClientProvider>
    )
}