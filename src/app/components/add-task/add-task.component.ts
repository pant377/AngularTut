import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Task} from "../../Task";
import {TaskService} from "../../sevice/task.service";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string;
  cost!:number;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {}

  onSubmit(){
    if(!this.text){
      alert('enter an expense or fuck of looser');
    }
    const newTask = {
      id: 1,
      text: this.text,
      cost: this.cost
    }
    this.taskService.addEx(newTask);
    this.text = '',
    this.cost = 0

  }

}
