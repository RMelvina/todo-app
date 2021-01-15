import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
    import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IndexPgComponent } from './components/index-pg/index-pg.component';
import { ToDoListPgComponent } from './components/to-do-list-pg/to-do-list-pg.component';
import { DiplayComponent } from './components/to-do-list-pg/diplay/diplay.component';

import { AddToDosComponent } from './components/to-do-list-pg/add-to-dos/add-to-dos.component';

@NgModule({
  declarations: [AppComponent, IndexPgComponent, ToDoListPgComponent, DiplayComponent, AddToDosComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
