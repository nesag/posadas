import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SingupPage } from '../pages/singup/singup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HomePage } from '../pages/home/home';
import { InfomembresiaPage } from '../pages/infomembresia/infomembresia';
import { MinivacsPage } from '../pages/minivacs/minivacs';
import { DestinosPage } from '../pages/destinos/destinos';


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    SingupPage,
    AboutPage,
    ContactPage,
    TabsPage,
    HomePage,
    InfomembresiaPage,
    MinivacsPage,
    DestinosPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    SingupPage,
    AboutPage,
    ContactPage,
    TabsPage,
    HomePage,
    InfomembresiaPage,
    MinivacsPage,
    DestinosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
