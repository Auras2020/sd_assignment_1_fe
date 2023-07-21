import { TestBed } from '@angular/core/testing';

import { AuthentificationPageService } from './authentification-page.service';

describe('AuthentificationPageService', () => {
  let service: AuthentificationPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
