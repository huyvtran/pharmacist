import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import { ChildrenDiphenhydramineMobilePage } from '../children-diphenhydramine-mobile/children-diphenhydramine-mobile';
import { DosingChildContainerPage } from '../dosing-child-container/dosing-child-container';
import { GlobalVars } from '../providers/globalvars';

@Component({
  selector: 'page-diphenhydramine',
  templateUrl: 'diphenhydramine.html'
})
export class DiphenhydraminePage {

  AbsoluteURL: string;
  pages: any;
  html_data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
      public http: Http, private sanitizer: DomSanitizer) {
  	this.menu = menu;
    this.pages = [true, true];
  }
  getHtmlData(){
    this.html_data = null;
    this.http.get("assets/json/diphenhydramine.json").map(response => response.json()).subscribe(data => {
        this.html_data = data;
    });
  }
  showMenu() {
    var menu = document.querySelector( 'ion-menu ion-content' );
    var setting = GlobalVars.getPageSetting('i');
    menu.className = "outer-content content" + " " + setting['class'];
    this.menu.open();
  }
  togglePage(ind: number) {
    this.pages[ind] = !this.pages[ind];
  }
  goContinue() {
    GlobalVars.setPageId(0);
    this.navCtrl.push(DosingChildContainerPage);
  }
  ionViewDidLoad() {
    this.getHtmlData();
  }

}