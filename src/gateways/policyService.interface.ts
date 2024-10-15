import { Country, Entities } from "../store/policy.type";


export interface IpolicyFetcher {
    fetchCountries(riskId?: number, busu?: string[]):Promise<Country[]>;
    fetchPNPPeopleEntities():Promise<Entities[]>;
}