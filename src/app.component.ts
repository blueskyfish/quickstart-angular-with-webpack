/**
 * Quickstart
 */

import {Component} from '@angular/core';

@Component({
  selector: 'quickstart-app',
  template: '<logo></logo><h1>{{title}}</h1>'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
