import { Component, Output, EventEmitter } from '@angular/core';
import { formatToEuro } from '../../utils/utils';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [],
  template: `<h1>Conversor de moedas</h1>
    <p>Digite um valor para ser convertido</p>
    <div class="currencyInput">
      
      <span>€</span>
      <input
      type="text"
      name="currencyInput"
      [value]="formattedStringValue"
      (input)="currencyInput($event)"
      placeholder="Enter amount"
      />
    </div>
    `,
  styleUrl: './currency.component.scss',
})
export class CurrencyComponent {
  @Output() formattedValue: EventEmitter<string> = new EventEmitter<string>();
  formattedStringValue = '';

  currencyInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const currencyValue = formatToEuro(input.value.replace(/[^\d]/g, ''));
    input.value = currencyValue;
    this.formattedStringValue = currencyValue;
    this.formattedValue.emit(currencyValue);
  }
}
