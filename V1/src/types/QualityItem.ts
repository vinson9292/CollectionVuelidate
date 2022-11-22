import type { IQualityItem } from './Interface/IQualityItem'
export class QualityItem implements IQualityItem {
    constructor(decsription: string) {
        this.Decsription = decsription
    }
    IsChecked?: boolean | undefined;
    Decsription: string;
    Order?: number;
}