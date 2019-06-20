import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSpellsComponent } from './unit-spells.component';

describe('UnitSpellsComponent', () => {
  let component: UnitSpellsComponent;
  let fixture: ComponentFixture<UnitSpellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitSpellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
