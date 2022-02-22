import { Component, OnChanges, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Passenger } from 'src/app/interfaces/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnChanges, OnInit {

  @Input()
  detail: Passenger;

  @Output()
  edit = new EventEmitter<object>();

  @Output()
  remove = new EventEmitter<object>();

  editing = false;

  // Overrides the default behavior where the parent component would be automatically updated.
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['detail']) {
      // Merging the current value of the changes['detail'] to this.detail
      this.detail = Object.assign({}, changes['detail'].currentValue);
    }
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
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
