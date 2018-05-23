import { TestBed, inject } from '@angular/core/testing';

import { VideosService } from './videos.service';

describe('EventosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideosService]
    });
  });

  it('should be created', inject([VideosService], (service: VideosService) => {
    expect(service).toBeTruthy();
  }));
});
