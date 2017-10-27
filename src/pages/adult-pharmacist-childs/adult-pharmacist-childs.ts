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
			if (ind == special[0])
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
			if (this.html_data != null)
			{
				this.checkCollapsableShow();	
			}
		}
		else if (ind>=501 && ind<600){
			this.page = 1;
			this.mode = ind - 500;
			this.checkCollapsableShow();
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
