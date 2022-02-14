import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { Passenger } from "../interfaces/passenger.interface";

const PASENGER_API = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {

  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASENGER_API);
  }

}
