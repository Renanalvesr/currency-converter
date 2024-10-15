import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyResponse } from '../models/currency-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/EUR'; // Exemplo de URL da API

  constructor(private http: HttpClient) {}

  getNameCurrency(): Observable<CurrencyResponse> {
    return this.http.get<CurrencyResponse>(this.apiUrl); // Ajuste conforme necessário
  }
}
