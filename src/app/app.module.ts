import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MdCardModule, MdButtonModule} from '@angular/material';

import {AppComponent} from './app.component';
import {UserService} from './user.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdCardModule,
    MdButtonModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
