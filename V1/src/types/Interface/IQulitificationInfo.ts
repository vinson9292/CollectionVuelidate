import type { IBase } from "./IBase";
import type { OccupancyStateEnum, MortgageTypeEnum } from "../Constant"
import type { QualityList } from "../QualityList"
export interface IQulitificationInfo extends IBase {
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