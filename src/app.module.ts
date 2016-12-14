/**
 * Quickstart
 */

import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { LogoComponent } from './logo.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LogoComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
