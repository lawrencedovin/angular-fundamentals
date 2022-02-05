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

  editing = false;

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(value: string) {
    console.log(`Value: ${value}`)
  }

  toggleEdit() {
    this.editing = !this.editing;
    // if(this.editing) {
    //   let nameObject = {oldName: this.detail.fullName, newName: this.newName}
    //   this.newNameEvent.emit(nameObject);
    // }
  }

  confirmNameChange(value: string) {
    let nameObject = {oldName: this.detail.fullName, newName: value}
    this.newNameEvent.emit(nameObject);
  }

}
