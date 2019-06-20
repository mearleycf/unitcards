import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { UnitInfoComponent } from './unit-info/unit-info.component';
import { UnitAbilitiesComponent } from './unit-abilities/unit-abilities.component';
import { UnitWeaponsComponent } from './unit-weapons/unit-weapons.component';
import { UnitWoundtrackComponent } from './unit-woundtrack/unit-woundtrack.component';
import { UnitSpellsComponent } from './unit-spells/unit-spells.component';
import { UnitRelicComponent } from './unit-relic/unit-relic.component';
import { UnitWarlordComponent } from './unit-warlord/unit-warlord.component';

@NgModule({
  declarations: [
    ShellComponent,
    UnitInfoComponent,
    UnitAbilitiesComponent,
    UnitWeaponsComponent,
    UnitWoundtrackComponent,
    UnitSpellsComponent,
    UnitRelicComponent,
    UnitWarlordComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShellComponent,
    UnitInfoComponent,
    UnitAbilitiesComponent,
    UnitWeaponsComponent,
    UnitWoundtrackComponent,
    UnitSpellsComponent,
    UnitRelicComponent,
    UnitWarlordComponent
  ]
})
export class CardsModule { }
