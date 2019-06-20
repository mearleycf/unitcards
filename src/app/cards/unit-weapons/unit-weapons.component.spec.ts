import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitWeaponsComponent } from './unit-weapons.component';

describe('UnitWeaponsComponent', () => {
  let component: UnitWeaponsComponent;
  let fixture: ComponentFixture<UnitWeaponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitWeaponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
