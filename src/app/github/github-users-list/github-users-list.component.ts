import { Component, OnInit } from '@angular/core';
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
  githubUsers: any[];
  constructor(private apiSerivce: ApiService) { }

  ngOnInit(): void{
    console.log('GithubUsersListComponent');
    this.getAllGithubUsers();
  }

  getAllGithubUsers(): void{
    console.log('GithubUsersListComponent->getAllGithubUsers');

    this.apiSerivce.getPosts()
             .subscribe(
                 resultArray => this.githubUsers = resultArray,
                 error => console.log("Error :: " + error)
             );
  }
}
