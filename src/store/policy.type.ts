

export interface PolicyDetailsById {
    bbk?:string,
}

export interface EligibilityMatrix {
    entity?:string,
}

export interface Entities {
    busu:string;
    busuCode:string;
}

export interface PolicyAllData {
    inProgress:number;
    allPnpPolicyEntities:Entities[];
}



const initialPolicyDetails: PolicyAllData = {
    inProgress:0,
    allPnpPolicyEntities:[],
};

export interface Country {
    id:number;
    countryEng:string;
    countryFra:string;
    iso2a:string;
    iso3a:string;
    active: boolean;
};

export enum OversightEnum {
    STANDARD = 'STANDARD',
    SIMPLIFIED = 'SIMPLIFIED',
};

export interface RiskApplicationEntities {
    domainId:number;
    id:number;
    riskId:number,
    identification:string;
    active:boolean;
}

export interface Entities {
    busu : string;
    busuCode:string;
    busuOuid:number;
    identification:string;
    legalName:string;
    nationalityCode:string;
    officailName:string;
    pole:string;
    polieId:number;
    overSightEnum:OversightEnum;
    riskEntities: RiskApplicationEntities[];
    activate: boolean;
    activeInPerle:boolean;
}