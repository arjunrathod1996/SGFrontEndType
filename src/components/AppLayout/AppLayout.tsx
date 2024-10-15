import React, { Suspense } from "react";
import { Spinner } from "reactstrap";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ScrollToTop from "../ScrollToTop";

interface AppLayoutProps {
    children: React.ReactElement;
}

const AppLayout: React.FunctionComponent<AppLayoutProps> = ({ children }) => {
    return (
        <ErrorBoundary>
            <ScrollToTop>
                <Suspense
                    fallback={
                        <div className="container-centered">
                            <Spinner color="dark" />
                        </div>
                    }
                >
                    <div>{children}</div>
                </Suspense>
            </ScrollToTop>
        </ErrorBoundary>
    );
};

export default AppLayout;
