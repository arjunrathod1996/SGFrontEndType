/// <reference types="react-scripts" />

interface PiwikEnvironmentVaribales {
    PIWIK_BASE: string;
    PIWIK_ID: string;
    CONTEXT_PATH:string;
}

interface EnvironmentVariables extends SGConnectEnvironmentVariables, PiwikEnvironmentVaribales {
    CONTACT_US: string;
    
}

interface Window {
    env : EnvironmentVariables;
}

declare module 'piwik-react-router' {
    interface PiwikOptions {
        url : string;
        siteId: string;
    }

    const piwik: (options: PiwikOptions) => any;
    export default piwik;
}


