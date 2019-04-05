import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Kinvey } from 'kinvey-angular2-sdk';
import { AppModule } from '../../app.module';
Kinvey.init({
  appKey: '<appKey>',
  appSecret: '<appSecret>'
});
platformBrowserDynamic().bootstrapModule(AppModule);
