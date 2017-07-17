import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { GlobalVars } from '../providers/globalvars';
import { CompareChildsPage } from '../compare-childs/compare-childs';
import { CompareYesnoPage } from '../compare-yesno/compare-yesno';

let mode = {
    0: 'a',
    2: 'a',
    3: 'n',
    4: 'n',
    5: 'o',
}

@Component({
  selector: 'page-compare-childs-container',
  templateUrl: 'compare-childs-container.html'
})
export class CompareChildsContainerPage {
	setting: any;
	pageId: number;
	pageTitle = {
		0: "Cold medicines",
		2: "Eye Drops",
		3: "Antifungal",
		4: "Heartburn Medicines",
		5: "Pain relief",
	};
	imageUrls = {
		0: "pharm/male/pharm-john-port.svg",
		2: "pharm/female/pharm-trisha.svg",
		3: "pharm/female/pharm-selena-cyan.svg",
		4: "pharm/male/pharm-henry-cyan.svg",
		5: "pharm/male/pharm-tony-orange.svg",
	};
	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
	    this.menu = menu;
		this.pageId = GlobalVars.getPageId();
	  	this.setting = GlobalVars.getPageSetting(mode[this.pageId]);
	}
	showMenu() {
		var menu = document.querySelector( 'ion-menu ion-content' );
    	menu.className = "outer-content content" + " " + this.setting['class'];
	    this.menu.open();
	}
	showPage(id: number) {
		if (id!=6 && id!=7){
			GlobalVars.setPageId(id + 14);
			this.navCtrl.push(CompareChildsPage);
		}
		else
		{
			GlobalVars.setPageId(id - 5);
			this.navCtrl.push(CompareYesnoPage);
		}
	}
	ionViewDidLoad() {
	    // console.log('ionViewDidLoad ColdMedsPage');
	}

}
