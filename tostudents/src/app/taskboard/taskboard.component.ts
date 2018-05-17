import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { StatusType } from '../constants';

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {
private statusList = [ StatusType.NotStarted, StatusType.InProgress, StatusType.Completed];

showTaskForm = false;
changeValueTaskForm() {
  this.showTaskForm = !this.showTaskForm;
}

saveInput(param) {
  this.taskService.addTask(param.title, param.description);
  this.showTaskForm = !this.showTaskForm;
}


constructor(private taskService: TaskService) {}

  ngOnInit() {

  }
}
