/**
 * Quickstart with Angular and Less - https://github.com/blueskyfish/quickstart-angular-with-webpack.git
 */

import { Component } from '@angular/core';

import "./app.component.less";

@Component({
  selector: 'quickstart-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
