import type { IAppraisalBy } from './Interface/IAppraisalBy';
import type {ICasInfo} from './Interface/ICasInfo'
import type { IChecking } from './Interface/IChecking';
import type { IProperty } from './Interface/IProperty';
import { Guid } from 'guid-ts';

export class CasInfo implements ICasInfo{
    constructor() {
        this.sid = 0;
        this.fkCaseNo = Guid.newGuid().toString();
        this.createDate = new Date();
        this.updateDate = new Date();
        
    }
    PurchasedPropertyStstus?: string | undefined;
    MainBorrowerStatus?: string | undefined;
    FirstBuyer?: string | undefined;
    FloorNumber?: string | undefined;
    RoomNumber?: string | undefined;
    WidthOfLand?: string | undefined;
    DateOfConstruction?: string | undefined;
    AppraisalByList?: IAppraisalBy[] | undefined;
    AppraisalFee?: string | undefined;
    PropertyList?: IProperty[] | undefined;
    CheckingList?: IChecking[] | undefined;
    Remark?: string;
    AppraisalValue?: number;
    sid: number;
    fkCaseNo: string;
    createDate: Date;
    updateDate: Date;

    ApprisaledBy?: string;
    TotalPrice?: number;

    type?: string;
    area?: number;
    price?: number;
    envalue?: number;

    PropertyType?: string;
    SizeSqm?: number;
    PriceSqm?: number;
    PropertyValue?: number;

}