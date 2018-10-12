import { Component, OnInit } from '@angular/core';
import { Filter } from '../models/filter.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { SetFilterAction } from '../../filter/filter.actions';
import { Todo } from '../models/todo.model';
import { CleanCompletedTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  public keyFilter: string;
  public pendings: number;
  public filters: Filter[] = [
    { key: 'all', value: 'Todos' },
    { key: 'completed', value: 'Completados' },
    { key: 'pending', value: 'Pendientes' }]

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.subscribe(state => {
      this.keyFilter = state.filter;
      this.countPendindg(state.todos);
    })
  }
  public changeFilter(filter: Filter) {
    if (filter.key === this.keyFilter) {
      return;
    }

    const action = new SetFilterAction(filter.key);
    this._store.dispatch(action);
  }

  private countPendindg(todos: Todo[]) {
    this.pendings = todos.filter(todo => !todo.completado).length;
  }

  public cleanCompleted() {
    const action = new CleanCompletedTodoAction();
    this._store.dispatch(action);
  }
}
