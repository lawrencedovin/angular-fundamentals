import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/interfaces/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Array<Passenger>;

  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit(): void {
    this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => {
        console.log('Data', data);
        this.passengers = data;
      });
  }

  // handleEdit gets the edit EventEmitter value from the child.
  // It then compares where the passenger and event id matches to update
  // the passenger's fullname
  handleEdit(event: any) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if(passenger.id === event.id) {
        // If IDs match then use an immutable operation.
        // Takes the original passenger object and merges
        // the latest changes of the event in.
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }


  // handleRemove gets the remove EventEmitter value from the child.
  // There is then a variable that filters out any object that matches
  // the object passed in. Afterwards the parent's passenger list
  // is updated to the filtered list.
  handleRemove(event: any) {
    let updatedPassengers = this.passengers.filter((passenger) => {
      return passenger.id !== event.id;
    });
    this.passengers = updatedPassengers;
  }

}
