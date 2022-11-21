import {TestBed} from '@angular/core/testing';

import {SidebarService} from './sidebar.service';
import {LoginService} from "../auth/services/login.service";

describe('SidebarService', () => {
  let service: SidebarService;
  let mockLoginService = {
    hasRole: jest.fn().mockImplementation(() => []),
    logout: jest.fn(),
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: LoginService, useValue: mockLoginService},
      ],
    });
    service = TestBed.inject(SidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
