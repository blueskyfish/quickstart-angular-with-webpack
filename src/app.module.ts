/**
 * Quickstart
 */

import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { LogoComponent } from './components/logo-image/logo-image.component';

import { AssetService } from './service/asset.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LogoComponent
  ],
  providers: [
    AssetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
