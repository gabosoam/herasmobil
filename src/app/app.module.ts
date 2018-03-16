import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { UserProvider } from '../providers/user/user';
import { ConfiguracionProvider } from '../providers/configuracion/configuracion';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BusquedaProvider } from '../providers/busqueda/busqueda';
import { ProductoProvider } from '../providers/producto/producto';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    ConfiguracionProvider,
    BarcodeScanner,
    BusquedaProvider,
    ProductoProvider
  ]
})
export class AppModule {}

