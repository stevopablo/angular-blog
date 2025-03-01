import { Component } from '@angular/core';
import { TitleComponent } from "../../title/title.component";
import { BigCardComponent } from "../../big-card/big-card.component";
import { SmallCardComponent } from "../../small-card/small-card.component";

@Component({
  selector: 'app-home',
  imports: [TitleComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
