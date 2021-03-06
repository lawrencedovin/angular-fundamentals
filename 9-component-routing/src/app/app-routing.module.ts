import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Containers
import { HomeComponent } from './passenger-dashboard/containers/home/home.component';
import { NotFoundComponent } from './passenger-dashboard/containers/not-found/not-found.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: '', redirectTo: 'passengers', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    PassengerDashboardModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
