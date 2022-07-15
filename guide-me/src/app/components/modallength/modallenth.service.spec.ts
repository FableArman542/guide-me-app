import { TestBed } from '@angular/core/testing';

import { ModallenthService } from './modallenth.service';

describe('ModallenthService', () => {
  let service: ModallenthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModallenthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
