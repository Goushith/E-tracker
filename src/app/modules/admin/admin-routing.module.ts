import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {path:'' , component:DashboardComponent , children:
[
  {path : 'mobile' , component:HomeComponent},
  {path : 'slidebar' , component:SlidebarComponent},
  {path : 'home' , component:ServicesComponent},
  {path : '' , redirectTo:'/admin/home' , pathMatch:'full'},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
