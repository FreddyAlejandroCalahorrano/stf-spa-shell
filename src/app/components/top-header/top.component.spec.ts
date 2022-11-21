import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {TopComponent} from "./top.component";
import {InternationalizationModule} from '@pichincha/bb-commons/internationalization';

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [
      InternationalizationModule,
  ]

});
});
describe("TopComponent", () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;
  const data = {
    business: {
      businessName: "Ferreteria Rojas",
      documentType: "Ruc",
      documentNumber: "1234567890",
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("Format Value", () => {
    const result = component.formatValue(data.business);
    expect(result).toEqual("Ruc : 1234567890");
  });
});
