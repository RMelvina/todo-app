import { TestBed } from '@angular/core/testing';

import { TodoArrayService } from './todo-array.service';

describe('TodoArrayService', () => {
  let service: TodoArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
