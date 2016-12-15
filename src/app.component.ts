/**
 * Quickstart
 */

import {Component} from '@angular/core';

import "./app.component.less";

@Component({
  selector: 'quickstart-app',
  template: `
  <div class="app">
    <logo-image></logo-image>
    <h1>{{title}}</h1>
  </div>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
