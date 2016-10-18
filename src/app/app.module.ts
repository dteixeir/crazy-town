import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './views/my-component/my-component.component';
import { TableStripedComponent } from './components/table-striped/table-striped.component';

// services
import { UserService } from './services/userService/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    TableStripedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
