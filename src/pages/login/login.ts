import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthServiceProvider  } from './../../providers/auth-service/auth-service';

import { WelcomePage } from '../welcome/welcome';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: any;
  password: any;
  data: any;  
  apiUrl = 'https://reqres.in/api';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: HttpClient,
    public authService: AuthServiceProvider,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  validaUsuario(){
    this.http.post(this.apiUrl+'/login', {
      email : this.user,
      password : this.password,
    }).subscribe(data => {
      this.authService.login();
        this.navCtrl.push(TabsPage);
    }, err => {
      let alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: err.error.error,
        buttons: ['OK']
      });
      alert.present();
    });
  }

  isActiveToggleTextPassword: Boolean = true;
  public toggleTextPassword(): void{
      this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;
  }
  public getType() {
      return this.isActiveToggleTextPassword ? 'password' : 'text';
  }

  loginUser() {
    this.authService.login();
  }
 
  logoutUser() {
    this.authService.logout();
  }
 
  isAuthenticated() {
    return this.authService.authenticated();
  }
}
