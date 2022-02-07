import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/interfaces/passenger.interface';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Array<Passenger>;

  constructor() {}

  ngOnInit(): void {
    this.passengers = [
      {
        id: 1,
        fullName: 'Stephen',
        checkedIn: true,
        checkedInDate: 1490742000000,
        children: [
                    {name: 'Lawrence', age: 28},
                    {name: 'Jim', age: 19},
                    {name: 'Peanut', age: 15},
                  ]
      },
      {
        id: 2,
        fullName: 'James',
        checkedIn: true,
        checkedInDate: 1491606000000
      },
      {
        id: 3,
        fullName: 'Rose',
        checkedIn: true,
        checkedInDate: 1488412800000,
        children: [
                    {name: 'Sharon', age: 48},
                    {name: 'Rick', age: 70}
                  ]
      },
      {
        id: 4,
        fullName: 'Pancake',
        checkedIn: false
      },
      {
        id: 5,
        fullName: 'Charlie',
        checkedIn: true,
        checkedInDate: 1643318805
      },
    ]
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
