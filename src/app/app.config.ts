import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, InMemoryScrollingFeature,InMemoryScrollingOptions, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

const scrollconfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled'
}
const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollconfig);

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,inMemoryScrollingFeature)]
};
