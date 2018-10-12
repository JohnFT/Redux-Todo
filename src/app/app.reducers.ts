import { Todo } from "./todo/models/todo.model";
import { ActionReducerMap } from "@ngrx/store";
import { todoReducer } from "./todo/todo.reducer";
import { filterReducer } from "./filter/filter.reducers";
import { filterValid } from "./filter/filter.actions";

export interface AppState {
    todos: Todo[];
    filter: filterValid;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
};