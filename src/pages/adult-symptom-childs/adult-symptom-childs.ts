import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';
import { FindNearestPage } from '../find-nearest/find-nearest';
import { NearestPage } from '../nearest/nearest';
// import { ColdMobilePage } from '../cold-mobile/cold-mobile';
// import { UrgentCarePage } from '../urgent-care/urgent-care';
import { AdultSymptomInfographicsPage } from '../adult-symptom-infographics/adult-symptom-infographics';
import { AdultTakeMobileListPage } from '../adult-take-mobile-list/adult-take-mobile-list';

@Component({
  selector: 'page-adult-symptom-childs',
  templateUrl: 'adult-symptom-childs.html'
})
export class AdultSymptomChildsPage {

	pagemode = {
		0: 'h',
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
		23: 'o',
		24: 'i',
		25: 'p',
		26: 'a',
		27: 'i',
		28: 'o',
		29: 'n',
		30: 'o',
		31: 'n',
		32: 'p',
		33: 'i',
		34: 'e',
		35: 'a',
		36: 'a',
		37: 'p',
		38: 'o',
		39: 'i',
		40: 'e',
		41: 'f',
		42: 'n',
		43: 'o',
		44: 'a',
		45: 'a',
		46: 'i',
		47: 'i',
		48: 'n',
		49: 'a',
		50: 'a',
		51: 'n',
		52: 'i',
		53: 'o',
		54: 'h',
		55: 'o',
		56: 'i',
		57: 'a',
		58: 'e',
		59: 'i',
		60: 'n',
		61: 'o',
		62: 'a',
		63: 'o'
	}
	@ViewChild(Content) content: Content;
	MyContent = {
	    screenWidth: 0,
	    screenHeight: 0,
	  }
	FYIDlg: any;
	firstname: string;
	currentTemp: any;
	dlgcount: number;
	recs: any;
	pages: any;
	page: number;
	mode: number;
	subPages: any;
	AbsoluteURL: string;
	temp_html_data: any;
	html_data: any;
	pageId: number;
	setting: any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public platform: Platform,
				public http: Http, private sanitizer: DomSanitizer) {
		this.menu = menu;
		this.AbsoluteURL = GlobalVars.getAbsoluteURL();
		this.page = 0;
		this.pageId = GlobalVars.getPageId();
    	this.setting = GlobalVars.getPageSetting(this.pagemode[this.pageId]);
    	this.firstname = GlobalVars.getFirstname();
    	this.currentTemp = 0;
	  	if (this.firstname != "")
	  		this.firstname += ",";
    	this.html_data =  null;
		this.subPages = [
				{	// 201 UrgentCarePage
					"id": 0,
					"page": FindNearestPage
				},
				{	// 202 UrgentCarePage
					"id": 1,
					"page": FindNearestPage
				},
				{	// 203 AdultSymptomInfographicsPage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 204 AdultTakeMobileListPage
					"id": 0,
					"page": AdultTakeMobileListPage
				},
				{	// 205 SinusPressureMobilePage
					"id": 24,
					"page": AdultSymptomChildsPage
				},
				{	// 206 AllergiesMobilePage
					"id": 0,
					"page": AdultSymptomChildsPage
				},
				{	// 207 ColdMobileInfographicsPage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 208 FluMobileInfographicsPage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 209 SleepInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 210 HairlossInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 211 DandruffInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 212 LiceInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 213 PinkeyeMobileInfographicsPage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 214 Nearest page
					"id": 0,
					"page": NearestPage
				},
				{	// 215 PinkeyeMobilePage
					"id": 8,
					"page": AdultSymptomChildsPage
				},
				{	// 216 RedeyeMobileInfographicsPage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 217 StyeyeMobileInfographicsPage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 218 DryeyeMobileInfographicsPage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 219 SwimearMobilePage
					"id": 13,
					"page": AdultSymptomChildsPage
				},
				{	// 220 EarwaxMobilePage
					"id": 14,
					"page": AdultSymptomChildsPage
				},
				{	// 221 ToothacheMobilePage
					"id": 17,
					"page": AdultSymptomChildsPage
				},
				{	// 222 EaracheInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 223 SwimearInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage	
				},
				{	// 224 EarwaxInfographicMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 225 MotionAdultRecomMobilePage				// NEEDS TO BE UPDATED
					"id": 0,
					"page": AdultSymptomChildsPage
				},
				{	// 226 MotionSicknessInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 227 VertigoAdultRecomMobilePage
					"id": 0,
					"page": AdultSymptomChildsPage
				},
				{	// 228 VertigoInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 229 ToothacheInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 230 ColdSoreInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 231 CankerSoreInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 232 DrymouthInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage	
				},	
				{	// 233 BadBreathInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 234 ColdMobilePage
					"id": 1,
					"page": AdultSymptomChildsPage
				},
				{	// 235 CongestionInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 236 RunnyNoseInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 237 SinusPressureInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 238 SnoringInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 239 CoughInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 240 SoreThroatInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 241 StiffNeckInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage	
				},
				{	// 242 ChestCongestionInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 243 BackPainInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 244 HeartburnInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 245 ShoulderInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage	
				},
				{	// 246 WristPainInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage		
				},
				{	// 247 ElbowInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage	
				},
				{	// 248 ConstipationInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage	
				},
				{	// 249 StomachFluMobilePage
					"id": 40,
					"page": AdultSymptomChildsPage	
				},
				{	// 250 DiarrheaInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage	
				},
				{	// 251 FoodPoisoningMobilePage
					"id": 41,
					"page": AdultSymptomChildsPage	
				},
				{	// 252 NauseaInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage	
				},
				{	// 253 MotionSicknessMobilePage
					"id": 15,
					"page": AdultSymptomChildsPage	
				},
				{	// 254 StomachAcheInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage	
				},
				{	// 255 StomachFluInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 256 FoodPoisoningInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 257 YeastInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 258 UtiInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 259 JockitchInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 260 HemorrhoidsInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage	
				},
				{	// 261 PinwormInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage	
				},
				{	// 262 MenstrualInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 263 BitesInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 264 EczemaInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 265 BurnInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage	
				},
				{	// 266 SunburnInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 267 PoisonIvyInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 268 HivesInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 269 BitesMobilePage
					"id": 48,
					"page": AdultSymptomChildsPage	
				},
				{	// 270 RingwormInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 271 WartsInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 272 AnkleSprainInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 273 AthletesInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 274 FootPainInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				},
				{	// 275 ArthritisInfographicsMobilePage
					"id": 0,
					"page": AdultSymptomInfographicsPage
				}
			];
		this.recs = [
			false, false, false, false, false, false, false, false, false, false, false, false, false
		];
		this.pages = [true, true, true, true, true, true, true, true, true, true, true, true, true];
		this.mode = 0;
	}
	getTitle(){
	    if (this.html_data != null)
	    {
	    	let navbar = this.html_data[this.pageId].navbar;
	    	let title: string;
	    	title = "&nbsp;";
	    	for (let each in navbar) {
	    		if (navbar[each]['min'] <=this.page && navbar[each]['max']>this.page)
	    		{
	    			title = navbar[each]['content'];
	    		}
	    	}
	    	if (title == "firstname") title = this.firstname;
	    	return title;
	    }
	    else
			return "";
	}
	getHeader(){
		if (this.html_data != null){
			let data = this.html_data[this.pageId]['pages'][this.page]['header'];
			data = data.replace("{{currentTemp}}", this.currentTemp);
			data = data.replace("{{firstname}}", this.firstname);
			return data;
		}
		else
			return "";
	}
	getHtmlData(){
		let num = Math.floor(this.pageId / 4);
	    this.html_data =  null;
	    this.http.get("assets/json/adult_symptom_childs_" + num + ".json").map(response => response.json()).subscribe(data => {
	        this.html_data = data;
	        this.FYIDlg = this.html_data[this.pageId]['fyidlg'];
	        this.dlgcount = this.FYIDlg.length;
	    });
	}
	showMenu() {
	    var menu = document.querySelector( 'ion-menu ion-content' );
	    var setting = GlobalVars.getPageSetting(this.pagemode[this.pageId]);
	    menu.className = "outer-content content" + " " + setting['class'];
	  	this.menu.open();
	}
	processFunc(button: any){
		if (button.go == 0) 
			return;
		else if (button.go > 0)
		{
			let slider, myslider, options;
			myslider = this.html_data[this.pageId]['pages'][this.page]['slider'];
			if (myslider != undefined && myslider != null)
			{
				let sliderstep = this.html_data[this.pageId]['pages'][this.page]['sliderstep'], go = this.page+1;
				for (let each in sliderstep) {
		    		if (sliderstep[each]['min'] <this.currentTemp && sliderstep[each]['max']>=this.currentTemp)
		    		{
		    			go = sliderstep[each]['go']; break;
		    		}
		    	}
		    	this.togglePage(go);
			}
			else
			{
				slider = this.html_data[this.pageId]['pages'][button.go]['slider'];
				options = this.html_data[this.pageId]['pages'][button.go]['options'];
				if (slider != undefined && slider != null)
					this.currentTemp = slider['min'];
				if (options != undefined && options != null)
				{
					for (let i=0;i<this.recs.length;i++)
						this.recs[i] = false;
				}
				this.togglePage(button.go);
			}
		}
		else if (button.go>-200 && button.go<=-100)
			this.toggleFYIDlg(true, -button.go-101);
		else{
			let ind = 0-button.go-201;
			GlobalVars.setPageId(this.subPages[ind].id);
			this.navCtrl.push(this.subPages[ind].page);
		}
	}
	togglePages(ind: number) {
	    this.pages[ind] = !this.pages[ind];
	}
	toggleFYIDlg(b: boolean, id: number) {
		if (b)
		{
			var scrollPos = this.content.getContentDimensions().scrollTop;
			this.MyContent.screenWidth = this.platform.width();
			this.MyContent.screenHeight = this.platform.height();
			this.FYIDlg[id].width = this.MyContent.screenWidth * 0.9;
			this.FYIDlg[id].maxWidth = 600;
			if (this.FYIDlg[id].width > this.FYIDlg[id].maxWidth)
				this.FYIDlg[id].width = this.FYIDlg[id].maxWidth;
			this.FYIDlg[id].left = (this.MyContent.screenWidth - this.FYIDlg[id].width) / 2;
			this.FYIDlg[id].top = (this.MyContent.screenHeight - this.FYIDlg[id].height) / 2 + scrollPos - 60;
		}
		this.FYIDlg[id].show = b;
	}
	toggleRecs(ind: number){
		if (ind == 10){
			this.recs[9] = false;
			this.toggleAllRecs(false);
		}
		else if (ind == 9){
			this.recs[10] = false;
			this.toggleAllRecs(true);
		}
		else
			this.recs[10] = false;
	}
	toggleAllRecs(b: boolean){
		for (let i=0;i<9;i++)
			this.recs[i] = b;
	}
	togglePage(ind: number) {
		if (this.pageId == 0 && ind == 32)
		{
			let len = 0;
			for (let i=0;i<6;i++)
			{
				if (this.recs[i] == true) len++;
			}
			this.mode = 0;
			if (this.recs[10] == true)
				this.page = 32;
			else if (len>0)
				this.page = 33;
			else{
				this.mode = 100;
				ind = 31;
			}
		}
		else if (this.pageId == 1 && ind == 11){
			let trueCount = 0;
		  	for (let i=0;i<9;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;
	    	if (this.recs[10] == true)
	    		this.mode = 1;
	    	else if (this.recs[9] == true)
	    		this.mode = 2;
	    	else if (this.recs[8] == true)
	    		this.mode = 3;
	    	else if (this.recs[3] == false && trueCount > 0)
	    		this.mode = 4;
	    	else if (trueCount > 0)
	    		this.mode = 5;
	    	else{
	    		this.mode = 6;
	    		ind = 10;
	    	}
	    	if (this.mode != 6)
	    		ind = 11 + this.mode - 1;
		}
		else if (this.pageId == 1 && ind == 42){
	    	let trueCount = 0;
		  	for (let i=0;i<6;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;
		  	this.mode = 0;
		  	if (this.recs[10] == true)
		  		ind = 43;
		  	else if (trueCount > 0)
		  		ind = 42;
		  	else{
		  		this.mode = 100;
		  		ind = 41;
		  	}
	    }
	    else if (this.pageId == 2 && ind == 51)
	  	{
	  		let trueCount = 0;
		  	for (let i=0;i<9;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;
		  	if (this.recs[10] == true)
		  		this.mode = 1;
		  	else if (this.recs[9] == true)
		  		this.mode = 2;
		  	else if (trueCount > 0)
		  		this.mode = 3;
		  	else{
		  		this.mode = 100;
		  		ind = 50;
		  	}
		  	if (this.mode != 100) ind = 50 + this.mode;
	  	}
	  	else if (this.pageId==3 && ind == 111)
	  	{
	  		let trueCount = 0;
		  	for (let i=0;i<5;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;
		  	if (this.recs[10] == true)
		  		this.mode = 1;
		  	else if (this.recs[3] == true)
		  		this.mode = 2;
		  	else if (trueCount > 0)
		  		this.mode = 3;
		  	else{
		  		this.mode = 100;
		  		ind = 110;
		  	}
		  	if (this.mode != 100) ind = 110 + this.mode;
	  	}
	  	else if (this.pageId==4 && ind == 21)
	  	{
	  		let trueCount = 0;
		  	for (let i=0;i<7;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;
		  	if (this.recs[10] == true)
		  		this.mode = 1;
		  	else if (trueCount > 0)
		  		this.mode = 2;
		  	else{
		  		this.mode = 100;
		  		ind = 20;
		  	}
			if (this.mode != 100) ind = 20 + this.mode;
	  	}
	  	else if (this.pageId==4 && ind == 31)
	  	{
	  		let trueCount = 0;
		  	for (let i=0;i<7;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;
		  	if (this.recs[10] == true)
		  		this.mode = 1;
		  	else if (this.recs[5] == true)
		  		this.mode = 2;
		  	else if (trueCount > 0)
		  		this.mode = 3;
		  	else{
		  		this.mode = 100;
		  		ind = 30;
		  	}
		  	if (this.mode != 100) ind = 30 + this.mode;
	  	}
	  	else if (this.pageId==4 && ind == 41)
	  	{
	  		let trueCount = 0;
		  	for (let i=0;i<6;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;
		  	if (this.recs[10] == true)
		  		this.mode = 1;
		  	else if (trueCount > 0)
		  		this.mode = 2;
		  	else{
		  		this.mode = 100;
		  		ind = 40;
		  	}
		  	if (this.mode != 100) ind = 40 + this.mode;
	  	}
	  	else if (this.pageId==4 && ind == 61)
	  	{
	  		let trueCount = 0;
		  	for (let i=0;i<6;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;
		  	if (this.recs[10] == true)
		  		this.mode = 1;
		  	else if (this.recs[3] == true)
		  		this.mode = 2;
		  	else if (trueCount > 0)
		  		this.mode = 3;
		  	else{
		  		this.mode = 100;
		  		ind = 60;
		  	}
		  	if (this.mode != 100) ind = 60 + this.mode;
	  	}
	  	else if (this.pageId==14 && ind == 2)
	  	{
	  		let trueCount = 0;
		  	for (let i=0;i<5;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;
		  	if (this.recs[10] == true)
		  		this.mode = 1;
		  	else if (this.recs[0] == true)
		  		this.mode = 2;
		  	else if (this.recs[0] == true)
		  		this.mode = 3;
		  	else if (trueCount > 0)
		  		this.mode = 4;
		  	else{
		  		this.mode = 100;
		  		ind = 1;
		  	}
		  	if (this.mode != 100) ind = 1 + this.mode;
	  	}
	  	else if (this.pageId==16 && ind == 11){
	  		let trueCount = 0;
		  	for (let i=0;i<8;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;
		  	if (this.recs[10] == true)
		  		this.mode = 1;
		  	else if (trueCount > 0)
		  		this.mode = 2;
		  	else{
		  		this.mode = 100;
		  		ind = 10;
		  	}
		  	if (this.mode != 100) ind = 10 + this.mode;
	  	}
	  	else if (this.pageId==16 && ind == 31)
	  	{
	  		let trueCount = 0;
		  	for (let i=0;i<7;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;
		  	if (this.recs[10] == true)
		  		this.mode = 1;
		  	else if (trueCount > 0)
		  		this.mode = 2;
		  	else{
		  		this.mode = 100;
		  		ind = 30;
		  	}
		  	if (this.mode != 100) ind = 30 + this.mode;
	  	}
	  	else if (this.pageId==18 && ind == 21)
	  	{
	  		let trueCount = 0;
		  	for (let i=0;i<7;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;
		  	if (this.recs[7] == true)
		  		this.mode = 1;
		  	else if (this.recs[6] == true)
		  		this.mode = 2;
		  	else if (trueCount > 0)
		  		this.mode = 3;
		  	else{
		  		this.mode = 100;
		  		ind = 20;
		  	}
		  	if (this.mode != 100) ind = 20 + this.mode;
	  	}
	  	else if (this.pageId==19 && ind == 31)
	  	{
	  		let trueCount = 0;
		  	for (let i=0;i<9;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;
		  	if (this.recs[10] == true)
		  		this.mode = 1;
		  	else if (this.recs[5] == true)
		  		this.mode = 2;
		  	else if (this.recs[7] == true)
		  		this.mode = 3;
		  	else if (trueCount > 0)
		  		this.mode = 4;
		  	else{
		  		this.mode = 100;
		  		ind = 30;
		  	}
		  	if (this.mode != 100) ind = 30 + this.mode;
	  	}
	  	else if (this.pageId==22 && ind == 2)
	  	{
	  		let trueCount = 0;
		  	for (let i=0;i<5;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;
		  	if (this.recs[10] == true)
		  		this.mode = 1;
		  	else if (this.recs[4] == true)
		  		this.mode = 2;
		  	else if (this.recs[0] == true)
		  		this.mode = 3;
		  	else if (this.recs[2] == true)
		  		this.mode = 4;
		  	else if (this.recs[3] == true)
		  		this.mode = 5;
		  	else if (trueCount > 0)
		  		this.mode = 6;
		  	else{
		  		this.mode = 100;
		  		ind = 1;
		  	}
		  	if (this.mode != 100) ind = 1 + this.mode;
	  	}
	  	else if (this.pageId==27 && ind == 41){
	  		let trueCount = 0;
		  	for (let i=0;i<5;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;

	    	if (this.recs[10] == true)
	    		this.mode = 1;
	    	else if (trueCount > 0)
	    		this.mode = 2;
	    	else{
	    		this.mode = 100;
	    		ind = 40;
	    	}
	    	if (this.mode != 100) ind = 40 + this.mode;
	    }
	    else if (this.pageId==32 && ind == 2){
	  		let trueCount = 0;
		  	for (let i=0;i<6;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;

	    	if (this.recs[10] == true)
	    		this.mode = 1;
	    	else if (this.recs[9] == true)
	    		this.mode = 2;
	    	else if (trueCount > 0)
	    		this.mode = 3;
	    	else{
	    		this.mode = 100;
	    		ind = 1;
	    	}
	    	if (this.mode != 100) ind = 1 + this.mode;
	    }
	    else if (this.pageId==55 && ind == 21){
	  		let trueCount = 0;
		  	for (let i=0;i<9;i++)
		  		if (this.recs[i] == true)
		  			trueCount ++;

	    	if (this.recs[10] == true)
	    		this.mode = 1;
	    	else if (this.recs[5] == true)
	    		this.mode = 2;
	    	else if (this.recs[0] == true)
	    		this.mode = 3;
	    	else if (this.recs[3] == true)
	    		this.mode = 4;
	    	else if (trueCount > 0)
	    		this.mode = 5;
	    	else{
	    		this.mode = 100;
	    		ind = 20;
	    	}
	    	if (this.mode != 100) ind = 20 + this.mode;
	    }
		this.page = ind;
	}
	ionViewDidLoad() {
		this.getHtmlData();
	}

}
