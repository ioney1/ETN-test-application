import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WalletApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WalletApiProvider {

  walleDataUrl = 'https://3130fecd1ca985e8920d33e1481d4461.m.pipedream.net/'

  constructor(private http: HttpClient) {
    
  }

  getWalletData(){
    return this.http.get(this.walleDataUrl, {responseType: 'json'})
  }

}
