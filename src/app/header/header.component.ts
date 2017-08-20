import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../users/login/login.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isUserLoggedIn() {
    return LoginComponent.loggedIn;
  }
  getLoggedInUsername() {
    return LoginComponent.loggedInUsername;
  }

}
