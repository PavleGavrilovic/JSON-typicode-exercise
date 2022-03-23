import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private usersService: UsersService, private http: HttpClient, private router: Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.usersService.getPosts().subscribe((responseData) => {
      this.posts = responseData;
    });
  }

  goToComments(id:string) {
    this.usersService.id=id;
    this.router.navigate(['comments',id],{relativeTo:this.route})
  }

  deletePost() {
    this.usersService.deletePost().subscribe(responseData=>console.log(responseData))
  }

  editPost(id:string) {
    this.usersService.editPost(id)
    .subscribe(
      data=>{
        this.posts[+id-1].title=data.title;
        this.posts[+id-1].body=data.body;
      }
    )
  }
}
