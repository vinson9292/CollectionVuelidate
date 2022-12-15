import { Base } from './Base'
import type { ITodo } from './Interface/ITodo'
export class Todo extends Base implements ITodo {
    constructor() {
        super();
        this.Title = '';
        this.Decsription = '';
        this.StartTime = Date.now();
        this.EndTime = Date.now();
    }
    Title: string
    Decsription: string
    StartTime: number
    EndTime: number
}