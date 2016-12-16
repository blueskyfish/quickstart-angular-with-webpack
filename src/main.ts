/**
 * Quickstart
 */

// add this gobal app style at first.
import './app.less';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
