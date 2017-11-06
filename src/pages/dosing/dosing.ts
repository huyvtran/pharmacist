import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

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
  @ViewChild(Content) content: Content;
  currentPage: number;
	AbsoluteURL: string;
  pages: any;
  isLoggedIn: boolean;
  html_data: any;
  barcodeDlg = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, 
      public http: Http, private sanitizer: DomSanitizer,
      public menu: MenuController, private authService: AuthService,
      private barcodeScanner: BarcodeScanner, public platform: Platform) {
    let user = this.authService.getUserInfo();
    if (user == null)
      this.isLoggedIn = false;
    else
      this.isLoggedIn = true;
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
    this.currentPage = 0;
    this.pages = [true, true, true, true, true, true, true];

    this.barcodeDlg['show'] = 0;
    this.barcodeDlg['maxWidth'] = 600;
    this.barcodeDlg['left'] = 0;
    this.barcodeDlg['top'] = 0;
    this.barcodeDlg['width'] = 200;
    this.barcodeDlg['height'] = 100;
    this.barcodeDlg['name'] = "";
    this.barcodeDlg['description'] = "";
    this.barcodeDlg['image'] = "";
    this.barcodeDlg['url'] = "";
    this.barcodeDlg['msg'] = "";
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
  scanner(){   
    this.barcodeScanner.scan().then(brcode=>{
      // var scannedCode = "041100811028";
      var scannedCode=brcode.text;
      if (scannedCode.length == 12)
        scannedCode = "0" + scannedCode;
      let barApiUrl = GlobalVars.getApiURL() + "code=" + scannedCode + "&ppp=barcode";
      this.http.get(barApiUrl).map(response => response.json()).subscribe(data => {
          setTimeout(() => {
            if (data.res == 'success')
            {
              this.barcodeDlg['name'] = data['drug_name'];
              this.barcodeDlg['description'] = data['drug_description'];
              this.barcodeDlg['image'] = data['drug_image_file'];
              this.barcodeDlg['url'] = data['drug_ingredient_url'];
              
              this.toggleDlg(1);
            }
            else
            {
              this.barcodeDlg['msg'] = 'Failed to get the required data. The current barcode is ' + scannedCode;
              this.toggleDlg(2);
            }
          });
        }),
        err => {
          setTimeout(() => {
              this.barcodeDlg['msg'] = "Access denied.";
              this.toggleDlg(2);
          });
        }
    }, (err)=>{
      this.barcodeDlg['msg'] = "Barcode is not working.";
      this.toggleDlg(2);
    });
  }
  toggleDlg(b: number)
  {
    if (b != 0)
    {
      var scrollPos = this.content.getContentDimensions().scrollTop;
      if (b == 1)
        this.barcodeDlg['height'] = 350;
      else
        this.barcodeDlg['height'] = 100;
      this.barcodeDlg['width'] = this.platform.width() * 0.9;
      if (this.barcodeDlg['width'] > this.barcodeDlg['maxWidth'])
        this.barcodeDlg['width'] = this.barcodeDlg['maxWidth'];
      this.barcodeDlg['left'] = (this.platform.width() - this.barcodeDlg['width']) / 2;
      this.barcodeDlg['top'] = (this.platform.height() - this.barcodeDlg['height']) / 2 + scrollPos - 60;
    }
    this.barcodeDlg['show'] = b;
  }
  clickBarcode(n: number)
  {
    if (n==0) // No
      this.toggleDlg(0);
    else
    {
      GlobalVars.setPageId(44);
      this.navCtrl.push(DosingChildsPage);
    }
  }
}
