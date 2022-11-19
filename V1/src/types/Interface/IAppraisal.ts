import type { IBase } from "./IBase";
export interface IAppraisal extends IBase {
    ApprisaledBy: string;
    TotalPrice: number;
}