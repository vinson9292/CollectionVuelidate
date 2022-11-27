import { Base } from './Base'
import type { ISignInfo } from './Interface/ISignInfo'
export class SignInfo extends Base implements ISignInfo {
    constructor() {
        super();
    }
    PrepareName?: string;
    PrepareTitle?: string;
    VerifyName?: string;
    VerifyTitle?: string;
    RecommenedName?: string;
    REcommenedTitle?: string;
}