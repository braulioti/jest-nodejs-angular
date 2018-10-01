import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserService} from './user.service';
import {FormsModule} from '@angular/forms';
import {BaseHttp} from '../shared/base/base-http';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    BaseHttp
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
