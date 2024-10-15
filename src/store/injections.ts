import { Configuration } from "../Configuration";
import { UserInfoFetcher } from "../gateways/userInfoFetcher.interface";

const userInfoService = Configuration.userInfoFetcher;

export interface injections {
    userInfoService:UserInfoFetcher;
}

export const injections: injections = {
    userInfoService,
}