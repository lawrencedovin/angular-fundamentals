import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// components
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';

// service
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  declarations: [
    // CONTAINERS
    PassengerDashboardComponent,
    PassengerViewerComponent,
    // GENERIC COMPONENTS
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PassengerDashboardComponent,
    PassengerViewerComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule { }
