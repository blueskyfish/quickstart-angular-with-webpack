/**
 * Quickstart with Angular and Less - https://github.com/blueskyfish/quickstart-angular-with-webpack.git
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeViewComponent } from "./views/home-view.component";
import { PageNotFoundViewComponent } from "./views/page-not-found-view.component";


const APP_ROUTES : Routes = [
  {
    path: 'home',
    component: HomeViewComponent
  },
  {
    path: '',
    component: HomeViewComponent
  },
  {
    path: '**',
    component: PageNotFoundViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
