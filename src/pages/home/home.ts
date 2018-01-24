import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  value: any;

  constructor(public navCtrl: NavController,public authService: AuthServiceProvider) {

  }

  ionViewCanEnter(){
    return this.authService.authenticated();
  }

  onInput(ev: any){
    console.log("Texto buscado:" + ev.target.value);
  }
}
