import { Component, ViewChild, Inject } from '@angular/core';
import { Platform, Nav, MenuController, App,  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { DestinosPage } from '../pages/destinos/destinos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  destinos:any;
  @ViewChild(Nav) nav:Nav;

  pages: Array<{title: string, component: any}>;

  constructor( 
    @Inject(Platform) platform,
    public menuCtrl: MenuController, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public app: App) {
      this.rootPage = LoginPage;
    this.destinos = DestinosPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Inicio', component: TabsPage },
      { title: 'Destinos', component: DestinosPage },
    ];
  }

  goHome(){
    this.nav.setRoot(TabsPage);
    this.menuCtrl.close();

  }

  goAbout(){
    this.nav.setRoot(AboutPage);
    this.menuCtrl.close();
  }

  goPage(event, pages){
//    this.nav.setRoot(pages.component);
    this.menuCtrl.close();
    this.nav.push(pages.component);

  }
}
