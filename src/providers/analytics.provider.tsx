
import { createInstance, MatomoProvider } from "@datapunt/matomo-tracker-react";
import React, { PropsWithChildren } from "react";

const AnalyticsProvider: React.FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
    const piwikBase = window?.env?.PIWIK_BASE;
    const piwikId = window?.env?.PIWIK_ID;

    if (!piwikBase || !piwikId) {
        console.error("PIWIK_BASE or PIWIK_ID is not defined.");
        return null; // Handle this case gracefully
    }

    const instance = createInstance({ 
        urlBase: piwikBase,
        siteId: +piwikId, // Convert to number
    });

    return <MatomoProvider value={instance}>{children}</MatomoProvider>;
};

export default AnalyticsProvider;


// import { createInstance, MatomoProvider } from "@datapunt/matomo-tracker-react";
// import React, { PropsWithChildren } from "react";

// const AnalyticsProvider: React.FunctionComponent<PropsWithChildren<{}>> = ({ children}) => {
//     const instance = createInstance({
//         urlBase: window.env.PIWIK_BASE,
//         siteId: +window.env.PIWIK_ID,
//     });
//     return <MatomoProvider value={instance}>{children}</MatomoProvider>;
// };

// export default AnalyticsProvider;

// import { createInstance, MatomoProvider } from "@datapunt/matomo-tracker-react";
// import React, { PropsWithChildren } from "react";

// const AnalyticsProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
//     const instance = createInstance({
//         urlBase: window.env.PIWIK_BASE,
//         siteId: +window.env.PIWIK_ID,
//     });

//     // Ensure MatomoProvider correctly wraps children
//     return (
//         <MatomoProvider value={instance}>
//             {children} {/* Render children within the provider */}
//         </MatomoProvider>
//     );
// };

// export default AnalyticsProvider;


// import { createInstance } from "@datapunt/matomo-tracker-react";
// import React, { PropsWithChildren } from "react";

// // Initialize Matomo tracker instance
// const instance = createInstance({
//     urlBase: window.env.PIWIK_BASE,
//     siteId: +window.env.PIWIK_ID,
// });

// const AnalyticsProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
//     // Use instance as needed, but don't wrap with MatomoProvider if it doesn't support children
//     return (
//         <>
//             {/* Render your children directly */}
//             {children}
//         </>
//     );
// };

// export default AnalyticsProvider;
