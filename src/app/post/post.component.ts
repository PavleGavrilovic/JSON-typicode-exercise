import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post-model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  id: string;
  posts: Post[];

  constructor(private usersService: UsersService, private http: HttpClient) {}

  ngOnInit() {
    this.id = this.usersService.id;
    this.usersService.getPosts().subscribe((responseData) => {
      this.posts = responseData;
    });
  }
}
