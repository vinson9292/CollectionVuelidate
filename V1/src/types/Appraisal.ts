import { Guid } from 'guid-ts';
import type { IAppraisalBy } from './Interface/IAppraisalBy'
export class AppraisalBy implements IAppraisalBy {
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