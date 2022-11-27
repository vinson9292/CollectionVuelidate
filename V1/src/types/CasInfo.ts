import { Base } from './Base'
import type { IAppraisalBy } from './Interface/IAppraisalBy';
import type { ICasInfo } from './Interface/ICasInfo'
import type { IChecking } from './Interface/IChecking';
import type { IProperty } from './Interface/IProperty';
export class CasInfo extends Base implements ICasInfo {
    constructor() {
        super();
    }
    PurchasedPropertyStstus?: string;
    MainBorrowerStatus?: string;
    FirstBuyer?: string;
    FloorNumber?: string;
    RoomNumber?: string;
    WidthOfLand?: string;
    DateOfConstruction?: string;
    AppraisalByList?: IAppraisalBy[];
    AppraisalFee?: string;
    PropertyList?: IProperty[];
    CheckingList?: IChecking[];
    Remark?: string;
    AppraisalValue?: number;
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