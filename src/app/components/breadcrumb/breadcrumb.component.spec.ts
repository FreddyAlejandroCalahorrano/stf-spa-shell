import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {BreadcrumbComponent} from './breadcrumb.component';
import {RouterTestingModule} from "@angular/router/testing";
import {SidebarService} from "../../services/sidebar.service";

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  const mockSidebarService = {
    getMenuFilters: jest.fn()
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbComponent],
      imports: [RouterTestingModule],
      providers: [
        {provide: SidebarService, useValue: mockSidebarService}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
