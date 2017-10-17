import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';
import { AdultTakeMobileChildlistPage } from '../adult-take-mobile-childlist/adult-take-mobile-childlist';

let mode = {
  0: 'a',
  1: 'i'
}
@Component({
  selector: 'page-adult-take-mobile-list',
  templateUrl: 'adult-take-mobile-list.html'
})
export class AdultTakeMobileListPage {
  html_data: any;
  pageId: number;
  setting: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
        public http: Http, private sanitizer: DomSanitizer) {
  	this.menu = menu;
    this.pageId = GlobalVars.getPageId();
    this.setting = GlobalVars.getPageSetting(mode[this.pageId]);
  }
  getHtmlData(){
    this.html_data =  null;
    this.http.get("assets/json/adult_take_mobile_list.json").map(response => response.json()).subscribe(data => {
        this.html_data = data;
    });
  }
  showMenu() {
    var menu = document.querySelector( 'ion-menu ion-content' );
    var setting = GlobalVars.getPageSetting(mode[this.pageId]);
    menu.className = "outer-content content" + " " + setting['class'];
  	this.menu.open();
  }
  movePage(p: number){
    if (this.pageId == 0)
    {
      GlobalVars.setPageId(p);
      this.navCtrl.push(AdultTakeMobileChildlistPage);
    }
  }
  ionViewDidLoad() {
    this.getHtmlData();
  }

}
