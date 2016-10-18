import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routing } from './app-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './views/my-component/my-component.component';
import { TableStripedComponent } from './components/table-striped/table-striped.component';

// services
import { UserService } from './services/userService/user.service';
import { AuthenticateService } from './services/authenticateService/authenticate.service';

// pipes
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    TableStripedComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    Routing
  ],
  providers: [
    UserService,
    AuthenticateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
