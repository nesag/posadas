import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { DestinosPage } from '../destinos/destinos';
import { InfomembresiaPage } from '../infomembresia/infomembresia';
import { MinivacsPage } from '../minivacs/minivacs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  value: any;
  direccion: any;
  @ViewChild(Nav) nav:Nav;

  testimonials = [
    {
      imageUrl: 'http://fa-vacationclub.com/resources/img/thumb-1.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      name: 'CONOCE MÁS',
      page: 'infomembresia',
    },
    {
      imageUrl: 'http://fa-vacationclub.com/resources/img/thumb-2.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      name: 'DESTINOS',
      page: 'destinos',      
    },
    {
      imageUrl: 'http://fa-vacationclub.com/resources/img/img-promociones.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      name: 'PROMOCIONES PARA QUE CONOZCAS QUE ES FIESTA AMERICANA VACTION CLUB',
      page: 'minivac',
    },
    {
      imageUrl: 'http://fa-vacationclub.com/resources/img/img-home-banner-inferior.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      name: '"Una experiencia increible"',
      detail: 'Familia Desler',
      page: 'testimoniales',
    },
  ];

  rootPage: any;
  constructor(public navCtrl: NavController,public authService: AuthServiceProvider) {
    this.rootPage = 'HomePage';
  }

  ionViewCanEnter(){
    return this.authService.authenticated();
  }

  onInput(ev: any){
    console.log("Texto buscado:" + ev.target.value);
  }

  abrirPagina(event, page){
    if(page == 'destinos'){
      this.navCtrl.push( DestinosPage );
    }
    if(page == 'infomembresia'){
      this.navCtrl.push( InfomembresiaPage );
    }
    if(page == 'minivac'){
      this.navCtrl.push( MinivacsPage );
    }
  }
}
