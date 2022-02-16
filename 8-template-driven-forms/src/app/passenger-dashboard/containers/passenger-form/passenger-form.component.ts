import { Component, OnInit, Input } from '@angular/core';

import { Passenger } from 'src/app/interfaces/passenger.interface';
import { Baggage } from 'src/app/interfaces/baggage.interface';


@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {

  @Input()
  detail: Passenger;

  baggage: Array<Baggage> = [
    {
      key: 'none',
      value: 'No baggage'
    },
    {
      key: 'hand-only',
      value: 'Hand baggage'
    },
    {
      key: 'hold-only',
      value: 'Hold baggage'
    },
    {
      key: 'hand-hold',
      value: 'Hand and Hold baggage'
    },
  ]

  toggleCheckIn(checkedIn: boolean) {
    if(checkedIn) {
      this.detail.checkedInDate = Date.now();
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
