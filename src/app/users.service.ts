import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from './interfaces/album-model';
import { Post } from './interfaces/post-model';
import { Todo } from './interfaces/todo-model';
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
}
