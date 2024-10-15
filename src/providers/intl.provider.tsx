

// intl.provider.js
import { PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import { useStoreState } from "../store/hooks"; // Ensure this hook is properly defined


const IntlReduxProvider: React.FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
    const locale = useStoreState(state => state.intl.locale); // Ensure this is not null
    const messages = useStoreState(state => state.intl.message); // Ensure this is not null

    // Ensure locale and messages exist before rendering the provider
    if (!locale || !messages) {
        return null; // or a fallback UI
    }

    return <IntlProvider locale={locale} messages={messages as any}>{children}</IntlProvider>;
};

 export default IntlReduxProvider;
 
// const IntlReduxProvider: React.FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
//     const locale = useStoreState(state => state.intl.locale);
//     const messages = useStoreState(state => state.intl.message);

//     if (!locale || !messages) {
//         return null; // Or provide fallback UI
//     }

//     return <IntlProvider locale={locale} messages={messages as any}>{children}</IntlProvider>;
// };

// export default IntlReduxProvider;


// import { PropsWithChildren } from "react";
// import { IntlProvider } from "react-intl";
// import { useStoreState } from "../store/hooks";


// const IntlReduxProvider: React.FunctionComponent<PropsWithChildren<{}>> = ({ children}) => {
//     const locale = useStoreState(state => state.intl.locale);
//     const messages = useStoreState(state => state.intl.message);

//      // Ensure locale and messages exist before rendering the provider
//      if (!locale || !messages) {
//         return null; // or a fallback UI
//     }

//     return <IntlProvider locale={locale} messages={messages as any} children={children}></IntlProvider>
// };

// export default IntlReduxProvider;