import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderComponent } from '../components/header/header';
import { ComponentsModule } from '../components/components.module';
import { PaymentCategoriesProvider } from '../providers/payment-categories/payment-categories';
import { WalletApiProvider } from '../providers/wallet/wallet-api';
import { HttpClientModule } from '@angular/common/http';
import { ContactsApiProvider } from '../providers/contacts/contacts-api';
import { ContactsInitProvider } from '../providers/contacts/contacts-init';
import { PipesModule } from '../pipes/pipes.module';
import { TransactionTypePipe } from '../pipes/transaction-type/transaction-type';
import { CurrencyConverterProvider } from '../providers/currency-converter/currency-converter';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    HttpClientModule,
    PipesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
    PaymentCategoriesProvider,
    WalletApiProvider,
    ContactsApiProvider,
    ContactsInitProvider,
    CurrencyConverterProvider
  ]
})
export class AppModule {}
