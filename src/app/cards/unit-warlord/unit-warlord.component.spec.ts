import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitWarlordComponent } from './unit-warlord.component';

describe('UnitWarlordComponent', () => {
  let component: UnitWarlordComponent;
  let fixture: ComponentFixture<UnitWarlordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitWarlordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitWarlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
