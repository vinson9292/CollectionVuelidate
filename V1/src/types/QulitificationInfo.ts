import { Base } from './Base'
import type { IQulitificationInfo } from '../types/Interface/IQulitificationInfo'
import type { OccupancyStateEnum, MortgageTypeEnum } from './Constant';
import { QualityList } from './QualityList'
export class QulitificationInfo extends Base implements IQulitificationInfo {
    constructor() {
        super();
        this.QualityList = new QualityList();
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
}