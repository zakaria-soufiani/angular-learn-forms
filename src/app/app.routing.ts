import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from "./app.component";
import {FormsComponent} from "./forms/forms.component";
import {DatabaseComponent} from "./database/database.component";
import {HomeComponent} from "./home/home.component";


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'forms', component: FormsComponent },
  { path: 'database', component: DatabaseComponent }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


