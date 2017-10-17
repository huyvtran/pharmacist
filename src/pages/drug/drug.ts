import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';

@Component({
  selector: 'page-drug',
  templateUrl: 'drug.html'
})
export class DrugPage {
  @ViewChild(Content) content: Content;
  dsearch: string;
  page: number;
  topPx: number;
  noscroll: boolean;
  CouponData: any;
  noFound: boolean;
  html_data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
              public http: Http, private sanitizer: DomSanitizer) {
  	this.menu = menu;
    this.dsearch = "";
    this.page = 0;
    this.topPx = 0;
    this.noscroll = false;
    this.CouponData = [];
    this.noFound = true;
  }
  getHtmlData(){
    this.html_data = null;
    this.http.get("assets/json/drug.json").map(response => response.json()).subscribe(data => {
        this.html_data = data;
    });
  }
  showMenu() {
    var menu = document.querySelector( 'ion-menu ion-content' );
    var setting = GlobalVars.getPageSetting('a');
    menu.className = "outer-content content" + " " + setting['class'];
  	this.menu.open();
  }
  clearSearch() {
    this.dsearch = "";
    this.CouponData = [];
    this.noFound = true;
  }
  transitPage(p: number){
    this.page = p;
    if (p > 0){
      this.noscroll = true;
      this.topPx = this.content.getContentDimensions().scrollTop;
    }
    else
      this.noscroll = false;
  }
  hideNoFound() {
    this.noFound = true;
  }
  onInputSearch(val: string){
    if (val != "")
      this.loadData(val);
    else{
      this.CouponData = [];
      this.noFound = true;
    }
  }
  loadData(val) {
    //this.RestApiURL
    let RestApiURL = GlobalVars.getApiURL() + "page=coupon&filter="+val;
    this.http.get(RestApiURL).map(res => res.json())
      .subscribe(data => {
        this.CouponData = data;
        if (this.CouponData.length == 0)
        {
          this.noFound = false;
        }
      }),
      err => {
        this.noFound = false;
        // console.log("Oops!");
      }
  }
  ionViewDidLoad() {
    this.getHtmlData();
  }

}
