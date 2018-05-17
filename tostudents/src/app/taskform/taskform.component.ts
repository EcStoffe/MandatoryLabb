import { Component, Input, Output, EventEmitter } from '@angular/core';
import {StatusType} from '../constants';



@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {
@Input() showTaskForm;
@Output() saveInput: EventEmitter<any> = new EventEmitter();
task = {
  title : "",
};

getValue() {
  this.saveInput.emit(this.task);
}

  constructor() {}

}
