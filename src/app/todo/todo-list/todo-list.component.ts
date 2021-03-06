import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.model';
import { filterValid } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];
  public filter: filterValid;
  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.subscribe(state => {
      this.todos = state.todos;
      this.filter = state.filter;
    });
  }

}
