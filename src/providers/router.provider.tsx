import { BrowserRouter, Router } from "react-router-dom";
import { createBrowserHistory} from 'history'
import PiwikReactRouter from 'piwik-react-router';
import { PropsWithChildren } from "react";

const Providers: React.FunctionComponent<PropsWithChildren<{}>> = ({ children}) => {
    const piwik = PiwikReactRouter({
        url: window.env.PIWIK_BASE,
        siteId:window.env.PIWIK_ID,
    });

    const history = createBrowserHistory();
    return (
        <BrowserRouter basename={window.env.CONTEXT_PATH}>
            <Router history={piwik.connectToHistory(history)} >{children}</Router>
        </BrowserRouter>
    );
};

export default Providers;