import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminManagementComponent} from './admin-management/admin-management.component';

const routes: Routes = [
  {
    path: 'adminManagement',
    // canActivate: [AuthGuard],
    component: AdminManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
