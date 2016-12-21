/**
 * Quickstart with Angular and Less - https://github.com/blueskyfish/quickstart-angular-with-webpack.git
 */

import { Component } from '@angular/core';

import "./app.component.less";

@Component({
  selector: 'quickstart-app',
  template: `
  <div class="app">
    <nav-bar></nav-bar>
    <h1><i class="fa fa-home"></i> {{title}}</h1>
    <logo-image title="Quickstart for Angular"></logo-image>
  </div>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
