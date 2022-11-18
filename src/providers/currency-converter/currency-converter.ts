import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CurrencyConverterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CurrencyConverterProvider {

  url: string = 'https://api.exchangerate.host/convert?from=ETN&to=USD&source=crypto'

  constructor(public http: HttpClient) {
    
  }

  getConversion(amount:number = 1){
    return this.http.get(this.url + '&amount=' + amount, {responseType: 'json'})
  }

}
