import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListPgComponent } from './to-do-list-pg.component';

describe('ToDoListPgComponent', () => {
  let component: ToDoListPgComponent;
  let fixture: ComponentFixture<ToDoListPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
