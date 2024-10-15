
import { FunctionComponent } from "react";
import { useStoreActions, useStoreState } from "../../../store/hooks";
import { Entities } from "../../../store/policy.type";


const ModalPhaseOne: FunctionComponent = () => {
    const {localEligibilityMatrix, eligibilityMatrix,policy} = useStoreState(store => store.pnp.policyApplicability);
    const setLocalEligibilityMatrix = useStoreActions(action => action.pnp.policyApplicability.setEligibilityMatrix);
    const policyEntries: Entities[] = useStoreState(state => state.policyDetails.policyData.allPnpPolicyEntities);
   
    return(
        <>
        </>
    )
}

export default ModalPhaseOne;