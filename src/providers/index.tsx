import React, { PropsWithChildren } from "react";
import AnalyticsProvider from "./analytics.provider";
import StoreProvider from "./store.provider"; // Ensure this is the correct StoreProvider
// import IntlReduxProvider from "./intl.provider"; // Ensure you are using this properly
// import RouterProvider from "./router.provider";
// import AuthProvider from "./auth.provider";
// import AppThemeProvider from "./AppMuiThemeProvider";
// import { ToastProvider } from "react-toast-notifications";

const Providers: React.FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
    return (
        // <AnalyticsProvider>
        //     <StoreProvider>
        //         <IntlReduxProvider> {/* Ensure this is present */}
        //             <RouterProvider>
        //                 <AuthProvider>
        //                     <AppThemeProvider>
        //                         <ToastProvider>{children}</ToastProvider>
        //                     </AppThemeProvider>
        //                 </AuthProvider>
        //             </RouterProvider>
        //         </IntlReduxProvider>
        //     </StoreProvider>
        // </AnalyticsProvider>

        <AnalyticsProvider>
            <StoreProvider>
               dsjdns
            </StoreProvider>
        </AnalyticsProvider>
    );
};


export default Providers;

// import React, { PropsWithChildren } from "react";
// import AnalyticsProvider from "./analytics.provider";
// import StoreProvider from "./store.provider";
// import IntlProvider from "./intl.provider";
// import RouterProvider from "./router.provider";
// import AuthProvider from "./auth.provider";
// import AppThemeProvider from "./AppMuiThemeProvider";
// import { ToastProvider } from "react-toast-notifications";


// const Providers: React.FunctionComponent<PropsWithChildren<{}>> = ({ children}) => {
//     return(
//         <AnalyticsProvider>
//             <StoreProvider>
//                 <IntlProvider>
//                     <RouterProvider>
//                         <AuthProvider>
//                             <AppThemeProvider>
//                                 <ToastProvider>{ children }</ToastProvider>
//                             </AppThemeProvider>
//                         </AuthProvider>
//                     </RouterProvider>
//                 </IntlProvider>
//             </StoreProvider>
//         </AnalyticsProvider>
//     );
// };

// export default Providers;