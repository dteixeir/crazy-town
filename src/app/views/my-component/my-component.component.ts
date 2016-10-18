import { Component, OnInit } from '@angular/core';

// services imports
import { UserService } from '../../services/userService/user.service';
import { AuthenticateService } from '../../services/authenticateService/authenticate.service';

// class imports
// import { UserLite } from '../../models/userLite/user-lite';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {
  private users= [];
  private headers= [];

  constructor(
    private userService: UserService,
    private authenticateService: AuthenticateService
  ) { }

  getUsers() {
    this.userService
      .getUsers()
      .then(users => this.users = users)
      .then(() => console.log('got users!'));
  }

  authenticate() {
    console.log('auth ran!');
    this.authenticateService
      .authenticate()
      .then(token => console.log(token));
  }

  ngOnInit(): void {
    this.headers = ['', 'users', 'OrganizationId', 'Active'];
    this.getUsers();
    this.authenticate();
  }

}
