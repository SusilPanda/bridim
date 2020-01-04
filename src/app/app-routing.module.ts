import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminManagementComponent} from './admin-management/admin-management.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'home',
    // canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'login',
    // canActivate: [AuthGuard],
    component: LoginComponent
  },
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    component: AdminManagementComponent
  },
  {
    path: 'login/home',
    redirectTo: '/home',
    // canActivate: [AuthGuard],
    //component: AdminManagementComponent
  },
  {
    path: 'admin/home',
    redirectTo: '/home',
    // canActivate: [AuthGuard],
    //component: AdminManagementComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
