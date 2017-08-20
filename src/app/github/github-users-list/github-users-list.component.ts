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
  // githubUsers: any[];
  @Input() gitUser: any;
  constructor() { }

  ngOnInit(): void{
    // console.log('GithubUsersListComponent');
    // this.getAllGithubUsers();

  }

  // getAllGithubUsers(): void{
  //   console.log('GithubUsersListComponent->getAllGithubUsers');
  //
  //   this.apiSerivce.getGitUsers()
  //            .subscribe(
  //                resultArray => [this.githubUsers = resultArray,GithubUsersListComponent.githubUser = resultArray[0]],
  //                error => console.log("Error :: " + error)
  //            );
  // }
  // getGithubUserDetail(username: string = GithubUsersListComponent.githubUser): void{
  //   console.log('GithubUsersListComponent->getGithubUserDetail',username);
  //
  //   this.apiSerivce.getGitUser(username)
  //            .subscribe(
  //                resultArray => GithubUsersListComponent.githubUser = resultArray,
  //                error => console.log("Error :: " + error)
  //            );
  // }
}
