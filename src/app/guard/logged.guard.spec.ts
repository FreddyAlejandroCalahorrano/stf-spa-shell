import {TestBed} from '@angular/core/testing';
import {LoggedGuard} from './logged.guard';
import {RouterTestingModule} from "@angular/router/testing";

describe('LoggedGuard', () => {
  let guard: LoggedGuard

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedGuard],
      imports: [RouterTestingModule]
    })
    guard = TestBed.inject(LoggedGuard)
  })

  it("should by created", () => {
    expect(guard).toBeTruthy()
  })


});
