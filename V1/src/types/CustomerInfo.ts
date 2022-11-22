import { Guid } from 'guid-ts';
import type { ICustomerInfo } from '../types/Interface/ICustomerInfo'
import { Address } from './Address';
import { DeedTypeEnum } from './Constant';
export class CustomerInfo implements ICustomerInfo {
    constructor() {
        this.ReportNo='';
        this.Brach='';
        this.FullNameOfOwnship='';
        this.BorrowerName='';
        this.DeedType = DeedTypeEnum.HardTitleDeed;
        this.DeedNo='';
        this.Propertype='';
        this.JointBowwer='';
        this.Location= new Address();
        this.BoreyWholeName='';
        this.WholeProjectName='';
        this.sid = 0;
        this.fkCaseNo = Guid.newGuid().toString();
        this.createDate = new Date();
        this.updateDate = new Date();
    }
    ReportNo: string;
    Brach: string;
    FullNameOfOwnship: string;
    BorrowerName: string;
    DeedType: DeedTypeEnum;
    DeedNo: string;
    Propertype: string;
    JointBowwer: string;
    Location: Address;
    BoreyWholeName: string;
    WholeProjectName: string;
    sid: number;
    fkCaseNo: string;
    createDate: Date;
    updateDate: Date;
}