import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter();

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

  handleSubmit(passenger: Passenger, isValid: any) {
    if(isValid) {
      this.update.emit(passenger);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
