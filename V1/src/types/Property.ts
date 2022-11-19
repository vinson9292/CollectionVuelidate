import { Guid } from 'guid-ts';
import type { IProperty } from '../types/Interface/IProperty'
export class Property implements IProperty {
    constructor() {
        this.sid = 0;
        this.fkCaseNo = Guid.newGuid().toString();
        this.createDate = new Date();
        this.updateDate = new Date();
        this.type = '';
        this.area = 0;
        this.price = 0;
        this.envalue = 0;
    }

    sid: number;
    fkCaseNo: string
    createDate: Date;
    updateDate: Date;
    type: string;
    area: number;
    price: number;
    envalue: number;
}