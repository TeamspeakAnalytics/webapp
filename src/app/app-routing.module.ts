import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
