import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from './interfaces/album-model';
import { Comments } from './interfaces/comments-model';
import { Photo } from './interfaces/photo-model';
import { Post } from './interfaces/post-model';
import { PostPut } from './interfaces/postPut-model';
import { Todo } from './interfaces/todo-model';
import { TodoPut } from './interfaces/todoPut-model';
import { User } from './interfaces/user-model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  public id: string;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/');
  }

  getAlbums() {
    return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/users/${this.id}/albums`);
  }

  getPosts() {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/users/${this.id}/posts`);
  }

  getTodos() {
    return this.http.get<Todo[]>(`https://jsonplaceholder.typicode.com/users/${this.id}/todos`);
  }

  getPhotos() {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${this.id}/photos`)
  }

  getComments() {
    return this.http.get<Comments[]>(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments`)
  }

  deleteTodo(id:string) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  deletePost() {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/1`)
  }

  editTodo(id:string) {
    const newData=prompt("Enter new Todo Name")
    const body={
      title:newData
    }
    return this.http.put<TodoPut>(`https://jsonplaceholder.typicode.com/todos/${id}`,body)
  }

  editPost(id:string) {
    const newTitleData=prompt("Enter new Post Title");
    const newBodyData=prompt("Enter new Post")
    const body={
      title:newTitleData,
      body:newBodyData
    }
    return this.http.put<PostPut>(`https://jsonplaceholder.typicode.com/posts/${id}`,body)
  }


  addTodo(userId:string) {
    const newTitleData=prompt("Enter new Todo");
    const body={
      title:newTitleData
    }
    return this.http.post(`https://jsonplaceholder.typicode.com/users/${userId}/todos`,body)
  }
}
