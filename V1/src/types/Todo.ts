import { Base } from './Base'
import type { ITodo } from './Interface/ITodo'
export class Todo extends Base implements ITodo {
    constructor() {
        super();
        this.Title = '';
        this.Decsription = '';
        this.StartTime = new Date();
        this.EndTime = new Date();
    }
    Title: string
    Decsription: string
    StartTime: Date
    EndTime: Date
}