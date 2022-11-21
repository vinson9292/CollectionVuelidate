import type { IBase } from "./IBase";
export interface IAppraisalBy extends IBase {
    ApprisaledBy: string;
    TotalPrice: number;
}