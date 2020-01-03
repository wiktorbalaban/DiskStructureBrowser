import { TestBed } from '@angular/core/testing';

import { DirectoryContentService } from './directory-content.service';

describe('DirectoryContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectoryContentService = TestBed.get(DirectoryContentService);
    expect(service).toBeTruthy();
  });
});
