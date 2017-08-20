import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-user-detail',
  templateUrl: './github-user-detail.component.html',
  styleUrls: ['./github-user-detail.component.css']
})
export class GithubUserDetailComponent implements OnInit {
  @Input() gitUser: any;

  constructor() { }

  ngOnInit() {
  }

}
