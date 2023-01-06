import type { IBase } from "./IBase";
export interface IFileInfo extends IBase {
    Title: string;
    Decsription: string;
    StartTime: number;
    EndTime: number;
    Detail?:string;
}