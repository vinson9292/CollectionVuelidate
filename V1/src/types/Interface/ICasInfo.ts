import type { IAppraisalBy } from "./IAppraisalBy";
import type { IProperty } from "./IProperty";
import type { IChecking } from "./IChecking";
export interface ICasInfo extends IAppraisalBy,IProperty,IChecking {
    PurchasedPropertyStstus?: string;
    MainBorrowerStatus?: string;
    FirstBuyer?: string;
    FloorNumber?: string;
    RoomNumber?: string;
    WidthOfLand?: string;
    DateOfConstruction?: string;
    AppraisalByList?: Array<IAppraisalBy>;
    AppraisalFee?:string;
    PropertyList?: Array<IProperty>;
    CheckingList?: Array<IChecking>;
    Remark?:string;
    AppraisalValue?:number;
}