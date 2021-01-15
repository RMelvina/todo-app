import { trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { fadeIn, slideIn } from './animations';
import { TodoArrayService } from '../../services/todo-array.service';
import { IsAddedMsgService } from '../../services/isAddedMsg/is-added-msg.service'
import {isAdded} from '../../global'

@Component({
  selector: 'app-to-do-list-pg',
  templateUrl: './to-do-list-pg.component.html',
  styleUrls: ['./to-do-list-pg.component.css'],
  animations: [fadeIn, slideIn],
})
export class ToDoListPgComponent implements OnInit {
  constructor(
    private todoArray: TodoArrayService,
    private isAddedMsg: IsAddedMsgService
  ) {}

  // Declaration
  isAdded = false
  todos = this.todoArray.getTodosArray();

  // @input
  // @Input() isAdded!: boolean;

  ngOnInit(): void {
    this.isAddedMsg.getIsAddedMsg().subscribe(items=>{
      this.isAdded = items;
    })
  }

  // Methods
  // addTodo() {
  //   this.todoArray.addTodosArray(this.todoTitle, false, this.todoTitle);
  //   this.todoTitle = '';
  //   this.isAdded = true
  // }

  clearAll() {
    this.todoArray.clearTodosArray();
    this.isAdded  = false
  }
}
