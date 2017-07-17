import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';
import { AdultSymptomChildsPage } from '../adult-symptom-childs/adult-symptom-childs';
// 	AllergiesMobilePage,		// 0
//  ColdMobilePage,				// 1
//  FluMobilePage,				// 2
//  HeadacheMobilePage,			// 3
//  SleepMobilePage,			// 4
//  HairlossMobilePage,			// 5
//  DandruffMobilePage,			// 6
//  LiceMobilePage,				// 7
//  PinkeyeMobilePage,			// 8
//  RedeyeMobilePage,			// 9
//  StyeyeMobilePage,			// 10
//  DryeyeMobilePage,			// 11
//  EaracheMobilePage,			// 12
//  SwimearMobilePage,			// 13
//  EarwaxMobilePage,			// 14
//  MotionSicknessMobilePage,	// 15
//  VertigoMobilePage,			// 16
//  ToothacheMobilePage,		// 17
//  ColdSoreMobilePage,			// 18
//  CankerSoreMobilePage,		// 19
//  DrymouthMobilePage,			// 20
//  BadBreathMobilePage,		// 21
//  CongestionMobilePage,		// 22
//  RunnyNoseMobilePage,		// 23
//  SinusPressureMobilePage,	// 24
//  SnoringMobilePage,			// 25
//  CoughMobilePage,			// 26
//  SoreThroatMobilePage,		// 27
//  StiffNeckMobilePage,		// 28
//  ChestCongestionMobilePage,	// 29
//  BackPainMobilePage,			// 30
//  HeartburnMobilePage,		// 31
//  ChestpainMobilePage,		// 32
//  ShoulderMobilePage,			// 33
//  WristPainMobilePage,		// 34
//  ElbowMobilePage,			// 35
//  ConstipationMobilePage,		// 36
//  DiarrheaMobilePage,			// 37
//  NauseaMobilePage,			// 38
//  StomachAcheMobilePage,		// 39
//  StomachFluMobilePage,		// 40
//  FoodPoisoningMobilePage,	// 41
//  YeastMobilePage,			// 42
//  UtiMobilePage,				// 43
//  JockitchMobilePage,			// 44
//  HemorrhoidsMobilePage,		// 45
//  PinwormMobilePage,			// 46
//  MenstrualMobilePage,		// 47
//  BitesMobilePage,			// 48
//  AcneMobilePage,				// 49
//  RashMobilePage,				// 50
//  EczemaMobilePage,			// 51
//  BurnMobilePage,				// 52
//  SunburnMobilePage,			// 53
//  PoisonIvyMobilePage,		// 54
//  HivesMobilePage,			// 55
//  RingwormMobilePage,			// 56
//  WartsMobilePage,			// 57
//  ScabiesMobilePage,			// 58
//  ShinglesMobilePage,			// 59
//  AnkleSprainMobilePage,		// 60
//  AthletesMobilePage,			// 61
//  FootPainMobilePage,			// 62
//  ArthritisMobilePage,		// 63
//  NailFungusMobilePage,		// 64
//  SwollenFootMobilePage,		// 65
//  CornMobilePage,				// 66
//  IngrownNailMobilePage,		// 67
@Component({
  selector: 'page-adult-take-mobile-childlist',
  templateUrl: 'adult-take-mobile-childlist.html'
})
export class AdultTakeMobileChildlistPage {
	mode = {
		0: 'a',
		1: 'n'
	};
  	pages: any;
  	html_data: any;
	pageId: number;
	setting: any;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
  			public http: Http, private sanitizer: DomSanitizer) {
	  	this.menu = menu;
	  	this.pageId = GlobalVars.getPageId();
    	this.setting = GlobalVars.getPageSetting(this.mode[this.pageId]);
	  	this.pages = [true, true, true, true, true, true, true, true, true, true, true, true, true];
	}
	getHtmlData(){
	    this.html_data =  null;
	    this.http.get("assets/json/adult_take_mobile_childlist.json").map(response => response.json()).subscribe(data => {
	        this.html_data = data;
	    });
	}
	showMenu() {
	    var menu = document.querySelector( 'ion-menu ion-content' );
	    var setting = GlobalVars.getPageSetting(this.mode[this.pageId]);
	    menu.className = "outer-content content" + " " + setting['class'];
	  	this.menu.open();
	}
	gotoSubPage(id: number) {
		GlobalVars.setPageId(id + this.pageId * 100);
		this.navCtrl.push(AdultSymptomChildsPage);
	}
	togglePage(ind: number) {
		this.pages[ind] = !this.pages[ind];
	}
	ionViewDidLoad() {
		this.getHtmlData();
	}
}
