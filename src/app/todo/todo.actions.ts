import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Add Todo';
export const TOGGLE_TODO = '[TODO] Toggle Todo';
export const EDIT_TODO = '[TODO] Edit Todo';
export const DELETE_TODO = '[TODO] Delete Todo';
export const ALLCOMPLETED_TODO = '[TODO] All Completed Todo';
export const CLEANCOMPLETED_TODO = '[TODO] Clean Completed Todo';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;
    constructor(public text: string) { }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number) { }
}


export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;
    constructor(public id: number, public text: string) { }
}


export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;
    constructor(public id: number) { }
}

export class AllCompletedTodoAction implements Action {
    readonly type = ALLCOMPLETED_TODO;
    constructor(public completed: boolean) { }
}

export class CleanCompletedTodoAction implements Action {
    readonly type = CLEANCOMPLETED_TODO;
    constructor() { }
}

export type Acciones = AddTodoAction |
    ToggleTodoAction | EditTodoAction |
    DeleteTodoAction | AllCompletedTodoAction | CleanCompletedTodoAction;