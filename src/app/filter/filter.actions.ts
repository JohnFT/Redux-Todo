import { Action } from "@ngrx/store";


export const SET_FILTER = '[Filter] Set Filtro';
export type filterValid = 'all' | 'completed' | 'pending';

export class SetFilterAction implements Action {
    readonly type = SET_FILTER;
    constructor(public filter: filterValid) { }
}

export type actions = SetFilterAction;