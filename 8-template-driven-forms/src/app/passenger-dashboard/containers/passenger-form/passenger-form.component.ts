import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from 'src/app/interfaces/passenger.interface';


@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {

  @Input()
  detail: Passenger

  constructor() { }

  ngOnInit(): void {
  }

}
