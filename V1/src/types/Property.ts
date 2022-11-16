import type { Guid } from 'guid-ts';
type GUID = string & { isGuid: true};
export interface IProperty {
    Sid:number,
    FkCaseNo:GUID,
    type: string;
    area: number;
    price: number;
    envalue: number;
}