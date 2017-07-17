import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';
import { Loading } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';
import { AuthService} from '../providers/auth-service';

import { SaveDoseInsertSuccessPage } from '../save-dose-insert-success/save-dose-insert-success';


@Component({
  selector: 'page-save-dose-insert',
  templateUrl: 'save-dose-insert.html'
})
export class SaveDoseInsertPage {
	loading: Loading;
	AbsoluteURL: string;
  dose = {'child': '', 'comment': '', 'dose_direction': '', 'dose_medication': '', 'saved_on': ''};
  html_data: any;
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private authService: AuthService,
  	public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController,
    private sanitizer: DomSanitizer) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  	this.loading = null;
	  this.dose['saved_on'] = "";
  }
  getHtmlData(){
    this.html_data = null;
    this.http.get("assets/json/save_dose_insert.json").map(response => response.json()).subscribe(data => {
        this.html_data = data;
        this.dose['dose_direction'] = data['dose_direction'];
        this.dose['dose_medication'] = data['dose_medication'];
    });
  }
  showMenu() {
  	this.menu.open();
  }
  removeSpecialChars(data){
    let obj = {};
    for (var prop in data) {
        if(!data.hasOwnProperty(prop)) continue;
        obj[prop] = encodeURIComponent(data[prop]);
    }
    return obj;
  }
  saveDosingPage(){
  	let user = this.authService.getUserInfo();
  	let ddose = this.removeSpecialChars(this.dose);
  	let url = GlobalVars.getApiURL() + "email=" + user.email + "&child=" + ddose['child'] + 
  		"&comment=" + ddose['comment'] + "&saved_on=" + ddose['saved_on'] + 
  		"&dose_direction=" + ddose['dose_direction'] + 
  		"&dose_medication=" + ddose['dose_medication'] + "&ppp=save_dosing";
	this.showLoading();
	this.http.get(url).map(response => response.json()).subscribe(data => {
	  setTimeout(() => {
	    this.loading.dismiss().catch(() => {});
	    if (data.res == 'success')
	    {
	      this.navCtrl.push(SaveDoseInsertSuccessPage);
	    }
	    else
	    {
	      this.showToast(data.msg);
	    }
	  });
	}),
	err => {
	  setTimeout(() => {
	      this.loading.dismiss().catch(() => {});
	      this.showToast("Access denied");
	  });
	}
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
  showToast(message: string) {
    if (this.loading != null) {
      this.loading.dismiss().catch(() => {});
    }
    
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  ionViewDidLoad() {
    this.getHtmlData();
  }

}
