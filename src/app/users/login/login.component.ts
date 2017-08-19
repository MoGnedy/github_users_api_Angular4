import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../users.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  static loggedIn = false;
  static loggedInUsername = 'Guest';
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  loginSubmit(form) {
    console.log(form.value);
    let users: any = new UsersComponent().getAllUsers();
    for (let user of users) {
      if (user['email'] == form.value['email'] && user['password'] == form.value['password']) {
        console.log('done')
        LoginComponent.loggedIn = true;
        LoginComponent.loggedInUsername = user['name'];
        this.router.navigate(['/github']);
      }
      if (!LoginComponent.loggedIn) {
        return false;
      }
    }
  }

  isUserLoggedIn() {
    console.log(LoginComponent.loggedIn);
    return LoginComponent.loggedIn;
  }
}
