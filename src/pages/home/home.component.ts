import { Component, signal } from '@angular/core';
import { CurrencyComponent } from '../currency/currency.component';
import { CommonModule } from '@angular/common';
import { CurrencyService } from '../../service/currency.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  symbolCoin() {
    switch (this.coinCode) {
      case 'BRL':
        return 'R$';
        
      case 'USD':
        return '$';
      case 'JPY':
        return '¥';
        
      case 'GBP':
        return '£';

        default:
          return '$';
        }
  }
  selectedCoinCode(value: string) {
    this.coinCode = value;
  }
  currencyValue = signal<string | null>(null);
  errorCurrency = false;
  coinCode = 'BRL';
  convertedValue = '';

  onInputCurrencyChange(value: string) {
    this.currencyValue.set(value);
  }
  constructor(private currencyService: CurrencyService) {}
  submitCurrencyValue() {
    if (this.currencyValue() === null || this.currencyValue() === '0,00') {
      this.errorCurrency = true;
    } else {
      this.errorCurrency = false;
      this.currencyService.getNameCurrency().subscribe(
        (success) => {
          const formattedValue = this.currencyValue()?.replace(',', '.') || '0';
          const currentValue = Number(formattedValue);

          if (!isNaN(currentValue)) {
            alert('Sucesso na requisição da moeda');
            this.convertedValue = (
              (success.rates[this.coinCode] as number) * currentValue
            ).toString();
          } else {
            alert("Valor inválido após a conversão para número.")
          }
        },
        () => {
          alert('Erro ao obter a moeda, tente novamente mais tarde');
        }
      );
    }
  }
}
