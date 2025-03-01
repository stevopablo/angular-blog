import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BigCardComponent } from "./big-card/big-card.component";
import { TitleComponent } from "./title/title.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BigCardComponent, TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
