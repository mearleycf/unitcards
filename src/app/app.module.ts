import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CardsModule } from './cards/cards.module';
import { ArmyModule } from './army/army.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule,
    ArmyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
