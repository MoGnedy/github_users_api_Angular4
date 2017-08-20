import { Component, OnInit, Input, Output } from '@angular/core';
import { Http } from '@angular/http';
// import { GitUsers } from "../gitusers";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-github-users-list',
  templateUrl: './github-users-list.component.html',
  styleUrls: ['./github-users-list.component.css'],
  providers: [ApiService]
})
export class GithubUsersListComponent implements OnInit {
  @Input() gitUser: any;
  constructor() { }

  ngOnInit(): void {

  }

}
