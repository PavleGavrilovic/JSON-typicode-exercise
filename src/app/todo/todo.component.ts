import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private usersService: UsersService, private http: HttpClient, private route:ActivatedRoute) {}

  ngOnInit() {
    this.usersService.getTodos().subscribe((responseData) => {
      this.todos = responseData;
    });
  }

  deleteTodo(id:string) {
    this.usersService.deleteTodo(id).subscribe((responseData):void =>{
      console.log(responseData)
      console.log(this.todos)
      this.todos=this.todos.filter((data:Todo)=>data.id !==+id)
    })
  }

  editTodo(id:string) {
    this.usersService.editTodo(id)
    .subscribe(data=>{
      this.todos[+id-1].title=data.title;
    })
  }

  addTodo() {
    const id=this.route.snapshot.params['id'];
      this.usersService.addTodo(id)
      .subscribe((data:Todo):void =>{
      console.log(data)
      this.todos=[
        data,
        ...this.todos
      ]
    })
  }
}
