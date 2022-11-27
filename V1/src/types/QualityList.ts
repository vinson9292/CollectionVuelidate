import { QualityItem } from './QualityItem'
import { QualityEnum } from './Constant';
export class QualityList {
    constructor() {
        this.QualityItems = new Array<QualityItem>(
            new QualityItem(QualityEnum.Q1),
            new QualityItem(QualityEnum.Q2),
            new QualityItem(QualityEnum.Q3),
            new QualityItem(QualityEnum.Q4),
            new QualityItem(QualityEnum.Q5),
            new QualityItem(QualityEnum.Q6),
            new QualityItem(QualityEnum.Q7),
            new QualityItem(QualityEnum.Q8),
            new QualityItem(QualityEnum.Q9),
            new QualityItem(QualityEnum.Q10))
    }
    QualityItems: Array<QualityItem>
}