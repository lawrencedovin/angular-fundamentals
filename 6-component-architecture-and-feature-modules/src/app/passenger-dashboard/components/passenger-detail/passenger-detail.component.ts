import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from 'src/app/interfaces/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit {

  @Input()
  passengers: Array<Passenger>

  constructor() { }

  ngOnInit(): void {
  }

}
