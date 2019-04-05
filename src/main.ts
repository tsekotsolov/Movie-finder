import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Kinvey } from 'kinvey-angular2-sdk';


if (environment.production) {
  enableProdMode();
}

Kinvey.init({
  appKey: 'kid_Bys2jjSNm',
  appSecret: '743e4c43c38c44a5803c29562b635de6'
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
