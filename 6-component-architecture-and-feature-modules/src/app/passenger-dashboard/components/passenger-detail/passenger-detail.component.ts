import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from 'src/app/interfaces/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit {

  @Output() newNameEvent = new EventEmitter<object>();

  @Input()
  detail: Passenger

  nameInput: String;

  constructor() { }

  ngOnInit(): void {
  }

  confirmNameChange(value: string) {
    let nameObject = {oldName: this.detail.fullName, newName: value}
    this.newNameEvent.emit(nameObject);
  }

}
