import intl, { IntlModel } from "./intl.model";
import { pnpDataModel, PNPDataModel } from "./PNPDataModel";
import { PolicyModel,policyModel } from "./policy.model";
import userInfo, { UserInfoModel } from "./user-info.model";

export interface AppStoreModel {
    intl : IntlModel;
    userInfo: UserInfoModel;
    policyDetails:PolicyModel;
    pnp:PNPDataModel;
}

const model : AppStoreModel = {
    intl,
    userInfo,
    policyDetails:policyModel,
    pnp:pnpDataModel,
};

export default model;