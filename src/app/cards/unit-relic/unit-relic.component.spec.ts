import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitRelicComponent } from './unit-relic.component';

describe('UnitRelicComponent', () => {
  let component: UnitRelicComponent;
  let fixture: ComponentFixture<UnitRelicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitRelicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitRelicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
