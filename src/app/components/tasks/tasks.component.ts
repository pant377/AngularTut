import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {TaskService} from "../../sevice/task.service";
import {Task} from "../../Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
