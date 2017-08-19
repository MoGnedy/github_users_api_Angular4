import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-github-users-list',
  templateUrl: './github-users-list.component.html',
  styleUrls: ['./github-users-list.component.css']
})
export class GithubUsersListComponent implements OnInit {
  githubUsers = [];
  constructor(private http: Http) { }

  ngOnInit() {
  }

  getAllGithubUsers(){
    console.log('i\'m there');
    this.http.get('https://api.github.com/users').subscribe(data => {
      // Read the result field from the JSON response.
      this.githubUsers = data['results'];

      });
      return this.githubUsers;
  }
}
