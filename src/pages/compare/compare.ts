import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';
import { CompareChildsPage } from '../compare-childs/compare-childs';
import { CompareChildsContainerPage } from '../compare-childs-container/compare-childs-container';
import { CompareYesnoPage } from '../compare-yesno/compare-yesno';

@Component({
  selector: 'page-compare',
  templateUrl: 'compare.html'
})
export class ComparePage {
  modes = {
    1: 'h',
    2: 0,
    3: 'n',
    4: 1,
    5: 'a',
    6: 'o',
    7: 2,
    8: 3,
    9: 4,
    10: 'g',
    11: 5,
    12: 'i',
    13: 'n',
  };
  items = {
    0: 'a',
    1: 0,
    2: 'a',
    3: 'n',
    4: 'n',
    5: 'o',
  };
  html_data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
      public http: Http, private sanitizer: DomSanitizer) {
  	this.menu = menu;
  }
  getHtmlData(){
    this.html_data = null;
    this.http.get("assets/json/compare.json").map(response => response.json()).subscribe(data => {
        this.html_data = data;
    });
  }
  showMenu() {
    var menu = document.querySelector( 'ion-menu ion-content' );
    var setting = GlobalVars.getPageSetting('n');
    menu.className = "outer-content content" + " " + setting['class'];
  	this.menu.open();
  }
  goToLeft(index: number) {
    this.goTo(index*2+1);
  }
  goToRight(index: number) {
    this.goTo(index*2+2);
  }
  goTo(index: number) {
    if (index > 0)
    {
      let mode = (<any>this.modes)[index];
      if (mode >='a' && mode<='z'){
        GlobalVars.setPageId(index);
        this.navCtrl.push(CompareChildsPage);
      }
      else
      {
        let item = this.items[ mode ];
        if (item >= 'a' && item<='z'){
          GlobalVars.setPageId(parseInt(mode,10));
          this.navCtrl.push(CompareChildsContainerPage);
        }
        else
        {
          GlobalVars.setPageId(0);
          this.navCtrl.push(CompareYesnoPage);
        }
      }
    }
  }
  ionViewDidLoad() {
    this.getHtmlData();
  }

}
