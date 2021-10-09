import { TestBed } from '@angular/core/testing';

import { ModifyUsernameService } from './modify-username.service';

describe('ModifyUsernameService', () => {
  let service: ModifyUsernameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyUsernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
