import { Component, OnInit } from '@angular/core';
import { CardsModule } from '../../cards/cards.module';
import { ShellComponent } from '../../cards/shell/shell.component';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.scss']
})
export class ArmyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
