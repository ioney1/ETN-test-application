import { Component, Input } from "@angular/core";
import { ContactsInitProvider } from "../../providers/contacts/contacts-init";
import {
  PaymentStatus,
  PaymentType,
} from "../transaction-icon/transaction-icon";
import { TransactionData } from "../transaction-list/transaction-list";

/**
 * Generated class for the TransactionFieldComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "transaction-field",
  templateUrl: "transaction-field.html",
})
export class TransactionFieldComponent {
  //ammendment add ETN to fiat converter

  @Input() transaction: TransactionData

  @Input() paymentType: 1 | 2 | 3 = 1;
  @Input() paymentStatus: 1 | 2 | 3 = 1;
  @Input() destinationWallet: string;
  @Input() amount: number = 5.06;
  @Input() image: string = "";

  type: PaymentType;
  status: PaymentStatus = "successful";
  textClass: string;
  symbol: string;
  name: string

  constructor(public contacts: ContactsInitProvider) {}

  ngOnInit() {
    this.type = Type[this.transaction.paymentType] as PaymentType;
    this.status = Status[this.transaction.status] as PaymentStatus;

    this.symbol = this.type == "received" ? "+" : "-";
    this.textClass = this.status + "-text";

    this.contacts.contacts.then((data) => {
          for (let contact in data) {


           if (data[contact].walletAddress == this.destinationWallet){
            this.image = data[contact].imageUrl
            this.name = data[contact].firstName + ' ' + data[contact].lastName
           } else {
            this.name = this.paymentType != 2 ? this.transaction.destinationWallet : this.transaction.sourceWalletAddress
           }
              
        }})

    this.paymentType == 3 ? this.name = this.transaction.topUpInfo.operatorName : null
  }
}

enum Status {
  "failed" = 3,
  "successful" = 2,
  "pending" = 1,
}

enum Type {
  "received" = 1,
  "sent" = 2,
  "topup" = 3,
}
