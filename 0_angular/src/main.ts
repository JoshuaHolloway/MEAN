import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// ----------------------------------------------------------------------------
// This is the main line:
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(err => console.error(err));
// ----------------------------------------------------------------------------
// -Execute platformBrowserDynamic() which starts the Angular application in the browser.
const __platform_browser_dynamic__ = platformBrowserDynamic();

// -Call the .bootstrapModule(AppModule) function on the object returned from the platformBrowserDynamic() function
//  with a reference to our module into it.
// -This tells Angular to start the Angular application and start it with this module in mind.
// -Angular then parses the @NgModule() function in app.module.ts and registers the components listed in declarations: [...].
//  It then imports modules in imports: [...].
//  Finally, it detects the bootstrap array and looks on the page its running on for the selector of this component.
const __temp__ = __platform_browser_dynamic__.bootstrapModule(AppModule);
__temp__.catch(err => console.error(err));
