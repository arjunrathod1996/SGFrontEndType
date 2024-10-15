

export interface UserInfo {
    sub :  string,
}

export interface UserInfoByIggResponseBody {
    contacts: UserNameByIggs[];
    firstPageUri:string;
    page:number;
    pageSize:number;
    uri:string;
}

export interface UserNameByIggs {
    id:string;
    fullName:string;
    isActive:boolean;
    emails:EmailType[];
    type:string;
    employeeOfAccountId:string;
    givenName:string;
    igg:string;
}

export interface EmailType {
    value:string;
    type:string;
}