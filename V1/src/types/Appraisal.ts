import { Guid } from 'guid-ts';
import type { IAppraisal } from '../types/Interface/IAppraisal'
export class Appraisal implements IAppraisal {
    constructor() {
        this.sid = 0;
        this.fkCaseNo = Guid.newGuid().toString();
        this.createDate = new Date();
        this.updateDate = new Date();
        this.ApprisaledBy = '';
        this.TotalPrice = 0;
    }

    ApprisaledBy: string;
    TotalPrice: number;
    sid: number;
    fkCaseNo: string
    createDate: Date;
    updateDate: Date;

}