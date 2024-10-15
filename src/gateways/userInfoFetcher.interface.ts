import { UserInfo, UserInfoByIggResponseBody } from "../store/user-info.type";



export interface UserInfoFetcher {
    fetchInfo(): Promise<UserInfo>;
    fetchUserInfoByIggs(userIgg: number[]): Promise<UserInfoByIggResponseBody>;
}