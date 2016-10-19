import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Crazy-Town!';
  private users = [
    {
      email: 'csingley@essentiallearning.com',
      firstName: 'Mary (/benbhs - Enterprise, HD: 07/01/04)',
      fullName: 'Mary (/benbhs - Enterprise, HD: 07/01/04) Abbott',
      lastName: 'Abbott',
      orgId: 8,
      userId: 392193,
      userName: 'mabbott',
      userStatus: 'Inactive'
    },
    {
      email: 'fakefakefake@email.com',
      firstName: 'Abe',
      fullName: 'Abe Abbott',
      lastName: 'Abbott',
      orgId: 8,
      userId: 845501,
      userName: 'aabbott111',
      userStatus: 'Active'
    },
    {
      email: 'awilliams@reliaslearning.com',
      firstName: 'Abraham',
      fullName: 'Abraham Abbott',
      lastName: 'Abbott',
      orgId: 8,
      userId: 845502,
      userName: 'abab',
      userStatus: 'Active'
    },
    {
      firstName: 'BARBARA',
      fullName: 'BARBARA ABDULKADIR',
      lastName: 'ABDULKADIR',
      orgId: 8,
      userId: 3664,
      userName: 'ABDULKADIR11191',
      userStatus: 'Active'
    },
    {
      email: 'bjohnson@essentiallearning.com',
      firstName: 'NICOLE',
      fullName: 'NICOLE ABUGHAZHALEH',
      lastName: 'ABUGHAZHALEH',
      orgId: 8,
      userId: 3671,
      userName: 'ABUGHAZHALEH10768',
      userStatus: 'Inactive'
    }
  ];
  private headers= ['', 'users', 'OrganizationId', 'Active'];
}
