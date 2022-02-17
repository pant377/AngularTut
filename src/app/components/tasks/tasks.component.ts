import {Component, Injectable, OnInit} from '@angular/core';
import {TaskService} from "../../sevice/task.service";
import {Task} from "../../Task";
import {setSum, sum} from "../../../environments/environment";

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

  constructor(private taskService: TaskService ) {
  }
  ngOnInit(){
   this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks);
    setTimeout(() =>{
      let c = 0
      for (let i: number = 0; i < this.tasks.length; i++) {
        c += this.tasks[i].cost;
      }
      setSum(c)
    }, 1000);
    return this.tasks;
  }
  deleteTask(task: Task){
    setSum(sum - task.cost);
    this.taskService.deleteTask(task).subscribe(()=>this.tasks=this.tasks.filter(t => t.id !== task.id));
  }
  deleteAll(){
    this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks);
    for (let i: number = 0; i < this.tasks.length; i++) {
      this.taskService.deleteTask(this.tasks[i]).subscribe(()=>this.tasks=this.tasks.filter(t =>t.id != this.tasks[i].id));
    }
    setTimeout(() =>{
      window.location.reload();
    }, 1000);
  }
  addTask(task: Task){
    this.taskService.addEx(task).subscribe((task)=>(this.tasks.push(task)));
  }
}
