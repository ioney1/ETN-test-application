import { Component, Input } from "@angular/core";
import { WalletApiProvider } from "../../providers/wallet/wallet-api";

/**
 * Generated class for the TransactionListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "transaction-list",
  templateUrl: "transaction-list.html",
})
export class TransactionListComponent {
  @Input("transactions") transactions: TransactionData[];

  image: string = ''

  constructor(public wallet: WalletApiProvider) {}


  ngOnInit() {
    this.wallet
      .getWalletData()
      .toPromise()
      .then((data: any & {transactions: TransactionData}) => {
        this.transactions = data.transactions

      });
  }
}

export interface TransactionData {
  dateCreated: Date;
  destinationAmount: number;
  destinationWallet: string;
  fee?: number;
  id: string;
  paymentId: string;
  paymentType: 1 | 2 | 3;
  sourceWalletAddress?: string;
  status: 1 | 2 | 3;
  topUpInfo?: {
    etn: number;
    instructions: any;
    logo: string;
    mobileNumber: string;
    operatorName: string;
    package: string;
  };
  txHash: string;
  txKey: string;
}
