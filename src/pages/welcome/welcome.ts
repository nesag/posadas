import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HttpClient } from '@angular/common/http';



/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  destinosObj: any; 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authService: AuthServiceProvider,    
    public http: HttpClient,
  ) {
     this.http.get('../../assets/json/destinos.json')
    .subscribe(data => {
      this.destinosObj = data;
      
      console.log('my data: ', this.destinosObj.Destinos[0].es[0].Nacionales);

    })
  }

  ionViewCanEnter(){
    console.log(this.authService.authenticated());
    return this.authService.authenticated();
  }
}
