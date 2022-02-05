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

  onNameChange(value: string) {
    this.detail.fullName = value;
  }

  toggleEdit() {
    if(this.editing) this.edit.emit(this.detail);
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }


  // newName = '';

  // toggleEdit() {
  //   this.editing = !this.editing;
  //   // if(!this.editing) {
  //   //   this.newNameEvent.emit({oldName: this.detail.fullName, newName: this.newName});
  //   // }
  // }


  // confirmNameChange() {
  //   // let nameObject = {oldName: this.detail.fullName, newName: value}
  //   // this.newNameEvent.emit(nameObject);
  // }
}
