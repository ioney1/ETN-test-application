import { NgModule } from '@angular/core';
import { TransactionTypePipe } from './transaction-type/transaction-type';
@NgModule({
	declarations: [TransactionTypePipe],
	imports: [],
	exports: [TransactionTypePipe]
})
export class PipesModule {}
