import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule , Response, RequestOptions, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { GithubComponent } from './github/github.component';
import { GithubUsersListComponent } from './github/github-users-list/github-users-list.component';
import { GithubUserDetailComponent } from './github/github-user-detail/github-user-detail.component';
import { LoginComponent } from './users/login/login.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'github', component: GithubComponent },

];
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
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
  appRoutes,
  { enableTracing: true } // <-- debugging purposes only
),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
