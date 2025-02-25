
export interface AbstractResponseData {
    id: number;
    nameAr: string;
    nameEn: string;
}

export interface SuccessResponse {
    success: boolean;
}

export enum GridStatus {
    Active = 1,
    InActive = 2,
}

export type ResourceStatus = 1 | 0;

export enum Frequency {
    Annual = 1,
    Monthly,
    EachFiveYears,
    Quarterly,
    SemiAnnual,
    Weekly,
    Daily,
    OneTime
}

export type LookupItem = { [key: string]: any }

export interface DefaultReminder {
    durationDays: string;
    emailType: number;
    status: number;
    id: null;
}
export interface Category extends AbstractResponseData {
    icon: string;
}

export interface Product extends AbstractResponseData {
    categoryId: number;
    price: number;
    imageUrl: string;
}


export interface Basket extends AbstractResponseData {
    userId: number;
    id: number;
    product: Product
}