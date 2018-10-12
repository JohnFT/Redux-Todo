import * as fromTodo from './todo.actions';
import { Todo } from './models/todo.model';

const todo1 = new Todo('vencer a thanos');
const todo3 = new Todo('correr');
const todo4 = new Todo('bailar');

todo3.completado = true;

const stateInitial: Todo[] = [todo1, todo3, todo4];
export function todoReducer(state = stateInitial,
    action: fromTodo.Acciones): Todo[] {

    switch (action.type) {

        case fromTodo.ADD_TODO:
            const todo = new Todo(action.text);
            return [...state, todo];

        case fromTodo.ALLCOMPLETED_TODO:

            return state.map(todo => {
                return {
                    ...todo,
                    completado: action.completed
                }
            });

        case fromTodo.TOGGLE_TODO:

            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completado: !todo.completado
                    }
                }
                return todo;
            });

        case fromTodo.EDIT_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        texto: action.text
                    }
                }
                return todo;
            });


        case fromTodo.DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);

        case fromTodo.CLEANCOMPLETED_TODO:
            return state.filter(todo => !todo.completado);

        default:
            return state;
    }
}