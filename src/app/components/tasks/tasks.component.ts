import {Component, Injectable, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {TaskService} from "../../sevice/task.service";
import {Task} from "../../Task";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  sum:number = 0;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks);
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(()=>this.tasks=this.tasks.filter(t => t.id !== task.id));
  }
  addTask(task: Task){
    this.taskService.addEx(task).subscribe((task)=>(this.tasks.push(task)));
  }
  calk(y:number){
    while (true){
      this.sum += y;
      y=0;
    }
  }

}
