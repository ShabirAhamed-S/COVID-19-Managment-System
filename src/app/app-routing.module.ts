import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './admin/add/add.component';
import { AdminComponent } from './admin/admin.component';
import { ShowListComponent } from './admin/show-list/show-list.component';
import { UpdateComponent } from './admin/update/update.component';
import { HeaderComponent } from './header/header.component';
import { ShowUserComponent } from './user/show-user/show-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component: HeaderComponent},
  {path:'admin', component: AdminComponent},
  {path:'user', component: UserComponent},
  {path:'add', component: AddComponent},
  {path:'update/:id', component: UpdateComponent},
  {path:'showList', component: ShowListComponent},
  {path:'showUser', component:ShowUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
