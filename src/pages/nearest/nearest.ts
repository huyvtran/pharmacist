import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';
import { FindNearestPage } from '../find-nearest/find-nearest';

@Component({
  selector: 'page-nearest',
  templateUrl: 'nearest.html'
})

export class NearestPage {
	AbsoluteURL: string;
	slides: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
        public http: Http, private sanitizer: DomSanitizer,
        public menu: MenuController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  }
  getHtmlData(){
    this.slides = null;
    this.http.get("assets/json/nearest.json").map(response => response.json()).subscribe(data => {
        this.slides = data;
    });
  }
  showMenu() {
    var menu = document.querySelector( 'ion-menu ion-content' );
    var setting = GlobalVars.getPageSetting('a');
    menu.className = "outer-content content" + " " + setting['class'];
  	this.menu.open();
  }
  transit(slide: any){
    GlobalVars.setPageId(slide.id);
    this.navCtrl.push(FindNearestPage);
  }
  ionViewDidLoad() {
    this.getHtmlData();
    // console.log('ionViewDidLoad NearestPage');
  }

}
