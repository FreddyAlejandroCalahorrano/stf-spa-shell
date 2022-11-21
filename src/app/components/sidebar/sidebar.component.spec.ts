import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SidebarComponent} from './sidebar.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {LoginService} from "../../auth/services/login.service";
import {SidebarService} from "../../services/sidebar.service";

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let compiled: HTMLElement;
  let router: Router;

  let mockLoginService = {
    hasRole: jest.fn().mockImplementation(() => []),
    logout: jest.fn(),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [SidebarComponent],
      providers: [
        SidebarService,
        {provide: LoginService, useValue: mockLoginService},
        // {provide: DialogService, useValue: mockDialogService},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    router = TestBed.get(Router);
    router.initialNavigation();
    jest.clearAllMocks()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the state of the sidebar', () => {
    component.closeSidebar = false
    const toggleButton : any = compiled.querySelector(".toggle");
    toggleButton.click()
    expect(component.closeSidebar).toEqual(true)
  });

  it('should output the state of the sidebar', () => {
    jest.spyOn(component.toggleEventEmitter, 'emit')
    component.closeSidebar = false
    const toggleButton : any = compiled.querySelector(".toggle");
    toggleButton.click()
    expect(component.toggleEventEmitter.emit).toBeCalled()

  });

});
