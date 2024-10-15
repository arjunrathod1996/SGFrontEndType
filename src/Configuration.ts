import { IpolicyFetcher } from "./gateways/policyService.interface";
import { IReferentialDataFetcher } from "./gateways/referentialDataService.interface";
import { UserInfoFetcher } from "./gateways/userInfoFetcher.interface";


class ManualDependenciesConfiguration {

    private readonly _policyFetcher!: IpolicyFetcher;
    private readonly _userInfoFetcher!: UserInfoFetcher;
    private readonly _referentialDataFetcher!: IReferentialDataFetcher;
    private readOnly _documentFetcher!:IPolicyDocumentFetcher;
    constructor() {
        this._referentialDataFetcher = new ReferentialDataFetcher();
    }

    get userInfoFetcher() : UserInfoFetcher{
        return this._userInfoFetcher;
    }

    get policyFetcher() : IpolicyFetcher{
        return this._policyFetcher;
    }

    get referentialDataFetcher() : IReferentialDataFetcher {
        return this._referentialDataFetcher;
    }

    get documentFetcher(): IPolicyDocumentFetcher {
        return this._documentFetcher;
    }
}

export const Configuration = new ManualDependenciesConfiguration();

