import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumComponent } from "./album/album.component";
import { CommentsComponent } from "./comments/comments.component";
import { PhotoComponent } from "./photo/photo.component";
import { PostComponent } from "./post/post.component";
import { TodoComponent } from "./todo/todo.component";
import { UsersComponent } from "./users/users.component";

const appRoutes:Routes=[
  {path:'', component:UsersComponent},
  {
    path:'album/:id',
    component:AlbumComponent,
    // children:[
    //   {path:'photo', component:PhotoComponent, pathMatch:'full'}
    // ]
  },
  {path:'todo/:id', component:TodoComponent},
  {
    path:'post/:id',
    component:PostComponent,
    // children: [
    //   {path:'comments/:id', component:CommentsComponent, pathMatch:'full'}
    // ]
  },
  {path:'album/:id/photo', component:PhotoComponent},
  {path:'post/:id/comments/:postId', component:CommentsComponent}
]

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
