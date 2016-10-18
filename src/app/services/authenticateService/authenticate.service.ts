import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthenticateService {
  private url = 'http://localhost:50100/v1/authenticate/mobile';  // URL to web API
  private headers = new Headers({
    'Content-Type': 'application/json',
  });
  private options = new RequestOptions({ headers: this.headers });
  private body = {
    'username': 'bjohnson',
    'password': 'training',
    'orgId': '8'
  };

  constructor(
    private http: Http
  ) { }

  authenticate() {
    return this.http.post(this.url, this.body, this.options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError (error: any) {
    console.log(error);
  }

}
