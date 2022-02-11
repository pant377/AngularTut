import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../Task";
import {TaskService} from "../../sevice/task.service";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public sum:number = 0;
  @Input() task!: Task;
  tasks: Task[]=[];
  faTimes = faTimes;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks()
    for (let i: number = 0; i < this.tasks.length; i++) {
      this.sum += this.tasks[i].cost;
    }
  }
  public delTask(){
    this.sum=0
    this.taskService.delete();
  }
}
