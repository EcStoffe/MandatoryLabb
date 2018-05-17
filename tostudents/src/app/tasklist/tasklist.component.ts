import { Component, Input } from '@angular/core';
import { Task, StatusType } from '../constants';
import { TaskService } from '../task.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  @Input() statusType: StatusType;

  tasks: Task[];

  constructor(private taskService: TaskService) {}

  checkStatus(task) {
    return this.statusType === task.status;
  }

  ngOnInit() {
    this.taskService.getTasks(this.statusType)
      .subscribe((list) => {
        this.tasks = list;
      });
  }
  handleStatusChanged(ev) {

  }
}
