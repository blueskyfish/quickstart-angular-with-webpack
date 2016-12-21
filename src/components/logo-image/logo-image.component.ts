/**
 * Quickstart with Angular and Less - https://github.com/blueskyfish/quickstart-angular-with-webpack.git
 */

import { Component, OnInit, Input } from '@angular/core';

import { AssetService } from '../../service/asset.service';

@Component({
  selector: 'logo-image',
  template: '<img src="{{imageUrl}}" title="{{title}}" alt="{{title}}"/>'
})
export class LogoComponent implements OnInit {

  imageUrl: String;

  @Input()
  title: String;

  constructor(private asset: AssetService) {}

  ngOnInit() {
    this.imageUrl = this.asset.getAssetFile('logo.png');
  }
}
