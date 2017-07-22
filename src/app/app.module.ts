import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MdCardModule, MdButtonModule} from '@angular/material';
import {RouterModule, ActivatedRouteSnapshot} from '@angular/router'

import {AppComponent} from './app.component';
import {UserService} from './user.service';
import {HttpModule} from '@angular/http';
import {EmployeeComponent} from './employee/employee.component';

const routes = [
  {path: 'employee/:eid', component: EmployeeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    MdCardModule,
    MdButtonModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
