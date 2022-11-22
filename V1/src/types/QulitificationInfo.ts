import { Guid } from 'guid-ts';
import type { IQulitificationInfo } from '../types/Interface/IQulitificationInfo'
import type { OccupancyStateEnum, MortgageTypeEnum } from './Constant';
import { QualityList } from './QualityList'
export class QulitificationInfo implements IQulitificationInfo {
    constructor() {
        this.QualityList = new QualityList();
        this.sid = 0;
        this.fkCaseNo = Guid.newGuid().toString();
        this.createDate = new Date();
        this.updateDate = new Date();
    }
    QualityList: QualityList;
    Occupancy?: OccupancyStateEnum;
    RentTenatName?: string;
    RentFee?: number;
    Mortgage?: MortgageTypeEnum;
    BankName?: string;
    Tenor?: number;
    SellingCase?: boolean;
    SellerName?: string;
    SPAPrice?: string;
    sid: number;
    fkCaseNo: string;
    createDate: Date;
    updateDate: Date;
}