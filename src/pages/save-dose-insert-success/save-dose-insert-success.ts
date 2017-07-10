import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalVars } from '../providers/globalvars';
import { AuthService} from '../providers/auth-service';

import { DosingPage } from '../dosing/dosing';
import { SaveDoseListPage } from '../save-dose-list/save-dose-list';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-save-dose-insert-success',
  templateUrl: 'save-dose-insert-success.html'
})
export class SaveDoseInsertSuccessPage {

  AbsoluteURL: string;
  loginCredentials = {'email': '', 'password': ''};
  html_data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private authService: AuthService,
      public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController,public http: Http, private sanitizer: DomSanitizer) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  }
  getHtmlData(){
    this.html_data = null;
    this.http.get("assets/json/save_dose_insert_success.json").map(response => response.json()).subscribe(data => {
        this.html_data = data;
    });
  }
  showMenu() {
  	this.menu.open();
  }
  gotoDose(){
  	this.navCtrl.push(DosingPage);
  }
  gotoSavedDose(){
  	this.navCtrl.push(SaveDoseListPage);
  }
  gotoHome(){
  	this.navCtrl.push(HomePage);
  }
  ionViewDidLoad() {
    this.getHtmlData();
  }

}
