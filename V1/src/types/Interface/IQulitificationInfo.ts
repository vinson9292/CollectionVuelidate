import type { OccupancyStateEnum, MortgageTypeEnum } from "../Constant"
import type { QualityList } from "../QualityList"
export interface IQulitificationInfo {
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