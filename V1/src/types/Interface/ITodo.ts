import type { IBase } from "./IBase";
export interface ITodo extends IBase {
    Title: string;
    Decsription: string;
    StartTime: number;
    EndTime: number;
}