import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderComponent } from '../../components/header/header';
import { WalletApiProvider } from '../../providers/wallet/wallet-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

  constructor(public navCtrl: NavController, public wallet: WalletApiProvider) {

  }

  ngOnInit(){
    this.wallet.getWalletData().subscribe(data => console.log(data))
  }

}
