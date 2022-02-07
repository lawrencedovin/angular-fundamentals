import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from 'src/app/interfaces/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit {

  @Input()
  detail: Passenger;

  @Output()
  edit = new EventEmitter<object>();

  @Output()
  remove = new EventEmitter<object>();

  editing = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Update Name through Input
  onNameChange(value: string) {
    this.detail.fullName = value;
  }

  // When done editing, the new name based
  // from the updated input value is sent to
  // the parent to update.
  toggleEdit() {
    if(this.editing) this.edit.emit(this.detail);
    this.editing = !this.editing;
  }

  // Sends the passenger details to parent to notify
  // the parent to remove.
  onRemove() {
    this.remove.emit(this.detail);
  }
}
