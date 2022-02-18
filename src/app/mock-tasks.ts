import {Task} from "./Task";
import * as data from '../assets/db.json'

export const TASKS: Task[] = [
  {
    text: "venzini 7/1",
    cost: 20,
    id: 1
  },
]

export function getTasks(){
  var json = JSON.stringify(TASKS);
  return TASKS;
}
export function addTasks(task : Task){
  TASKS.push(task);
}
export function delTasks(task : Task){
  for(let i = 0; i<TASKS.length; i++){
    if(TASKS[i] == task){
      TASKS.splice(i,1)
    }
  }
}
export function delAll(){
  for(let i = 0; i<TASKS.length; i++ ){
    TASKS.splice(i,1)
  }
}
