import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './containers/passenger-form/passenger-form.component';
import { HomeComponent } from './containers/home/home.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';

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
    PassengerFormComponent,
    HomeComponent,
    NotFoundComponent,
    // GENERIC COMPONENTS
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerFormComponent,
    HomeComponent,
    NotFoundComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule { }
