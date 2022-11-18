import { NgModule } from "@angular/core";
import { Header, IonicModule } from "ionic-angular";
import { HeaderComponent } from "./header/header";
import { IconButtonComponent } from "./buttons/icon-button/icon-button";
import { BalanceSummaryComponent } from "./balance-summary/balance-summary";
import { PercentChangeBadgeComponent } from "./percent-change-badge/percent-change-badge";
import { LinkButtonComponent } from "./buttons/link-button/link-button";
import { AppSectionComponent } from './app-section/app-section';
import { ShortcutsCarouselComponent } from './shortcuts-carousel/shortcuts-carousel';
import { TransactionsReportComponent } from './transactions-report/transactions-report';
import { BalanceDisplayComponent } from './balance-display/balance-display';
import { TransactionFieldComponent } from './transaction-field/transaction-field';
import { TransactionIconComponent } from './transaction-icon/transaction-icon';
import { TransactionBadgeComponent } from './transaction-badge/transaction-badge';
import { PaymentCategoriesProvider } from "../providers/payment-categories/payment-categories";
import { TransactionListComponent } from './transaction-list/transaction-list';
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [
    HeaderComponent,
    IconButtonComponent,
    BalanceSummaryComponent,
    PercentChangeBadgeComponent,
    LinkButtonComponent,
    AppSectionComponent,
    ShortcutsCarouselComponent,
    TransactionsReportComponent,
    BalanceDisplayComponent,
    TransactionFieldComponent,
    TransactionIconComponent,
    TransactionBadgeComponent,
    TransactionListComponent,
  ],
  imports: [IonicModule, PipesModule],
  exports: [
    HeaderComponent,
    IconButtonComponent,
    BalanceSummaryComponent,
    PercentChangeBadgeComponent,
    LinkButtonComponent,
    AppSectionComponent,
    ShortcutsCarouselComponent,
    TransactionsReportComponent,
    BalanceDisplayComponent,
    TransactionFieldComponent,
    TransactionIconComponent,
    TransactionBadgeComponent,
    TransactionListComponent,
  ],
  providers:[
    PaymentCategoriesProvider
  ]
})
export class ComponentsModule {}
