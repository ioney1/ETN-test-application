import { Component } from "@angular/core";
import { CurrencyConverterProvider } from "../../providers/currency-converter/currency-converter";
import { WalletApiProvider } from "../../providers/wallet/wallet-api";

/**
 * Generated class for the BalanceSummaryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "balance-summary",
  templateUrl: "balance-summary.html",
})
export class BalanceSummaryComponent {
  actions: { name: string; icon: string }[] = [
    { name: "pay", icon: "ph-arrow-up-light" },
    { name: "receive", icon: "ph-arrow-down-light" },
    { name: "trade", icon: "ph-arrows-down-up-light" },
  ];

  balanceETN: number;
  conversion: string;

  constructor(
    public wallet: WalletApiProvider,
    public converter: CurrencyConverterProvider
  ) {}

  ngOnInit() {
    this.wallet
      .getWalletData()
      .toPromise()
      .then((data: { [x: string]: any }) => {
        this.balanceETN = data.wallet!.balance;
        this.converter
          .getConversion(data.wallet!.balance as number)
          .toPromise()
          .then((data) => console.log(data));
      });
  }
}
