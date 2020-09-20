import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminManagementComponent} from './admin-management/admin-management.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {OnlineformComponent} from './onlineform/onlineform.component';
import {FormsubmitsuccessComponent} from './formsubmitsuccess/formsubmitsuccess.component';
import {OnlineFormSubmissionManagementComponent} from './online-form-submission-management/online-form-submission-management.component';
import {InfoAustraliaComponent} from './moreinfo/info-australia/info-australia.component';
import {InfoCanadaComponent} from './moreinfo/info-canada/info-canada.component';
import {InfoUkComponent} from './moreinfo/info-uk/info-uk.component';
import {InfoNzComponent} from './moreinfo/info-nz/info-nz.component';
import {InfoSgComponent} from './moreinfo/info-sg/info-sg.component';
import {InfoEuropeComponent} from './moreinfo/info-europe/info-europe.component';
import {InfoUsaComponent} from './moreinfo/info-usa/info-usa.component';
import {InfoJapanComponent} from './moreinfo/info-japan/info-japan.component';
import {InfoMalaysiaComponent} from './moreinfo/info-malaysia/info-malaysia.component';

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
  },
  {
    path: 'moreinfo/australia',
    // canActivate: [AuthGuard],
    component: InfoAustraliaComponent
  },
  {
    path: 'moreinfo/canada',
    component: InfoCanadaComponent
  },
  {
    path: 'moreinfo/uk',
    component: InfoUkComponent
  },
  {
    path: 'moreinfo/europe',
    component: InfoEuropeComponent
  },
  {
    path: 'moreinfo/sg',
    component: InfoSgComponent
  },
  {
    path: 'moreinfo/nz',
    component: InfoNzComponent
  },
  {
    path: 'moreinfo/japan',
    component: InfoJapanComponent
  },
  {
    path: 'moreinfo/malaysia',
    component: InfoMalaysiaComponent
  },
  {
    path: 'moreinfo/usa',
    component: InfoUsaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
