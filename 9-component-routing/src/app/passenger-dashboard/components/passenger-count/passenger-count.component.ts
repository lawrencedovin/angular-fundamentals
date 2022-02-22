import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from 'src/app/interfaces/passenger.interface';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent implements OnInit {

  @Input()
  items: Array<Passenger>;

  checkedInCount(): number | string {
    if (!this.items) return 'No checked in passengers found.';
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
