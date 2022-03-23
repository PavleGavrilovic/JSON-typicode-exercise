import { Component, OnInit } from '@angular/core';
import { Photo } from '../interfaces/photo-model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  id:string;
  photos:Photo[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getPhotos().subscribe((responseData)=>{
      this.photos=responseData;
    })
  }

}
