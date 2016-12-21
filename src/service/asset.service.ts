/**
 * Quickstart with Angular and Less - https://github.com/blueskyfish/quickstart-angular-with-webpack.git
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
