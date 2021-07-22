export interface ITag {
    key: string,
    name: string,
};

export type TTagList = ITag[];

export interface IBeer {
    id: number,
    name: string,
    image: string,
    tags: TTagList,
    price: number,
    stock: number,
};

export type TBeerList = IBeer[];

export interface IPurchaseItem {
    id: number,
    count: number,
};

export type TPurchaseItem = IPurchaseItem[];

export interface IPurchaseResult {
    totalCount: number,
    totalPrice: number,
};

export interface IInternalErrorMessage {
    title: string,
    reason: string,
};