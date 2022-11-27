import { Base } from './Base'
import type { ICustomerInfo } from '../types/Interface/ICustomerInfo'
import type { Address } from './Address';
import type { DeedTypeEnum } from './Constant';
export class CustomerInfo extends Base implements ICustomerInfo {
    constructor() {
        super();
    }
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