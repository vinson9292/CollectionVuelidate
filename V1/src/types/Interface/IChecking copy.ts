import type { IBase } from "./IBase";
export interface ITodo extends IBase {
    Title: string;
    Decsription: number;
    StartTime: number;
    EndTime: number;
}