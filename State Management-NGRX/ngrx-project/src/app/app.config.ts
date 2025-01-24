import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { reducer } from './store/counter.reducer';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(), provideState({ name: 'counter', reducer: reducer })]
};
