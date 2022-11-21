import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardLayoutComponent} from './dashboard-layout.component';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {RouterTestingModule} from "@angular/router/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {SidebarService} from "../../services/sidebar.service";
import {LoginService} from "../../auth/services/login.service";

describe('DashboardLayoutComponent', () => {
  let component: DashboardLayoutComponent;
  let fixture: ComponentFixture<DashboardLayoutComponent>;

  let mockLoginService = {
    hasRole: jest.fn().mockImplementation(() => []),
    logout: jest.fn(),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DashboardLayoutComponent,
        SidebarComponent,
      ],
      imports: [RouterTestingModule],
      providers: [
        SidebarService,
        {provide: LoginService, useValue: mockLoginService},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
