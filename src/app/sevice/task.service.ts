import { Injectable } from '@angular/core';
import {Task} from "../Task";
import {TASKS} from "../mock-tasks";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];
  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }
  addEx(task:Task){
    TASKS.push(task);
  }
  delete(){
    for (let i=0; i<TASKS.length; i++){
      TASKS.pop();
    }
  }
}
