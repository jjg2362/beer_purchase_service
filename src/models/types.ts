export enum ETagKey {
    KIND = 'kind',
    FROM = 'from',
    BRAND = 'brand',
}

export interface ITag {
    key: ETagKey,
    name: string,
};

export interface IBeer {
    id: number,
    name: string,
    image: string,
    tags: ITag[],
    price: number,
    stock: number,
    count: number,
    priority: number,
};

export interface IPurchaseItem {
    id: number,
    count: number,
};

export interface IPurchaseResult {
    totalCount: number,
    totalPrice: number,
};

export interface IInternalErrorMessage {
    title: string,
    reason: string,
};