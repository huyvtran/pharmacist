import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { MaaloxChildrenMobilePage } from '../maalox-children-mobile/maalox-children-mobile';
import { MaaloxJuniorMobilePage } from '../maalox-junior-mobile/maalox-junior-mobile';
import { MaaloxRegularMobilePage } from '../maalox-regular-mobile/maalox-regular-mobile';


@Component({
  selector: 'page-maalox',
  templateUrl: 'maalox.html'
})
export class MaaloxPage {

  AbsoluteURL: string;
  pages: any;
  subPages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.pages = [true, true];
    this.subPages = [
      MaaloxChildrenMobilePage,  				// 0
      MaaloxJuniorMobilePage,       			// 1
      MaaloxRegularMobilePage,       			// 2
    ];
  }
  showMenu() {
    var menu = document.querySelector( 'ion-menu ion-content' );
    var setting = GlobalVars.getPageSetting('a');
    menu.className = "outer-content content" + " " + setting['class'];
  	this.menu.open();
  }
  togglePage(ind: number) {
    this.pages[ind] = !this.pages[ind];
  }
  gotoSubPage(id: number) {
    this.navCtrl.push(this.subPages[id]);
  }
  ionViewDidLoad() {
    
  }

}
