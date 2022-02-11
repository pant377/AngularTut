import {Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {TaskService} from "../../sevice/task.service";
import {Task} from "../../Task";

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

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

}
