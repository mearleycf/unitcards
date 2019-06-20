import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitAbilitiesComponent } from './unit-abilities.component';

describe('UnitAbilitiesComponent', () => {
  let component: UnitAbilitiesComponent;
  let fixture: ComponentFixture<UnitAbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitAbilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
