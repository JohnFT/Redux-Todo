import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @ViewChild('txtInputEdit') txtInputEdit: ElementRef;
  @Input() todo: Todo;
  public chekField: FormControl;
  public txtInput: FormControl;
  public editing: boolean;
  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.editing = false;
    this.chekField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chekField.valueChanges.subscribe(valor => {
      const action = new ToggleTodoAction(this.todo.id);
      this._store.dispatch(action);
    });
  }

  public onEditing() {
    this.editing = true;
    setTimeout(() => {
      this.txtInputEdit.nativeElement.select();
    }, 1)
  }

  public blurTxt() {
    this.editing = false;
    if (this.txtInput.invalid || this.todo.texto === this.txtInput.value) {
      return;
    }
    const action = new EditTodoAction(this.todo.id, this.txtInput.value);
    this._store.dispatch(action);

  }

  public destroyTodo() {
    const action = new DeleteTodoAction(this.todo.id);
    this._store.dispatch(action);
  }

}
