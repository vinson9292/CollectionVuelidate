import { Base } from './Base'
import type { IChecking } from './Interface/IChecking'
export class Checking extends Base implements IChecking {
    constructor() {
        super();
    }
    CheckingWith?: string;
    Price?: number;
    Date?: Date;
}