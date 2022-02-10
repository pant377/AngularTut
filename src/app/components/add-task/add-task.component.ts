import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Task} from "../../Task";
import {Observable} from "rxjs";

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
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  ngOnInit(): void {}

  onSubmit():Observable<Task>{
    if(!this.text){
      alert('enter an expense or fuck of looser');
    }
    const newTask = {
      text: this.text,
      cost: this.cost
    }
    console.log(newTask)
    return this.http.post<Task>(this.apiUrl, newTask, httpOptions);
  }

}
