import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {TaskService} from "../../sevice/task.service";
import {FooterComponent} from "../footer/footer.component";
import {Task} from "../../Task";
import {TaskItemComponent} from "../task-item/task-item.component"
import {setSum, sum} from "../../../environments/environment";
import {Subscription} from "rxjs";
import {UiService} from "../../sevice/ui.service";

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text!: string;
  cost!:number;
  sum :number = sum;
  showAddTask!: boolean;
  sub : Subscription;
  @Output() onSub: EventEmitter<Task> = new EventEmitter();

  constructor(private taskService: TaskService , private footerComponent: FooterComponent , private tc: TaskItemComponent, private ui:UiService) {
    this.sub = this.ui.onToggle().subscribe(value => (this.showAddTask = value))
  }

  ngOnInit(): void {}

  async onSubmit(){
    if(!this.text){
      alert('Enter an expense');}
    if(this.text){
      let y: number =+ this.cost;
      const newTask = {
        text: this.text,
        cost: y}
      setSum(y + sum)
      this.onSub.emit();
      this.tc.onAddTask(newTask);
      this.text = ''
      this.cost = 0
    }
  }
}
