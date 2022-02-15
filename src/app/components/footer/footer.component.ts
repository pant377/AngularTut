import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Task} from "../../Task";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {TaskService} from "../../sevice/task.service";
import {setSum, sum , getSum} from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  tasks: Task[] = [];
  faTimes = faTimes;
  sum:number = sum;

  constructor() { }

  ngOnInit(): void {  }

  getSum() {
    return this.sum = getSum()
  }
}
