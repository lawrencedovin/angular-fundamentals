import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Containers
import { HomeComponent } from './passenger-dashboard/containers/home/home.component';
import { NotFoundComponent } from './passenger-dashboard/containers/not-found/not-found.component';
import { PassengerDashboardComponent } from './passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './passenger-dashboard/containers/passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './passenger-dashboard/containers/passenger-form/passenger-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
