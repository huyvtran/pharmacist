import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the CoughMeds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { ComparePage } from '../compare/compare';

let mode = {
    0: 'a',
    1: 'n',
    2: 'o'
};
@Component({
  selector: 'page-compare-yesno',
  templateUrl: 'compare-yesno.html'
})
export class CompareYesnoPage {
	setting: any;
	pageId: number;
	currentPage: number;
	pageTitle = {
		0: "Cough Medications",
		1: "Yeast medications",
		2: "Athletes' foot",
	}
	html_data: any;
	AbsoluteURL: string;
	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
			public http: Http, private sanitizer: DomSanitizer) {
	    this.pageId = GlobalVars.getPageId();
	  	this.menu = menu;
	  	this.setting = GlobalVars.getPageSetting(mode[this.pageId]);
	    this.AbsoluteURL = GlobalVars.getAbsoluteURL();
	    this.currentPage = -1;
	    this.getHtmlData();
	}
	getHtmlData(){
	    this.html_data = [];
	    this.http.get("assets/json/compare_yesno.json").map(response => response.json()).subscribe(data => {
	        this.html_data = data;
	    });
	  }
	showMenu() {
	    var menu = document.querySelector( 'ion-menu ion-content' );
	    var setting = GlobalVars.getPageSetting('n');
	    menu.className = "outer-content content" + " " + setting['class'];
	  	this.menu.open();
	}
	showCompare() {
	  	this.navCtrl.push(ComparePage);
	}
	transitPage(pageNumber: number) {
	    this.currentPage = pageNumber;
	}
	ionViewDidLoad() {
		
	}

}
