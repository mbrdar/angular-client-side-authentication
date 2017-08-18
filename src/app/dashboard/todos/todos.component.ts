import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo.service';
import {Observable} from 'rxjs/Observable';
import {Todo} from './model/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Array<Todo>>;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.getAll();
  }

  ngOnInit() {
  }

}
