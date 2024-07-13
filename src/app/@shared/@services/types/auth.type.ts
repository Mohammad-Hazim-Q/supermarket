// import { UserType } from "@main/@base/@pages/users/types/user.type";

export interface SystemUser {
    id: number;
    name: string;
    email: string;
}

export interface LoginResponse {
    user: SystemUser;
    token: string;
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