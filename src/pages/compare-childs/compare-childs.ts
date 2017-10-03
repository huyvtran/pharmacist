import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';
// import { CommentComparePage } from '../comment-compare/comment-compare';
import { ComparePage } from '../compare/compare';
// import { CompareFeedbackPage } from '../compare-feedback/compare-feedback';

@Component({
  selector: 'page-compare-childs',
  templateUrl: 'compare-childs.html'
})
export class CompareChildsPage {

	@ViewChild('mainBody') elementView: ElementRef;
	@ViewChild(Content) content: Content;
	setting: any;
	pageId: number;
	mode = {
	    1: 'h',
	    2: 0,
	    3: 'n',
	    4: 1,
	    5: 'a',
	    6: 'o',
	    7: 2,
	    8: 3,
	    9: 4,
	    10: 'g',
	    11: 5,
	    12: 'i',
	    13: 'n',
	    14: 'i', // DecongestantsPage
		15: 'a', // MultisymptomsPage
		16: 'o', // ImmuneboostersPage
		17: 'a', // DryEyeDropsPage
		18: 'f', // RedEyeDropsPage
		19: 'g', // ItchyEyeDropsPage
		// 20: '', // CompareYeastPage
  		// 21: '', // CompareAthletesfootPage
    	22: 'e', // AntacidsPage
    	23: 'a', // AcidReducersPage
    	24: 'n', // HeartburnGroupPage
    	25: 'o', // PainPillsPage, 
    	26: 'e', // PainCreamsPage, 
    	27: 'a', // PainPatchesPage
	};
	apiUrls = {
		1: "allergy_meds",
		3:  "cold_meds_child",
		5:  "coldsore_meds",
		6:  "energy_drinks",
		10:  "laxatives",
		12:  "probiotics",
		13: "sleep_aids",
		14:  "decongestants",
		15:  "multisymptoms",
		16:  "immuneboosters",
		17:  "dry_eye_drops",
		18:  "red_eye_drops",
		19:  "itchy_eye_drops",
		22:  "antacids",
		23:  "acid_reducers",
		24:  "heartburn_group",
		25:  "pain_pills",
		26:  "pain_creams",
		27:  "pain_patches"
	};
	html_data: any;
	MyContent = {
	    width: 0,
	    height: 0,
	    screenWidth: 0,
	    screenHeight: 0,
	    scrollPos: 0,
	    isArrowShow: false
	};
	SearchDlg = {
	    show: false,
	    height: 100,
	    width: 0,
	    maxWidth: 0,
	    left: 0,
	    top: 0
	};
	SortDlg = {
	    show: false,
	    height: 437,
	    width: 157,
	    maxWidth: 0,
	    left: 0,
	    top: 0
	};
	FeedbackDlg = {
	    show: false,
	    height: 511,
	    width: 309,
	    maxWidth: 0,
	    left: 0,
	    top: 0 
	};
	searchText: string;
	AbsoluteURL: string;
	RestApiURL: string;
	TableData: any;
	TableTempData: any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
	    public http: Http, private sanitizer: DomSanitizer, public platform: Platform) {
	    this.pageId = GlobalVars.getPageId();
	  	this.menu = menu;
	  	this.setting = GlobalVars.getPageSetting(this.mode[this.pageId]);
	    this.initData();
	}
	getHtmlData(){
	    this.html_data = null;
	    this.http.get("assets/json/compare_child.json").map(response => response.json()).subscribe(data => {
	        this.html_data = data;
	        for (let i=0;i<11;i++)
		    {
		    	this.html_data.ShowTabs[i]['title'] = this.html_data.tabTitles[ this.pageId ][i];
		    }
	    });
	  }
	showCommentCompare() {
	    // this.navCtrl.push(CommentComparePage);
	}
	showMenu() {
		var menu = document.querySelector( 'ion-menu ion-content' );
    	menu.className = "outer-content content" + " " + this.setting['class'];
	    this.menu.open();
	}
	toggleSearchDlg(b: boolean) {
	    if (b) {
	        var scrollPos = this.content.getContentDimensions().scrollTop;
	        if (this.MyContent.height == 0) {
	            this.MyContent.height = this.elementView.nativeElement.offsetHeight + 56;
	            this.MyContent.width = this.elementView.nativeElement.offsetWidth;
	        }
	        if (this.elementView.nativeElement.offsetWidth > 500)
	            this.SearchDlg.width = 400;
	        else
	            this.SearchDlg.width = this.MyContent.width * 0.8;
	        this.SearchDlg.maxWidth = this.MyContent.width * 0.8;
	        this.SearchDlg.left = (this.MyContent.screenWidth - this.SearchDlg.width) / 2;
	        this.SearchDlg.top = (this.MyContent.screenHeight - this.SearchDlg.height) / 2 + scrollPos;
	    }
	    this.SearchDlg.show = b;
	}
	toggleSortDlg(b: boolean) {
	    if (b) {
	        var scrollPos = this.content.getContentDimensions().scrollTop;
	        if (this.MyContent.height == 0) {
	            this.MyContent.height = this.elementView.nativeElement.offsetHeight + 56;
	            this.MyContent.width = this.elementView.nativeElement.offsetWidth;
	        }
	        this.SortDlg.maxWidth = this.MyContent.width * 0.8;
	        this.SortDlg.left = this.MyContent.screenWidth - this.SortDlg.width - 20;
	        this.SortDlg.top = (this.MyContent.screenHeight - this.SortDlg.height) / 2 + scrollPos;
	    }
	    this.SortDlg.show = b;
	}
	toggleFeedbackDlg(b: boolean) {
	    if (b)
	    {
			var scrollPos = this.content.getContentDimensions().scrollTop;
			if (this.MyContent.height == 0)
			{
				this.MyContent.height = this.elementView.nativeElement.offsetHeight + 56;
				this.MyContent.width = this.elementView.nativeElement.offsetWidth;
			}
			this.FeedbackDlg.maxWidth = this.MyContent.width * 0.8;
			this.FeedbackDlg.left = (this.MyContent.screenWidth - this.FeedbackDlg.width) / 2;
			this.FeedbackDlg.top = (this.MyContent.screenHeight - this.FeedbackDlg.height) / 2 + scrollPos;
	    }
	    this.FeedbackDlg.show = b;
	}
	showCompare() {
	    this.navCtrl.push(ComparePage); 
	}
	showFeedback() {
	    // this.navCtrl.push(CompareFeedbackPage); 
	}
	toggleSort(tabs) {
	    tabs["ui-checkbox-on"] = 1 - tabs["ui-checkbox-on"];
	}
	clearSearch() {
	    this.searchText = "";
	    this.TableTempData = this.TableData;
	}
	filterItems(searchbar) {
	    var q = this.searchText;
	    this.TableTempData = this.TableData;
	    if (q.length == 0) {
	        return;
	    }
	    this.TableTempData = this.TableTempData.filter((v) => {
	        var found = false;
	        Object.keys(v).forEach(function(key) {
	            if (v[key].toLowerCase().indexOf(q.toLowerCase()) > -1) {
	                found = true;
	                return false;
	            }
	        });
	        return found;
	    })
	}
	initData() {
	    this.AbsoluteURL = GlobalVars.getAbsoluteURL();
	    this.RestApiURL = GlobalVars.getApiURL() + "page=" + this.apiUrls[this.pageId];
	    this.searchText = "";
	    this.TableData = [];
	    this.TableTempData = [];
	    this.MyContent.screenWidth = this.platform.width();
	    this.MyContent.screenHeight = this.platform.height();
	    this.MyContent.scrollPos = 0;
	    this.MyContent.isArrowShow = false;
	}
	loadData() {
	    //this.RestApiURL
	    // console.log("Loading data");
	    this.http.get(this.RestApiURL).map(res => res.json())
	        .subscribe(data => {
	            this.TableTempData = this.TableData = data;
	            // console.log(data);
	        }),
	        err => {
	            // console.log("Oops!");
	        }
	}
	gotoTop(scrollDuration) {
	    this.content.scrollToTop(scrollDuration);
	}
	getScrollPosition(event) {
	    var arrow = document.getElementById('arrow_upward');
	    this.MyContent.scrollPos = event.scrollTop;
	    if (this.MyContent.scrollPos >= this.MyContent.screenHeight) {
	        this.MyContent.isArrowShow = true;
	        arrow.style.display = 'block';
	    } else {
	        this.MyContent.isArrowShow = false;
	        arrow.style.display = 'none';
	    }
	}
	ngAfterViewInit() {
	    // this.content.enableScrollListener();
	    this.content.ionScroll.subscribe((event) => {
	        this.getScrollPosition(event);
	    });
	}
	ionViewDidLoad() {
		this.getHtmlData();
	    this.loadData();
	    var arrow = document.getElementById('arrow_upward');
	    arrow.style.display = 'none';
	}

}
