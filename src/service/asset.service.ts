/**
 * Quickstart
 */


import { Injectable } from '@angular/core';


@Injectable()
export class AssetService {

  private assetPath = 'assets';

  public getAssetPath() : String {
    return this.assetPath;
  }

  public getAssetFile(file: String): String {
    return this.assetPath + '/' + file;
  }
}
