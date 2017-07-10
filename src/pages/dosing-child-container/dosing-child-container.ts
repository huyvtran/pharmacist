import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';
import { DosingChildsPage } from '../dosing-childs/dosing-childs';

let mode = {
    0: 'i',
    1: 'a',
    2: 'g',
    3: 'd',
    4: 'a',
    5: 'a',
    6: 'p',
    7: 'i',
    8: 'a',
    9: 'd',
    10: 'a',
    11: 'a',
    12: 'a',
    13: 'i',
    14: 'i',
    15: 'o',
    17: 'a',
    21: 'i'

}
let pageStart = {
	0: 0,
	1: 3,
	2: 7,
	3: 10,
	4: 12,
	5: 14,
	6: 17,
	7: 17,
	8: 21,
	9: 28,
	10: 33,
	11: 38,
	12: 38,
	13: 42,
	14: 44,
	15: 52,
	16: 56,
	17: 56,
	21: 60
}
@Component({
  selector: 'page-dosing-child-container',
  templateUrl: 'dosing-child-container.html'
})
export class DosingChildContainerPage {

	AbsoluteURL: string;
	pages: any;
	subPages: any;
	setting: any;
	pageId: number;
	html_data: any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
			public http: Http, private sanitizer: DomSanitizer) {
		this.menu = menu;
		this.pageId = GlobalVars.getPageId();
	  	this.setting = GlobalVars.getPageSetting(mode[this.pageId]);
		this.pages = [true, true, true, true];
	}
	getHtmlData(){
	    this.html_data = null
	    this.http.get("assets/json/dosing_child_container.json").map(response => response.json()).subscribe(data => {
	        this.html_data = data;
	    });
	}
	showMenu() {
		var menu = document.querySelector( 'ion-menu ion-content' );
		var setting = GlobalVars.getPageSetting(mode[this.pageId]);
	menu.className = "outer-content content" + " " + setting['class'];
		this.menu.open();
	}
	togglePage(ind: number) {
		this.pages[ind] = !this.pages[ind];
	}
	gotoSubPage(id: number) {
		GlobalVars.setPageId(pageStart[this.pageId] + id);
		this.navCtrl.push(DosingChildsPage);
	}
	ionViewDidLoad() {
		this.getHtmlData();
	}

}
