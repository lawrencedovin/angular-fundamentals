import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Passenger } from "../interfaces/passenger.interface";

@Injectable()
export class PassengerDashboardService {

  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  getPassengers(): Passenger[] {
    return [
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

}
