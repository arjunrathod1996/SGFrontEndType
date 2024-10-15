// store.provider.js
import { StoreProvider } from "easy-peasy";
import React, { PropsWithChildren } from "react";
import store from "../store";

const StoreProviderWrapper: React.FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
    return <StoreProvider store={store}>{children}</StoreProvider>;
};

export default StoreProviderWrapper;



// import { StoreProvider } from "easy-peasy";
// import { PropsWithChildren } from "react";
// import store from '../store'

// const Providers: React.FunctionComponent<PropsWithChildren<{}>> = ({children}) => {
//     return <StoreProvider store = {store}>{children}</StoreProvider>
// }