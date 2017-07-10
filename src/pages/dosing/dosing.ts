import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';
import { AuthService} from '../providers/auth-service';
import { SaveDoseLoginPage } from '../save-dose-login/save-dose-login';
import { SaveDoseListPage } from '../save-dose-list/save-dose-list';

import { DiphenhydraminePage } from '../diphenhydramine/diphenhydramine';
import { DosingChildContainerPage } from '../dosing-child-container/dosing-child-container';
import { DosingChildsPage } from '../dosing-childs/dosing-childs';
// LoratadinePage,       // 1
// CetirizinePage,       // 2
// FexofenadinePage,     // 3
// TumsPage,             // 4
// MaaloxPage,           // 5
// MyliconPage,          // 6
// SudafedPage,          // 7
// PediacarePage,        // 8
// DimetappPage,         // 9
// TriaminicPage,        // 10
// PeptoPage,            // 11
// MucinexPage,          // 12
// LittleRemediesPage,   // 13
// AcetaminophenPage,    // 14
// IbuprofenPage,        // 15
// MiralaxPage,          // 16
// PedialaxPage,         // 17
// FletchersPage,        // 18
// ImodiumPage,          // 19
// MilkMagnesiaPage,     // 20
// RobitussinPage        // 21

@Component({
  selector: 'page-dosing',
  templateUrl: 'dosing.html'
})
export class DosingPage {
  currentPage: number;
	AbsoluteURL: string;
  pages: any;
  isLoggedIn: boolean;
  html_data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
      public http: Http, private sanitizer: DomSanitizer,
      public menu: MenuController, private authService: AuthService) {
    let user = this.authService.getUserInfo();
    if (user == null)
      this.isLoggedIn = false;
    else
      this.isLoggedIn = true;
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
    this.currentPage = 0;
    this.pages = [true, true, true, true, true, true, true];
  }
  getHtmlData(){
    this.html_data = null
    this.http.get("assets/json/dosing.json").map(response => response.json()).subscribe(data => {
        this.html_data = data;
    });
  }
  showMenu() {
    var menu = document.querySelector( 'ion-menu ion-content' );
    var setting = GlobalVars.getPageSetting('i');
    menu.className = "outer-content content" + " " + setting['class'];
  	this.menu.open();
  }
  transitPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  togglePage(ind: number) {
    this.pages[ind] = !this.pages[ind];
  }
  gotoSubPage(id: number) {
    if (id == 0)
      this.navCtrl.push(DiphenhydraminePage);
    else if (id==16 || id==18 || id==19 || id==20){
      let ids = {
        16: 63,
        18: 64,
        19: 65,
        20: 66
      }
      GlobalVars.setPageId(ids[id]);
      this.navCtrl.push(DosingChildsPage);
    }
    else
    {
      
      GlobalVars.setPageId(id);
      this.navCtrl.push(DosingChildContainerPage);
    }
  }
  gotoLogin() {
    this.navCtrl.push(SaveDoseLoginPage);
  }
  gotoSavedDose() {
    this.navCtrl.push(SaveDoseListPage);
  }
  ionViewDidLoad() {
    this.getHtmlData();
  }

}
