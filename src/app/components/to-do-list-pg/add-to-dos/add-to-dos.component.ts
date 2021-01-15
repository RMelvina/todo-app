import { Component, OnInit } from '@angular/core';
import { fadeIn, slideIn } from '../animations';
import { TodoArrayService } from '../../../services/todo-array.service';
import { IsAddedMsgService } from '../../../services/isAddedMsg/is-added-msg.service';

import { isAdded } from '../../../global';

@Component({
  selector: 'app-add-to-dos',
  templateUrl: './add-to-dos.component.html',
  styleUrls: ['./add-to-dos.component.css'],
})
export class AddToDosComponent implements OnInit {
  // Decalration
  todoTitle = '';
  isAdded = false;
  constructor(
    private todoArray: TodoArrayService,
    private isAddedMsg: IsAddedMsgService
  ) {}

  ngOnInit(): void {}
  // Methods
  addTodo() {
    // this.isAddedMsg.sendIsAddedMsg(true);
    if (this.todoTitle != '') {
       this.todoArray.addTodosArray(this.todoTitle, false);
       this.isAddedMsg.sendIsAddedMsg(true);
      
    } else {
      alert('Field is empty');
      this.isAddedMsg.sendIsAddedMsg(false);
    }
   
    this.todoTitle = '';
    // this.isAdded = true;
  }
}
