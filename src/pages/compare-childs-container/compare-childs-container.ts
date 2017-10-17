import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';

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
	html_data: any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
			public http: Http, private sanitizer: DomSanitizer) {
	    this.menu = menu;
		this.pageId = GlobalVars.getPageId();
	  	this.setting = GlobalVars.getPageSetting(mode[this.pageId]);

	}
	getHtmlData(){
	    this.html_data = null;
	    this.http.get("assets/json/compare_child_container.json").map(response => response.json()).subscribe(data => {
	        this.html_data = data;
	    });
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
		this.getHtmlData();
	}

}
