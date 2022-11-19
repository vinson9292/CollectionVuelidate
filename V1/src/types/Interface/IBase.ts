import type { Guid } from 'guid-ts';
export interface IBase {
    sid: number,
    fkCaseNo: string,
    createDate: Date,
    updateDate: Date
}