import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Task} from "../../Task";
import {TaskService} from "../../sevice/task.service";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  tasks: Task[] = [];
  faTimes = faTimes;
  sum:number = 0;

  constructor(private taskService: TaskService ) { }

  ngOnInit(): void {

  }
  public delTask(){
    this.sum = 0;
  }
  // public c = setTimeout(function(){
  //   for (let i: number = 0; i < this.tasks.length; i++) {
  //     this.sum += this.tasks[i].cost;
  //   }
  //     }, 1000);
}
