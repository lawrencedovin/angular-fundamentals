import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

// components
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';



@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PassengerDashboardComponent
  ]
})
export class PassengerDashboardModule { }
