import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from "./Task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [ `h1 {
    color: dodgerblue;
  }`
]
})
export class AppComponent {

}
export let c = 5000 ;
