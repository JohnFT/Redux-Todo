import { Pipe, PipeTransform } from '@angular/core';
import { filterValid } from './filter.actions';
import { Todo } from '../todo/models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: filterValid): Todo[] {
    switch (filter) {
      case 'all':
        return todos;
      case 'completed':
        return todos.filter(todo => todo.completado);
      case 'pending':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }
  }

}
