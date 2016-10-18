import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Crazy-Town!';
  private users= [];
  private headers= ['', 'users', 'OrganizationId', 'Active'];
}
