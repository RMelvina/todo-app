import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { fadeIn, slideIn } from '../animations';
import { TodoArrayService } from '../../../services/todo-array.service';
import { IsAddedMsgService } from '../../../services/isAddedMsg/is-added-msg.service';


@Component({
  selector: 'app-diplay',
  templateUrl: './diplay.component.html',
  styleUrls: ['./diplay.component.css'],
  animations: [slideIn],
})
export class DiplayComponent implements OnInit {
 
  // Input
  @Input() todos!: any[];

  // Output  EventEmitter

  constructor(
    private todoArray: TodoArrayService,
    private isAddedMsg: IsAddedMsgService
  ) {}

  ngOnInit(): void {
    
  }

  // Methods
  remove(name: any) {
    this.todoArray.removeTodoArray(name);
    this.isAddedMsg.sendIsAddedMsg(false)
    console.log(name);
  }
}
