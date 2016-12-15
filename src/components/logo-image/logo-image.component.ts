/**
 * Quickstart
 */

import { Component, OnInit } from '@angular/core';

import { AssetService } from '../../service/asset.service';

@Component({
  selector: 'logo-image',
  template: '<img src="{{imageUrl}}" title="{{title}}" alt="{{title}}"/>'
})
export class LogoComponent implements OnInit {
  imageUrl: String;
  title = 'Logo Quickstart'

  constructor(private asset: AssetService) {}

  ngOnInit() {
    this.imageUrl = this.asset.getAssetFile('logo.png');
  }
}
