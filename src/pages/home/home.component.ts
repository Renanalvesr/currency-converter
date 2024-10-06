import { Component } from '@angular/core';
import { CurrencyComponent } from "../currency/currency.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
