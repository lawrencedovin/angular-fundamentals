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

  handleEdit(event: any) {
    console.log(event);
  }

  handleRemove(event: any) {
    console.log(event);
  }


  // handleEdit(newName: any) {
  //   this.passengers.filter((passenger) => {
  //     if(passenger.fullName === newName.oldName) passenger.fullName = newName.newName;
  //   })
  // }

}
