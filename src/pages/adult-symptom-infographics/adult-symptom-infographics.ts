import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';

@Component({
  selector: 'page-adult-symptom-infographics',
  templateUrl: 'adult-symptom-infographics.html'
})
export class AdultSymptomInfographicsPage {
	pagemode = {
		0: 'g',
		1: 'a',
		2: 'i',
		3: 'n',
		4: 'n',
		5: 'p',
		6: 'a',
		7: 'i',
		8: 'i',
		9: 'i',
		10: 'o',
		11: 'n',
		12: 'o',
		13: 'i',
		14: 'p',
		15: 'e',
		16: 'd',
		17: 'a',
		18: 'n',
		19: 'i',
		20: 'a',
		21: 'p',
		22: 'n',
		23: 'n',
		24: 'i',
		25: 'p',
		26: 'a',
		27: 'i',
		28: 'f',
		29: 'n',
		30: 'o',
		31: 'n',
		32: 'p',
		33: 'i',
		34: 'n',
		35: 'a',
		36: 'n',
		37: 'p',
		38: 'n',
		39: 'o',
		40: 'i',
		41: 'e',
		42: 'f',
		43: 'n',
		44: 'i',
		45: 'n',
		46: 'a',
		47: 'i',
		48: 'n',
		49: 'n',
		50: 'i',
		51: 'n',
		52: 'n',
		53: 'i',
		54: 'o',
		55: 'h',
		56: 'o',
		57: 'i',
		58: 'a',
		59: 'n',
		60: 'o',
		61: 'a',
		62: 'i',
		63: 'e',
		64: 'a',
		65: 'n',
		66: 'o',
		67: 'i'
	}
	pageId: number;
	setting: any;
	html_data: any;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public platform: Platform,
				public http: Http, private sanitizer: DomSanitizer) {
  		this.menu = menu;

		this.pageId = GlobalVars.getPageId();
    	this.setting = GlobalVars.getPageSetting(this.pagemode[this.pageId]);
    	this.html_data =  null;
    	this.getHtmlData();
    	console.log(this.pageId);
  	}
  	showMenu() {
		var menu = document.querySelector( 'ion-menu ion-content' );
	    menu.className = "outer-content content" + " " + this.setting['class'];
	  	this.menu.open();
	}
	getHtmlData(){
		let num = Math.floor(this.pageId / 4);
	    this.html_data =  null;
	    this.http.get("assets/json/adult_symptom_infographics_" + num + ".json").map(response => response.json()).subscribe(data => {
	        this.html_data = data;
	    });
	}
  	ionViewDidLoad() {
    	
  	}

}
