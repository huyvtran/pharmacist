import { Component } from '@angular/core';
import { NavController, MenuController, NavParams } from 'ionic-angular';

/*
  Generated class for the Pepto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';

@Component({
  selector: 'page-pepto',
  templateUrl: 'pepto.html'
})
export class PeptoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PeptoPage');
  }
  showMenu() {
    var menu = document.querySelector( 'ion-menu ion-content' );
    var setting = GlobalVars.getPageSetting('a');
    menu.className = "outer-content content" + " " + setting['class'];
  	this.menu.open();
  }
}
