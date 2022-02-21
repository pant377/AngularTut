import {Component, OnInit, Input, Output, EventEmitter, Injectable} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {TasksComponent} from '../tasks/tasks.component';
import {TaskService} from "../../sevice/task.service";
import {Task} from "../../Task";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  tasks: Task[] = [];

  constructor(private taskService: TaskService ,private tci:TasksComponent) {}

  ngOnInit(): void {}

  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }
  onAddTask(task:Task){
    this.tci.addTask(task)
  }
}
