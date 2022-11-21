import type { IBase } from "./IBase";
import type { IAppraisalBy } from "./IAppraisalBy";
import type { IProperty } from "./IProperty";
import type { IChecking } from "./IChecking";
export interface ICasInfo extends IBase,IAppraisalBy,IProperty,IChecking {
    PurchasedPropertyStstus: string;
    MainBorrowerStatus: string;
    FirstBuyer: string;
    FloorNumber: string;
    RoomNumber: string;
    WidthOfLand: string;
    DateOfConstruction: string;
    AppraisalBy: IAppraisalBy;
    AppraisalFee:string;
    Property: IProperty;
    Checking: IChecking;
    Remark:string;
    AppraisalValue:number;
}