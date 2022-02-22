import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError, catchError, retry} from "rxjs";

import { Passenger } from "../interfaces/passenger.interface";

const PASENGERS_API = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {

  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  // Connects to PASSENGERS_API and returns
  // the Passenger JSON data by using a HTTP GET Request
  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASENGERS_API)
  }

  getPassenger(passengerID: number): Observable<Passenger> {
    return this.http.get<Passenger>(`${PASENGERS_API}/${passengerID}`);
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>(`${PASENGERS_API}/${passenger.id}`, passenger);
  }

  deletePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.delete<Passenger>(`${PASENGERS_API}/${passenger.id}`);
  }


}
