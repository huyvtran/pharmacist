import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SelfCarePage } from '../self-care/self-care';
import { ComparePage } from '../compare/compare';
import { DosingPage } from '../dosing/dosing';
import { DrugPage } from '../drug/drug';
import { AboutPage } from '../about/about';

import { FindNearestPage } from '../find-nearest/find-nearest';

import { GlobalVars } from '../providers/globalvars';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	slides: any;
	items = {
		self_care 		: SelfCarePage,
		compare			: ComparePage,
		dosing			: DosingPage,
		drug 			: DrugPage,
		about 			: AboutPage,
	}
	constructor(public navCtrl: NavController, public http: Http, private sanitizer: DomSanitizer) {
	}
	getHtmlData(){
	    this.slides = null;
	    this.http.get("assets/json/nearest.json").map(response => response.json()).subscribe(data => {
	        this.slides = data;
	    });
	}
	transit(slide: any){
		GlobalVars.setPageId(slide.id);
		this.navCtrl.push(FindNearestPage);
	}
	goTo(index: string) {
		if (index.length > 0)
		{
			let page = (<any>this.items)[index];
			this.navCtrl.push(page);
		}
	}
	ionViewDidLoad() {
	    this.getHtmlData();
	}
}
