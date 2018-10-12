import { Component, OnInit } from '@angular/core';
import { AllCompletedTodoAction } from './todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  public completed: boolean;

  constructor(private _store: Store<AppState>) { }



  ngOnInit() {
  }

  public toggleAll() {
    this.completed = !this.completed;
    const action = new AllCompletedTodoAction(this.completed);
    this._store.dispatch(action);
  }

}
