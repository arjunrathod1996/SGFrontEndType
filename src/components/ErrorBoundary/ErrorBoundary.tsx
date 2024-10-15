import React, { Component, ComponentType, ErrorInfo, PropsWithChildren } from "react";
import ErrorComponent from "../ErrorComponent/ErrorComponent";


interface ErrorBoundaryProps {
    FallbackComponent?: ComponentType<any>;
    onError?: (error: Error, errorInfo: ErrorInfo) => void; // This handles both error and error info
}

interface ErrorBoundaryState {
    error?: Error;
}

class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
    constructor(props: PropsWithChildren<ErrorBoundaryProps>) {
        super(props);
        this.state = { error: undefined };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI
        return { error: error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        const { onError } = this.props;
        if (onError) {
            try {
                // Pass both the error and the errorInfo (contains the component stack)
                onError(error, errorInfo);
            } catch (err) {
                // Handle any errors from onError callback
            }
        }
    }

    render() {
        const { children, FallbackComponent = ErrorComponent } = this.props;
        const { error } = this.state;
        if (error != null) {
            return <FallbackComponent />;
        }

        return <>{children}</>;
    }
}

export default ErrorBoundary;






// import React, { Component, ComponentType, ErrorInfo, PropsWithChildren } from "react";
// import ErrorComponent from "../ErrorComponent/ErrorComponent";

// interface ErrorBoundaryProps {
//     FallbackComponent?:ComponentType<any>;
//     onError?: (error: ErrorInfo, componentStack: string) => void;
// }

// interface ErrorBoundaryState {
//     error?: Error;
// }

// class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
//     constructor(props: PropsWithChildren<ErrorBoundaryProps>) {
//         super(props);
//         this.state = {error: undefined};
//     }

//     static getDerivedStateFromError(error: Error){
//         // update state so the next render will show the fallback UI
//         return{error: error};
//     }

//     componentDidCatch(error: Error, info: ErrorInfo): void {
//         const{ onError } = this.props;
//         if(onError){
//             try{
//                 onError(error, info ? info.componentStack : '');
//             }catch(err){};
//         }
//     }

//     render() {
//         const {childern, FallbackComponent = ErrorComponent} = this.props;
//         const {error} = this.state;
//         if(error != null){
//             return <FallbackComponent/>
//         }

//         return <>{childern}</>
//     }
// }

// export default ErrorBoundary;

