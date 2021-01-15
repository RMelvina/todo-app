import { TestBed } from '@angular/core/testing';

import { IsAddedMsgService } from './is-added-msg.service';

describe('IsAddedMsgService', () => {
  let service: IsAddedMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsAddedMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
