import {serializeThemeParams, setDebug} from '@tma.js/sdk';
import {DisplayGate, SDKProvider, useLaunchParams} from '@tma.js/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { type FC, useEffect, useMemo } from 'react';
import App from "./App.tsx";
import {ErrorBoundary} from "./ErrorBoundary.tsx";

const DisplayError: FC<{ error: unknown }> = ({ error }) => (
    <blockquote>
        <code>
            {error instanceof Error
                ? error.message
                : JSON.stringify(error)}
        </code>
    </blockquote>
);

const ErrorBoundaryError: FC<{ error: unknown }> = ({ error }) => (
    <div>
        <p>An unhandled error occurred:</p>
        <DisplayError error={error} />
    </div>
);

const ErrorBoundarySDK: FC<{ error: unknown }> = ({ error }) => (
    <div>
        <p>
            An error occurred while initializing the SDK. You are probably running the application
            outside of Telegram (in usual browser, for example).
        </p>
        <DisplayError error={error} />
    </div>
);

const Loading: FC = () => <div>Application is loading</div>;

const Inner: FC = () => {
    const launchParams = useLaunchParams();
    serializeThemeParams({
        accentTextColor: "#f2bc6a",
        backgroundColor: "#86d7d7",
        buttonColor: "#5288c1",
        buttonTextColor: "#ffffff",
        destructiveTextColor: "#ec3942",
        headerBackgroundColor: "#69a6a6",
        hintColor: "#708499",
        linkColor: "#6ab3f3",
        secondaryBackgroundColor: "#232e3c",
        sectionBackgroundColor: "#17212b",
        sectionHeaderTextColor: "#6ab3f3",
        subtitleTextColor: "#708499",
        textColor: "#f5f5f5"
    });
    const manifestUrl = useMemo(() => {
        return new URL('tonconnect-manifest.json', window.location.href).toString();
    }, []);

    // Enable debug mode to see all the methods sent and events received.
    useEffect(() => {
        if (launchParams.startParam === 'debug') {
            setDebug(true);
            import('eruda').then((lib) => lib.default.init());
        }
    }, [launchParams]);

    return (
        <TonConnectUIProvider manifestUrl={manifestUrl}>
            <SDKProvider options={{ acceptCustomStyles: true, cssVars: true, complete: true }}>
                <DisplayGate error={ErrorBoundarySDK} loading={Loading} initial={Loading}>
                    <App />
                </DisplayGate>
            </SDKProvider>
        </TonConnectUIProvider>
    );
};

export const Root: FC = () => (
    <ErrorBoundary fallback={ErrorBoundaryError}>
        <Inner />
    </ErrorBoundary>
);