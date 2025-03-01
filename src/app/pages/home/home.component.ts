import { Component } from '@angular/core';
import { TitleComponent } from "../../title/title.component";
import { BigCardComponent } from "../../big-card/big-card.component";
import { SmallCardComponent } from "../../small-card/small-card.component";
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'app-home',
  imports: [TitleComponent, BigCardComponent, SmallCardComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
