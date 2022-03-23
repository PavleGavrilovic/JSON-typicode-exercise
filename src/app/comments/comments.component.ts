import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter,map } from 'rxjs/operators';
import { Comments } from '../interfaces/comments-model';
import { Post } from '../interfaces/post-model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  id:any;
  comments:Comments[];
  post:Post;

  constructor(private usersService:UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.usersService.getComments().subscribe((responseData) => {
      this.comments = responseData;
    });
  }
}
