import { Component, Input } from '@angular/core';

/**
 * Generated class for the TransactionIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'transaction-icon',
  templateUrl: 'transaction-icon.html'
})
export class TransactionIconComponent {

  @Input() image: string
  @Input() type: PaymentType = 'sent'
  @Input() status: PaymentStatus = 'failed'

  isTopup: boolean

  iconButtonSize:number 
  iconOpacity:number

  spanBorderClass:string 

  constructor() {
  }

  ngOnInit()
{
  this.isTopup = this.type == 'topup'


  this.iconButtonSize = this.status == 'successful' ? 40 : 32
  this.iconOpacity  = this.status != 'successful' ? 0.8 : 1
  this.spanBorderClass = this.status == 'failed' ? 'failed-border' : this.status == 'pending' ? 'pending-border' : null
}
}


export type PaymentType = 'received' | 'sent' | 'topup' | 'utilities'
export type PaymentTypeNumber = 1 | 2 | 3
export type PaymentStatus = 'pending' | 'successful' | 'failed'