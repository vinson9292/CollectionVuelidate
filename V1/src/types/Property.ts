import { Base } from './Base'
import type { IProperty } from '../types/Interface/IProperty'
export class Property extends Base implements IProperty {
    constructor() {
        super();
    }

    type?: string;
    area?: number;
    price?: number;
    envalue?: number;
}