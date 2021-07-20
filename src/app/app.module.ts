import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { DataVisualizationComponent } from './data-visualization/data-visualization.component';
import { AddComponent } from './admin/add/add.component';
import { UpdateComponent } from './admin/update/update.component';
import { HeaderComponent } from './header/header.component';
import { ShowListComponent } from './admin/show-list/show-list.component';
import { ShowUserComponent } from './user/show-user/show-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    DataVisualizationComponent,
    AddComponent,
    UpdateComponent,
    HeaderComponent,
    ShowListComponent,
    ShowUserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
