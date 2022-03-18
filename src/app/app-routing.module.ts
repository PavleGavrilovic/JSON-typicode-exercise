import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumComponent } from "./album/album.component";
import { PostComponent } from "./post/post.component";
import { TodoComponent } from "./todo/todo.component";
import { UsersComponent } from "./users/users.component";

const appRoutes:Routes=[
  {path:'', component:UsersComponent},
  {path:'album/:id', component:AlbumComponent},
  {path:'todo/:id', component:TodoComponent},
  {path:'post/:id',component:PostComponent}
]

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
