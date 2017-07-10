import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';
import { AuthService} from '../providers/auth-service';

import { CommentLoginPage } from '../comment-login/comment-login';
import { DosingPage } from '../dosing/dosing';
import { DiphenhydraminePage } from '../diphenhydramine/diphenhydramine';
import { DosingChildContainerPage } from '../dosing-child-container/dosing-child-container';
import { SaveDoseInsertPage } from '../save-dose-insert/save-dose-insert';
import { SaveDoseLoginPage } from '../save-dose-login/save-dose-login';

let mode = {
  0: 'i',
  1: 'i',
  2: 'i',
  3: 'a',
  4: 'a',
  5: 'a',
  6: 'a',
  7: 'g',
  8: 'g',
  9: 'g',
  10: 'd',
  11: 'd',
  12: 'a',
  13: 'a',
  14: 'a',
  15: 'a',
  16: 'a',
  17: 'i',
  18: 'i',
  19: 'i',
  20: 'i',
  21: 'a',
  22: 'a',
  23: 'a',
  24: 'a',
  25: 'a',
  26: 'a',
  27: 'a',
  28: 'd',
  29: 'd',
  30: 'd',
  31: 'd',
  32: 'd',
  33: 'a',
  34: 'a',
  35: 'a',
  36: 'a',
  37: 'a',
  38: 'a',
  39: 'a',
  40: 'a',
  41: 'a',
  42: 'i',
  43: 'i',
  44: 'i',
  45: 'i',
  46: 'i',
  47: 'i',
  48: 'i',
  49: 'i',
  50: 'i',
  51: 'i',
  52: 'o',
  53: 'o',
  54: 'o',
  55: 'o',
  56: 'a',
  57: 'a',
  58: 'a',
  59: 'a',
  60: 'i',
  61: 'i',
  62: 'i',
  63: 'i',
  64: 'g',
  65: 'p',
  66: 'a'
}
let pageStart = {
  0: 0,
  1: 3,
  2: 7,
  3: 10,
  4: 12,
  5: 14,
  6: 17,
  7: 17,
  8: 21,
  9: 28,
  10: 33,
  11: 38,
  12: 38,
  13: 42,
  14: 44,
  15: 52,
  16: 56,
  17: 56,
  18: 60,
  19: 60,
  20: 60,
  21: 60
}
@Component({
  selector: 'page-dosing-childs',
  templateUrl: 'dosing-childs.html'
})
export class DosingChildsPage {

  @ViewChild(Content) content: Content;
  AbsoluteURL: string;
  showTerm: boolean;
  showButton: boolean;
  options = [
    false, false, false, false, false, false, false, false, false, false
  ];
  pageId: number;
  setting: any;
  currentPage: number;
  currentWeight: number;
  subPage: number;
  defaultWeight: number;
  showConvertDlg: boolean;
  showFeedbackDlg: boolean;
  convertDlgInfo = {
  	screenWidth: 0,
  	screenHeight: 0,
  	top: 0,
  	left: 0,
  	height: 325,
  	width: 273,
  	noscroll: false
  };
  feedbackDlgInfo = {
  	screenWidth: 0,
  	screenHeight: 0,
  	top: 0,
  	left: 0,
  	height: 493,
  	width: 309,
  	noscroll: false
  };
  html_data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private authService: AuthService,
      public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController, 
      public http: Http, private sanitizer: DomSanitizer,
      public platform: Platform) {
  	this.pageId = GlobalVars.getPageId();
    this.setting = GlobalVars.getPageSetting(mode[this.pageId]);
    this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  	this.showTerm = false;
    this.showButton = false;
    this.currentPage = 0;
    this.defaultWeight = -1; // lbs
    this.currentWeight = this.defaultWeight;
    this.showConvertDlg = false;
    this.showFeedbackDlg = false;
    this.subPage = -1;
  }
  getHtmlData(){
    this.html_data = null;
    this.http.get("assets/json/dosing_childs.json").map(response => response.json()).subscribe(data => {
        this.html_data = data;
        if (this.pageId!=38 && this.pageId!=43 && this.pageId!=49 && 
              this.pageId!=50 && this.pageId!=51 && this.pageId!=58 && this.pageId!=59)
          this.defaultWeight = data['slider'][this.pageId]['min']; // lbs
    });
  }
  showMenu() {
    var menu = document.querySelector( 'ion-menu ion-content' );
    var setting = GlobalVars.getPageSetting(mode[this.pageId]);
    menu.className = "outer-content content" + " " + setting['class'];
  	this.menu.open();
  }
  saveDoseWeight() {
    GlobalVars.setDosingWeight(this.currentWeight);
    if (this.authService.getUserInfo() != null)
      this.navCtrl.push(SaveDoseInsertPage);
    else
      this.navCtrl.push(SaveDoseLoginPage);
  }
  gotoDosePage() {
    let pos = -1,len = 19;
    if (this.pageId<=62)
    {
      for (let i=1;i<len;i++)
        if (this.pageId<pageStart[i] && this.pageId>=pageStart[i-1])
        {
          pos = i; break;
        }
      if (pos == -1)
        pos = 22;
      if (pos == 1)
        this.navCtrl.push(DiphenhydraminePage);
      else
      {
        GlobalVars.setPageId(pos-1);
        this.navCtrl.push(DosingChildContainerPage);
      }
    }else{
      this.navCtrl.push(DosingPage);
    }
    
  }
  setCurrentPage(page: number) {
    if (page == 1)
      this.currentWeight = this.defaultWeight;
    if (page == 2)
      this.setSubPage();
    this.currentPage = page;
  }
  setSubPage(){
    if (this.pageId==0 || (this.pageId>=43 && this.pageId<=45) || (this.pageId>=52 && this.pageId<=53))
    {
      if (this.currentWeight<=5)
        this.subPage = 0;
      else if (this.currentWeight<=7)
        this.subPage = 1;
      else if (this.currentWeight<=9)
        this.subPage = 2;
      else if (this.currentWeight<=11)
        this.subPage = 3;
      else if (this.currentWeight<=13)
        this.subPage = 4;
      else if (this.currentWeight<=16)
        this.subPage = 5;
      else if (this.currentWeight<=19)
        this.subPage = 6;
      else if (this.currentWeight<=22)
        this.subPage = 7;
      else if (this.currentWeight<=25)
        this.subPage = 8;
      else if (this.currentWeight<=28)
        this.subPage = 9;
      else if (this.currentWeight<=32)
        this.subPage = 10;
      else if (this.currentWeight<=36)
        this.subPage = 11;
      else if (this.currentWeight<=41)
        this.subPage = 12;
      else if (this.currentWeight<=46)
        this.subPage = 13;
      else if (this.currentWeight<=52)
        this.subPage = 14;
      else if (this.currentWeight<=58)
        this.subPage = 15;
      else if (this.currentWeight<=64)
        this.subPage = 16;
      else if (this.currentWeight<=70)
        this.subPage = 17;
      else if (this.currentWeight<=77)
        this.subPage = 18;
      else if (this.currentWeight<=84)
        this.subPage = 19;
      else if (this.currentWeight<=90)
        this.subPage = 20;
      else
        this.subPage = 21;
    }
    // else if ((this.pageId>=1 && this.pageId<=42) || (this.pageId>=46 && this.pageId<=51))
    else
    {
      if (this.currentWeight<=14)
        this.subPage = 0;
      else if (this.currentWeight<=24)
        this.subPage = 1;
      else if (this.currentWeight<=34)
        this.subPage = 2;
      else if (this.currentWeight<=44)
        this.subPage = 3;
      else if (this.currentWeight<=59)
        this.subPage = 4;
      else if (this.currentWeight<=74)
        this.subPage = 5;
      else if (this.currentWeight<=89)
        this.subPage = 6;
      else
        this.subPage = 7;
    }
    // else{

    // }
  }
  toggleOptions(id: number) {
    this.options[id] = !this.options[id];
  }
  toggleButton() {
    this.showButton = !this.showButton;
  }
  toggleTerm() {
  	this.showTerm = !this.showTerm;
  }
  gotoLogin() {
    this.navCtrl.push(CommentLoginPage);
  }
  doneConvert(){
  	this.convertDlgInfo.noscroll = false;
  	this.showConvertDlg = false;
  	this.currentPage = 2;
  	this.currentWeight = 2;
  }
  toggleConvertDlg(b: boolean) {
  	if (b == true)
  	{
  		var scrollPos = this.content.getContentDimensions().scrollTop;
  		this.convertDlgInfo.screenWidth = this.platform.width();
    	this.convertDlgInfo.screenHeight = this.platform.height();
    	this.convertDlgInfo.top = (this.convertDlgInfo.screenHeight - this.convertDlgInfo.height) / 2  + scrollPos - 60;
    	this.convertDlgInfo.left = (this.convertDlgInfo.screenWidth - this.convertDlgInfo.width) / 2;
    	this.convertDlgInfo.screenHeight *= 5;
    	this.convertDlgInfo.noscroll = true;
  	}
  	else
  		this.convertDlgInfo.noscroll = false;	
  	this.showConvertDlg = b;
  }
  toggleFeedbackDlg(b: boolean) {
  	if (b == true)
  	{
  		var scrollPos = this.content.getContentDimensions().scrollTop;
  		this.feedbackDlgInfo.screenWidth = this.platform.width();
    	this.feedbackDlgInfo.screenHeight = this.platform.height();
    	this.feedbackDlgInfo.top = (this.feedbackDlgInfo.screenHeight - this.feedbackDlgInfo.height) / 2 + scrollPos - 60;
    	this.feedbackDlgInfo.left = (this.feedbackDlgInfo.screenWidth - this.feedbackDlgInfo.width) / 2;
    	this.feedbackDlgInfo.screenHeight *= 5;
    	this.feedbackDlgInfo.noscroll = this.convertDlgInfo.noscroll = true;
  	}
  	else
  		this.feedbackDlgInfo.noscroll = this.convertDlgInfo.noscroll = false;	
  	this.showFeedbackDlg = b;
  }
  ionViewDidLoad() {
    this.getHtmlData();
  }

}
