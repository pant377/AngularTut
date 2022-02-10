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

  @Input() task!: Task;
  tasks: Task[]=[];
  public sum:number = 0
  faTimes = faTimes;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>(this.tasks = tasks))
    for(let i=0; i<this.tasks.length; i++){
      this.sum += this.tasks[i].cost;
    }
  }
}
