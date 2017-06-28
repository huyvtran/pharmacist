import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { ChildrenDiphenhydramineMobilePage } from '../children-diphenhydramine-mobile/children-diphenhydramine-mobile';
import { GlobalVars } from '../providers/globalvars';

@Component({
  selector: 'page-diphenhydramine',
  templateUrl: 'diphenhydramine.html'
})
export class DiphenhydraminePage {

  AbsoluteURL: string;
  pages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.pages = [true, true];
  }
  showMenu() {
    var menu = document.querySelector( 'ion-menu ion-content' );
    var setting = GlobalVars.getPageSetting('i');
    menu.className = "outer-content content" + " " + setting['class'];
    this.menu.open();
  }
  togglePage(ind: number) {
    this.pages[ind] = !this.pages[ind];
  }
  goContinue() {
    this.navCtrl.push(ChildrenDiphenhydramineMobilePage);
  }
  ionViewDidLoad() {
    
  }

}