import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { FormComponent } from './app/form/form.component';
import { unsavedGuard } from './app/unsaved.guard';
import { Component } from '@angular/core';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent, canDeactivate: [unsavedGuard] },
  { path: '**', redirectTo: '' }
]
bootstrapApplication(AppComponent, { providers: [provideRouter(routes)] })
  .catch((err) => console.error(err));
