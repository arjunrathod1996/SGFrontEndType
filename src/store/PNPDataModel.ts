import { policyApplicabilityModal, PolicyApplicabilityModal } from "./PolicyApplicabilityModal"


export interface PNPDataModel {
    documentList:DocumentListModel;
    manageEntitiesList:ManageEntitiesListModel;
    userRole:UserRole;
    policyApplicability: PolicyApplicabilityModal;

}

export const pnpDataModel: PNPDataModel = {
    policyApplicability: policyApplicabilityModal,
}