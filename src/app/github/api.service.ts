import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class ApiService {

  private _postsURL = "https://api.github.com/users";

  constructor(private http: Http) {
  }

  getGitUsers(): Observable<any[]> {
    return this.http
      .get(this._postsURL)
      .map((response: Response) => {
        return <any[]>response.json();
      })
      .catch(this.handleError);
  }

  getGitUser(username: string): Observable<any> {
    return this.http
      .get(this._postsURL + '/' + username)
      .map((response: Response) => {
        return <any>response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
