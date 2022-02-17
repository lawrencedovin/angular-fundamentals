import { Component, OnInit } from '@angular/core';

import { Passenger } from 'src/app/interfaces/passenger.interface';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {

  passenger: Passenger

  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {
    this.passengerService
      .getPassenger(1)
      .subscribe((data: Passenger) => {
        this.passenger = data;
      });
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
          this.passenger = Object.assign({}, this.passenger, event);
      });
  }

  // ngOnInit(): void {
  //   this.passengerService
  //     .getPassengers()
  //     .subscribe((data: Array<Passenger>) => {
  //       this.passengers = data;
  //     });
  // }

}
