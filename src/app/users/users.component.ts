import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user-model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((responseData) => {
      this.users = responseData;
    });
  }

  goToAlbums(e:string) {
    this.usersService.id = e;
    this.router.navigate(['/album',e]);
  }
  goToTodos(e:string) {
    this.usersService.id = e;
    this.router.navigate(['/todo',e]);
  }
  goToPosts(e:string) {
    this.usersService.id = e;
    this.router.navigate(['/post',e]);
  }
}
