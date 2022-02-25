import { Injectable } from '@angular/core';
import {Task} from "../Task";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

private apiurl = '../assets/db.json'

  tasks: Task[] = [];
  constructor(private http:HttpClient) {}

  getTasks():Observable<Task> {
    return this.http.get<Task>(this.apiurl);
  }
  addEx(task:Task):Observable<Task> {
    return this.http.post<Task>(this.apiurl,task,httpOptions);
  }
  deleteTask(task: Task):Observable<Task> {
    return this.http.delete<Task>(this.apiurl);
  }
}
