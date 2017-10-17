import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';
import { AuthService} from '../providers/auth-service';

import { SaveDoseLoginPage } from '../save-dose-login/save-dose-login';

@Component({
  selector: 'page-save-dose-register',
  templateUrl: 'save-dose-register.html'
})
export class SaveDoseRegisterPage {

  AbsoluteURL: string;
  html_data: any;
  registerCredentials = {'name': '', 'email': '', 'password': '', 'confirm': '', 'city': '', 'gender': '', 'newsletter': ''};
  constructor(public navCtrl: NavController, public menu: MenuController, private authService: AuthService,
      public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController,
      public http: Http, private sanitizer: DomSanitizer) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  }
  getHtmlData(){
    this.html_data = null;
    this.http.get("assets/json/save_dose_register.json").map(response => response.json()).subscribe(data => {
        this.html_data = data;
    });
  }
  showMenu() {
  	this.menu.open();
  }
  registerPage(){
  	this.authService.setMainPage(this);
  	this.authService.setLoginPage(SaveDoseLoginPage);
  	this.authService.register(this.registerCredentials);
  }
  ionViewDidLoad() {
    this.getHtmlData();
  }

}
