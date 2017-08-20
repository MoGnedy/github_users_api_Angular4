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
  @Output() public githubUserDetail: any;
  constructor(private apiSerivce: ApiService) { }

  ngOnInit(): void {

    this.getAllGithubUsers();

  }

  getAllGithubUsers(): void {

    this.apiSerivce.getGitUsers()
      .subscribe(
      resultArray => [this.githubUsers = resultArray, this.githubUserDetail = resultArray[0]],
      error => console.log("Error :: " + error)
      );

  }
  getGithubUserDetail(event, username: string = this.githubUserDetail): void {
    this.apiSerivce.getGitUser(username)
      .subscribe(
      resultArray => this.githubUserDetail = resultArray,
      error => console.log("Error :: " + error)
      );
  }

}
