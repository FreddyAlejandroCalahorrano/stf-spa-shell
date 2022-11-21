import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavCollapseComponent} from './nav-collapse.component';
import {RouterTestingModule} from "@angular/router/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {NavItemComponent} from "../nav-item/nav-item.component";

xdescribe('NavCollapseComponent', () => {
  let component: NavCollapseComponent;
  let fixture: ComponentFixture<NavCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavCollapseComponent, NavItemComponent ],
      imports: [RouterTestingModule.withRoutes([])],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
