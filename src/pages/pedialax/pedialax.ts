import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';

// import { PedialaxChewableMobilePage } from '../pedialax-chewable-mobile/pedialax-chewable-mobile';
// import { PedialaxLiquidMobilePage } from '../pedialax-liquid-mobile/pedialax-liquid-mobile';
// import { PedialaxGlycerinMobilePage } from '../pedialax-glycerin-mobile/pedialax-glycerin-mobile';
// import { PedialaxEnemaMobilePage } from '../pedialax-enema-mobile/pedialax-enema-mobile';

@Component({
  selector: 'page-pedialax',
  templateUrl: 'pedialax.html'
})
export class PedialaxPage {

  AbsoluteURL: string;
  pages: any;
  subPages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.pages = [true, true];
    this.subPages = [
      // PedialaxChewableMobilePage,  				// 0
      // PedialaxLiquidMobilePage,       			// 1
      // PedialaxGlycerinMobilePage,       		// 2
      // PedialaxEnemaMobilePage		     		// 3
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
