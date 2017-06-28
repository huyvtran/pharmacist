import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AllergyMeds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
	pageTitle = {
		1: "Allergy medications",
		3: "Children's Cold",
		5: "Coldsore medicines",
		6: "Energy drinks",
		10: "Laxatives",
		12: "Probiotics",
		13: "Sleep aids",
		14: "Decongestants",
		15: "Multi-symptoms Cold",
		16: "Immune Boosters",
		17: "Dry Eyes",
		18: "Red eyes",
		19: "Itchy eyes",
		22: "Heartburn relief",
		23: "Heartburn relief",
		24: "Heartburn relief",
		25: "Pain relief",
		26: "Pain creams",
		27: "Pain patches",
	}
	aClass = {
		1: "linkGreen",
		3: "linkCyan",
		5: "linkBlue",
		6: "linkOrange",
		10: "linkGreen",
		12: "linkRed",
		13: "linkBlue",
		14: "linkRed",
		15: "linkBlue",
		16: "linkOrange",
		17: "linkBlue",
		18: "linkRed",
		19: "linkGreen",
		22: "linkOrange",
		23: "linkBlue",
		24: "linkCyan",
		25: "linkOrange",
		26: "linkRed",
		27: "linkBlue",
	}
	imageUrls = {
		1: "pharm/female/pharm-alicia-green.svg",
		3: "pharm/female/pharm-amanda-cyan.svg",
		5: "pharm/female/pharm-becky.svg",
		6: "pharm/male/pharm-barry-orange.svg",
		10: "pharm/male/pharm-joe-green.svg",
		12: "pharm/male/pharm-john-port-red.svg",
		13: "pharm/female/pharm-selena-cyan.svg",
		14: "pharm/male/pharm-john-port-red.svg",
		15: "pharm/male/pharm-john-port.svg",
		16: "pharm/male/pharm-john-port-orange.svg",
		17: "pharm/female/pharm-trisha.svg",
		18: "pharm/female/pharm-trisha-red.svg",
		19: "pharm/female/pharm-trisha-green.svg",
		22: "pharm/male/pharm-henry-orange.svg",
		23: "pharm/male/pharm-henry.svg",
		24: "pharm/male/pharm-henry-cyan.svg",
		25: "pharm/male/pharm-tony-orange.svg",
		26: "pharm/male/pharm-tony-orange.svg",
		27: "pharm/male/pharm-tony.svg",
	};
	apiUrls = {
		1: "allergy_meds",
		3: "cold_meds_child",
		5: "coldsore_meds",
		6: "energy_drinks",
		10: "laxatives",
		12: "probiotics",
		13: "sleep_aids",
		14: "decongestants",
		15: "multisymptoms",
		16: "immuneboosters",
		17: "dry_eye_drops",
		18: "red_eye_drops",
		19: "itchy_eye_drops",
		22: "antacids",
		23: "acid_reducers",
		24: "heartburn_group",
		25: "pain_pills",
		26: "pain_creams",
		27: "pain_patches",
	}
	tabTitles = {
		1: [
			"Description",
			"How supplied",
			"Onset",
			"Duration",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Brand Names",
			""
		],
		3: [
			"Ingredients",
			"Description",
			"Onset",
			"Duration",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Brand Names",
			""
		],
		5: [
			"Description",
			"Active Ingredients",
			"Heading Duration",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"",
			"",
			""
		],
		6: [
			"Ingredients",
			"Caffeine Content",
			"Onset",
			"Duration",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Manuf.",
			""
		],
		10: [
			"Description",
			"How Supplied",
			"Onset",
			"Duration",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Brand Names",
			""
		],
		12: [
			"Ingredients",
			"Manuf. Claim",
			"Dose",
			"Duration",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Manufacturer",
			""
		],
		13: [
			"Ingredients",
			"Description",
			"Onset",
			"Duration",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Manufacturer",
			""
		],
		14: [
			"Ingredients",
			"Uses",
			"Onset",
			"Duration",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Brand Names",
			""
		],
		15: [
			"Ingredients",
			"Use For",
			"Onset",
			"Duration",
			"Pros",
			"Cons",
			"Our Take",
			"User Votes",
			"Avg. Cost",
			"",
			"",
		],
		16: [
			"Ingredients",
			"Description",
			"Onset",
			"Duration",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"",
			""
		],
		17: [
			"Active Ingredients",
			"Uses",
			"Preservative",
			"How Supplied",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Manufacturer",
			""
		],
		18: [
			"Active Ingredients",
			"Uses",
			"Preservative",
			"How Supplied",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Manufacturer",
			"",
		],
		19: [
			"Active Ingredients",
			"Uses",
			"Preservative",
			"How Supplied",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Manufacturer",
			"",
		],
		22: [
			"Ingredients",
			"Description",
			"Onset",
			"Duration",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Manufacturer",
			""
		],
		23: [
			"",
			"Description",
			"Onset",
			"Duration",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Brand Names",
			""
		],
		24: [
			"Ingredients",
			"Description",
			"Onset",
			"Duration",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Manufacturer",
			""
		],
		25: [
			"How Supplied",
			"Description",
			"Onset",
			"Duration",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Brand Names",
			""
		],
		26: [
			"Ingredients",
			"Description",
			"Onset",
			"Duration",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Brand Names",
			""
		],
		27: [
			"Ingredients",
			"Description",
			"Onset",
			"Duration",
			"Pros",
			"Cons",
			"FYI",
			"User Votes",
			"Avg. Cost",
			"Brand Names",
			""
		],
	}
	ShowTabs = [{
	        title: "Description",
	        "ui-checkbox-on": true,
	        "ui-checkbox-off": false
	    },
	    {
	        title: "How supplied",
	        "ui-checkbox-on": true,
	        "ui-checkbox-off": false
	    },
	    {
	        title: "Onset",
	        "ui-checkbox-on": false,
	        "ui-checkbox-off": true
	    },
	    {
	        title: "Duration",
	        "ui-checkbox-on": false,
	        "ui-checkbox-off": true
	    },
	    {
	        title: "Pros",
	        "ui-checkbox-on": false,
	        "ui-checkbox-off": true
	    },
	    {
	        title: "Cons",
	        "ui-checkbox-on": false,
	        "ui-checkbox-off": true
	    },
	    {
	        title: "FYI",
	        "ui-checkbox-on": false,
	        "ui-checkbox-off": true
	    },
	    {
	        title: "User Votes",
	        "ui-checkbox-on": false,
	        "ui-checkbox-off": true
	    },
	    {
	        title: "Avg. Cost",
	        "ui-checkbox-on": false,
	        "ui-checkbox-off": true
	    },
	    {
	        title: "Brand Names",
	        "ui-checkbox-on": false,
	        "ui-checkbox-off": true
	    },
	    {
	        title: "",
	        "ui-checkbox-on": false,
	        "ui-checkbox-off": true
	    }
	];
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
	    tabs["ui-checkbox-on"] = tabs["ui-checkbox-off"];
	    tabs["ui-checkbox-off"] = !tabs["ui-checkbox-off"];
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

	    for (let i=0;i<11;i++)
	    {
	    	this.ShowTabs[i]['title'] = this.tabTitles[ this.pageId ][i];
	    }
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
	    this.content.enableScrollListener();
	    this.content.ionScroll.subscribe((event) => {
	        this.getScrollPosition(event);
	    });
	}
	ionViewDidLoad() {
	    this.loadData();
	    var arrow = document.getElementById('arrow_upward');
	    arrow.style.display = 'none';
	}

}
