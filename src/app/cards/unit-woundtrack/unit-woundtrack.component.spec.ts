import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitWoundtrackComponent } from './unit-woundtrack.component';

describe('UnitWoundtrackComponent', () => {
  let component: UnitWoundtrackComponent;
  let fixture: ComponentFixture<UnitWoundtrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitWoundtrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitWoundtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
