import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor() {
    this.users = [
      new User('mohamed', 'mohamed@email.com', '123'),
      new User('gnedy', 'gnedy@email.com', '123'),

    ]
  }

  ngOnInit() {
  }

  getAllUsers() {
    return this.users;
  }

}
