import { Guid } from 'guid-ts';
import type { IBase } from './Interface/IBase'
export class Base implements IBase {
    constructor() {
        this.sid = 0;
        this.fkCaseNo = Guid.newGuid().toString();
        this.createDate = new Date();
        this.updateDate = new Date();
    }
    sid: number;
    fkCaseNo: string;
    createDate: Date;
    updateDate: Date;
}