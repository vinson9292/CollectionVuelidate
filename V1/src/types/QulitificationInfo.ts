import { Guid } from 'guid-ts';
import type { IQulitificationInfo } from '../types/Interface/IQulitificationInfo'
import { QulityInfo, OccupancyState, MortgageType } from './Constant';
export class QulitificationInfo implements IQulitificationInfo {
    constructor() {
        // this.Q1 = QulityInfo.IncompletePropertyRight;
        // this.Q2 = QulityInfo.IllgalConstration;
        // this.Q3 = QulityInfo.WithoutIndependentEnternceOrRoad;
        // this.Q4 = QulityInfo.OnlyFitInSpecificIndustry;
        // this.Q5 = QulityInfo.NearbyUnpleasantFacilities;
        // this.Q6 = QulityInfo.LocateInSuburbanOrPoorLivingCondition;
        // this.Q7 = QulityInfo.WithoutIndependentEnternceOrRoad;
        // this.Q8 = QulityInfo.OnlyFitInSpecificIndustry2;
        // this.Q9 = QulityInfo.FloodingRecordRecently;
        // this.Q10 = QulityInfo.LocalteInConflictArea;
        this.Occupancy = OccupancyState.Residentail;
        this.RentTenatName = '';
        this.RentFee = 0;
        this.Mortgage = MortgageType.Hypothec;
        this.BankName = '';
        this.Tenor = 0;
        this.SellingCase = false;
        this.SellerName = ''
        this.SPAPrice = '';
        this.sid = 0;
        this.fkCaseNo = Guid.newGuid().toString();
        this.createDate = new Date();
        this.updateDate = new Date();
    }
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
    sid: number;
    fkCaseNo: string;
    createDate: Date;
    updateDate: Date;
}