import { Component, Input } from '@angular/core';
import { PaymentCategoriesProvider } from '../../providers/payment-categories/payment-categories';

/**
 * Generated class for the TransactionBadgeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'transaction-badge',
  templateUrl: 'transaction-badge.html'
})
export class TransactionBadgeComponent {

  @Input() type: 'topup' | 'utilities' = 'topup'

  categories: PaymentCategoriesProvider['categories']
  iconColor: PaymentCategoriesProvider['categoryIconColor']

  constructor(public paymentCategories: PaymentCategoriesProvider) {
    this.categories = paymentCategories.categories
    this.iconColor = paymentCategories.categoryIconColor
  }
}
