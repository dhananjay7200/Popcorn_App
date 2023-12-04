import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { PendingclientsComponent } from './pendingclients/pendingclients.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { adminnauthGuard } from '../helper/adminnauth.guard'; 

const routes: Routes = [
  {
    path:"users",
    component:UsersComponent,
    canActivate:[adminnauthGuard]
  },
  {
    path:"clients",
    component:ClientsComponent,
    canActivate:[adminnauthGuard]
  },
  {
    path:"pclients",
    component:PendingclientsComponent,
    canActivate:[adminnauthGuard]
  },
  {
    path:"admindashboard",
    component:AdmindashboardComponent,
    canActivate:[adminnauthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
