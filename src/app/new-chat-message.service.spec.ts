import { TestBed } from '@angular/core/testing';

import { NewChatMessageService } from './new-chat-message.service';

describe('NewChatMessageService', () => {
  let service: NewChatMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewChatMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
