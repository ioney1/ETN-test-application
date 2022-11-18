import { Pipe, PipeTransform } from '@angular/core';
import { PaymentStatus, PaymentType } from '../../components/transaction-icon/transaction-icon';

/**
 * Generated class for the TransactionTypePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'transactionType',
})
export class TransactionTypePipe implements PipeTransform {

  transform(value: 1 | 2 | 3, prop: 'status' | 'type' = 'type') {
    
    enum Status {
      'failed' = 3,
      'successful' = 2,
      'pending' = 1
    }

    enum Type{
      'received' = 1,
      'sent' = 2,
      'topup' =3,
    }

    return prop == 'status' ? Status[value] as PaymentStatus : Type[value] as PaymentType
  }
}
