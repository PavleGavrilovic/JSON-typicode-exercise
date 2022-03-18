import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo-model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id: string;
  todos: Todo[];

  constructor(private usersService: UsersService, private http: HttpClient) {}

  ngOnInit() {
    this.id = this.usersService.id;
    this.usersService.getTodos().subscribe((responseData) => {
      this.todos = responseData;
    });
  }
}
