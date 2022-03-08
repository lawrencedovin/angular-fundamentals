import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { Passenger } from 'src/app/interfaces/passenger.interface';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {

  passenger: Passenger

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService
    ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => this.passengerService.getPassenger(+params['id']))
    )
      .subscribe(passenger => this.passenger = passenger);
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
          this.passenger = Object.assign({}, this.passenger, event);
      });
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }

  // ngOnInit(): void {
  //   this.passengerService
  //     .getPassengers()
  //     .subscribe((data: Array<Passenger>) => {
  //       this.passengers = data;
  //     });
  // }

}
