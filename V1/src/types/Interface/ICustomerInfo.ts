import type { Address } from "../Address";
import type { DeedTypeEnum } from "../Constant";
export interface ICustomerInfo {
    ReportNo?: string;
    Brach?: string;
    FullNameOfOwnship?: string;
    BorrowerName?: string;
    DeedType?: DeedTypeEnum;
    DeedNo?: string;
    Propertype?: string;
    JointBowwer?: string;
    Location?: Address;
    BoreyWholeName?: string;
    WholeProjectName?: string;
}