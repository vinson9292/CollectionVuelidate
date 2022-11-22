import { Guid } from 'guid-ts';
import type { IChecking } from './Interface/IChecking'
export class Checking implements IChecking {
    constructor() {
        this.sid = 0;
        this.fkCaseNo = Guid.newGuid().toString();
        this.createDate = new Date();
        this.updateDate = new Date();
        this.PropertyType = '';
        this.SizeSqm = 0;
        this.PriceSqm = 0;
        this.PropertyValue = 0;
    }
    
    PropertyType: string;
    SizeSqm: number;
    PriceSqm: number;
    PropertyValue: number;
    sid: number;
    fkCaseNo: string
    createDate: Date;
    updateDate: Date;
}