import { action, Action } from "easy-peasy";
import { UserInfo } from "./user-info.type";
import { Platform } from "../utils/Enums";


const initialUserInfo = {
    sub:'',
}

export interface UserInfoModel {
    user: UserInfo,
    platform: Platform;
    setPlatform:Action<UserInfoModel, Platform>
}

const userInfo : UserInfoModel = {
    user: initialUserInfo,
    platform:Platform.UNDECIDED,
    setPlatform: action((state, payload : Platform) => {
        state.platform = payload;
    })
}

export default userInfo;