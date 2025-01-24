import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { ProtectedComponent } from './app/protected/protected.component';
import { authGuardGuard } from './app/auth-guard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [authGuardGuard] },
  { path: '**', redirectTo: '' }
]

bootstrapApplication(AppComponent, { providers: [provideRouter(routes)] })
  .catch((err) => console.error(err));
