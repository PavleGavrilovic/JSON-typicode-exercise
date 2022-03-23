import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../interfaces/album-model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  id: string;
  albums: Album[];

  constructor(
    private usersService: UsersService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.usersService.id;
    this.usersService.getAlbums().subscribe((responseData) => {
      this.albums = responseData;
    });
  }

  goToPhotos(id: string) {
    this.usersService.id = id;
    this.router.navigate(['photo'],{relativeTo:this.route})
  }
}
