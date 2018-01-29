import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-destinos',
  templateUrl: 'destinos.html',
})
export class DestinosPage {
  destinosObj: any; 
  destNacionales: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authService: AuthServiceProvider,    
    public http: HttpClient,
  ) {
     this.http.get('../../assets/json/destinos.json')
    .subscribe(data => {
      this.destinosObj = data;
      this.destNacionales = this.destinosObj.Destinos[0].es[0].Nacionales;
      console.log('my data: ', this.destinosObj.Destinos[0].es[0].Nacionales);

    })
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinosPage');
  }

}
