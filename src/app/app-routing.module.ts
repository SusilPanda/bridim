import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminManagementComponent} from './admin-management/admin-management.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {OnlineformComponent} from './onlineform/onlineform.component';
import {FormsubmitsuccessComponent} from './formsubmitsuccess/formsubmitsuccess.component';
import {OnlineFormSubmissionManagementComponent} from './online-form-submission-management/online-form-submission-management.component';

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
  },
  {
    path: 'applyOnline',
    //redirectTo: '/applyOnline',
    // canActivate: [AuthGuard],
    component: OnlineformComponent
  },
  {
    path: 'submitsuccess',
    // canActivate: [AuthGuard],
    component: FormsubmitsuccessComponent
  },
  {
    path: 'onlineformmanage',
    // canActivate: [AuthGuard],
    component: OnlineFormSubmissionManagementComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
