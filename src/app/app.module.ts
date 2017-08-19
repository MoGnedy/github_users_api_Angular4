import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { GithubComponent } from './github/github.component';
import { GithubUsersListComponent } from './github/github-users-list/github-users-list.component';
import { GithubUserDetailComponent } from './github/github-user-detail/github-user-detail.component';
import { LoginComponent } from './users/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    GithubComponent,
    GithubUsersListComponent,
    GithubUserDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
