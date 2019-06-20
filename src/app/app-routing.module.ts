import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArmyComponent } from './army/army/army.component';

const routes: Routes = [
  {
    path: '',
    component: ArmyComponent
  },
  {
    path: 'army',
    component: ArmyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
