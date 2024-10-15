import { action, Action } from "easy-peasy";
import { EligibilityMatrix, PolicyDetailsById } from "./policy.type";



export interface PolicyApplicabilityModal {
    policy: PolicyDetailsById | undefined;
    setPolicy: Action<PolicyApplicabilityModal, PolicyDetailsById>;
    localEligibilityMatrix:EligibilityMatrix[];
    setLocalEligibilityMatrix: Action<PolicyApplicabilityModal, EligibilityMatrix[]>;
    eligibilityMatrix:EligibilityMatrix[];
    setEligibilityMatrix:Action<PolicyApplicabilityModal, EligibilityMatrix[]>;
}

export const policyApplicabilityModal: PolicyApplicabilityModal = {
    policy: undefined,
    setPolicy: action((state, payload) => {
        state.policy = payload;
    }),
    localEligibilityMatrix: [],
    setLocalEligibilityMatrix: action((state, payload: EligibilityMatrix[]) => {
        state.eligibilityMatrix = payload;
    }),
    eligibilityMatrix: [],
    setEligibilityMatrix: action((state, payload: EligibilityMatrix[]) => {
        state.eligibilityMatrix = payload;
    }),
};
