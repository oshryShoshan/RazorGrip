import { TestBed, inject } from '@angular/core/testing';

import { CardLoaderService } from './card-loader.service';

describe('CardLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardLoaderService]
    });
  });

  it('should be created', inject([CardLoaderService], (service: CardLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
