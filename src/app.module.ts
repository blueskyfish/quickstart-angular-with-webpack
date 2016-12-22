/**
 * Quickstart with Angular and Less - https://github.com/blueskyfish/quickstart-angular-with-webpack.git
 */

import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { FormsModule }     from '@angular/forms';
import { AppComponent }    from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LogoComponent }   from './components/logo-image/logo-image.component';

import { AssetService }    from './service/asset.service';
import { AppRoutingModule } from "./app-routing.module";
import { HomeViewComponent } from "./views/home-view.component";
import { PageNotFoundViewComponent } from "./views/page-not-found-view.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeViewComponent,
    PageNotFoundViewComponent,
    NavBarComponent,
    LogoComponent
  ],
  providers: [
    AssetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
