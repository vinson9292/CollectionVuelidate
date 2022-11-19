import type { IBase } from "./IBase";
export interface IChecking extends IBase {
    PropertyType: string;
    SizeSqm: number;
    PriceSqm: number;
    PropertyValue: number;
}