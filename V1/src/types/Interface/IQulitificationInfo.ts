import type { IBase } from "./IBase";
import type { QulityInfo, OccupancyState, MortgageType } from "../Constant"
export interface IQulitificationInfo extends IBase {
    Q1?: boolean;
    Q2?: boolean;
    Q3?: boolean;
    Q4?: boolean;
    Q5?: boolean;
    Q6?: boolean;
    Q7?: boolean;
    Q8?: boolean;
    Q9?: boolean;
    Q10?: boolean;
    Occupancy: OccupancyState;
    RentTenatName: string;
    RentFee: number;
    Mortgage: MortgageType;
    BankName: string;
    Tenor: number;
    SellingCase: boolean;
    SellerName: string;
    SPAPrice: string;
}