import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArmyComponent } from './army/army.component';
import { CardsModule } from '../cards/cards.module';

@NgModule({
  declarations: [ArmyComponent],
  imports: [
    CommonModule,
    CardsModule,
  ]
})
export class ArmyModule { }
