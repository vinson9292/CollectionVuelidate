import type { IBase } from "./IBase";
import type { Address } from "../Address";
import type { DeedType } from "../Constant";
export interface ICustomerInfo extends IBase {
    ReportNo: string;
    Brach: string;
    FullNameOfOwnship: string;
    BorrowerName: string;
    DeedType: DeedType;
    DeedNo: string;
    Propertype: string;
    JointBowwer: string;
    Location: Address;
    BoreyWholeName: string;
    WholeProjectName: string;
}