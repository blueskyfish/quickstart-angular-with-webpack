/**
 * Quickstart
 */

import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { FormsModule }     from '@angular/forms';
import { AppComponent }    from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LogoComponent }   from './components/logo-image/logo-image.component';

import { AssetService }    from './service/asset.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    LogoComponent
  ],
  providers: [
    AssetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
