import { TestBed } from '@angular/core/testing';

import { LcPdfGeneratorService } from './lc-pdf-generator.service';

describe('LcPdfGeneratorService', () => {
  let service: LcPdfGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LcPdfGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
