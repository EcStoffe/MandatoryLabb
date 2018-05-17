import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Task, StatusType } from './constants';


export class TaskService {

  taskList: Task[];
  status: StatusType;
  stream: Observable<Task[]>;
  observer;


  constructor() {
    this.taskList = [];
  }
  // add class properties for:
  //
  // a task id counter
  // an internal array of Task objects
  // an instance of BehaviorSubject

  getTasks(status: StatusType): Observable<Task[]> {
    // return an observable of a task array, filtered by the passed in status...
    return new Observable((observer) => {
      this.observer = observer;
      observer.next(this.taskList);
    });
  }

  updateTask(id: number, status: StatusType) {
    this.taskList.forEach((task) => {
      if(task.id == id) {
        task.status = status;
      }
    });
    this.observer.next(this.taskList);
  }

  addTask(title: string, description: string) {
    this.taskList.push({
      id: this.taskList.length,
      status: StatusType.NotStarted,
      title: title,
      description: description
    });
    this.observer.next(this.taskList);
    // complete the code to add a task...
  }
}
