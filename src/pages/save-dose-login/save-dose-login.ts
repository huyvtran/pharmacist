import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';
import { AuthService} from '../providers/auth-service';

import { SaveDoseInsertPage } from '../save-dose-insert/save-dose-insert';
import { SaveDoseRegisterPage } from '../save-dose-register/save-dose-register';
import { SaveDoseListPage } from '../save-dose-list/save-dose-list';

@Component({
  selector: 'page-save-dose-login',
  templateUrl: 'save-dose-login.html'
})
export class SaveDoseLoginPage {

  AbsoluteURL: string;
  loginCredentials = {'email': '', 'password': ''};
  html_data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private authService: AuthService,
      public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController,
      public http: Http, private sanitizer: DomSanitizer) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  }
  getHtmlData(){
    this.html_data = null;
    this.http.get("assets/json/save_dose_login.json").map(response => response.json()).subscribe(data => {
        this.html_data = data;
    });
  }
  showMenu() {
  	this.menu.open();
  }
  loginPage(){
	this.authService.setMainPage(this);
	if (GlobalVars.getDosingWeight() != 0)
		this.authService.setTransitionPage(SaveDoseInsertPage);
	else
		this.authService.setTransitionPage(SaveDoseListPage);
	this.authService.login(this.loginCredentials);
  }
  gotoRegisterPage(){
  	this.navCtrl.push(SaveDoseRegisterPage);
  }
  ionViewDidLoad() {
      this.getHtmlData();
  }

}
