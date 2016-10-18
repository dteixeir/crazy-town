import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { UserLite } from '../../models/userLite/user-lite';


@Injectable()
export class UserService {
  private usersUrl = 'http://uat2.reliaslearning.com:8081/v1/users';  // URL to web API

  private token = '';

  private headers = new Headers({
    'RLMS': this.token
  });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getUsers (): Promise<UserLite[]> {
    return this.http.get(this.usersUrl, this.options)
      .toPromise()
      .then(response => response.json().items as UserLite[])
      .then(response => response.slice(0, 40))
      .catch(this.handleError);
  }

  private handleError (error: any) {
    console.log(error);
  }
}
