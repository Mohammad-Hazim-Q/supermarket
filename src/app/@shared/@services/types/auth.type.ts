// import { UserType } from "@main/@base/@pages/users/types/user.type";

export interface SystemUser {

}

export interface LoginResponse {
    user: SystemUser;
    accessToken: string;
}


export enum PagePermission {
    Dashboard = 1,
    Tables,
    Agencies,
    Users,
    PublicationLevels,
    Publications,
    AuditRules,
    Messages,
    OwnerTable,
    InitialSettings,
    ActionsLog
}