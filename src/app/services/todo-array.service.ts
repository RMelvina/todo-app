import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoArrayService {
  constructor() {}

  todos: any[] = [];

  // Add items to todo array
  addTodosArray(title: any, done: boolean, val: any) {
    if (val != '') {
      this.todos.push({
        title: title,
        done: done,
      });
    } else {
      alert('Field is empty');
    }
  }

  //Get items from todo array
  getTodosArray() {
    return this.todos;
  }

  // Remove item from array
  removeTodoArray(val: any) {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].title == val) {
       
        this.todos.splice(i, 1);
      }
    }
  }

  // Clear array
  clearTodosArray(){
  return this.todos.length = 0
  }
}
