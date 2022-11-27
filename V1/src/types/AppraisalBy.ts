import { Base } from './Base'
import type { IAppraisalBy } from './Interface/IAppraisalBy'
export class AppraisalBy extends Base implements IAppraisalBy {
    constructor() {
        super();
        this.ApprisaledBy = '';
        this.TotalPrice = 0;
    }

    ApprisaledBy: string;
    TotalPrice: number;
}