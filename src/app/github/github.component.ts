import { Component, OnInit, Input, Output } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from "./api.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
    providers: [ApiService]
})
export class GithubComponent implements OnInit {

  githubUsers: any[];
  @Output() public githubUserDetail: any ;
  constructor(private apiSerivce: ApiService) {
    this.githubUserDetail = {login:'Gnedy'}
  }

  ngOnInit(): void{
    console.log('GithubUsersListComponent');

    this.getAllGithubUsers();

  }

  getAllGithubUsers(): void{
    console.log('GithubUsersListComponent->getAllGithubUsers');

    this.apiSerivce.getGitUsers()
             .subscribe(
                 resultArray => [this.githubUsers = resultArray,this.githubUserDetail = resultArray[0]],
                 error => console.log("Error :: " + error)
             );

  }
  getGithubUserDetail(event,username: string = this.githubUserDetail): void{
    console.log('GithubUsersListComponent->getGithubUserDetail',username);
    console.log(this.githubUserDetail)
    // console.log(event.target)
    this.apiSerivce.getGitUser(username)
             .subscribe(
                 resultArray => this.githubUserDetail = resultArray,
                 error => console.log("Error :: " + error)
             );
             console.log(this.githubUserDetail)
  }

}
