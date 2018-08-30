import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import * as $ from 'jquery';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListItemPage } from '../pages/list-item/list-item';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { CategoriesPage } from '../pages/categories/categories';
import { ListSeclectedPage } from '../pages/list-seclected/list-seclected';
import { LoginPage } from '../pages/login/login';
import { FinishPage } from '../pages/finish/finish';

import { HttpClientModule } from '@angular/common/http';
import { ProductServiceProvider } from '../providers/product-service/product-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListItemPage,
    RestaurantPage,
    CategoriesPage,
    ListSeclectedPage,
    LoginPage,
    FinishPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListItemPage,
    RestaurantPage,
    CategoriesPage,
    ListSeclectedPage,
    LoginPage,
    FinishPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductServiceProvider
  ]
})
export class AppModule {}
