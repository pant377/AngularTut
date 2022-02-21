import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {Task} from "../../Task";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {sum, getSum} from "../../../environments/environment";
import {TasksComponent} from "../tasks/tasks.component";

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() onDel: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  sum:number = sum;

  constructor(private tc:TasksComponent) {}

  ngOnInit(): void {}

  getS() {
    return this.sum = getSum()
  }
  erase(){
    this.tc.deleteAll()}
}
