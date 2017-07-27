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
		11: 'n'
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
					"page": AdultSymptomInfographicsPage
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
	    console.log(num);
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
		this.page = ind;
	}
	ionViewDidLoad() {
		this.getHtmlData();
	}

}
