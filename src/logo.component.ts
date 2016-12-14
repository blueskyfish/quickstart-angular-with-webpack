/**
 * Quickstart
 */

import {Component} from '@angular/core';

@Component({
  selector: 'logo',
  template: '<img src="{{imageUrl}}"/>'
})
export class LogoComponent {
  imageUrl = 'assets/logo.png';
}
