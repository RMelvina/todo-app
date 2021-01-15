import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsAddedMsgService {
  isAdded = new Subject();
  observable = new Observable();

  constructor() {}

  // Sending message if isAdded is true or false
  sendIsAddedMsg(msg: any) {
    this.isAdded.next(msg);
  }

  getIsAddedMsg(): Observable<any>{
    return this.isAdded.asObservable();

  }
}
