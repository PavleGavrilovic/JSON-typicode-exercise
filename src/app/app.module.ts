import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { TodoComponent } from './todo/todo.component';
import { PostComponent } from './post/post.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { PhotoComponent } from './photo/photo.component';
import { CommentsComponent } from './comments/comments.component';





@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    TodoComponent,
    PostComponent,
    UsersComponent,
    PhotoComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
