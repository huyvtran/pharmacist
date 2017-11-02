import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';
// import { UrgentCarePage } from '../urgent-care/urgent-care';
// import { AllergyMedsPage } from '../allergy-meds/allergy-meds';
// import { ContactSocialMobilePage } from '../contact-social-mobile/contact-social-mobile';
// import { CommentLoginPage } from '../comment-login/comment-login';

@Component({
  selector: 'page-adult-pharmacist-childs',
  templateUrl: 'adult-pharmacist-childs.html'
})
export class AdultPharmacistChildsPage {
	pagemode = {
		0: 'g',
		1: 'a',
		2: 'i',
		3: 'n',
		4: 'n',
		5: 'p',
		6: 'a',
		7: 'i',
		8: 'i',
		9: 'i',
		10: 'o',
		11: 'n',
		12: 'o',
		13: 'i',
		14: 'p',
		15: 'e',
		16: 'd',
		17: 'a',
		18: 'n',
		19: 'i',
		20: 'a',
		21: 'p',
		22: 'n',
		23: 'n',
		24: 'i',
		25: 'p',
		26: 'a',
		27: 'i',
		28: 'f',
		29: 'n',
		30: 'o',
		31: 'n',
		32: 'p',
		33: 'i',
		34: 'n',
		35: 'a',
		36: 'n',
		37: 'p',
		38: 'n',
		39: 'o',
		40: 'i',
		41: 'e',
		42: 'f',
		43: 'n',
		44: 'i',
		45: 'n',
		46: 'a',
		47: 'i',
		48: 'n',
		49: 'n',
		50: 'i',
		51: 'n',
		52: 'n',
		53: 'i',
		54: 'o',
		55: 'h',
		56: 'o',
		57: 'i',
		58: 'a',
		59: 'n',
		60: 'o',
		61: 'a',
		62: 'i',
		63: 'e',
		64: 'a',
		65: 'n',
		66: 'o',
		67: 'i'
	}
	pageId: number;
	setting: any;

  	@ViewChild(Content) content: Content;
	MyContent = {
	    screenWidth: 0,
	    screenHeight: 0,
	  }
	firstname: string;
	page: number;
	subPages: any;
	pages: any;
	AbsoluteURL: string;
	tabCss: string;
	tabConCss: string;
	tabId: number;
	recs: any;
	expands: any;
	mode: number;
	mode_mix: number;
	why: boolean;
	html_data: any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public platform: Platform,
				public http: Http, private sanitizer: DomSanitizer) {
		this.menu = menu;
		this.AbsoluteURL = GlobalVars.getAbsoluteURL();
		this.page = 0;
		this.mode = 0;
		this.mode_mix = 0;
		this.why = false;
		this.recs = [
			false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
		];
		this.pages = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
		this.expands = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,
							true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
		this.firstname = GlobalVars.getFirstname();
		if (this.firstname != "")
			this.firstname += ",";
		this.subPages = [
				// UrgentCarePage, 			// 0
				// AllergyMedsPage,			// 1
				// ContactSocialMobilePage,	// 2
				// CommentLoginPage,			// 3

			];
		this.tabId = 1;
		this.tabCss = "translate3d(0px, 0px, 0px)";
		this.tabConCss = "translate3d(0px, 0px, 0px)";

		this.pageId = GlobalVars.getPageId();
    	this.setting = GlobalVars.getPageSetting(this.pagemode[this.pageId]);
    	this.html_data =  null;
    	this.getHtmlData();
	}
	showMenu() {
		var menu = document.querySelector( 'ion-menu ion-content' );
	    var setting = GlobalVars.getPageSetting(this.pagemode[this.pageId]);
	    menu.className = "outer-content content" + " " + setting['class'];
	  	this.menu.open();
	}
	showTab(id: number){
		this.tabId = id;
		this.content.scrollToTop(0);
		this.tabCss = "translate3d(" + ((id-1)*100) + "%, 0px, 0px)";
		this.tabConCss = "translate3d(" + ((-id+1)*100) + "%, 0px, 0px)";
	}
	toggleRecs(ind: number){
		let special = this.html_data[this.pageId]['tabs'][0]['fieldspecial'];
		let temp = this.recs[ind];
		this.recs[ special[1] ] = false;	// prevention
		this.recs[ special[2] ] = false;	// none
		if (ind>=special[0]){
			this.recs[ special[0] ] = false;	// all
			this.recs[ind] = temp;
			if (ind == special[0] && special[0]!=special[1])
				this.toggleAllRecs(true, special[0]);
			else
				this.toggleAllRecs(false, special[0]);
		}
	}
	toggleAllRecs(b: boolean, last: number){
		for (let i=0;i<last;i++)
			this.recs[i] = b;
	}
	goBack() {
		this.toggleAllRecs(false, this.recs.length);
	}
	goBackSymptom(){
		this.goBack();
		this.page = 0;
		this.mode = 0;
	}
	toggleWhy(){
		this.why = !this.why;
	}
	gotoSubPage(id: number) {
		if (id != -1)
		{
			if (id < 100)
				this.navCtrl.push(this.subPages[id]);
			else if (id == 100)
				this.toggleWhy();
			else if (id == 200)
				this.goBackSymptom();
		}
	}
	expandPage(id: number){
		this.expands[id] = !this.expands[id];
	}
	togglePage(ind: number) {
		if (ind == 0){
			this.page = ind;
			this.mode = 0;
		}
		else if (ind == 1)
		{
			if (this.pageId == 0)
			{
				let 
					sorethroat = this.recs[0],
					scratchythroat = this.recs[1],
					stuffynose = this.recs[2],
					runnynose = this.recs[3],
					sneezing = this.recs[4],
					headache = this.recs[5],
					itchyeyes = this.recs[6],
					cough = this.recs[7],
					wateryeyes = this.recs[8],
					sinuscongestion = false,
					chestcongestion = this.recs[9],
					prevention =  this.recs[11],
					All =  this.recs[10],
					none = this.recs[12];
					
				//category variables
				let 
				    antihistamine = runnynose || scratchythroat || sneezing || itchyeyes || wateryeyes,
					decongestant = stuffynose || sinuscongestion,
					painrelief = headache || sorethroat,
					coughrelief = cough || chestcongestion,
					itchyeyesrelief = itchyeyes || wateryeyes;
				if (none) {
					this.mode = 1;
				}
				//conditions for showing prevention division.
				else if (prevention) {
					this.mode = 2;
				}
				//conditions for All division.
				else if (All) {
					this.mode = 3;
				}
				//--------------single------------------------
				else if (antihistamine && !(decongestant || painrelief || coughrelief || itchyeyesrelief)) {
				    this.mode = 4;
				} else if (decongestant && !(antihistamine || painrelief || coughrelief || itchyeyesrelief)) {
				    this.mode = 5;
				} else if (painrelief && !(decongestant || antihistamine || coughrelief || itchyeyesrelief)) {
				    this.mode = 6;
				} else if (coughrelief && !(decongestant || painrelief || antihistamine || itchyeyesrelief)) {
				    this.mode = 7;
				} else if (itchyeyesrelief && !(decongestant || painrelief || antihistamine || coughrelief)) {
				    this.mode = 8;
				}
				//-------------------------------double---------------------------
				else if (painrelief && decongestant && !(coughrelief || antihistamine || itchyeyesrelief)) {
				    this.mode = 9;
				} else if (painrelief && antihistamine && !(coughrelief || decongestant || itchyeyesrelief)) {
				    this.mode = 10;
				} else if (painrelief && coughrelief && !(antihistamine || decongestant || itchyeyesrelief)) {
				    this.mode = 11;
				} else if (painrelief && itchyeyesrelief && !(antihistamine || decongestant || coughrelief)) {
				    this.mode = 12;
				} else if (antihistamine && decongestant && !(painrelief || coughrelief || itchyeyesrelief)) {
				    this.mode = 13;
				} else if (antihistamine && coughrelief && !(painrelief || decongestant || itchyeyesrelief)) {
				    this.mode = 14;
				} else if (antihistamine && itchyeyesrelief && !(painrelief || coughrelief || decongestant)) {
				    this.mode = 15;
				} else if (decongestant && coughrelief && !(painrelief || antihistamine || itchyeyesrelief)) {
				    this.mode = 16;
				} else if (decongestant && itchyeyesrelief && !(painrelief || antihistamine || coughrelief)) {
				    this.mode = 17;
				} else if (itchyeyesrelief && coughrelief && !(painrelief || antihistamine || decongestant)) {
				    this.mode = 18;
				}
				//---------------------Triple----------------------
				else if (painrelief && antihistamine && decongestant && !(coughrelief || itchyeyesrelief)) {
				    this.mode = 19;
				} else if (painrelief && antihistamine && coughrelief && !(decongestant || itchyeyesrelief)) {
					this.mode = 20;
				} else if (painrelief && antihistamine && itchyeyesrelief && !(decongestant || coughrelief)) {
					this.mode = 21;
				} else if (painrelief && decongestant && coughrelief && !(antihistamine || itchyeyesrelief)) {
					this.mode = 22;
				} else if (painrelief && decongestant && itchyeyesrelief && !(antihistamine || coughrelief)) {
					this.mode = 23;
				} else if (painrelief && itchyeyesrelief && coughrelief && !(decongestant || antihistamine)) {
					this.mode = 24;
				} else if (decongestant && itchyeyesrelief && coughrelief && !(antihistamine || painrelief)) {
					this.mode = 25;
				} else if (antihistamine && itchyeyesrelief && coughrelief && !(decongestant || painrelief)) {
					this.mode = 26;
				} else if (antihistamine && decongestant && coughrelief && !(itchyeyesrelief || painrelief)) {
				    this.mode = 27;
				} else if (antihistamine && decongestant && itchyeyesrelief && !(coughrelief || painrelief)) {
				    this.mode = 28;
				}
				//---------------------------------Quadriple-------------------------------------
				else if (painrelief && antihistamine && decongestant && itchyeyesrelief && !(coughrelief)) {
				    this.mode = 29;
				} else if (painrelief && antihistamine && decongestant && coughrelief && !(itchyeyesrelief)) {
				    this.mode = 30;
				} else if (painrelief && antihistamine && itchyeyesrelief && coughrelief && !(decongestant)) {
				    this.mode = 31;
				} else if (painrelief && decongestant && itchyeyesrelief && coughrelief && !(antihistamine)) {
				    this.mode = 32;
				} else if (antihistamine && decongestant && itchyeyesrelief && coughrelief && !(painrelief)) {
				    this.mode = 33;
				}
				//------------------------------All together------------------------------------
				else if (painrelief && antihistamine && decongestant && coughrelief && itchyeyesrelief) {
				    this.mode = 34;
				} else {
				    ind = 0; this.mode = 50;
				}
			}
			else if (this.pageId == 1)
			{
				var
				    sorethroat = this.recs[0],
				scratchythroat = this.recs[1],
				stuffynose = this.recs[2],
				runnynose = this.recs[3],
				sneezing = this.recs[4],
				headache = this.recs[5],
				bodyache = this.recs[6],
				cough = this.recs[7],
				wateryeyes = this.recs[8],
				sinuscongestion = this.recs[9],
				chestcongestion = this.recs[10],
				prevention = this.recs[12],
				All = this.recs[11],
				none = this.recs[13];

				//category variables
				var
				    antihistamine = runnynose || sneezing || wateryeyes || scratchythroat,
				decongestant = stuffynose || sinuscongestion,
				painrelief = headache || bodyache || sorethroat,
				coughrelief = cough || chestcongestion;

				//conditions for showing none of the above division.
				if (none) {
				    this.mode = 1;
				}
				//conditions for showing prevention division.
				else if (prevention) {
				    this.mode = 2;
				}
				//conditions for All division.
				else if (All) {
				    this.mode = 3;
				}
				//condition for showing just one checked field
				else if (antihistamine && !(decongestant || painrelief || coughrelief)) {
				    this.mode = 4;

				} else if (decongestant && !(antihistamine || painrelief || coughrelief)) {
				    this.mode = 5;

				} else if (painrelief && !(decongestant || antihistamine || coughrelief)) {
				    this.mode = 6;

				} else if (coughrelief && !(decongestant || painrelief || antihistamine)) {
				    this.mode = 7;

				} else if (antihistamine && decongestant && !(coughrelief || painrelief)) {
				    this.mode = 8;

				} else if (antihistamine && painrelief && !(coughrelief || decongestant)) {
				    this.mode = 9;

				} else if (antihistamine && coughrelief && !(painrelief || decongestant)) {
				    this.mode = 10;

				} else if (antihistamine && painrelief && decongestant && !coughrelief) {
				    this.mode = 11;

				} else if (antihistamine && coughrelief && decongestant && !painrelief) {
				    this.mode = 12;

				} else if (antihistamine && coughrelief && painrelief && !decongestant) {
				    this.mode = 13;

				} else if (antihistamine && coughrelief && painrelief && decongestant) {
				    this.mode = 14;

				} else if (decongestant && painrelief && !(coughrelief || antihistamine)) {
				    this.mode = 15;

				} else if (decongestant && coughrelief && !(painrelief || antihistamine)) {
				    this.mode = 16;

				} else if (decongestant && coughrelief && painrelief && !antihistamine) {
				    this.mode = 17;

				} else if (painrelief && coughrelief && !(decongestant || antihistamine)) {
				    this.mode = 18;

				} else {
				    this.mode = 50;
				}
			}
			else if (this.pageId == 2) // == 2
			{
				var
				    sorethroat = this.recs[0],
				fever = this.recs[1],
				stuffynose = this.recs[2],
				diarrhea = this.recs[3],
				chills = this.recs[4],
				headache = this.recs[5],
				bodyache = this.recs[6],
				cough = this.recs[7],
				tired = this.recs[8],
				nausea = this.recs[9],
				prevention = this.recs[12],
				runnynose = this.recs[13],
				chestcongestion = this.recs[14],
				sinuspain = this.recs[15],
				All = this.recs[10],
				none = this.recs[11];

				//category variables
				var
				    antihistamine = runnynose,
				decongestant = stuffynose || sinuspain,
				painrelief = headache || bodyache || sorethroat || fever || chills || tired,
				coughrelief = cough || chestcongestion,
				stomachrelief = nausea || diarrhea;

				//conditions for showing none of the above division.

				if (none) {
				    this.mode = 1;
				}
				//conditions for showing prevention division.
				else if (prevention) {
				    this.mode = 2;
				}
				//conditions for showing prevention division.
				else if (All) {
				    this.mode = 3;
				}
				//condition for showing just one checked field
				//--------------single------------------------
				else if (antihistamine && !(decongestant || painrelief || coughrelief || stomachrelief)) {
				    this.mode = 4;
				} else if (decongestant && !(antihistamine || painrelief || coughrelief || stomachrelief)) {
				    this.mode = 5;
				} else if (painrelief && !(decongestant || antihistamine || coughrelief || stomachrelief)) {
				    this.mode = 6;
				} else if (coughrelief && !(decongestant || painrelief || antihistamine || stomachrelief)) {
				    this.mode = 7;
				} else if (stomachrelief && !(decongestant || painrelief || antihistamine || coughrelief)) {
				    this.mode = 8;
				}
				//-------------------------------double---------------------------
				else if (painrelief && decongestant && !(coughrelief || antihistamine || stomachrelief)) {
				    this.mode = 9;
				} else if (painrelief && antihistamine && !(coughrelief || decongestant || stomachrelief)) {
				    this.mode = 10;
				} else if (painrelief && coughrelief && !(antihistamine || decongestant || stomachrelief)) {
				    this.mode = 11;
				} else if (painrelief && stomachrelief && !(antihistamine || decongestant || coughrelief)) {
				    this.mode = 12;
				} else if (antihistamine && decongestant && !(painrelief || coughrelief || stomachrelief)) {
				    this.mode = 13;
				} else if (antihistamine && coughrelief && !(painrelief || decongestant || stomachrelief)) {
				    this.mode = 14;
				} else if (antihistamine && stomachrelief && !(painrelief || coughrelief || decongestant)) {
				    this.mode = 15;
				} else if (decongestant && coughrelief && !(painrelief || antihistamine || stomachrelief)) {
				    this.mode = 16;
				} else if (decongestant && stomachrelief && !(painrelief || antihistamine || coughrelief)) {
				    this.mode = 17;
				} else if (stomachrelief && coughrelief && !(painrelief || antihistamine || decongestant)) {
				    this.mode = 18;
				}
				//---------------------Triple----------------------
				else if (painrelief && antihistamine && decongestant && !(coughrelief || stomachrelief)) {
				    this.mode = 19;
				} else if (painrelief && antihistamine && coughrelief && !(decongestant || stomachrelief)) {
				    this.mode = 20;
				} else if (painrelief && antihistamine && stomachrelief && !(decongestant || coughrelief)) {
				    this.mode = 21;
				} else if (painrelief && decongestant && coughrelief && !(antihistamine || stomachrelief)) {
				    this.mode = 22;
				} else if (painrelief && decongestant && stomachrelief && !(antihistamine || coughrelief)) {
				    this.mode = 23;
				} else if (painrelief && stomachrelief && coughrelief && !(decongestant || antihistamine)) {
				    this.mode = 24;
				} else if (decongestant && stomachrelief && coughrelief && !(antihistamine || painrelief)) {
				    this.mode = 25;
				} else if (antihistamine && stomachrelief && coughrelief && !(decongestant || painrelief)) {
				    this.mode = 26;
				} else if (antihistamine && decongestant && coughrelief && !(stomachrelief || painrelief)) {
				    this.mode = 27;
				} else if (antihistamine && decongestant && stomachrelief && !(coughrelief || painrelief)) {
				    this.mode = 28;
				}
				//---------------------------------Quadriple-------------------------------------
				else if (painrelief && antihistamine && decongestant && stomachrelief && !(coughrelief)) {
				    this.mode = 29;
				} else if (painrelief && antihistamine && decongestant && coughrelief && !(stomachrelief)) {
				    this.mode = 30;
				} else if (painrelief && antihistamine && stomachrelief && coughrelief && !(decongestant)) {
				    this.mode = 31;
				} else if (painrelief && decongestant && stomachrelief && coughrelief && !(antihistamine)) {
				    this.mode = 32;
				} else if (antihistamine && decongestant && stomachrelief && coughrelief && !(painrelief)) {
				    this.mode = 33;
				}
				//------------------------------All together------------------------------------
				else if (painrelief && antihistamine && decongestant && coughrelief && stomachrelief) {
				    this.mode = 34;
				} else {
				    this.mode = 50;
				}
			}
			else if (this.pageId == 4)
			{
				var
				    sleep_quicker = this.recs[0],
				wake_early = this.recs[1],
				wake_often = this.recs[2],
				work_nights = this.recs[3],
				stressed = this.recs[4],
				toothache = this.recs[5],
				headache = this.recs[6],
				anxiety = this.recs[7],
				bigday = this.recs[8],
				jetlag = this.recs[9],
				prevention = this.recs[11],
				allabove = this.recs[10],
				none = this.recs[12];

				//Medication variables in collapsible

				var
				    antihistamine = wake_early || wake_often,
				antihistamine_painrelief = toothache || headache,
				melatonin = sleep_quicker || work_nights || bigday || jetlag,
				valerian = stressed || anxiety || bigday,
				combination = stressed || anxiety || bigday || sleep_quicker;
				if (none) {
					this.mode = 1;
				}
				else if (prevention) {
					this.mode = 2;
				}
				else if (allabove) {
					this.mode = 3;
				   
				}
				else if (antihistamine && !(antihistamine_painrelief || melatonin || valerian || combination)) {
					this.mode = 4;
				    

				} else if (antihistamine_painrelief && !(antihistamine || melatonin || valerian || combination)) {
					this.mode = 5;
				    

				} else if (melatonin && !(antihistamine || antihistamine_painrelief || valerian || combination)) {
					this.mode = 6;
				    

				} else if (valerian && !(antihistamine || antihistamine_painrelief || melatonin || combination)) {
					this.mode = 7;
				    

				} else if (combination && !(antihistamine || antihistamine_painrelief || valerian || melatonin)) {
					this.mode = 8;
				    

				}
				//-------------------------------double---------------------------
				else if (antihistamine && antihistamine_painrelief && !(melatonin || valerian || combination)) {
					this.mode = 9;
				    

				} else if (antihistamine && melatonin && !(antihistamine_painrelief || valerian || combination)) {
					this.mode = 10;
				    

				} else if (antihistamine && valerian && !(antihistamine_painrelief || melatonin || combination)) {
					this.mode = 11;
				    

				} else if (antihistamine && combination && !(antihistamine_painrelief || melatonin || valerian)) {
					this.mode = 12;
				    

				} else if (antihistamine_painrelief && melatonin && !(antihistamine || valerian || combination)) {
					this.mode = 13;
				    

				} else if (antihistamine_painrelief && valerian && !(antihistamine || melatonin || combination)) {
					this.mode = 14;
				    

				} else if (antihistamine_painrelief && combination && !(antihistamine || melatonin || valerian)) {
					this.mode = 15;
				    
				} else if (melatonin && valerian && !(antihistamine || antihistamine_painrelief || combination)) {
					this.mode = 16;
				   
				} else if (melatonin && combination && !(antihistamine || antihistamine_painrelief || valerian)) {
					this.mode = 17;
				} else if (valerian && combination && !(antihistamine || antihistamine_painrelief || melatonin)) {
					this.mode = 18;
				}
				//---------------------Triple----------------------
				else if (antihistamine && antihistamine_painrelief && melatonin && !(valerian || combination)) {
					this.mode = 19;
				    

				} else if (antihistamine && antihistamine_painrelief && valerian && !(melatonin || combination)) {
					this.mode = 20;
				    

				} else if (antihistamine && antihistamine_painrelief && combination && !(melatonin || valerian)) {
					this.mode = 21;
				    
				} else if (antihistamine && melatonin && valerian && !(antihistamine_painrelief || combination)) {
					this.mode = 22;
				    
				} else if (antihistamine && melatonin && combination && !(antihistamine_painrelief || valerian)) {
					this.mode = 23;
				    
				} else if (antihistamine && valerian && combination && !(antihistamine_painrelief || melatonin)) {
					this.mode = 24;
				    
				} else if (antihistamine_painrelief && melatonin && valerian && !(antihistamine || combination)) {
					this.mode = 25;
				    
				} else if (antihistamine_painrelief && melatonin && combination && !(antihistamine || valerian)) {
					this.mode = 26;
				    
				} else if (antihistamine_painrelief && valerian && combination && !(antihistamine || melatonin)) {
					this.mode = 27;
				    
				} else if (melatonin && valerian && combination && !(antihistamine || antihistamine_painrelief)) {
					this.mode = 28;
				}
				//---------------------Quadruple----------------------
				else if (antihistamine && antihistamine_painrelief && melatonin && valerian && !(combination)) {
					this.mode = 29;
				    
				} else if (antihistamine && antihistamine_painrelief && melatonin && combination && !(valerian)) {
					this.mode = 30;
				    
				} else if (antihistamine && antihistamine_painrelief && valerian && combination && !(melatonin)) {
					this.mode = 31;
				    
				} else if (antihistamine && melatonin && valerian && combination && !(antihistamine_painrelief)) {
					this.mode = 32;
				    
				} else if (antihistamine_painrelief && melatonin && valerian && combination && !(antihistamine)) {
					this.mode = 33;
				   
				}
				//------------------------------All together------------------------------------
				else if (antihistamine && antihistamine_painrelief && melatonin && valerian && combination) {
					this.mode = 34;
				    
				} else {
					this.mode = 50;
					ind = 0;
				}
			}
			else if (this.pageId == 6)
			{
				var
				    mild = this.recs[0],
				moderate = this.recs[1],
				severe = this.recs[2],
				painful = this.recs[3],
				crusty = this.recs[4],
				drainy = this.recs[5],
				blonde = this.recs[6],
				colored = this.recs[7],
				oily = this.recs[8],
				dry = this.recs[9],
				prevention = this.recs[11],
				allabove = this.recs[10],
				none = this.recs[12];

				//Medication variables in collapsible

				var
				    mild = mild,
				moderate = moderate,
				severe = severe,
				warning = oily || dry || blonde || colored,
				doctor = severe || painful || crusty || drainy;

				if (none) {
					this.mode = 34;
				}
				//conditions for showing prevention division.
				else if (prevention) {
				    this.mode = 1;

				}
				//conditions for All division + Others else if.
				else if (allabove) {
					this.mode = 2;
				    
				}
				//condition for showing just one checked field

				//--------------single------------------------
				else if (mild && !(moderate || severe || warning || doctor)) {
					this.mode = 3;
				    
				} else if (moderate && !(mild || severe || warning || doctor)) {
					this.mode = 4;
				    
				} else if (severe && !(mild || moderate || warning || doctor)) {
					this.mode = 5;
				    
				} else if (warning && !(mild || moderate || severe || doctor)) {
					this.mode = 6;
				    
				} else if (doctor && !(mild || moderate || warning || severe)) {
					this.mode = 7;
				    
				}
				//-------------------------------double---------------------------
				else if (mild && moderate && !(severe || warning || doctor)) {
					this.mode = 8;

				} else if (mild && severe && !(moderate || warning || doctor)) {
					this.mode = 9;
				    
				} else if (mild && warning && !(moderate || severe || doctor)) {
					this.mode = 10;
				    
				} else if (mild && doctor && !(moderate || severe || warning)) {
					this.mode = 11;
				    
				} else if (moderate && severe && !(mild || warning || doctor)) {
					this.mode = 12;

				} else if (moderate && warning && !(mild || severe || doctor)) {
					this.mode = 13;
				    
				} else if (moderate && doctor && !(mild || severe || warning)) {
					this.mode = 14;
				    
				} else if (severe && warning && !(mild || moderate || doctor)) {
					this.mode = 15;
				    
				} else if (severe && doctor && !(mild || moderate || warning)) {
					this.mode = 16;
				    
				} else if (warning && doctor && !(mild || moderate || severe)) {
					this.mode = 17;
				    
				}
				//---------------------Triple----------------------
				else if (mild && moderate && severe && !(warning || doctor)) {
					this.mode = 18;
				    
				} else if (mild && moderate && warning && !(severe || doctor)) {
					this.mode = 19;
				    
				} else if (mild && moderate && doctor && !(severe || warning)) {
					this.mode = 20;
				    
				} else if (mild && severe && warning && !(moderate || doctor)) {
					this.mode = 21;
				    
				} else if (mild && severe && doctor && !(moderate || warning)) {
					this.mode = 22;
				    
				} else if (mild && warning && doctor && !(moderate || severe)) {
					this.mode = 23;
				   
				} else if (moderate && severe && warning && !(mild || doctor)) {
					this.mode = 24;
				    
				} else if (moderate && severe && doctor && !(mild || warning)) {
					this.mode = 25;
				    
				} else if (moderate && warning && doctor && !(mild || severe)) {
					this.mode = 26;
				    
				} else if (severe && warning && doctor && !(mild || moderate)) {
					this.mode = 27;
				    
				}
				//---------------------Quadruple----------------------
				else if (mild && moderate && severe && warning && !(doctor)) {
					this.mode = 28;
				    
				} else if (mild && moderate && severe && doctor && !(warning)) {
					this.mode = 29;

				} else if (mild && moderate && warning && doctor && !(severe)) {
					this.mode = 30;

				} else if (mild && severe && warning && doctor && !(moderate)) {
					this.mode = 31;

				} else if (moderate && severe && warning && doctor && !(mild)) {
					this.mode = 32;

				}
				//------------------------------All together------------------------------------
				else if (mild && moderate && severe && warning && doctor) {
					this.mode = 33;

				} else {
					this.mode = 50;
					ind = 0;
				}
			}
			else if (this.pageId == 7)
			{
				var
				    //found = $('#adult_recom_lice_mobile_q1_0'),
				    severe = this.recs[1],
				best = this.recs[2],
				prefer_natural = this.recs[3],
				tried = this.recs[4],
				returned = this.recs[5],
				resistant = this.recs[6],
				crusty = this.recs[7],
				family = this.recs[8],
				money = this.recs[9],
				prevention = this.recs[11],
				allabove = this.recs[10],
				none = this.recs[12];

				//Medication variables in collapsible

				var
				    pediculicides = family || best,
				natural = prefer_natural,
				outsource = severe || money || family,
				doctor = severe || tried || returned || resistant || crusty;

				if (none) {
					this.mode = 1;
				}
				else if (prevention) {
				    this.mode = 2;

				}
				else if (allabove) {
				    this.mode = 3;
				}
				else if (pediculicides && !(natural || outsource || doctor)) {
				    this.mode = 4;

				} else if (natural && !(pediculicides || outsource || doctor)) {

				    this.mode = 5;

				} else if (outsource && !(pediculicides || natural || doctor)) {

				    this.mode = 6;

				} else if (doctor && !(pediculicides || natural || outsource)) {

				    this.mode = 7;
				}

				//-------------------------------double---------------------------
				else if (pediculicides && natural && !(outsource || doctor)) {

				    this.mode = 8;
				} else if (pediculicides && outsource && !(natural || doctor)) {

				    this.mode = 9;
				} else if (pediculicides && doctor && !(natural || outsource)) {

				    this.mode = 10;
				} else if (natural && outsource && !(pediculicides || doctor)) {

				    this.mode = 11;
				} else if (natural && doctor && !(pediculicides || outsource)) {

				    this.mode = 12;
				} else if (outsource && doctor && !(pediculicides || natural)) {

				    this.mode = 13;
				}

				//---------------------Triple----------------------
				else if (pediculicides && natural && outsource && !(doctor)) {

				    this.mode = 14;
				} else if (pediculicides && natural && doctor && !(outsource)) {

				    this.mode = 15;
				} else if (pediculicides && outsource && doctor && !(natural)) {

				    this.mode = 16;
				} else if (natural && outsource && doctor && !(pediculicides)) {

				    this.mode = 17;
				}

				//------------------------------All together------------------------------------
				else if (pediculicides && natural && outsource && doctor) {

				    this.mode = 18;
				} else {
					this.mode = 50;
					ind = 0;
				}
			}
			else if (this.pageId == 8)
			{
				var pus = this.recs[0],
					one_eye = this.recs[1],
					eyelids_stuck = this.recs[2],
					watery = this.recs[3],
					foreign_object = this.recs[4],
					allergy_symptoms = this.recs[5],
					red_quickly = this.recs[6],
					itchy = this.recs[7],
					contact_lens = this.recs[8],
					chemical = this.recs[9],
					prevention = this.recs[10],
					allabove,
					none = this.recs[11];
				allabove = false;
				//Medication variables in collapsible
				var allergy = allergy_symptoms || itchy || red_quickly,
					viral = foreign_object || watery,
					doctor = pus || one_eye || eyelids_stuck;

				//conditions for showing none of the above division.
				if (none) {
				    this.mode = 1;
				}
				//conditions for showing prevention division.
				else if (prevention) {
				    this.mode = 2;
				}
				//conditions for All division + Others else if.
				else if (allabove) {
				    this.mode = 3;
				}
				//condition for showing just one checked field
				else if (contact_lens) {
				    this.mode = 4;
				} else if (chemical) {
				    this.mode = 5;
				}
				//--------------single------------------------
				else if (allergy && !(viral || doctor)) {
				    this.mode = 6;

				} else if (viral && !(allergy || doctor)) {
				    this.mode = 7;
				} else if (doctor && !(allergy || viral)) {
				    this.mode = 8;
				}
				//-------------------------------double---------------------------
				else if (allergy && viral && !(doctor)) {
				    this.mode = 9;
				} else if (allergy && doctor && !(viral)) {
				    this.mode = 10;
				} else if (viral && doctor && !(allergy)) {
				    this.mode = 11;
				}
				//------------------------------All together------------------------------------
				else if (allergy && viral && doctor) {
				    this.mode = 12;
				} else {
				    ind = 0; this.mode = 50;
				}
			}
			else if (this.pageId == 11)
			{
				var
				    severe = this.recs[0],
				mild = this.recs[1],
				burning = this.recs[2],
				morning = this.recs[3],
				painful = this.recs[4],
				sand = this.recs[5],
				four_times = this.recs[6],
				blurry = this.recs[7],
				/*iiii = $('#adult_recom_dryeye_mobile_q1_8'),
				jjjj = $('#adult_recom_dryeye_mobile_q1_9'),*/
				prevention = this.recs[8],
				allabove,
				none = this.recs[9];

				allabove = false;
				//Medication variables in collapsible
				var
				    thicker = severe || painful || sand,
				watery = mild || burning || sand || blurry || painful,
				nighttime = severe || mild || morning,
				cold_warm_compress = severe || mild || painful,
				preservative_free = severe || four_times;
				if (none) {
					this.mode = 1;
				}
				else if (prevention) {
					this.mode = 2;

				}
				else if (allabove) {
					this.mode = 3;

				}
				//--------------single------------------------
				else if (thicker && !(watery || nighttime || cold_warm_compress || preservative_free)) {
					this.mode = 4;

				} else if (watery && !(thicker || nighttime || cold_warm_compress || preservative_free)) {
					this.mode = 5;
				} else if (nighttime && !(thicker || watery || cold_warm_compress || preservative_free)) {
				    this.mode = 6;
				} else if (cold_warm_compress && !(thicker || watery || nighttime || preservative_free)) {
				    this.mode = 7;
				} else if (preservative_free && !(thicker || watery || cold_warm_compress || nighttime)) {
				    this.mode = 8; 
				}
				//-------------------------------double---------------------------
				else if (thicker && watery && !(nighttime || cold_warm_compress || preservative_free)) {
				    this.mode = 9;
				} else if (thicker && nighttime && !(watery || cold_warm_compress || preservative_free)) {
				    this.mode = 10;
				} else if (thicker && cold_warm_compress && !(watery || nighttime || preservative_free)) {
				    this.mode = 11;
				} else if (thicker && preservative_free && !(watery || nighttime || cold_warm_compress)) {
				    this.mode = 12;
				} else if (watery && nighttime && !(thicker || cold_warm_compress || preservative_free)) {
				    this.mode = 13;

				} else if (watery && cold_warm_compress && !(thicker || nighttime || preservative_free)) {
				    this.mode = 14;
				   
				} else if (watery && preservative_free && !(thicker || nighttime || cold_warm_compress)) {
				    this.mode = 15;
				    
				} else if (nighttime && cold_warm_compress && !(thicker || watery || preservative_free)) {
				    this.mode = 16;
				    
				} else if (nighttime && preservative_free && !(thicker || watery || cold_warm_compress)) {
				    this.mode = 17;
				    
				} else if (cold_warm_compress && preservative_free && !(thicker || watery || nighttime)) {
				    this.mode = 18;
				    
				}
				//---------------------Triple----------------------
				else if (thicker && watery && nighttime && !(cold_warm_compress || preservative_free)) {
				    this.mode = 19;
				    
				} else if (thicker && watery && cold_warm_compress && !(nighttime || preservative_free)) {
				    this.mode = 20;
				    
				} else if (thicker && watery && preservative_free && !(nighttime || cold_warm_compress)) {
				    this.mode = 21;
				    
				} else if (thicker && nighttime && cold_warm_compress && !(watery || preservative_free)) {
				    this.mode = 22;
				    
				} else if (thicker && nighttime && preservative_free && !(watery || cold_warm_compress)) {
				    this.mode = 23;
				    
				} else if (thicker && cold_warm_compress && preservative_free && !(watery || nighttime)) {
				    this.mode = 24;
				    
				} else if (watery && nighttime && cold_warm_compress && !(thicker || preservative_free)) {
				    this.mode = 25;
				    
				} else if (watery && nighttime && preservative_free && !(thicker || cold_warm_compress)) {
				    this.mode = 26;
				    
				} else if (watery && cold_warm_compress && preservative_free && !(thicker || nighttime)) {
				    this.mode = 27;
				    
				} else if (nighttime && cold_warm_compress && preservative_free && !(thicker || watery)) {
				    this.mode = 28;
				    
				}
				//---------------------Quadruple----------------------
				else if (thicker && watery && nighttime && cold_warm_compress && !(preservative_free)) {
				    this.mode = 29;
				    
				} else if (thicker && watery && nighttime && preservative_free && !(cold_warm_compress)) {
				    this.mode = 30;
				    
				} else if (thicker && watery && cold_warm_compress && preservative_free && !(nighttime)) {
				    this.mode = 31;
				    
				} else if (thicker && nighttime && cold_warm_compress && preservative_free && !(watery)) {
				    this.mode = 32;
				    
				} else if (watery && nighttime && cold_warm_compress && preservative_free && !(thicker)) {

				    this.mode = 33;
				}
				//------------------------------All together------------------------------------
				else if (thicker && watery && nighttime && cold_warm_compress && preservative_free) {
				    this.mode = 34;
				} else {
				    this.mode = 50;
				    ind = 0;
				}
			}
			else if (this.pageId == 12)
			{
				var cold = this.recs[0],
					ruptured = this.recs[1],
					toothache = this.recs[2],
					water = this.recs[3],
					swollen = this.recs[4],
					itchy = this.recs[5],
					fever = this.recs[6],
					sore_throat = this.recs[7],
					pressure = this.recs[8],
					draining = this.recs[9],
					prevention = this.recs[10],
					allabove,
					none = this.recs[11];
					allabove = false;
				//Medication variables in collapsible

				var
				    pain_reliever = cold || swollen || toothache || pressure,
					eardrops = water || itchy,
					decongestant = cold || pressure,
					warm_compress = ruptured || swollen || toothache,
					doctor = ruptured || swollen || fever || sore_throat || draining;


				//conditions for showing none of the above division.

				if (none) {
				    this.mode = 1;
				}
				//conditions for showing prevention division.
				else if (prevention) {
				    this.mode = 2;
				}
				//conditions for showing ruptured division.
				else if (ruptured) {
				    this.mode = 3;
				}
				//conditions for All division + Others else if.
				else if (allabove) {
				    this.mode = 4;
				}
				//condition for showing just one checked field
				//--------------single------------------------
				else if (pain_reliever && !(eardrops || decongestant || warm_compress || doctor)) {
				    this.mode = 5;
				} else if (eardrops && !(pain_reliever || decongestant || warm_compress || doctor)) {
				    this.mode = 6;
				} else if (decongestant && !(pain_reliever || eardrops || warm_compress || doctor)) {
				    this.mode = 7;
				} else if (warm_compress && !(pain_reliever || eardrops || decongestant || doctor)) {
				    this.mode = 8;
				} else if (doctor && !(pain_reliever || eardrops || warm_compress || decongestant)) {
				    this.mode = 9;
				}
				//-------------------------------double---------------------------
				else if (pain_reliever && eardrops && !(decongestant || warm_compress || doctor)) {
				    this.mode = 10;
				} else if (pain_reliever && decongestant && !(eardrops || warm_compress || doctor)) {
				    this.mode = 11;
				} else if (pain_reliever && warm_compress && !(eardrops || decongestant || doctor)) {
				    this.mode = 12;
				} else if (pain_reliever && doctor && !(eardrops || decongestant || warm_compress)) {
				    this.mode = 13;
				} else if (eardrops && decongestant && !(pain_reliever || warm_compress || doctor)) {
				    this.mode = 14;
				} else if (eardrops && warm_compress && !(pain_reliever || decongestant || doctor)) {
				    this.mode = 15;
				} else if (eardrops && doctor && !(pain_reliever || decongestant || warm_compress)) {
				    this.mode = 16;
				} else if (decongestant && warm_compress && !(pain_reliever || eardrops || doctor)) {
				    this.mode = 17;
				} else if (decongestant && doctor && !(pain_reliever || eardrops || warm_compress)) {
				    this.mode = 18;
				} else if (warm_compress && doctor && !(pain_reliever || eardrops || decongestant)) {
				    this.mode = 19;
				}
				//---------------------Triple----------------------
				else if (pain_reliever && eardrops && decongestant && !(warm_compress || doctor)) {
					this.mode = 20;
				} else if (pain_reliever && eardrops && warm_compress && !(decongestant || doctor)) {
					this.mode = 21;
				} else if (pain_reliever && eardrops && doctor && !(decongestant || warm_compress)) {
					this.mode = 22;
				} else if (pain_reliever && decongestant && warm_compress && !(eardrops || doctor)) {
					this.mode = 23;
				} else if (pain_reliever && decongestant && doctor && !(eardrops || warm_compress)) {
					this.mode = 24;
				} else if (pain_reliever && warm_compress && doctor && !(eardrops || decongestant)) {
					this.mode = 25;
				} else if (eardrops && decongestant && warm_compress && !(pain_reliever || doctor)) {
					this.mode = 26;
				} else if (eardrops && decongestant && doctor && !(pain_reliever || warm_compress)) {
					this.mode = 27;
				} else if (eardrops && warm_compress && doctor && !(pain_reliever || decongestant)) {
					this.mode = 28;
				} else if (decongestant && warm_compress && doctor && !(pain_reliever || eardrops)) {
					this.mode = 29;
				}
				//---------------------Quadruple----------------------
				else if (pain_reliever && eardrops && decongestant && warm_compress && !(doctor)) {
					this.mode = 30;
				} else if (pain_reliever && eardrops && decongestant && doctor && !(warm_compress)) {
					this.mode = 31;
				} else if (pain_reliever && eardrops && warm_compress && doctor && !(decongestant)) {
					this.mode = 32;
				} else if (pain_reliever && decongestant && warm_compress && doctor && !(eardrops)) {
					this.mode = 33;
				} else if (eardrops && decongestant && warm_compress && doctor && !(pain_reliever)) {
					this.mode = 34;
				}
				//------------------------------All together------------------------------------
				else if (pain_reliever && eardrops && decongestant && warm_compress && doctor) {
					this.mode = 35;
				} else {
					this.mode = 50;
					ind = 0;
				}
			}
			else if (this.pageId == 13)
			{
				var
				    ruptured = this.recs[0],
				pus = this.recs[1],
				painful = this.recs[2],
				fluid = this.recs[3],
				swollen = this.recs[4],
				fever = this.recs[5],
				muffled = this.recs[6],
				itchy = this.recs[7],
				/*iiii = $('#adult_recom_swimear_mobile_q1_8'),
				jjjj = $('#adult_recom_swimear_mobile_q1_9'),*/
				prevention = this.recs[8],
				allabove,
				none = this.recs[9];
				allabove = false;
				//Medication variables in collapsible

				var
				    ear_drops = fluid || muffled || itchy,
				pain_reliever = painful || swollen || fever,
				antihistamine = itchy,
				warm_compress = ruptured || painful || swollen,
				doctor = ruptured || pus || painful || swollen || fever || muffled;
				//conditions for showing none of the above division.
				if (none) {
				    this.mode = 1;
				}

				//conditions for showing prevention division.
				else if (prevention) {
				    this.mode = 2;
				}
				//conditions for All division + Others else if.
				else if (allabove) {
				    this.mode = 3;
				}
				//conditions for doctor only.
				else if (ruptured) {
				    this.mode = 4;
				}
				//condition for showing just one checked field
				//--------------single------------------------
				else if (ear_drops && !(pain_reliever || antihistamine || warm_compress || doctor)) {
				    this.mode = 5;
				    
				} else if (pain_reliever && !(ear_drops || antihistamine || warm_compress || doctor)) {
				    this.mode = 6;
				   
				} else if (antihistamine && !(ear_drops || pain_reliever || warm_compress || doctor)) {
				    this.mode = 7;
				    
				} else if (warm_compress && !(ear_drops || pain_reliever || antihistamine || doctor)) {
				    this.mode = 8;
				    
				} else if (doctor && !(ear_drops || pain_reliever || warm_compress || antihistamine)) {
				    this.mode = 9;
				    
				}
				//-------------------------------double---------------------------
				else if (ear_drops && pain_reliever && !(antihistamine || warm_compress || doctor)) {
				    this.mode = 10;
				    
				} else if (ear_drops && antihistamine && !(pain_reliever || warm_compress || doctor)) {
				    this.mode = 11;
				    
				} else if (ear_drops && warm_compress && !(pain_reliever || antihistamine || doctor)) {
				    this.mode = 12;
				    
				} else if (ear_drops && doctor && !(pain_reliever || antihistamine || warm_compress)) {
				    this.mode = 13;
				    
				} else if (pain_reliever && antihistamine && !(ear_drops || warm_compress || doctor)) {
				    this.mode = 14;
				    
				} else if (pain_reliever && warm_compress && !(ear_drops || antihistamine || doctor)) {
				    this.mode = 15;
				    
				} else if (pain_reliever && doctor && !(ear_drops || antihistamine || warm_compress)) {
				    this.mode = 16;
				    
				} else if (antihistamine && warm_compress && !(ear_drops || pain_reliever || doctor)) {
				    this.mode = 17;
				    
				} else if (antihistamine && doctor && !(ear_drops || pain_reliever || warm_compress)) {
				    this.mode = 18;
				    
				} else if (warm_compress && doctor && !(ear_drops || pain_reliever || antihistamine)) {
				    this.mode = 19;
				    
				}
				//---------------------Triple----------------------
				else if (ear_drops && pain_reliever && antihistamine && !(warm_compress || doctor)) {
				    this.mode = 20;
				    
				} else if (ear_drops && pain_reliever && warm_compress && !(antihistamine || doctor)) {
				    this.mode = 21;
				    
				} else if (ear_drops && pain_reliever && doctor && !(antihistamine || warm_compress)) {
				    this.mode = 22;
				    
				} else if (ear_drops && antihistamine && warm_compress && !(pain_reliever || doctor)) {
				    this.mode = 23;
				    
				} else if (ear_drops && antihistamine && doctor && !(pain_reliever || warm_compress)) {
				    this.mode = 24;
				    
				} else if (ear_drops && warm_compress && doctor && !(pain_reliever || antihistamine)) {
				    this.mode = 25;
				    
				} else if (pain_reliever && antihistamine && warm_compress && !(ear_drops || doctor)) {
				    this.mode = 26;
				    
				} else if (pain_reliever && antihistamine && doctor && !(ear_drops || warm_compress)) {
				    this.mode = 27;
				    
				} else if (pain_reliever && warm_compress && doctor && !(ear_drops || antihistamine)) {
				    this.mode = 28;
				    
				} else if (antihistamine && warm_compress && doctor && !(ear_drops || pain_reliever)) {
				    this.mode = 29;
				   
				}
				//---------------------Quadruple----------------------
				else if (ear_drops && pain_reliever && antihistamine && warm_compress && !(doctor)) {
				    this.mode = 30;
				    
				} else if (ear_drops && pain_reliever && antihistamine && doctor && !(warm_compress)) {
				    this.mode = 31;
				    
				} else if (ear_drops && pain_reliever && warm_compress && doctor && !(antihistamine)) {
				    this.mode = 32;
				    
				} else if (ear_drops && antihistamine && warm_compress && doctor && !(pain_reliever)) {
				    this.mode = 33;
				    
				} else if (pain_reliever && antihistamine && warm_compress && doctor && !(ear_drops)) {
				    this.mode = 34;
				    
				}
				//------------------------------All together------------------------------------
				else if (ear_drops && pain_reliever && antihistamine && warm_compress && doctor) {
				    this.mode = 35;
				} else {
				    this.mode = 50;
				    ind = 0;
				}
			}
			else if (this.pageId == 18)
			{
				var
			        tingling = this.recs[0],
			        blistering = this.recs[1],
			        weeping = this.recs[2],
			        scabbing = this.recs[3],
			        healing = this.recs[4],
			        fluid = this.recs[5],
			        large = this.recs[6],
			        leaking = this.recs[7],
			        red = this.recs[8],
			        painful = this.recs[9],
			        prevention = this.recs[11],
			        allabove = this.recs[10],
			        none = this.recs[12];
			    var
			        docosanol = tingling || blistering || fluid,
			        antiinflammatory = weeping || red || fluid || large,
			        analgesic = painful,
			        antiseptic = weeping || blistering || large || leaking,
			        protectants = scabbing || healing,
			        supplements = tingling;
			    if (none) {
			        this.mode = 1;
			    }
			    //conditions for showing prevention division.
			    else if (prevention) {
			        this.mode = 2;
			    }
			    //conditions for All division + Others else if.
			    else if (allabove) {
			    	this.mode = 3;
			    }
			    //--------------single------------------------
			    else if (docosanol && !(antiinflammatory || analgesic || antiseptic || protectants || supplements)) {
			    	this.mode = 4;
			    } else if (antiinflammatory && !(docosanol || analgesic || antiseptic || protectants || supplements)) {
			    	this.mode = 5;
			    } else if (analgesic && !(docosanol || antiinflammatory || antiseptic || protectants || supplements)) {
			    	this.mode = 6;
			    } else if (antiseptic && !(docosanol || antiinflammatory || analgesic || protectants || supplements)) {
			    	this.mode = 7;
			    } else if (protectants && !(docosanol || antiinflammatory || antiseptic || analgesic || supplements)) {
			    	this.mode = 8;
			    } else if (supplements && !(docosanol || antiinflammatory || antiseptic || analgesic || protectants)) {
			    	this.mode = 9;
			    }
			    //-------------------------------double---------------------------
			    else if (docosanol && antiinflammatory && !(analgesic || antiseptic || protectants || supplements)) {
			    	this.mode = 10;
			    } else if (docosanol && analgesic && !(antiinflammatory || antiseptic || protectants || supplements)) {
			    	this.mode = 11;
			    } else if (docosanol && antiseptic && !(antiinflammatory || analgesic || protectants || supplements)) {
			    	this.mode = 12;
			    } else if (docosanol && protectants && !(antiinflammatory || analgesic || antiseptic || supplements)) {
			    	this.mode = 13;
			    } else if (docosanol && supplements && !(antiinflammatory || analgesic || antiseptic || protectants)) {
			    	this.mode = 14;
			    } else if (antiinflammatory && analgesic && !(docosanol || antiseptic || protectants || supplements)) {
			    	this.mode = 15;
			    } else if (antiinflammatory && antiseptic && !(docosanol || analgesic || protectants || supplements)) {
			    	this.mode = 16;
			    } else if (antiinflammatory && protectants && !(docosanol || analgesic || antiseptic || supplements)) {
			    	this.mode = 17;
			    } else if (antiinflammatory && supplements && !(docosanol || analgesic || antiseptic || protectants)) {
			    	this.mode = 18;
			    } else if (analgesic && antiseptic && !(docosanol || antiinflammatory || protectants || supplements)) {
			    	this.mode = 19;
			    } else if (analgesic && protectants && !(docosanol || antiinflammatory || antiseptic || supplements)) {
			    	this.mode = 20;
			    } else if (analgesic && supplements && !(docosanol || antiinflammatory || antiseptic || protectants)) {
			    	this.mode = 21;
			    } else if (antiseptic && protectants && !(docosanol || antiinflammatory || analgesic || supplements)) {
			    	this.mode = 22;
			    } else if (antiseptic && supplements && !(docosanol || antiinflammatory || analgesic || protectants)) {
			    	this.mode = 23;
			    } else if (protectants && supplements && !(docosanol || antiinflammatory || analgesic || antiseptic)) {
			    	this.mode = 24;
			    }
			    //---------------------Triple----------------------
			    else if (docosanol && antiinflammatory && analgesic && !(antiseptic || protectants || supplements)) {
			    	this.mode = 25;
			    } else if (docosanol && antiinflammatory && antiseptic && !(analgesic || protectants || supplements)) {
			    	this.mode = 26;
			    } else if (docosanol && antiinflammatory && protectants && !(analgesic || antiseptic || supplements)) {
			    	this.mode = 27;
			    } else if (docosanol && antiinflammatory && supplements && !(analgesic || antiseptic || protectants)) {
			    	this.mode = 28;
			    } else if (docosanol && analgesic && antiseptic && !(antiinflammatory || protectants || supplements)) {
			    	this.mode = 29;
			    } else if (docosanol && analgesic && protectants && !(antiinflammatory || antiseptic || supplements)) {
			    	this.mode = 30;
			    } else if (docosanol && analgesic && supplements && !(antiinflammatory || antiseptic || protectants)) {
			    	this.mode = 31;
			    } else if (docosanol && antiseptic && protectants && !(antiinflammatory || analgesic || supplements)) {
			    	this.mode = 32;
			    } else if (docosanol && antiseptic && supplements && !(antiinflammatory || analgesic || protectants)) {
			    	this.mode = 33;
			    } else if (docosanol && protectants && supplements && !(antiinflammatory || analgesic || antiseptic)) {
			    	this.mode = 34;
			    } else if (antiinflammatory && analgesic && antiseptic && !(docosanol || protectants || supplements)) {
			    	this.mode = 35;
			    } else if (antiinflammatory && analgesic && protectants && !(docosanol || antiseptic || supplements)) {
			    	this.mode = 36;
			    } else if (antiinflammatory && analgesic && supplements && !(docosanol || antiseptic || protectants)) {
			    	this.mode = 37;
			    } else if (antiinflammatory && antiseptic && protectants && !(docosanol || analgesic || supplements)) {
			    	this.mode = 38;
			    } else if (antiinflammatory && antiseptic && supplements && !(docosanol || analgesic || protectants)) {
			    	this.mode = 39;
			    } else if (antiinflammatory && protectants && supplements && !(docosanol || analgesic || antiseptic)) {
			    	this.mode = 40;
			    } else if (analgesic && antiseptic && protectants && !(docosanol || antiinflammatory || supplements)) {
			    	this.mode = 41;
			    } else if (analgesic && antiseptic && supplements && !(docosanol || antiinflammatory || protectants)) {
			    	this.mode = 42;
			    } else if (analgesic && protectants && supplements && !(docosanol || antiinflammatory || antiseptic)) {
			    	this.mode = 43;
			    } else if (antiseptic && protectants && supplements && !(docosanol || antiinflammatory || analgesic)) {
			    	this.mode = 44;
			    }
			    //---------------------Quadruple----------------------
			    else if (docosanol && antiinflammatory && analgesic && antiseptic && !(protectants || supplements)) {
			    	this.mode = 45;
			    } else if (docosanol && antiinflammatory && analgesic && protectants && !(antiseptic || supplements)) {
			    	this.mode = 46;
			    } else if (docosanol && antiinflammatory && analgesic && supplements && !(antiseptic || protectants)) {
			    	this.mode = 47;
			    } else if (docosanol && antiinflammatory && antiseptic && protectants && !(analgesic || supplements)) {
			    	this.mode = 48;
			    } else if (docosanol && antiinflammatory && antiseptic && supplements && !(analgesic || protectants)) {
			    	this.mode = 49;
			    } else if (docosanol && antiinflammatory && protectants && supplements && !(analgesic || antiseptic)) {
			    	this.mode = 60;
			    } else if (docosanol && analgesic && antiseptic && protectants && !(antiinflammatory || supplements)) {
			    	this.mode = 61;
			    } else if (docosanol && analgesic && antiseptic && supplements && !(antiinflammatory || protectants)) {
			    	this.mode = 62;
			    } else if (docosanol && analgesic && protectants && supplements && !(antiinflammatory || antiseptic)) {
			    	this.mode = 63;
			    } else if (docosanol && antiseptic && protectants && supplements && !(antiinflammatory || analgesic)) {
			    	this.mode = 64;
			    } else if (antiinflammatory && analgesic && antiseptic && protectants && !(docosanol || supplements)) {
			    	this.mode = 65;
			    } else if (antiinflammatory && analgesic && antiseptic && supplements && !(docosanol || protectants)) {
			    	this.mode = 66;
			    } else if (antiinflammatory && analgesic && protectants && supplements && !(docosanol || antiseptic)) {
			    	this.mode = 67;
			    } else if (antiinflammatory && antiseptic && protectants && supplements && !(docosanol || analgesic)) {
			    	this.mode = 68;
			    } else if (analgesic && antiseptic && protectants && supplements && !(docosanol || antiinflammatory)) {
			    	this.mode = 69;
			    }
			    //------------------------------5 options------------------------------------
			    else if (docosanol && antiinflammatory && analgesic && antiseptic && protectants && !(supplements)) {
			    	this.mode = 70;
			    } else if (docosanol && antiinflammatory && analgesic && antiseptic && supplements && !(protectants)) {
			    	this.mode = 71;
			    } else if (docosanol && antiinflammatory && analgesic && protectants && supplements && !(antiseptic)) {
			    	this.mode = 72;
			    } else if (docosanol && antiinflammatory && antiseptic && protectants && supplements && !(analgesic)) {
			    	this.mode = 73;
			    } else if (docosanol && analgesic && antiseptic && protectants && supplements && !(antiinflammatory)) {
			    	this.mode = 74;
			    } else if (antiinflammatory && analgesic && antiseptic && protectants && supplements && !(docosanol)) {
			    	this.mode = 75;
			    }
			    //---------------All together-----------------------------	
			    else if (docosanol && antiinflammatory && analgesic && antiseptic && protectants && supplements) {
			    	this.mode = 76;
			    } else {
			    	this.mode = 50;
			    	ind = 0;
			    }
			}
			else if (this.pageId == 26)
			{
				var
			        dry = this.recs[0],
			    productive = this.recs[1],
			    congestion = this.recs[2],
			    runnyNose = this.recs[3],
			    soreThroat = this.recs[4],
			    night = this.recs[5],
			    tickly = this.recs[6],
			    itchy = this.recs[7],
			    heaviness = this.recs[8],
			    headache = this.recs[9],
			    blood = this.recs[10],
			    noSleep = this.recs[11],
			    prevention,
			    allabove = this.recs[12],
			    none = this.recs[13];
			    //Medication variables in collapsible

			    var
			        dextromethorphan = dry || tickly || night,
			    guaifenesin = productive || heaviness,
			    coughDrops = dry || tickly || soreThroat,
			    decongestant = congestion,
			    antihistamine = runnyNose || itchy;

			    prevention = false;
			    //conditions for showing none of the above division.
			    if (none) {
			    	this.mode = 1;
			    }
			    //conditions for showing prevention division.
			    else if (prevention) {
			    	this.mode = 2;
			    }
			    //conditions for All division + Others else if.
			    else if (allabove) {
			    	this.mode = 3;
			    }
			    //condition for a specific  checked field	
			    else if (headache || blood || noSleep) {
			    	this.mode = 4;
			    }
			    //condition for showing just one checked field
			    //--------------single------------------------
			    else if (dextromethorphan && !(guaifenesin || coughDrops || decongestant || antihistamine)) {
			    	this.mode = 5;
			    } else if (guaifenesin && !(dextromethorphan || coughDrops || decongestant || antihistamine)) {
			    	this.mode = 6;
			    } else if (coughDrops && !(dextromethorphan || guaifenesin || decongestant || antihistamine)) {
			    	this.mode = 7;
			    } else if (decongestant && !(dextromethorphan || guaifenesin || coughDrops || antihistamine)) {
			    	this.mode = 8;
			    } else if (antihistamine && !(dextromethorphan || guaifenesin || decongestant || coughDrops)) {
			    	this.mode = 9;
			    }
			    //-------------------------------double---------------------------
			    else if (dextromethorphan && guaifenesin && !(coughDrops || decongestant || antihistamine)) {
			    	this.mode = 10;
			    } else if (dextromethorphan && coughDrops && !(guaifenesin || decongestant || antihistamine)) {
			    	this.mode = 11;
			    } else if (dextromethorphan && decongestant && !(guaifenesin || coughDrops || antihistamine)) {
			    	this.mode = 12;
			    } else if (dextromethorphan && antihistamine && !(guaifenesin || coughDrops || decongestant)) {
			    	this.mode = 13;
			    } else if (guaifenesin && coughDrops && !(dextromethorphan || decongestant || antihistamine)) {
			    	this.mode = 14;
			    } else if (guaifenesin && decongestant && !(dextromethorphan || coughDrops || antihistamine)) {
			    	this.mode = 15;
			    } else if (guaifenesin && antihistamine && !(dextromethorphan || coughDrops || decongestant)) {
			    	this.mode = 16;
			    } else if (coughDrops && decongestant && !(dextromethorphan || guaifenesin || antihistamine)) {
			    	this.mode = 17;
			    } else if (coughDrops && antihistamine && !(dextromethorphan || guaifenesin || decongestant)) {
			    	this.mode = 18;
			    } else if (decongestant && antihistamine && !(dextromethorphan || guaifenesin || coughDrops)) {
			    	this.mode = 19;
			    }
			    //---------------------Triple----------------------
			    else if (dextromethorphan && guaifenesin && coughDrops && !(decongestant || antihistamine)) {
			    	this.mode = 20;
			    } else if (dextromethorphan && guaifenesin && decongestant && !(coughDrops || antihistamine)) {
			    	this.mode = 21;
			    } else if (dextromethorphan && guaifenesin && antihistamine && !(coughDrops || decongestant)) {
			    	this.mode = 22;
			    } else if (dextromethorphan && coughDrops && decongestant && !(guaifenesin || antihistamine)) {
			    	this.mode = 23;
			    } else if (dextromethorphan && coughDrops && antihistamine && !(guaifenesin || decongestant)) {
			    	this.mode = 24;
			    } else if (dextromethorphan && decongestant && antihistamine && !(guaifenesin || coughDrops)) {
			    	this.mode = 25;
			    } else if (guaifenesin && coughDrops && decongestant && !(dextromethorphan || antihistamine)) {
			    	this.mode = 26;
			    } else if (guaifenesin && coughDrops && antihistamine && !(dextromethorphan || decongestant)) {
			    	this.mode = 27;
			    } else if (guaifenesin && decongestant && antihistamine && !(dextromethorphan || coughDrops)) {
			    	this.mode = 28;
			    } else if (coughDrops && decongestant && antihistamine && !(dextromethorphan || guaifenesin)) {
			    	this.mode = 29;
			    }
			    //---------------------Quadruple----------------------
			    else if (dextromethorphan && guaifenesin && coughDrops && decongestant && !(antihistamine)) {
			    	this.mode = 30;
			    } else if (dextromethorphan && guaifenesin && coughDrops && antihistamine && !(decongestant)) {
			    	this.mode = 31;
			    } else if (dextromethorphan && guaifenesin && decongestant && antihistamine && !(coughDrops)) {
			    	this.mode = 32;
			    } else if (dextromethorphan && coughDrops && decongestant && antihistamine && !(guaifenesin)) {
			    	this.mode = 33;
			    } else if (guaifenesin && coughDrops && decongestant && antihistamine && !(dextromethorphan)) {
			    	this.mode = 34;
			    }
			    //------------------------------All together------------------------------------
			    else if (dextromethorphan && guaifenesin && coughDrops && decongestant && antihistamine) {
			    	this.mode = 35;
			    } else {
			    	this.mode = 50;
			    	ind = 0;
			    }
			}
			else if (this.pageId == 31)
			{
				var
				    indigestion = this.recs[0],
				bloated = this.recs[1],
				reflux = this.recs[2],
				fast = this.recs[3],
				often = this.recs[4],
				weeks = this.recs[5],
				stuck = this.recs[6],
				tar = this.recs[7],
				situps = this.recs[8],
				prevention = this.recs[9],
				none = this.recs[10];
				var
				    antacid = fast || indigestion || reflux || often || stuck || situps,
				antigas = indigestion || bloated,
				h2_blocker = reflux || often || weeks,
				ppi = reflux || often || stuck,
				doctor = stuck || tar || weeks;

				//conditions for showing none of the above division.
				if (none) {
					this.mode = 1;
				}
				//conditions for showing prevention division.
				else if (prevention) {
					this.mode = 2;
				}
				//--------------single------------------------
				else if (antacid && !(antigas || h2_blocker || ppi || doctor)) {
					this.mode = 3;
				} else if (antigas && !(antacid || h2_blocker || ppi || doctor)) {
					this.mode = 4;
				} else if (h2_blocker && !(antacid || antigas || ppi || doctor)) {
					this.mode = 5;
				} else if (ppi && !(antacid || antigas || h2_blocker || doctor)) {
					this.mode = 6;
				} else if (doctor && !(antacid || antigas || ppi || h2_blocker)) {
					this.mode = 7;
				}
				//-------------------------------double---------------------------
				else if (antacid && antigas && !(h2_blocker || ppi || doctor)) {
					this.mode = 8;
				} else if (antacid && h2_blocker && !(antigas || ppi || doctor)) {
					this.mode = 9;
				} else if (antacid && ppi && !(antigas || h2_blocker || doctor)) {
					this.mode = 10;
				} else if (antacid && doctor && !(antigas || h2_blocker || ppi)) {
					this.mode = 11;
				} else if (antigas && h2_blocker && !(antacid || ppi || doctor)) {
					this.mode = 12;
				} else if (antigas && ppi && !(antacid || h2_blocker || doctor)) {
					this.mode = 13;
				} else if (antigas && doctor && !(antacid || h2_blocker || ppi)) {
					this.mode = 14;
				} else if (h2_blocker && ppi && !(antacid || antigas || doctor)) {
					this.mode = 15;
				} else if (h2_blocker && doctor && !(antacid || antigas || ppi)) {
					this.mode = 16;
				} else if (ppi && doctor && !(antacid || antigas || h2_blocker)) {
					this.mode = 17;
				}
				//---------------------Triple----------------------
				else if (antacid && antigas && h2_blocker && !(ppi || doctor)) {
					this.mode = 18;
				} else if (antacid && antigas && ppi && !(h2_blocker || doctor)) {
					this.mode = 19;
				} else if (antacid && antigas && doctor && !(h2_blocker || ppi)) {
					this.mode = 20;
				} else if (antacid && h2_blocker && ppi && !(antigas || doctor)) {
					this.mode = 21;
				} else if (antacid && h2_blocker && doctor && !(antigas || ppi)) {
					this.mode = 22;
				} else if (antacid && ppi && doctor && !(antigas || h2_blocker)) {
					this.mode = 23;
				} else if (antigas && h2_blocker && ppi && !(antacid || doctor)) {
					this.mode = 24;
				} else if (antigas && h2_blocker && doctor && !(antacid || ppi)) {
					this.mode = 25;
				} else if (antigas && ppi && doctor && !(antacid || h2_blocker)) {
					this.mode = 26;
				} else if (h2_blocker && ppi && doctor && !(antacid || antigas)) {
					this.mode = 27;
				}
				//---------------------Quadruple----------------------
				else if (antacid && antigas && h2_blocker && ppi && !(doctor)) {
					this.mode = 28;
				} else if (antacid && antigas && h2_blocker && doctor && !(ppi)) {
					this.mode = 29;
				} else if (antacid && antigas && ppi && doctor && !(h2_blocker)) {
					this.mode = 30;
				} else if (antacid && h2_blocker && ppi && doctor && !(antigas)) {
					this.mode = 31;
				} else if (antigas && h2_blocker && ppi && doctor && !(antacid)) {
					this.mode = 32;
				}
				//------------------------------All together------------------------------------
				else if (antacid && antigas && h2_blocker && ppi && doctor) {
					this.mode = 33;
				} else {
					this.mode = 50;
					ind = 0;
				}
			}
			else if (this.pageId == 38)
			{
				var
				    indigestion = this.recs[0],
				bloated = this.recs[1],
				reflux = this.recs[2],
				fast = this.recs[3],
				often = this.recs[4],
				weeks = this.recs[5],
				stuck = this.recs[6],
				tar = this.recs[7],
				situps = this.recs[8],
				prevention = this.recs[9],
				none = this.recs[10];

				//Medication variables in collapsible
				var
				    antacid = fast || indigestion || reflux || often || stuck || situps;
				antigas = indigestion || bloated;
				h2_blocker = reflux || often || weeks;
				ppi = reflux || often || stuck;
				doctor = stuck || tar || weeks;

				//conditions for showing none of the above division.
				if (none) {
				    this.mode = 1;
				}
				//conditions for showing prevention division.
				else if (prevention) {
				    this.mode = 2;
				}
				//--------------single------------------------
				else if (antacid && !(antigas || h2_blocker || ppi || doctor)) {
				    this.mode = 3;
				} else if (antigas && !(antacid || h2_blocker || ppi || doctor)) {
				    this.mode = 4;
				} else if (h2_blocker && !(antacid || antigas || ppi || doctor)) {
				    this.mode = 5;
				} else if (ppi && !(antacid || antigas || h2_blocker || doctor)) {
				    this.mode = 6;
				} else if (doctor && !(antacid || antigas || ppi || h2_blocker)) {
				    this.mode = 7;
				}
				//-------------------------------double---------------------------
				else if (antacid && antigas && !(h2_blocker || ppi || doctor)) {
				    this.mode = 8;
				} else if (antacid && h2_blocker && !(antigas || ppi || doctor)) {
				    this.mode = 9;
				} else if (antacid && ppi && !(antigas || h2_blocker || doctor)) {
				    this.mode = 10;
				} else if (antacid && doctor && !(antigas || h2_blocker || ppi)) {
				    this.mode = 11;
				} else if (antigas && h2_blocker && !(antacid || ppi || doctor)) {
				    this.mode = 12;
				} else if (antigas && ppi && !(antacid || h2_blocker || doctor)) {
				    this.mode = 13;
				} else if (antigas && doctor && !(antacid || h2_blocker || ppi)) {
				    this.mode = 14;
				} else if (h2_blocker && ppi && !(antacid || antigas || doctor)) {
				    this.mode = 15;
				} else if (h2_blocker && doctor && !(antacid || antigas || ppi)) {
				    this.mode = 16;
				} else if (ppi && doctor && !(antacid || antigas || h2_blocker)) {
				    this.mode = 17;
				}
				//---------------------Triple----------------------
				else if (antacid && antigas && h2_blocker && !(ppi || doctor)) {
				    this.mode = 18;
				} else if (antacid && antigas && ppi && !(h2_blocker || doctor)) {
				    this.mode = 19;
				} else if (antacid && antigas && doctor && !(h2_blocker || ppi)) {
				    this.mode = 20;
				} else if (antacid && h2_blocker && ppi && !(antigas || doctor)) {
				    this.mode = 21;
				} else if (antacid && h2_blocker && doctor && !(antigas || ppi)) {
				    this.mode = 22;
				} else if (antacid && ppi && doctor && !(antigas || h2_blocker)) {
				    this.mode = 23;
				} else if (antigas && h2_blocker && ppi && !(antacid || doctor)) {
				    this.mode = 24;
				} else if (antigas && h2_blocker && doctor && !(antacid || ppi)) {
				    this.mode = 25;
				} else if (antigas && ppi && doctor && !(antacid || h2_blocker)) {
				    this.mode = 26;
				} else if (h2_blocker && ppi && doctor && !(antacid || antigas)) {
				    this.mode = 27;
				}
				//---------------------Quadruple----------------------
				else if (antacid && antigas && h2_blocker && ppi && !(doctor)) {
				    this.mode = 28;
				} else if (antacid && antigas && h2_blocker && doctor && !(ppi)) {
				    this.mode = 29;
				} else if (antacid && antigas && ppi && doctor && !(h2_blocker)) {
				    this.mode = 30;
				} else if (antacid && h2_blocker && ppi && doctor && !(antigas)) {
				    this.mode = 31;
				} else if (antigas && h2_blocker && ppi && doctor && !(antacid)) {
				    this.mode = 32;
				}
				//------------------------------All together------------------------------------
				else if (antacid && antigas && h2_blocker && ppi && doctor) {
				    this.mode = 33;
				} else {
				    this.mode = 50;
				    ind = 0;
				}
			}
			else if (this.pageId == 60)
			{
				var
				    itchy = this.recs[0],
				sore = this.recs[1],
				side = this.recs[2],
				wet = this.recs[3],
				keep_dry = this.recs[4],
				swollen = this.recs[5],
				streaks = this.recs[6],
				pus = this.recs[7],
				diabetic = this.recs[8],
				prevention = this.recs[9],
				none = this.recs[10];

				var
				    terbinafine = itchy || sore,
				clotrimazole = itchy || side,
				hydrocortisone = itchy || sore,
				powder = wet || keep_dry,
				domeboro = keep_dry;
				//conditions for showing none of the above division.
				if (none) {
				    this.mode = 1;
				}
				//conditions for showing prevention division.
				else if (prevention) {
				    this.mode = 2;
				}
				//conditions for All division + Others else if.
				else if (swollen || streaks || pus || diabetic) {
				    this.mode = 3;
				}
				//--------------single------------------------
				else if (terbinafine && !(clotrimazole || hydrocortisone || powder || domeboro)) {
				    this.mode = 4;
				} else if (clotrimazole && !(terbinafine || hydrocortisone || powder || domeboro)) {
				    this.mode = 5;
				} else if (hydrocortisone && !(terbinafine || clotrimazole || powder || domeboro)) {
				    this.mode = 6;
				} else if (powder && !(terbinafine || clotrimazole || hydrocortisone || domeboro)) {
				    this.mode = 7;
				} else if (domeboro && !(terbinafine || clotrimazole || powder || hydrocortisone)) {
				    this.mode = 8;
				}
				//-------------------------------double---------------------------
				else if (terbinafine && clotrimazole && !(hydrocortisone || powder || domeboro)) {
				    this.mode = 9;
				} else if (terbinafine && hydrocortisone && !(clotrimazole || powder || domeboro)) {
				    this.mode = 10;
				} else if (terbinafine && powder && !(clotrimazole || hydrocortisone || domeboro)) {
				    this.mode = 11;
				} else if (terbinafine && domeboro && !(clotrimazole || hydrocortisone || powder)) {
				    this.mode = 12;
				} else if (clotrimazole && hydrocortisone && !(terbinafine || powder || domeboro)) {
				    this.mode = 13;
				} else if (clotrimazole && powder && !(terbinafine || hydrocortisone || domeboro)) {
				    this.mode = 14;
				} else if (clotrimazole && domeboro && !(terbinafine || hydrocortisone || powder)) {
				    this.mode = 15;
				} else if (hydrocortisone && powder && !(terbinafine || clotrimazole || domeboro)) {
				    this.mode = 16;
				} else if (hydrocortisone && domeboro && !(terbinafine || clotrimazole || powder)) {
				    this.mode = 17;
				} else if (powder && domeboro && !(terbinafine || clotrimazole || hydrocortisone)) {
				    this.mode = 18;
				}
				//---------------------Triple----------------------
				else if (terbinafine && clotrimazole && hydrocortisone && !(powder || domeboro)) {
				    this.mode = 19;
				} else if (terbinafine && clotrimazole && powder && !(hydrocortisone || domeboro)) {
				    this.mode = 20;
				} else if (terbinafine && clotrimazole && domeboro && !(hydrocortisone || powder)) {
				    this.mode = 21;
				} else if (terbinafine && hydrocortisone && powder && !(clotrimazole || domeboro)) {
				    this.mode = 22;
				} else if (terbinafine && hydrocortisone && domeboro && !(clotrimazole || powder)) {
				    this.mode = 23;
				} else if (terbinafine && powder && domeboro && !(clotrimazole || hydrocortisone)) {
				    this.mode = 24;
				} else if (clotrimazole && hydrocortisone && powder && !(terbinafine || domeboro)) {
				    this.mode = 25;
				} else if (clotrimazole && hydrocortisone && domeboro && !(terbinafine || powder)) {
				    this.mode = 26;
				} else if (clotrimazole && powder && domeboro && !(terbinafine || hydrocortisone)) {
				    this.mode = 27;
				} else if (hydrocortisone && powder && domeboro && !(terbinafine || clotrimazole)) {
				    this.mode = 28;
				}
				//---------------------Quadruple----------------------
				else if (terbinafine && clotrimazole && hydrocortisone && powder && !(domeboro)) {
				    this.mode = 29;
				} else if (terbinafine && clotrimazole && hydrocortisone && domeboro && !(powder)) {
				    this.mode = 30;
				} else if (terbinafine && clotrimazole && powder && domeboro && !(hydrocortisone)) {
				    this.mode = 31;
				} else if (terbinafine && hydrocortisone && powder && domeboro && !(clotrimazole)) {
				    this.mode = 32;
				} else if (clotrimazole && hydrocortisone && powder && domeboro && !(terbinafine)) {
				    this.mode = 33;
				}
				//------------------------------All together------------------------------------
				else if (terbinafine && clotrimazole && hydrocortisone && powder && domeboro) {
				    this.mode = 34;
				} else {
				    this.mode = 50;
				    ind = 0;
				}
			}
			if (this.html_data != null)
			{
				let length = this.html_data[this.pageId].tabs[0].collapsable.length;
				for (let i=0;i<length;i++)
				{
					let m = this.html_data[this.pageId].tabs[0].collapsable[i].mode;
					let ma = this.html_data[this.pageId].tabs[0].collapsable[i].mode_above;
					this.html_data[this.pageId].tabs[0].collapsable[i].show = true;
					if (m != undefined)
					{
						let m_arr = m.split(",");
						let found = false;
						for (let j=0;j<m_arr.length;j++)
						{
							if (m_arr[j] == this.mode)
							{
								found = true; break;
							}
						}
						if (found)
							this.html_data[this.pageId].tabs[0].collapsable[i].show = true;
						else
							this.html_data[this.pageId].tabs[0].collapsable[i].show = false;
					}
					if (ma != undefined)
					{
						if (this.mode > parseInt(ma))
							this.html_data[this.pageId].tabs[0].collapsable[i].show = true;
						else
							this.html_data[this.pageId].tabs[0].collapsable[i].show = false;
					}
				}
			}
			this.page = ind;
		}
		else if (ind>=101 && ind<200)
		{
			this.page = 1;
			this.mode = ind - 100;
			if (this.html_data != null)	this.checkCollapsableShow();
		}
		else if (ind>=501 && ind<600){
			this.page = 1;
			this.mode = ind - 500;
			if (this.html_data != null) this.checkCollapsableShow();
		}
		else if (ind>=4901 && ind<5000)
		{
			this.page = 1;
			this.mode = ind - 4900;
			if (this.html_data != null) this.checkCollapsableShow();
		}
	}
	getHtmlData(){
		let num = Math.floor(this.pageId / 4);
	    this.html_data =  null;
	    this.http.get("assets/json/adult_pharmacist_childs_" + num + ".json").map(response => response.json()).subscribe(data => {
	        this.html_data = data;
	        if (data[this.pageId].tabs[0]['startpage'] != undefined){
	        	this.page = data[this.pageId].tabs[0]['startpage'];
	        	this.mode = this.page;
	        	this.checkCollapsableShow();
	        }
	        // console.log(this.html_data[this.pageId]);
	    });
	}
	checkCollapsableShow() {
		let length = this.html_data[this.pageId].tabs[0].collapsable.length;
		for (let i=0;i<length;i++)
		{
			let m = this.html_data[this.pageId].tabs[0].collapsable[i].mode;
			if (m != undefined)
			{
				let m_arr = m.split(",");
				let found = false;
				for (let j=0;j<m_arr.length;j++)
				{
					if (m_arr[j] == this.mode)
					{
						found = true; break;
					}
				}
				if (found)
					this.html_data[this.pageId].tabs[0].collapsable[i].show = true;
				else
					this.html_data[this.pageId].tabs[0].collapsable[i].show = false;
			}
		}
	}
}
