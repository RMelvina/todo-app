import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPgComponent } from './index-pg.component';

describe('IndexPgComponent', () => {
  let component: IndexPgComponent;
  let fixture: ComponentFixture<IndexPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
