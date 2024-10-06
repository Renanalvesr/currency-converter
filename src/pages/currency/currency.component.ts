import { Component } from '@angular/core';
import { formatToEuro } from '../../utils/utils';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss'
})
export class CurrencyComponent {
  formattedValue = '';

  currencyInput(event:Event): void {
    console.log('áqui');
    
    const input = event.target as HTMLInputElement;
    this.formattedValue = formatToEuro(input.value);
  }
}

