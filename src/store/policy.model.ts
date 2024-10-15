import { PolicyAllData } from "./policy.type";

export interface PolicyModel {
    policyData:PolicyAllData;

}

const initialPolicyDetails: PolicyAllData = {
    inProgress: 0,
    allPnpPolicyEntities: []
}

export const policyModel: PolicyModel = {
    policyData: initialPolicyDetails,
}

