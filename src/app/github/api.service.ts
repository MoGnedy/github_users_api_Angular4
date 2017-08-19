import {Injectable} from "@angular/core";
 import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";
 // import { GitUsers } from "./gitusers";

 @Injectable()
 export class ApiService {

     private _postsURL = "https://api.github.com/users";

     constructor(private http: Http) {
     }

     getPosts(): Observable<any[]> {
         return this.http
             .get(this._postsURL)
             .map((response: Response) => {
                 return <any[]>response.json();
             })
             .catch(this.handleError);
     }

     private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
 }
