import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentComponent } from './views/my-component/my-component.component';

const appRoutes: Routes = [
  { path: '', component: MyComponentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
  providers: []
})

export class Routing { }
