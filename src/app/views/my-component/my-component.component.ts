import { Component, OnInit } from '@angular/core';

// services imports
import { UserService } from '../../services/userService/user.service';

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
    private userService: UserService
  ) { }

  getUsers() {
    this.userService
      .getUsers()
      .then(users => this.users = users)
      .then(() => console.log('got users!'));
  }

  ngOnInit(): void {
    this.headers = ['', 'users', 'OrganizationId', 'Active'];
    this.getUsers();
  }
}
