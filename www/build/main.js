webpackJsonp([0],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__self_care_self_care__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__compare_compare__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dosing_dosing__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__drug_drug__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__find_nearest_find_nearest__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_globalvars__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = (function () {
    function HomePage(navCtrl, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.sanitizer = sanitizer;
        this.items = {
            self_care: __WEBPACK_IMPORTED_MODULE_5__self_care_self_care__["a" /* SelfCarePage */],
            compare: __WEBPACK_IMPORTED_MODULE_6__compare_compare__["a" /* ComparePage */],
            dosing: __WEBPACK_IMPORTED_MODULE_7__dosing_dosing__["a" /* DosingPage */],
            drug: __WEBPACK_IMPORTED_MODULE_8__drug_drug__["a" /* DrugPage */],
            about: __WEBPACK_IMPORTED_MODULE_9__about_about__["a" /* AboutPage */],
        };
    }
    HomePage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/home.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    HomePage.prototype.transit = function (slide) {
        __WEBPACK_IMPORTED_MODULE_11__providers_globalvars__["a" /* GlobalVars */].setPageId(slide.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__find_nearest_find_nearest__["a" /* FindNearestPage */]);
    };
    HomePage.prototype.goTo = function (index) {
        if (index.length > 0) {
            var page = this.items[index];
            this.navCtrl.push(page);
        }
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/home/home.html"*/'<ion-header class="ui-header ui-page-theme-2">\n  <ion-navbar>\n    <ion-title>\n    	<div [innerHTML]="html_data?.title"></div>\n   	</ion-title>\n  </ion-navbar>\n  <ion-navbar>\n  	<ion-title>\n  		<p class="ui-content centerText robotoLight">Your Health, Your Care, Yourself</p>\n  	</ion-title>\n  </ion-navbar>\n</ion-header>\n	\n<ion-content overflow-scroll="true"  padding class="ui-page-theme-2">\n  <ion-grid class="interface-items">\n    <ion-row>\n      <ion-col width-50>\n        <ion-item class="centerText" (tap)="goTo(\'self_care\')">\n          <div [innerHTML]="html_data?.items[0]"></div>\n        </ion-item>\n      </ion-col>\n      <ion-col width-50>\n        <ion-item class="centerText" (tap)="goTo(\'compare\')">\n          <div [innerHTML]="html_data?.items[1]"></div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <hr class="hrblue">\n\n  <ion-grid class="interface-items">\n    <ion-row>\n      <ion-col width-50>\n        <ion-item class="centerText" (tap)="goTo(\'dosing\')">\n          <div [innerHTML]="html_data?.items[2]"></div>\n        </ion-item>\n      </ion-col>\n      <ion-col width-50>\n        <ion-item class="centerText" (tap)="goTo(\'drug\')">\n          <div [innerHTML]="html_data?.items[3]"></div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <hr class="hrblue">\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of html_data?.slides" slider-width="0.5" (tap)="transit(slide)">\n      <img [src]="slide.image" alt="slide.alt" class="slide-image" height="60"/>\n      <h2 class="slide-title">\n        <span class="grayfontSmall" [innerHTML]="slide.gray_title"></span>\n        <span class="{{slide.other_title_class}}" [innerHTML]="slide.other_title"></span>\n      </h2>\n    </ion-slide>\n  </ion-slides>\n  <hr class="hrblue">\n  <ion-grid class="interface-items">\n    <ion-row>\n      <ion-col width-50>\n        <ion-item class="centerText" (tap)="goTo(\'about\')">\n          <div [innerHTML]="html_data?.items[4]"></div>\n        </ion-item>\n      </ion-col>\n      <ion-col width-50>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__find_nearest_find_nearest__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NearestPage = (function () {
    function NearestPage(navCtrl, http, sanitizer, menu) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.sanitizer = sanitizer;
        this.menu = menu;
        this.menu = menu;
        this.AbsoluteURL = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getAbsoluteURL();
    }
    NearestPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/home.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    NearestPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting('a');
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    NearestPage.prototype.transit = function (slide) {
        __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].setPageId(slide.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__find_nearest_find_nearest__["a" /* FindNearestPage */]);
    };
    NearestPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
        // console.log('ionViewDidLoad NearestPage');
    };
    return NearestPage;
}());
NearestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-nearest',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/nearest/nearest.html"*/'<ion-header class="ui-header">\n  <ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title">\n      	Nearest Healthcare\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n  <ion-navbar class="fullWidth robotoLight bgLightBlue">\n    <p>Nearest Healthcare</p>\n  </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  padding class="ui-page-theme-a">\n	<div class="ui-content">\n		<div [innerHTML]="html_data?.nearest"></div>\n		<div class="swiper-container swiper-container-horizontal swiper-container-free-mode swiper-container-android">\n			<ion-slides pager>\n		    <ion-slide *ngFor="let slide of html_data?.slides" slider-width="0.5" (tap)="transit(slide)">\n		      <img [src]="slide.image" alt="slide.alt" class="slide-image" height="60"/>\n		      <h2 class="slide-title">\n		        <span class="grayfontSmall" [innerHTML]="slide.gray_title"></span>\n		        <span class="{{slide.other_title_class}}" [innerHTML]="slide.other_title"></span>\n		      </h2>\n		    </ion-slide>\n		  </ion-slides>\n		</div>\n		<br>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/nearest/nearest.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
], NearestPage);

//# sourceMappingURL=nearest.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareChildsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__compare_compare__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { CommentComparePage } from '../comment-compare/comment-compare';

// import { CompareFeedbackPage } from '../compare-feedback/compare-feedback';
var CompareChildsPage = (function () {
    function CompareChildsPage(navCtrl, navParams, menu, http, sanitizer, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.sanitizer = sanitizer;
        this.platform = platform;
        this.mode = {
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
            14: 'i',
            15: 'a',
            16: 'o',
            17: 'a',
            18: 'f',
            19: 'g',
            // 20: '', // CompareYeastPage
            // 21: '', // CompareAthletesfootPage
            22: 'e',
            23: 'a',
            24: 'n',
            25: 'o',
            26: 'e',
            27: 'a',
        };
        this.apiUrls = {
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
            27: "pain_patches"
        };
        this.MyContent = {
            width: 0,
            height: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollPos: 0,
            isArrowShow: false
        };
        this.SearchDlg = {
            show: false,
            height: 100,
            width: 0,
            maxWidth: 0,
            left: 0,
            top: 0
        };
        this.SortDlg = {
            show: false,
            height: 437,
            width: 157,
            maxWidth: 0,
            left: 0,
            top: 0
        };
        this.FeedbackDlg = {
            show: false,
            height: 511,
            width: 309,
            maxWidth: 0,
            left: 0,
            top: 0
        };
        this.pageId = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageId();
        this.menu = menu;
        this.setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting(this.mode[this.pageId]);
        this.initData();
    }
    CompareChildsPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/compare_child.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
            for (var i = 0; i < 11; i++) {
                _this.html_data.ShowTabs[i]['title'] = _this.html_data.tabTitles[_this.pageId][i];
            }
        });
    };
    CompareChildsPage.prototype.showCommentCompare = function () {
        // this.navCtrl.push(CommentComparePage);
    };
    CompareChildsPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        menu.className = "outer-content content" + " " + this.setting['class'];
        this.menu.open();
    };
    CompareChildsPage.prototype.toggleSearchDlg = function (b) {
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
    };
    CompareChildsPage.prototype.toggleSortDlg = function (b) {
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
    };
    CompareChildsPage.prototype.toggleFeedbackDlg = function (b) {
        if (b) {
            var scrollPos = this.content.getContentDimensions().scrollTop;
            if (this.MyContent.height == 0) {
                this.MyContent.height = this.elementView.nativeElement.offsetHeight + 56;
                this.MyContent.width = this.elementView.nativeElement.offsetWidth;
            }
            this.FeedbackDlg.maxWidth = this.MyContent.width * 0.8;
            this.FeedbackDlg.left = (this.MyContent.screenWidth - this.FeedbackDlg.width) / 2;
            this.FeedbackDlg.top = (this.MyContent.screenHeight - this.FeedbackDlg.height) / 2 + scrollPos;
        }
        this.FeedbackDlg.show = b;
    };
    CompareChildsPage.prototype.showCompare = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__compare_compare__["a" /* ComparePage */]);
    };
    CompareChildsPage.prototype.showFeedback = function () {
        // this.navCtrl.push(CompareFeedbackPage); 
    };
    CompareChildsPage.prototype.toggleSort = function (tabs) {
        tabs["ui-checkbox-on"] = 1 - tabs["ui-checkbox-on"];
    };
    CompareChildsPage.prototype.clearSearch = function () {
        this.searchText = "";
        this.TableTempData = this.TableData;
    };
    CompareChildsPage.prototype.filterItems = function (searchbar) {
        var q = this.searchText;
        this.TableTempData = this.TableData;
        if (q.length == 0) {
            return;
        }
        this.TableTempData = this.TableTempData.filter(function (v) {
            var found = false;
            Object.keys(v).forEach(function (key) {
                if (v[key].toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    found = true;
                    return false;
                }
            });
            return found;
        });
    };
    CompareChildsPage.prototype.initData = function () {
        this.AbsoluteURL = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getAbsoluteURL();
        this.RestApiURL = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getApiURL() + "page=" + this.apiUrls[this.pageId];
        this.searchText = "";
        this.TableData = [];
        this.TableTempData = [];
        this.MyContent.screenWidth = this.platform.width();
        this.MyContent.screenHeight = this.platform.height();
        this.MyContent.scrollPos = 0;
        this.MyContent.isArrowShow = false;
    };
    CompareChildsPage.prototype.loadData = function () {
        var _this = this;
        this.http.get(this.RestApiURL).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.TableTempData = _this.TableData = data;
            // console.log(data);
        }),
            function (err) {
                // console.log("Oops!");
            };
    };
    CompareChildsPage.prototype.gotoTop = function (scrollDuration) {
        this.content.scrollToTop(scrollDuration);
    };
    CompareChildsPage.prototype.getScrollPosition = function (event) {
        var arrow = document.getElementById('arrow_upward');
        this.MyContent.scrollPos = event.scrollTop;
        if (this.MyContent.scrollPos >= this.MyContent.screenHeight) {
            this.MyContent.isArrowShow = true;
            arrow.style.display = 'block';
        }
        else {
            this.MyContent.isArrowShow = false;
            arrow.style.display = 'none';
        }
    };
    CompareChildsPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        // this.content.enableScrollListener();
        this.content.ionScroll.subscribe(function (event) {
            _this.getScrollPosition(event);
        });
    };
    CompareChildsPage.prototype.ionViewDidLoad = function () {
        var arrow = document.getElementById('arrow_upward');
        this.getHtmlData();
        this.loadData();
        arrow.style.display = 'none';
    };
    return CompareChildsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mainBody'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], CompareChildsPage.prototype, "elementView", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], CompareChildsPage.prototype, "content", void 0);
CompareChildsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-compare-childs',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/compare-childs/compare-childs.html"*/'<ion-header class="ui-header {{setting.class}}">\n	<ion-navbar>\n    	<ion-title>\n    		<h1 class="ui-title">\n      			Compare\n      		</h1>\n    	</ion-title>\n	    <ion-buttons end>\n	      	<button ion-button icon-only (tap)="showMenu()">\n	        	<ion-icon name="menu"></ion-icon>\n	      	</button>\n	    </ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  class="{{setting.class}}" has-subheader="true">\n  	<ion-header class="ui-header">\n    	<ion-navbar class="fullWidth robotoLight {{setting.p}}">\n        	<p>{{html_data?.pageTitle[pageId]}}</p>\n    	</ion-navbar>\n	</ion-header>\n	<div class="fullWidth" #mainBody>\n	    <p>&nbsp;</p>\n	    <div class="fixed-action-btn" style="bottom: 45px; right: 24px; display: none;" id="arrow_upward">\n	        <a class="btn-floating btn-large {{setting.arrow}} ui-link" href="#" (tap)="gotoTop(1000)">\n	        	<i class="large material-icons">arrow_upward</i>\n	        </a>\n	    </div>\n	    <div class="maxwidth450 paddingSides">\n	        <div class="{{setting.oval}}">\n	            <span [innerHTML]="html_data?.span[pageId]"></span>\n	            <br>\n	        </div>\n	        <div align="right">\n	            <img src="assets/img/{{html_data?.imageUrls[pageId]}}" width="100" alt="Pharmacist"> \n	        </div>\n	    </div>\n	    <div class="clearboth divider1"></div>\n	    <p class="grayfontSmall greenBorderAll centerText nextDiv" *ngIf="pageId!=13" [innerHTML]="html_data?.idnon13">\n	    </p>\n	    <p class="blueBorderAll grayfontSmall centerText" *ngIf="pageId==13" [innerHTML]="html_data?.id13">\n	    </p>\n	    <div class="clearboth divider1"></div>\n	    <br>\n	    <p>&nbsp;</p>\n	    <div class="centerText">\n	    	<a href="#" data-inline="true" class="linkBlueThin showFeedbackAlert ui-link" (tap)="toggleFeedbackDlg(true)" *ngIf="pageId==13"><span class="mbsc-ic mbsc-ic-ion-chatbubble-working mbsc-ic-font36"></span>Give Feedback</a> \n	        <a href="#" class="mbsc-ic mbsc-ic-stream-bubble-comment-talk mbsc-ic-font36 {{html_data?.aClass[pageId]}} ui-link" (tap)="showCommentCompare()"></a>\n	        <a href="#" data-rel="popup" data-transition="pop" class="mbsc-ic mbsc-ic-ion-ios7-search-strong mbsc-ic-font36 {{html_data?.aClass[pageId]}} ui-link" aria-haspopup="true" aria-owns="filterallergy_medsTable-pop" aria-expanded="false" (tap)="toggleSearchDlg(true)"></a>\n	    </div>\n	    <br>\n	    <hr class="{{setting.hr}}">\n	    <br>\n	    <div class="marginR30">\n	        <a href="#" class="ui-table-columntoggle-btn ui-btn ui-btn-{{mode[pageId]}} ui-corner-all ui-shadow ui-mini" data-rel="popup" (tap)="toggleSortDlg(true)">Sort</a>\n	        <table data-role="table" id="allergy_meds_table" data-filter="true" data-input="#filterallergy_medsTable-input" data-mode="columntoggle" class="ui-body-d ui-shadow table-stripe ui-responsive my-responsive-class ui-table ui-table-columntoggle" data-column-btn-theme="mode[pageId]" data-column-btn-text="Sort" data-column-popup-theme="mode[pageId]">\n	            <thead>\n	                <tr class="ui-bar-{{mode[pageId]}}">\n	                    <th data-colstart="1"></th>\n	                    <ng-container *ngFor="let eachData of html_data?.ShowTabs">\n		                    <th data-priority="1" data-colstart="2" class="ui-table-priority-3" class="ui-table-priority-3" [ngClass]="{\'ui-table-cell-visible\': eachData[\'ui-checkbox-on\']}" *ngIf="eachData[\'title\'].length>0">\n		                    	<div class="centerText">{{eachData["title"]}}</div>\n		                    </th>\n	                    </ng-container>\n	                </tr>\n	            </thead>\n	            <tbody>\n	                <tr *ngFor="let eachData of TableTempData">\n	                    <th style="font-size:14px">\n	                        <div [innerHTML]="sanitizer.bypassSecurityTrustHtml(eachData[\'drug_name\'])"></div>\n	                    </th>\n	                    <ng-container *ngFor="let each_field of html_data?.fields; let i = index">\n		                    <td style="font-size:14px" [ngClass]="{\'ui-table-cell-hidden\': !html_data?.ShowTabs[i][\'ui-checkbox-on\']}" *ngIf="html_data?.ShowTabs[i][\'title\'].length>0">\n		                        <div [innerHTML]="sanitizer.bypassSecurityTrustHtml(eachData[each_field])" *ngIf="i!=7"></div>\n		                        <div class="grayfont" *ngIf="i==7">\n		                            Did this medication help you? <br><br>\n		                            <div [innerHTML]="sanitizer.bypassSecurityTrustHtml(eachData[each_field])"></div>\n		                            What about you?                       \n		                        </div>\n		                    </td>\n	                	</ng-container>\n	                </tr>\n	            </tbody>\n	        </table>\n	    </div>\n	    <p>&nbsp;</p>\n	</div>\n	<div class="ui-popup-screen ui-overlay-b in" id="filterallergy_medsTable-pop-screen" *ngIf="SearchDlg.show" (tap)="toggleSearchDlg(false)" [ngStyle]="{\'height\': MyContent.height+\'px\',\'width\': MyContent.width+\'px\'}"></div>\n	<div class="ui-popup-container pop in ui-popup-active" id="filterallergy_medsTable-pop-popup" *ngIf="SearchDlg.show" [ngStyle]="{\'max-width\': SearchDlg.maxWidth+\'px\',\'top\': SearchDlg.top+\'px\', \'left\': SearchDlg.left+\'px\', \'width\': SearchDlg.width+\'px\'}">\n		<div data-role="popup" id="filterallergy_medsTable-pop" class="ui-content ui-popup ui-body-inherit ui-overlay-shadow ui-corner-all" data-overlay-theme="b" data-position-to="window">\n		    <a href="#" data-rel="back" data-role="button" data-icon="check" data-iconpos="notext" class="ui-btn-right ui-link ui-btn ui-icon-check ui-btn-icon-notext ui-shadow ui-corner-all" role="button" (tap)="toggleSearchDlg(false)">Close</a>\n		    <form>\n		        <div class="ui-input-search ui-body-inherit ui-corner-all ui-shadow-inset ui-input-has-clear">\n		            <input id="filterallergy_medsTable-input" type="text" data-type="search" name="search" data-clear-btn="false" placeholder="Find Allergy Medication" [(ngModel)]="searchText" (input)="filterItems($event)" />\n		            <a href="#" tabindex="-1" aria-hidden="true" class="ui-input-clear ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all" title="Clear text" *ngIf="searchText.length>0" (tap)="clearSearch()">Clear text</a>\n		        </div>\n		    </form>\n		</div>\n	</div>\n	<div class="ui-popup-screen ui-overlay-inherit" id="allergy_meds_table-popup-screen" *ngIf="SortDlg.show" (tap)="toggleSortDlg(false)" [ngStyle]="{\'height\': MyContent.height+\'px\',\'width\': MyContent.width+\'px\'}"></div>\n	<div class="ui-popup-container ui-popup-active" id="allergy_meds_table-popup-popup" *ngIf="SortDlg.show" [ngStyle]="{\'max-width\': SortDlg.maxWidth+\'px\',\'top\': SortDlg.top+\'px\', \'left\': SortDlg.left+\'px\'}">\n		<div class="ui-table-columntoggle-popup ui-popup ui-body-inherit ui-overlay-shadow ui-corner-all" id="allergy_meds_table-popup">\n		    <fieldset class="ui-controlgroup ui-controlgroup-vertical ui-corner-all">\n		        <div class="ui-controlgroup-controls ">\n		            <div class="ui-checkbox" *ngFor="let tabs of html_data?.ShowTabs" (tap)="toggleSort(tabs)">\n		            	<ng-container *ngIf="tabs.title.length>0">\n			            	<label class="ui-btn ui-corner-all ui-btn-{{mode[pageId]}} ui-btn-icon-left" [ngClass]="{\'ui-checkbox-on\': tabs[\'ui-checkbox-on\'], \'ui-checkbox-off\': !tabs[\'ui-checkbox-on\']}">{{tabs.title}}</label>\n			            	<input type="checkbox" checked="" />\n			            </ng-container>\n			        </div>\n				</div>\n			</fieldset>\n		</div>\n	</div>\n	<div class="ui-popup-screen ui-overlay-b in" id="filterallergy_medsTable-pop-screen" *ngIf="FeedbackDlg.show" (tap)="toggleFeedbackDlg(false)" [ngStyle]="{\'height\': MyContent.height+\'px\',\'width\': MyContent.width+\'px\'}"></div>\n	<div role="dialog" tabindex="-1" class="ui-popup-container pop in ui-popup-active mbsc-mobi-blue mbsc-mobiscroll dw-modal mbsc-wdg" *ngIf="FeedbackDlg.show" [ngStyle]="{\'max-width\': FeedbackDlg.maxWidth+\'px\',\'top\': FeedbackDlg.top+\'px\', \'left\': FeedbackDlg.left+\'px\', \'width\': FeedbackDlg.width+\'px\'}">\n	    <div class="dwwr" style="width: 309px; white-space: nowrap;">\n	        <div [innerHTML]="html_data?.dlg"></div>\n	        <div class="dwbc">\n	            <div class="dwbw ">\n	                <div tabindex="0" role="button" class="dwb0 dwb-e dwb" (tap)="showCompare()">Not Now</div>\n	            </div>\n	            <div class="dwbw ">\n	                <div tabindex="0" role="button" class="dwb1 dwb-e dwb" (tap)="showFeedback()">Give Feedback</div>\n	            </div>\n	        </div>\n	    </div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/compare-childs/compare-childs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], CompareChildsPage);

//# sourceMappingURL=compare-childs.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareYesnoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__compare_compare__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var mode = {
    0: 'a',
    1: 'n',
    2: 'o'
};
var CompareYesnoPage = (function () {
    function CompareYesnoPage(navCtrl, navParams, menu, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.sanitizer = sanitizer;
        this.pageTitle = {
            0: "Cough Medications",
            1: "Yeast medications",
            2: "Athletes' foot",
        };
        this.pageId = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageId();
        this.menu = menu;
        this.setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting(mode[this.pageId]);
        this.AbsoluteURL = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getAbsoluteURL();
        this.currentPage = -1;
        this.getHtmlData();
    }
    CompareYesnoPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = [];
        this.http.get("assets/json/compare_yesno.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    CompareYesnoPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting('n');
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    CompareYesnoPage.prototype.showCompare = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__compare_compare__["a" /* ComparePage */]);
    };
    CompareYesnoPage.prototype.transitPage = function (pageNumber) {
        this.currentPage = pageNumber;
    };
    CompareYesnoPage.prototype.ionViewDidLoad = function () {
    };
    return CompareYesnoPage;
}());
CompareYesnoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-compare-yesno',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/compare-yesno/compare-yesno.html"*/'<ion-header class="ui-header {{setting.class}}">\n  	<ion-navbar>\n	    <ion-title>\n	    	<h1 class="ui-title">\n	      		Compare\n	      	</h1>\n	    </ion-title>\n    	<ion-buttons end>\n	      	<button ion-button icon-only (tap)="showMenu()">\n	        	<ion-icon name="menu"></ion-icon>\n	      	</button>\n	    </ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  class="{{setting.class}}" has-subheader="true">\n	<ion-header class="ui-header fullWidth">\n		<ion-navbar class="fullWidth robotoLight {{setting.p}} shadowBottom littleSpan">\n			<p>{{pageTitle[pageId]}}</p>\n		</ion-navbar>\n	</ion-header>\n	<div class="fullWidth">\n		<p>&nbsp;</p>\n		<div id="all_questions_div">\n		    <div id="yesno_1" *ngIf="currentPage==-1">\n		        <!-- ---Start follow up intro--- -->\n		        <div [innerHTML]="html_data[pageId]?.dashboard"></div>\n		        <p class="centerText">\n		            <button data-inline="true" class="ui-btn ui-btn-inline ui-shadow ui-corner-all" (tap)="transitPage(0)">Continue</button>\n		        </p>\n		        <p>&nbsp;</p>\n		    </div>\n		    <!-- End follow up intro -->\n		    <div id="yesno_2_n" *ngIf="currentPage%2==0 && currentPage<html_data[pageId]?.length">\n		    	<div [innerHTML]="html_data[pageId][currentPage]"></div>\n		        <p class="centerText">\n		            <button data-inline="true" class="yesno_3_y_link ui-btn ui-btn-g ui-btn-inline ui-shadow ui-corner-all" data-theme="g" (tap)="transitPage(currentPage+1)">Yes</button>\n		            <button data-inline="true" class="yesno_3_n_link ui-btn ui-btn-f ui-btn-inline ui-shadow ui-corner-all" data-theme="f" (tap)="transitPage(currentPage+2)">No</button>\n		        </p>\n		        <p>&nbsp;</p>\n		    </div>\n		    <!-- end first follow up question div -->\n		    <!-- start follow up 3 div -->\n		    <div id="yesno_3_y" *ngIf="currentPage%2==1 && currentPage<html_data[pageId]?.length">\n		    	<div [innerHTML]="html_data[pageId][currentPage]"></div>\n		        <p class="centerText">\n		            <button data-inline="true" class="yesno_3_n_link ui-btn ui-btn-e ui-btn-inline ui-shadow ui-corner-all" data-theme="e" (tap)="transitPage(currentPage+1)">Continue</button>\n		        </p>\n		        <p>&nbsp;</p>\n		    </div>\n		    <div id="yesno_10_n" *ngIf="pageId==0 && currentPage==html_data[pageId]?.length">\n		        <div [innerHTML]="html_data[pageId][currentPage]"></div>\n		        <p class="centerText">\n		            <a href="#" data-inline="true" class="linkBlue back_yesno ui-link" (tap)="transitPage(-1)"><span class="mbsc-ic mbsc-ic-ion-android-system-back mobi-icon-font40"></span>Back</a>\n		        </p>\n		        <p>&nbsp;</p>\n		        <p>&nbsp;</p>\n		    </div>\n		    <div id="compare_yeast_mobile_12_n" *ngIf="pageId==1 && currentPage==html_data[pageId]?.length">\n		        <div [innerHTML]="html_data[pageId][currentPage]"></div>\n		        <p class="centerText">\n		            <a href="#" data-inline="true" class="linkBlue back_compare_yeast_mobile ui-link" (tap)="transitPage(-1)"><span class="mbsc-ic mbsc-ic-ion-android-system-back mobi-icon-font40"></span>Back</a>\n		        </p>\n		        <p class="centerText"> \n		            <a href="#" class="linkCyan robotoLight compare_antifungi_creams ui-link" data-inline="true" (tap)="transitPage(100)">Compare Products</a>\n		        </p>\n		        <p>&nbsp;</p>\n		        <p>&nbsp;</p>\n		    </div>\n		    <div class="showCompareDiv" *ngIf="pageId==1 && currentPage==100">\n			    <div [innerHTML]="html_data[pageId][currentPage]"></div>\n			    <p class="centerText">   \n			        <a href="#" data-role="none" class="refreshPage linkAmber" data-inline="true" (tap)="transitPage(-1)">Refresh</a>   \n			        <a href="#" data-role="none" class="linkBlueBorderThin" data-inline="true" (tap)="showCompare()">Compare Other</a>\n			    </p>\n			    <!-- ----End Popoup div----- -->\n			</div>\n			<div id="compare_athletesfoot_mobile_10_n" *ngIf="pageId==2 && currentPage==html_data[pageId]?.length">\n				<div [innerHTML]="html_data[pageId][currentPage]"></div>\n		        <p class="centerText">\n		            <a href="#" data-inline="true" class="linkOrange back_compare_athletesfoot_mobile ui-link" (tap)="transitPage(-1)"><span class="mbsc-ic mbsc-ic-ion-android-system-back mobi-icon-font40"></span>Back</a>\n		        </p>\n		        <p>&nbsp;</p>\n		        <p>&nbsp;</p>\n		    </div>\n		</div>\n		<p>&nbsp;</p>\n	    <p>&nbsp;</p>\n	    <p>&nbsp;</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/compare-yesno/compare-yesno.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], CompareYesnoPage);

//# sourceMappingURL=compare-yesno.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveDoseInsertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__save_dose_insert_success_save_dose_insert_success__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SaveDoseInsertPage = (function () {
    function SaveDoseInsertPage(http, navCtrl, navParams, menu, authService, alertCtrl, loadingCtrl, toastCtrl, sanitizer) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.sanitizer = sanitizer;
        this.dose = { 'child': '', 'comment': '', 'dose_direction': '', 'dose_medication': '', 'saved_on': '' };
        this.menu = menu;
        this.AbsoluteURL = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getAbsoluteURL();
        this.loading = null;
        this.dose['saved_on'] = "";
    }
    SaveDoseInsertPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/save_dose_insert.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
            _this.dose['dose_direction'] = data['dose_direction'];
            _this.dose['dose_medication'] = data['dose_medication'];
        });
    };
    SaveDoseInsertPage.prototype.showMenu = function () {
        this.menu.open();
    };
    SaveDoseInsertPage.prototype.removeSpecialChars = function (data) {
        var obj = {};
        for (var prop in data) {
            if (!data.hasOwnProperty(prop))
                continue;
            obj[prop] = encodeURIComponent(data[prop]);
        }
        return obj;
    };
    SaveDoseInsertPage.prototype.saveDosingPage = function () {
        var _this = this;
        var user = this.authService.getUserInfo();
        var ddose = this.removeSpecialChars(this.dose);
        var url = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getApiURL() + "email=" + user.email + "&child=" + ddose['child'] +
            "&comment=" + ddose['comment'] + "&saved_on=" + ddose['saved_on'] +
            "&dose_direction=" + ddose['dose_direction'] +
            "&dose_medication=" + ddose['dose_medication'] + "&ppp=save_dosing";
        this.showLoading();
        this.http.get(url).map(function (response) { return response.json(); }).subscribe(function (data) {
            setTimeout(function () {
                _this.loading.dismiss().catch(function () { });
                if (data.res == 'success') {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__save_dose_insert_success_save_dose_insert_success__["a" /* SaveDoseInsertSuccessPage */]);
                }
                else {
                    _this.showToast(data.msg);
                }
            });
        }),
            function (err) {
                setTimeout(function () {
                    _this.loading.dismiss().catch(function () { });
                    _this.showToast("Access denied");
                });
            };
    };
    SaveDoseInsertPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    SaveDoseInsertPage.prototype.showToast = function (message) {
        if (this.loading != null) {
            this.loading.dismiss().catch(function () { });
        }
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    SaveDoseInsertPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return SaveDoseInsertPage;
}());
SaveDoseInsertPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-save-dose-insert',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/save-dose-insert/save-dose-insert.html"*/'<ion-header class="ui-header">\n\n  <ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title">\n      	&nbsp;\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n  <ion-navbar class="fullWidth roboto bgCyan">\n    <p> Save this dose </p>\n  </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  padding class="ui-page-theme-n ui-mobile">\n	<div class="ui-content">\n	   <div [innerHTML]="html_data?.header"></div>\n	   <div style="padding:16px;">\n	      <form (ngSubmit)="saveDosingPage()" #saveDosingForm="ngForm" id="save_dose_insert_form" name="save_dose_insert_form" >\n	      	<ion-row>\n		        <ion-col>\n		          <ion-list inset>\n		            \n		            <ion-item>\n		              <ion-input type="text" placeholder="Child\'s name is..." name="child_name" [(ngModel)]="dose.child" required></ion-input>\n		            </ion-item>\n		              \n		            <ion-item>\n		              <ion-textarea placeholder="Gave medication because..." name="dose_comment" [(ngModel)]="dose.comment" required></ion-textarea>\n		            </ion-item>\n		            \n		          </ion-list>\n		        </ion-col>\n			</ion-row>\n			<br>\n	         <div class="clearboth divider1"></div>\n	         <p class="centerText">\n	            <input type="submit" id="insert_child_dose" name="insert_child_dose" data-enhanced="false" data-role="none" class="buttonCyanBorder" value="Save Dose" [disabled]="!saveDosingForm.form.valid">\n	         </p>\n	      </form>\n	   </div>\n	   <!---------------------End Form-------------------------------- -->    \n	   <p>&nbsp;</p>\n	   <p>&nbsp;</p>\n	   <p>&nbsp;</p>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/save-dose-insert/save-dose-insert.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
], SaveDoseInsertPage);

//# sourceMappingURL=save-dose-insert.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiphenhydraminePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dosing_child_container_dosing_child_container__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_globalvars__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ChildrenDiphenhydramineMobilePage } from '../children-diphenhydramine-mobile/children-diphenhydramine-mobile';


var DiphenhydraminePage = (function () {
    function DiphenhydraminePage(navCtrl, navParams, menu, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.sanitizer = sanitizer;
        this.menu = menu;
        this.pages = [true, true];
    }
    DiphenhydraminePage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/diphenhydramine.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    DiphenhydraminePage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_6__providers_globalvars__["a" /* GlobalVars */].getPageSetting('i');
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    DiphenhydraminePage.prototype.togglePage = function (ind) {
        this.pages[ind] = !this.pages[ind];
    };
    DiphenhydraminePage.prototype.goContinue = function () {
        __WEBPACK_IMPORTED_MODULE_6__providers_globalvars__["a" /* GlobalVars */].setPageId(0);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__dosing_child_container_dosing_child_container__["a" /* DosingChildContainerPage */]);
    };
    DiphenhydraminePage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return DiphenhydraminePage;
}());
DiphenhydraminePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-diphenhydramine',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/diphenhydramine/diphenhydramine.html"*/'<ion-header class="ui-header">\n\n  <ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title">\n      	&nbsp;\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n  <ion-navbar class="fullWidth robotoLight bgPink">\n    <p>Diphenhydramine</p>\n  </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  padding class="ui-page-theme-i">\n	<div class="ui-content transparentButton">\n	    <div [innerHTML]="html_data?.header"></div>\n	    <p class="centerText"><br>\n	        <a href="#" data-transition="slide" data-inline="true" class="linkRedBorder ui-link" (tap)="goContinue()">Now let\'s Continue</a>\n	    </p>\n	    <div [innerHTML]="html_data?.ppp"></div>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/diphenhydramine/diphenhydramine.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], DiphenhydraminePage);

//# sourceMappingURL=diphenhydramine.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DosingChildsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dosing_dosing__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__diphenhydramine_diphenhydramine__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dosing_child_container_dosing_child_container__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__save_dose_insert_save_dose_insert__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__save_dose_login_save_dose_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var mode = {
    0: 'i',
    1: 'i',
    2: 'i',
    3: 'a',
    4: 'a',
    5: 'a',
    6: 'a',
    7: 'g',
    8: 'g',
    9: 'g',
    10: 'd',
    11: 'd',
    12: 'a',
    13: 'a',
    14: 'a',
    15: 'a',
    16: 'a',
    17: 'i',
    18: 'i',
    19: 'i',
    20: 'i',
    21: 'a',
    22: 'a',
    23: 'a',
    24: 'a',
    25: 'a',
    26: 'a',
    27: 'a',
    28: 'd',
    29: 'd',
    30: 'd',
    31: 'd',
    32: 'd',
    33: 'a',
    34: 'a',
    35: 'a',
    36: 'a',
    37: 'a',
    38: 'a',
    39: 'a',
    40: 'a',
    41: 'a',
    42: 'i',
    43: 'i',
    44: 'i',
    45: 'i',
    46: 'i',
    47: 'i',
    48: 'i',
    49: 'i',
    50: 'i',
    51: 'i',
    52: 'o',
    53: 'o',
    54: 'o',
    55: 'o',
    56: 'a',
    57: 'a',
    58: 'a',
    59: 'a',
    60: 'i',
    61: 'i',
    62: 'i',
    63: 'i',
    64: 'g',
    65: 'p',
    66: 'a'
};
var pageStart = {
    0: 0,
    1: 3,
    2: 7,
    3: 10,
    4: 12,
    5: 14,
    6: 17,
    7: 17,
    8: 21,
    9: 28,
    10: 33,
    11: 38,
    12: 38,
    13: 42,
    14: 44,
    15: 52,
    16: 56,
    17: 56,
    18: 60,
    19: 60,
    20: 60,
    21: 60
};
var DosingChildsPage = (function () {
    function DosingChildsPage(navCtrl, navParams, menu, authService, alertCtrl, loadingCtrl, toastCtrl, http, sanitizer, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.sanitizer = sanitizer;
        this.platform = platform;
        this.options = [
            false, false, false, false, false, false, false, false, false, false
        ];
        this.convertDlgInfo = {
            screenWidth: 0,
            screenHeight: 0,
            top: 0,
            left: 0,
            height: 325,
            width: 273,
            noscroll: false
        };
        this.feedbackDlgInfo = {
            screenWidth: 0,
            screenHeight: 0,
            top: 0,
            left: 0,
            height: 493,
            width: 309,
            noscroll: false
        };
        this.pageId = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageId();
        this.setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting(mode[this.pageId]);
        this.menu = menu;
        this.AbsoluteURL = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getAbsoluteURL();
        this.showTerm = false;
        this.showButton = false;
        this.currentPage = 0;
        this.defaultWeight = -1; // lbs
        this.currentWeight = this.defaultWeight;
        this.showConvertDlg = false;
        this.showFeedbackDlg = false;
        this.subPage = -1;
    }
    DosingChildsPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/dosing_childs.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
            if (_this.pageId != 38 && _this.pageId != 43 && _this.pageId != 49 &&
                _this.pageId != 50 && _this.pageId != 51 && _this.pageId != 58 && _this.pageId != 59)
                _this.defaultWeight = data['slider'][_this.pageId]['min']; // lbs
        });
    };
    DosingChildsPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting(mode[this.pageId]);
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    DosingChildsPage.prototype.saveDoseWeight = function () {
        __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].setDosingWeight(this.currentWeight);
        if (this.authService.getUserInfo() != null)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__save_dose_insert_save_dose_insert__["a" /* SaveDoseInsertPage */]);
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__save_dose_login_save_dose_login__["a" /* SaveDoseLoginPage */]);
    };
    DosingChildsPage.prototype.gotoDosePage = function () {
        var pos = -1, len = 19;
        if (this.pageId <= 62) {
            for (var i = 1; i < len; i++)
                if (this.pageId < pageStart[i] && this.pageId >= pageStart[i - 1]) {
                    pos = i;
                    break;
                }
            if (pos == -1)
                pos = 22;
            if (pos == 1)
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__diphenhydramine_diphenhydramine__["a" /* DiphenhydraminePage */]);
            else {
                __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].setPageId(pos - 1);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__dosing_child_container_dosing_child_container__["a" /* DosingChildContainerPage */]);
            }
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__dosing_dosing__["a" /* DosingPage */]);
        }
    };
    DosingChildsPage.prototype.setCurrentPage = function (page) {
        if (page == 1)
            this.currentWeight = this.defaultWeight;
        if (page == 2)
            this.setSubPage();
        this.currentPage = page;
    };
    DosingChildsPage.prototype.setSubPage = function () {
        if (this.pageId == 0 || (this.pageId >= 43 && this.pageId <= 45) || (this.pageId >= 52 && this.pageId <= 53)) {
            if (this.currentWeight <= 5)
                this.subPage = 0;
            else if (this.currentWeight <= 7)
                this.subPage = 1;
            else if (this.currentWeight <= 9)
                this.subPage = 2;
            else if (this.currentWeight <= 11)
                this.subPage = 3;
            else if (this.currentWeight <= 13)
                this.subPage = 4;
            else if (this.currentWeight <= 16)
                this.subPage = 5;
            else if (this.currentWeight <= 19)
                this.subPage = 6;
            else if (this.currentWeight <= 22)
                this.subPage = 7;
            else if (this.currentWeight <= 25)
                this.subPage = 8;
            else if (this.currentWeight <= 28)
                this.subPage = 9;
            else if (this.currentWeight <= 32)
                this.subPage = 10;
            else if (this.currentWeight <= 36)
                this.subPage = 11;
            else if (this.currentWeight <= 41)
                this.subPage = 12;
            else if (this.currentWeight <= 46)
                this.subPage = 13;
            else if (this.currentWeight <= 52)
                this.subPage = 14;
            else if (this.currentWeight <= 58)
                this.subPage = 15;
            else if (this.currentWeight <= 64)
                this.subPage = 16;
            else if (this.currentWeight <= 70)
                this.subPage = 17;
            else if (this.currentWeight <= 77)
                this.subPage = 18;
            else if (this.currentWeight <= 84)
                this.subPage = 19;
            else if (this.currentWeight <= 90)
                this.subPage = 20;
            else
                this.subPage = 21;
        }
        else {
            if (this.currentWeight <= 14)
                this.subPage = 0;
            else if (this.currentWeight <= 24)
                this.subPage = 1;
            else if (this.currentWeight <= 34)
                this.subPage = 2;
            else if (this.currentWeight <= 44)
                this.subPage = 3;
            else if (this.currentWeight <= 59)
                this.subPage = 4;
            else if (this.currentWeight <= 74)
                this.subPage = 5;
            else if (this.currentWeight <= 89)
                this.subPage = 6;
            else
                this.subPage = 7;
        }
        // else{
        // }
    };
    DosingChildsPage.prototype.toggleOptions = function (id) {
        this.options[id] = !this.options[id];
    };
    DosingChildsPage.prototype.toggleButton = function () {
        this.showButton = !this.showButton;
    };
    DosingChildsPage.prototype.toggleTerm = function () {
        this.showTerm = !this.showTerm;
    };
    DosingChildsPage.prototype.doneConvert = function () {
        this.convertDlgInfo.noscroll = false;
        this.showConvertDlg = false;
        this.currentPage = 2;
        this.currentWeight = 2;
    };
    DosingChildsPage.prototype.toggleConvertDlg = function (b) {
        if (b == true) {
            var scrollPos = this.content.getContentDimensions().scrollTop;
            this.convertDlgInfo.screenWidth = this.platform.width();
            this.convertDlgInfo.screenHeight = this.platform.height();
            this.convertDlgInfo.top = (this.convertDlgInfo.screenHeight - this.convertDlgInfo.height) / 2 + scrollPos - 60;
            this.convertDlgInfo.left = (this.convertDlgInfo.screenWidth - this.convertDlgInfo.width) / 2;
            this.convertDlgInfo.screenHeight *= 5;
            this.convertDlgInfo.noscroll = true;
        }
        else
            this.convertDlgInfo.noscroll = false;
        this.showConvertDlg = b;
    };
    DosingChildsPage.prototype.toggleFeedbackDlg = function (b) {
        if (b == true) {
            var scrollPos = this.content.getContentDimensions().scrollTop;
            this.feedbackDlgInfo.screenWidth = this.platform.width();
            this.feedbackDlgInfo.screenHeight = this.platform.height();
            this.feedbackDlgInfo.top = (this.feedbackDlgInfo.screenHeight - this.feedbackDlgInfo.height) / 2 + scrollPos - 60;
            this.feedbackDlgInfo.left = (this.feedbackDlgInfo.screenWidth - this.feedbackDlgInfo.width) / 2;
            this.feedbackDlgInfo.screenHeight *= 5;
            this.feedbackDlgInfo.noscroll = this.convertDlgInfo.noscroll = true;
        }
        else
            this.feedbackDlgInfo.noscroll = this.convertDlgInfo.noscroll = false;
        this.showFeedbackDlg = b;
    };
    DosingChildsPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return DosingChildsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], DosingChildsPage.prototype, "content", void 0);
DosingChildsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dosing-childs',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/dosing-childs/dosing-childs.html"*/'<ion-header class="ui-header {{setting.class}}">\n  	<ion-navbar>\n	    <ion-title>\n	    	<h1 class="ui-title">\n	      		{{html_data?.top_title[pageId]}}\n	      	</h1>\n	    </ion-title>\n	    <ion-buttons end>\n	      	<button ion-button icon-only (tap)="showMenu()">\n	        	<ion-icon name="menu"></ion-icon>\n	      	</button>\n	    </ion-buttons>\n		</ion-navbar>\n  	<ion-navbar class="fullWidth robotoLight {{setting.p}}">\n    	<p *ngIf="currentPage == 0" [innerHTML]="html_data?.title[pageId]"></p>\n    	<p *ngIf="currentPage > 0">Child\'s weight?</p>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  padding class="{{setting.class}} content{{pageId}}" [ngClass]="{\'no-scroll\': convertDlgInfo.noscroll}">\n	<div class="ui-content" *ngIf="pageId==38 || pageId==43 || (pageId>=49 && pageId<=51) || pageId==58 || pageId==59">\n		<div [innerHTML]="html_data?.header[pageId]"></div>\n	</div>\n	<div class="ui-content" *ngIf="currentPage == 0 && pageId != 38 && pageId !=43 && pageId!=49 && pageId!=50 && pageId!=51 && pageId!=58 && pageId!=59">\n	    <div [innerHTML]="html_data?.header[pageId]"></div>\n	    <div id="q1" class="opacity7">\n	        <div data-role="fieldcontain" id="check_div2" class="ui-field-contain">\n	            <fieldset data-role="controlgroup" class="ui-nodisc-icon ui-controlgroup ui-controlgroup-vertical ui-corner-all">\n	                <div class="ui-controlgroup-controls ">\n	                	<ng-container *ngFor="let each of html_data?.labels[pageId]; let i=index">\n		                	<div class="ui-checkbox">\n		                		<label for="child_check_{{i}}" class="ui-btn ui-corner-all ui-btn-inherit ui-btn-icon-left " [ngClass]="{\'ui-checkbox-off\': !options[i], \'ui-checkbox-on\': options[i]}" (tap)="toggleOptions(i)"><div [innerHTML]="each"></div></label>\n		                		<input type="checkbox" name="child_check" id="child_check_{{i}}" class="child_check" value="">\n		                	</div>\n		                	<hr>\n		                </ng-container>\n	                </div>\n	            </fieldset>\n	            <div class="clearboth divider1"></div>\n	        </div>\n	    </div>\n	    <div class="opacity3">\n	        <p class="centerText">\n	            <a href="#" data-role="none" class="disclaimerFYI linkAmber" data-inline="true" (tap)="toggleTerm()">FYI</a>\n	            <a href="#" id="child_check_button" *ngIf="options[ html_data?.labelcount[pageId] ] == true" (tap)="setCurrentPage(1)" class=" linkPinkBorder" data-role="none" data-inline="true" data-transition="slide">Please Continue</a>\n	        </p>\n	    </div>\n	    <div class="opacity8 disclaimerDiv paddingSides centerText" [ngClass]="{\'displayNone\': !showTerm}">\n	        <div [innerHTML]="html_data?.term"></div>\n	    </div>\n	    <div [innerHTML]="html_data?.ppp"></div>\n	</div>\n	<div class="ui-content" *ngIf="currentPage>0">\n	    <p>&nbsp;</p>\n	    <div id="slider_div" class="opacity3 padding0" *ngIf="currentPage==1">\n	        <div [innerHTML]="html_data?.page0[pageId]"></div>\n	        <div data-role="fieldcontain" class="ui-field-contain">\n	            <div class="ui-slider">\n	                <ion-item>\n						<ion-range min="{{html_data?.slider[pageId][\'min\']}}" max="{{html_data?.slider[pageId][\'max\']}}" [(ngModel)]="currentWeight" color="sliderPink">\n							<ion-label range-left>{{currentWeight}}(lbs)</ion-label>\n						</ion-range>\n					</ion-item>\n	            </div>\n	        </div>\n	        <div class="clearboth divider1"></div>\n	        <div class="centerText">\n	            <a href="#" id="mobi_wt_link" data-role="none" data-inline="true" class="linkOrange" (tap)="toggleConvertDlg(true)">FYI</a>\n	            <input type="button" id="get_slider" data-inline="true" class="buttonPinkBorder" data-role="none" value="Here you go" (tap)="setCurrentPage(2)">\n	        </div>\n	        <div [innerHTML]="html_data?.ppp"></div>\n	    </div>\n	    <div class="opacityNone padding0" *ngIf="currentPage==2">\n	        <div class="container_12" id="slider_value_container" *ngIf="currentPage==2">\n	            <div class="maxwidth450">\n	                <div class="{{setting.oval}}">\n	                    <div id="slider_value">You said: <span style="background-color:#FFFF99; border:inset; border-color:#FFFF00; padding:5px;">{{currentWeight}}</span> (lbs)</div>\n	                </div>\n	                <div align="right"><img src="{{html_data?.imgurl[pageId]}}" width="100" alt="Pharmacist"> \n	                </div>\n	            </div>\n	        </div>\n	        <div class="clearboth divider1"></div>\n	        <div id="lb">\n	            <div [innerHTML]="html_data?.weight_content[pageId][subPage]"></div>\n	            <p class="centerText"> \n	            	<a href="#" (tap)="saveDoseWeight()" id="save_24" data-role="none" data-inline="true" class="linkCyanBorderThin" *ngIf="subPage>0">Save</a> \n	                <button class="back_slider buttonPinkBorder" data-role="none" data-inline="true" (tap)="setCurrentPage(1)">New Wt.</button>\n	                <a href="#" data-role="none" data-inline="true" class="linkAmberBorderThin" (tap)="gotoDosePage()">\n	                	<span *ngIf="pageId<=62">New Dose</span>\n	                	<span *ngIf="pageId>62">New Drug</span>\n	                </a>\n	            </p>\n	            <p class="centerText" *ngIf="pageId==0">\n	            	<a href="#" data-inline="true" class="linkPurple_redThin showFeedbackAlert ui-link" (tap)="toggleFeedbackDlg(true)" > <span class="mbsc-ic mbsc-ic-ion-chatbubble-working font32"></span> Give Feedback </a>\n	            </p>\n	            <p>&nbsp;</p>\n	        </div>\n	        <div [innerHTML]="html_data?.ppp"></div>\n	    </div>\n	</div>\n	<div lang="en" class="mbsc-mobi-red mbsc-mobiscroll dw-modal  mbsc-wdg" *ngIf="showFeedbackDlg==true">\n	    <div class="dw-persp" [ngStyle]="{\'height\': feedbackDlgInfo.screenHeight+\'px\'}">\n	        <div class="dwo" (tap)="toggleFeedbackDlg(false)"></div>\n	        <div role="dialog" tabindex="-1" class="dw dw-ltr" [ngStyle]="{\'top\': feedbackDlgInfo.top+\'px\', \'left\': feedbackDlgInfo.left+\'px\'}">\n	            <div class="dwwr" style="white-space: nowrap;" [ngStyle]="{\'width\': feedbackDlgInfo.width+\'px\'}">\n	                <div [innerHTML]="html_data?.dlg1"></div>\n	                <div class="dwbc">\n	                    <div class="dwbw ">\n	                        <div tabindex="0" role="button" class="dwb0 dwb-e dwb" (tap)="gotoDosePage()">Not Now</div>\n	                    </div>\n	                    <div class="dwbw ">\n	                        <div tabindex="0" role="button" class="dwb1 dwb-e dwb">Give Feedback</div>\n	                    </div>\n	                </div>\n	            </div>\n	        </div>\n	    </div>\n	</div>\n	<div lang="en" class="mbsc-mobi-red mbsc-mobiscroll dw-modal" *ngIf="showConvertDlg==true">\n		<div class="dw-persp" [ngStyle]="{\'height\': convertDlgInfo.screenHeight+\'px\'}">\n	      <div class="dwo" (tap)="toggleConvertDlg(false)"></div>\n	      <div role="dialog" tabindex="-1" class="dw dw-ltr" [ngStyle]="{\'top\': convertDlgInfo.top+\'px\', \'left\': convertDlgInfo.left+\'px\'}">\n	         <div class="dwwr" style="white-space: nowrap;" [ngStyle]="{\'width\': convertDlgInfo.width+\'px\'}">\n	            <div [innerHTML]="html_data?.dlg2"></div>\n	            <div class="dwbc">\n	               <div class="dwbw dwb-s">\n	                  <div tabindex="0" role="button" class="dwb0 dwb-e dwb" (tap)="doneConvert()">Here You Go</div>\n	               </div>\n	               <div class="dwbw dwb-c">\n	                  <div tabindex="0" role="button" class="dwb1 dwb-e dwb" (tap)="toggleConvertDlg(false)">Cancel</div>\n	               </div>\n	            </div>\n	         </div>\n	      </div>\n	   </div>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/dosing-childs/dosing-childs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], DosingChildsPage);

//# sourceMappingURL=dosing-childs.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DrugPage = (function () {
    function DrugPage(navCtrl, navParams, menu, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.sanitizer = sanitizer;
        this.menu = menu;
        this.dsearch = "";
        this.page = 0;
        this.topPx = 0;
        this.noscroll = false;
        this.CouponData = [];
        this.noFound = true;
    }
    DrugPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/drug.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    DrugPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting('a');
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    DrugPage.prototype.clearSearch = function () {
        this.dsearch = "";
        this.CouponData = [];
        this.noFound = true;
    };
    DrugPage.prototype.transitPage = function (p) {
        this.page = p;
        if (p > 0) {
            this.noscroll = true;
            this.topPx = this.content.getContentDimensions().scrollTop;
        }
        else
            this.noscroll = false;
    };
    DrugPage.prototype.hideNoFound = function () {
        this.noFound = true;
    };
    DrugPage.prototype.onInputSearch = function (val) {
        if (val != "")
            this.loadData(val);
        else {
            this.CouponData = [];
            this.noFound = true;
        }
    };
    DrugPage.prototype.loadData = function (val) {
        var _this = this;
        //this.RestApiURL
        var RestApiURL = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getApiURL() + "page=coupon&filter=" + val;
        this.http.get(RestApiURL).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.CouponData = data;
            if (_this.CouponData.length == 0) {
                _this.noFound = false;
            }
        }),
            function (err) {
                _this.noFound = false;
                // console.log("Oops!");
            };
    };
    DrugPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return DrugPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], DrugPage.prototype, "content", void 0);
DrugPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-drug',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/drug/drug.html"*/'<ion-header class="ui-header">\n	<ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title">\n      	Drug Settings\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  class="ui-page-theme-a" [ngClass]="{\'no-scroll\': noscroll}">\n	<div [innerHTML]="html_data?.title"></div>\n	<div class="ui-content">\n		<div class="opacity5">\n			<div [innerHTML]="html_data?.header"></div>\n			<form class="ui-filterable">\n				<div class="ui-input-search ui-shadow-inset ui-input-has-clear ui-body-inherit ui-corner-all">\n					<input type="text" [(ngModel)]="dsearch" name="title" placeholder="Search for drug" (input)=\'onInputSearch($event.target.value)\'/>\n					<a href="#" tabindex="-1" aria-hidden="true" class="ui-input-clear ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all" *ngIf="dsearch.length>0" title="Clear text" (tap)="clearSearch()">Clear text</a>\n				</div>\n			</form>\n			<ul id="coursemates" data-role="listview" data-filter="true" data-filter-reveal="true" data-filter-placeholder="Search for drug" data-inset="true" class="ui-nodisc-icon ui-alt-icon ui-listview ui-listview-inset ui-corner-all ui-shadow">\n				<li *ngFor="let each of CouponData" class="ui-li-has-thumb">\n					<a href="{{each.url}}" target="_self" class="ui-btn ui-btn-icon-right ui-icon-carat-r"> \n						<img src="http://www.selfcarepharmacist.com/images/coupons/{{each.image_file}}" height="80" />\n						<div [innerHTML]="sanitizer.bypassSecurityTrustHtml(each.drug_name)"></div>\n						<div [innerHTML]="sanitizer.bypassSecurityTrustHtml(each.program_name)"></div>\n						<p class="graygrayfontSmallSmall" style="font-size:10px;">Last reviewed: {{each.last_view}}</p>\n					</a>\n				</li>\n			    <li id="search-list" class="no-results ui-li-static ui-body-inherit" [ngClass]="{\'ui-screen-hidden\': noFound}" (tap)="hideNoFound()">\n			        <p class="centerText">Oops, No drug savings program found.<br>Tap on the FAQ button below<br> for possible reasons. </p>\n			    </li>\n			</ul>\n			<div [innerHTML]="html_data?.partial_content"></div>\n			<p class="centerText">\n				<button class="buttonAmber robotoLight" data-enhanced="false" data-role="none" id="fyi_btn" (tap)="transitPage(1)">FYI</button>\n				<button class="buttonBlue robotoLight" data-enhanced="false" data-role="none" id="faq_btn" (tap)="transitPage(2)">FAQ</button> \n			</p>\n			<div [innerHTML]="html_data?.footer"></div>\n		</div>\n	</div>\n	<div lang="en" class="mbsc-mobi-light-orange mbsc-mobiscroll dw-top mbsc-wdg" *ngIf="page==1 || page==2">\n	    <div class="dw-persp slidedown in">\n	        <div class="dwo" [ngStyle]="{\'top\': topPx+\'px\'}" (tap)="transitPage(0)"></div>\n	        <div role="dialog" tabindex="-1" class="dw dw-ltr" style="left: 0px;" [ngStyle]="{\'top\': topPx+\'px\'}">\n	            <div class="dwwr">\n	                <div aria-live="assertive" class="dw-aria dw-hidden"></div>\n	                <div class="dwcc mbsc-wdg-c mbsc-w-p">\n	                    <div id="fyi_div" class="mbsc-comp" *ngIf="page==1" [innerHTML]="html_data?.page1">\n	                    </div>\n	                    <div id="fyi_div" class="maxwidth450 mbsc-comp" *ngIf="page==2" [innerHTML]="html_data?.page2">\n	                    </div>\n	                </div>\n	                <div class="dwbc">\n	                    <div class="dwbw dwb-c">\n	                        <div tabindex="0" role="button" class="dwb0 dwb-e dwb" (tap)="transitPage(0)">GOT IT</div>\n	                    </div>\n	                </div>\n	            </div>\n	        </div>\n	    </div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/drug/drug.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], DrugPage);

//# sourceMappingURL=drug.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AboutPage = (function () {
    function AboutPage(popoverCtrl, menu, navCtrl, navParams, http, sanitizer, alertCtrl, loadingCtrl, toastCtrl, authService) {
        this.popoverCtrl = popoverCtrl;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.menu = menu;
        this.AbsoluteURL = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getAbsoluteURL();
        this.RestApiURL = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getApiURL() + "page=about";
        this.init();
    }
    AboutPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/about.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    AboutPage.prototype.init = function () {
        this.loading = null;
        this.page = 'tab-aaaa';
        this.feedback_confirm = false;
        this.state = {
            'tab-aaaa': [true, true, true, true, true],
            'tab-kkkk': [true, true, true, true, true, true, true, true, true, true, true, true,
                true, true, true, true, true, true, true, true, true, true, true],
            'tab-llll': [true, true, true, true, true, true, true, true, true, true, true],
            'tab-mmmm': [true, true, true, true],
            'tab-nnnn': [true, true, true, true],
        };
        this.feedback = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
        };
        this.answers = {
            0: { 0: "", 1: "", 2: "", 3: "", 4: "" },
            1: { 0: "", 1: "", 2: "", 3: "", 4: "" },
            2: { 0: "", 1: "", 2: "", 3: "", 4: "" },
            3: { 0: "", 1: "", 2: "", 3: "", 4: "" },
        };
        this.feedback_contents = {
            "rsUXSurveyQuestions": [],
            "rsUISurveyQuestions": [],
            "rsAVSurveyQuestions": [],
            "rsCQSurveyQuestions": [],
        };
    };
    AboutPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting('a');
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    AboutPage.prototype.transitFeedback = function (page, pos) {
        var _this = this;
        this.feedback[page] = pos;
        if (pos == 6) {
            var saveFeedbackApiUrl = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getApiURL() + "&ppp=savefeedback";
            var userid = void 0, user = void 0, obj = void 0;
            user = this.authService.getUserInfo();
            if (user != null)
                userid = user.id;
            else
                userid = Math.floor(Math.random() * 10001);
            saveFeedbackApiUrl += "&userid=" + userid;
            saveFeedbackApiUrl += "&survey_type=" + "Feedbacks";
            if (page == 0)
                obj = this.feedback_contents["rsUXSurveyQuestions"];
            else if (page == 1)
                obj = this.feedback_contents["rsUISurveyQuestions"];
            else if (page == 2)
                obj = this.feedback_contents["rsAVSurveyQuestions"];
            else if (page == 3)
                obj = this.feedback_contents["rsCQSurveyQuestions"];
            else
                obj = null;
            if (obj != null) {
                saveFeedbackApiUrl += "&survey_name=" + obj["survey_name"];
                saveFeedbackApiUrl += "&surveyQ1=" + obj["surveyQ1"];
                saveFeedbackApiUrl += "&surveyQ2=" + obj["surveyQ2"];
                saveFeedbackApiUrl += "&surveyQ3=" + obj["surveyQ3"];
                saveFeedbackApiUrl += "&surveyQ4=" + obj["surveyQ4"];
                saveFeedbackApiUrl += "&surveyQ5=" + obj["surveyQ5"];
            }
            else
                saveFeedbackApiUrl += "&survey_name=" + "&surveyQ1=" + "&surveyQ2=" + "&surveyQ3=" + "&surveyQ4=" + "&surveyQ5=";
            saveFeedbackApiUrl += "&surveyA1=" + this.answers[page][0];
            saveFeedbackApiUrl += "&surveyA2=" + this.answers[page][1];
            saveFeedbackApiUrl += "&surveyA3=" + this.answers[page][2];
            saveFeedbackApiUrl += "&surveyA4=" + this.answers[page][3];
            saveFeedbackApiUrl += "&surveyA5=" + this.answers[page][4];
            this.showLoading();
            this.http.get(saveFeedbackApiUrl).map(function (response) { return response.json(); }).subscribe(function (data) {
                setTimeout(function () {
                    _this.loading.dismiss().catch(function () { });
                    _this.showToast(data.msg);
                    _this.feedback_confirm = true;
                    // if (data.res == 'success')
                    // {
                    //   // this.currentUser = data.user;
                    // }
                    // else
                    // {
                    //   this.showToast(data.msg);
                    //   this.feedback_confirm = true; 
                    // }
                });
            }),
                function (err) {
                    setTimeout(function () {
                        _this.loading.dismiss().catch(function () { });
                        _this.showToast("Access denied");
                    });
                };
        }
    };
    AboutPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    AboutPage.prototype.showToast = function (message) {
        if (this.loading != null) {
            this.loading.dismiss().catch(function () { });
        }
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    AboutPage.prototype.toggleState = function (page, ind) {
        this.state[page][ind] = !this.state[page][ind];
    };
    AboutPage.prototype.goBack = function () {
        this.init();
    };
    AboutPage.prototype.showPage = function (p) {
        if (p.length > 0) {
            this.page = p;
        }
    };
    AboutPage.prototype.presentPopover = function (event) {
    };
    AboutPage.prototype.loadData = function () {
        var _this = this;
        this.http.get(this.RestApiURL).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.feedback_contents = data;
        }),
            function (err) {
                // console.log("Oops!");
            };
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
        this.loadData();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/about/about.html"*/'<ion-header class="ui-header">\n    <ion-navbar>\n        <ion-title>\n            <h1 class="ui-title">\n                &nbsp;\n            </h1>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (tap)="showMenu()">\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-navbar class="grayback">\n        <ion-scroll scrollX="true" class="mbsc-ms-icons mbsc-mobi-blue mbsc-ms-b mbsc-mobiscroll" *ngIf="feedback_confirm==false">\n            <ul id="about_menustrip" class="md-selected mbsc-comp mbsc-ms" style="font-size: 20px; height: 82px;">\n                <li class="dataTab mbsc-ms-item mbsc-btn-e" *ngFor="let each of html_data?.scroll" (tap)="showPage(each[\'id\'])" [ngClass]="{\'mbsc-ms-item-sel\': page==each[\'id\']}">\n                    <span class="{{each[\'font\']}} mbsc-ms-item-i mbsc-ms-ic mbsc-ic {{each[\'class\']}}" ><span class="mbsc-ms-item-i-t"><span class="mbsc-ms-item-i-c">{{each[\'name\']}}</span></span></span>\n                </li>\n            </ul>\n        </ion-scroll>\n        <div class="fullWidth robotoLight bgGray" *ngIf="feedback_confirm==true">\n            <p>Quick Feedback</p>\n        </div>\n    </ion-navbar>\n</ion-header>\n<ion-content overflow-scroll="true"  class="ui-page-theme-a">\n    <div class="ui-content" role="main" *ngIf="feedback_confirm==false">\n        <p>&nbsp;</p>\n        <p>&nbsp;</p>\n        <div id="tab-aaaa" *ngIf="page==\'tab-aaaa\'">\n            <div class="opacity5">\n                <div [innerHTML]="html_data?.aaaa.header"></div>\n                <ng-container *ngFor="let each_data of html_data?.aaaa.data; let i = index">\n                    <div data-collapsed-icon="arrow-r" data-inset="false" data-expanded-icon="arrow-d" data-corners="false" class="ui-nodisc-icon ui-collapsible ui-collapsible-themed-content ui-collapsible-collapsed" data-role="collapsible">\n                        <h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed">\n                            <a href="#" class="ui-collapsible-heading-toggle ui-btn ui-icon-arrow-r ui-btn-icon-left ui-btn-inherit" (tap)="toggleState(\'tab-aaaa\',i)" [ngClass]="{\'ui-icon-arrow-r\': state[\'tab-aaaa\'][i], \'ui-icon-arrow-d\': !state[\'tab-aaaa\'][i]}">\n                                <div [innerHTML]="each_data.title"></div>\n                            </a>\n                        </h3>\n                        <div class="ui-collapsible-content ui-body-inherit" [ngClass]="{\'ui-collapsible-content-collapsed\': state[\'tab-aaaa\'][i]}" aria-hidden="true">\n                            <div [innerHTML]="each_data.content"></div>\n                        </div>\n                    </div>\n                    <br>\n                    <hr class="hrblue">\n                </ng-container>\n                <div [innerHTML]="html_data?.aaaa.ifooter"></div>\n            </div>\n            <div [innerHTML]="html_data?.aaaa.ofooter"></div>\n        </div>\n        <div id="tab-bbbb" *ngIf="page==\'tab-bbbb\'">\n            <div [innerHTML]="html_data?.bbbb.data"></div>\n        </div>\n        <div id="tab-cccc"  *ngIf="page==\'tab-cccc\'">\n            <div [innerHTML]="html_data?.cccc.data"></div>\n        </div>\n        <div id="tab-dddd"  *ngIf="page==\'tab-dddd\'">\n            <div [innerHTML]="html_data?.dddd.data"></div>\n        </div>\n        <div id="tab-eeee"  *ngIf="page==\'tab-eeee\'">\n            <div [innerHTML]="html_data?.eeee.data"></div>\n        </div>\n        <div id="tab-ffff"  *ngIf="page==\'tab-ffff\'">\n            <div [innerHTML]="html_data?.ffff.data"></div>\n        </div>\n        <div id="tab-gggg"  *ngIf="page==\'tab-gggg\'">\n            <div [innerHTML]="html_data?.gggg.data"></div>\n        </div>\n        <div id="tab-hhhh"  *ngIf="page==\'tab-hhhh\'">\n            <div [innerHTML]="html_data?.hhhh.data"></div>\n        </div>\n        <div id="tab-iiii"  *ngIf="page==\'tab-iiii\'">\n            <div [innerHTML]="html_data?.iiii.data"></div>\n        </div>\n        <div id="tab-kkkk"  *ngIf="page==\'tab-kkkk\'">\n            <div class="opacity5">\n                <div [innerHTML]="html_data?.kkkk.header"></div>\n                <ng-container *ngFor="let each_data of html_data?.kkkk.data; let i = index">\n                    <div data-collapsed-icon="arrow-r" data-inset="false" data-expanded-icon="arrow-d" data-corners="false" class="ui-nodisc-icon ui-collapsible ui-collapsible-themed-content ui-collapsible-collapsed" data-role="collapsible">\n                        <h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed">\n                            <a href="#" class="ui-collapsible-heading-toggle ui-btn ui-icon-arrow-r ui-btn-icon-left ui-btn-inherit" (tap)="toggleState(\'tab-kkkk\',i)" [ngClass]="{\'ui-icon-arrow-r\': state[\'tab-kkkk\'][i], \'ui-icon-arrow-d\': !state[\'tab-kkkk\'][i]}">\n                                <div [innerHTML]="each_data.title"></div>\n                            </a>\n                        </h3>\n                        <div class="ui-collapsible-content ui-body-inherit" [ngClass]="{\'ui-collapsible-content-collapsed\': state[\'tab-kkkk\'][i]}" aria-hidden="true">\n                            <div [innerHTML]="each_data.content"></div>\n                        </div>\n                    </div>\n                    <br>\n                    <hr class="hrorange">\n                    <br>\n                </ng-container>\n                <p>&nbsp;</p>\n            </div>\n        </div>\n        <div id="tab-llll"  *ngIf="page==\'tab-llll\'">\n            <div class="opacity5">\n                <div [innerHTML]="html_data?.llll.header"></div>\n                <ng-container *ngFor="let each_data of html_data?.llll.data; let i = index">\n                    <div data-collapsed-icon="arrow-r" data-inset="false" data-expanded-icon="arrow-d" data-corners="false" class="ui-nodisc-icon ui-collapsible ui-collapsible-themed-content ui-collapsible-collapsed" data-role="collapsible">\n                        <h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-left ui-btn-inherit" (tap)="toggleState(\'tab-llll\',i)" [ngClass]="{\'ui-icon-arrow-r\': state[\'tab-llll\'][i], \'ui-icon-arrow-d\': !state[\'tab-llll\'][i]}">\n                            <div [innerHTML]="each_data.title"></div>\n                        </a></h3>\n                        <div class="ui-collapsible-content ui-body-inherit" [ngClass]="{\'ui-collapsible-content-collapsed\': state[\'tab-llll\'][i]}" aria-hidden="true">\n                            <div [innerHTML]="each_data.content"></div>\n                        </div>\n                    </div>\n                    <br>\n                    <hr class="hrorange">\n                    <br>\n                </ng-container>\n                <p>&nbsp;</p>\n            </div>\n\n            <p>&nbsp;</p>\n        </div>\n        <div id="tab-mmmm"  *ngIf="page==\'tab-mmmm\'">\n\n            <div class="opacity5">\n                <div [innerHTML]="html_data?.mmmm.header"></div>\n                <ng-container *ngFor="let each_data of html_data?.mmmm.data; let i = index">\n                    <div data-collapsed-icon="arrow-r" data-inset="false" data-expanded-icon="arrow-d" data-corners="false" class="ui-nodisc-icon ui-collapsible ui-collapsible-themed-content ui-collapsible-collapsed" data-role="collapsible">\n                        <h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-left ui-btn-inherit" (tap)="toggleState(\'tab-mmmm\',i)" [ngClass]="{\'ui-icon-arrow-r\': state[\'tab-mmmm\'][i], \'ui-icon-arrow-d\': !state[\'tab-mmmm\'][i]}">\n                            <div [innerHTML]="each_data.title"></div>\n                        </a></h3>\n                        <div class="ui-collapsible-content ui-body-inherit" [ngClass]="{\'ui-collapsible-content-collapsed\': state[\'tab-mmmm\'][i]}" aria-hidden="true">\n                            <div [innerHTML]="each_data.content"></div>\n                        </div>\n                    </div>\n                    <br>\n                    <hr class="hrorange">\n                    <br>\n                </ng-container>\n                <p>&nbsp;</p>\n            </div>\n\n            <p>&nbsp;</p>\n        </div>\n        <div id="tab-nnnn" class="ui-mobile" *ngIf="page==\'tab-nnnn\'">\n\n            <div class="opacity5">\n                <div [innerHTML]="html_data?.nnnn.header"></div>\n                <div data-collapsed-icon="arrow-r" data-inset="false" data-expanded-icon="arrow-d" data-corners="false" class="ui-nodisc-icon ui-collapsible ui-collapsible-themed-content ui-collapsible-collapsed" data-role="collapsible">\n                    <h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed">\n                        <a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-left ui-btn-inherit" (tap)="toggleState(\'tab-nnnn\',0)" [ngClass]="{\'ui-icon-arrow-r\': state[\'tab-nnnn\'][0], \'ui-icon-arrow-d\': !state[\'tab-nnnn\'][0]}">\n                            <span class="bluefont robotoLight">User Experience (UX)</span>         \n                            <span class="redfont robotoLight font12" *ngIf="feedback_contents[\'rsUXSurveyName\']>0">(<span class="mbsc-ic mbsc-ic-ion-android-checkmark"></span> Thank you!)</span>  \n                            <span class="ui-collapsible-heading-status"> click to expand contents</span>\n                        </a>\n                    </h3>\n                    <div class="ui-collapsible-content ui-body-inherit" [ngClass]="{\'ui-collapsible-content-collapsed\': state[\'tab-nnnn\'][0]}" aria-hidden="true">\n                        <div class="UXsurveyIntroDiv" *ngIf="feedback[0]==0 && feedback_contents[\'rsUXSurveyName\']>0">\n                            <div class="maxwidth300">\n                                <div class="ovalBorderRightRed centerText"> \n                                    <span class="redfont">UX feedback received!</span><br>\n                                    Like to leave another UX feedback?\n                                </div>\n                                <div align="right">\n                                    <img src="assets/img/pharm/male/pharm-john-port-red.svg" alt="pharmacist" width="80">\n                                </div>\n                            </div>\n                            <p class="centerText">\n                                <button data-inline="true" data-role="none" class="buttonRedBorderThin showUXSurveyA1" (tap)="transitFeedback(0,1)">Let\'s Start</button>\n                            </p>\n                        </div>\n                        <form action="" method="POST" name="UX_feedback_survey_form" id="UX_feedback_survey_form">\n                            <input type="hidden" name="userid" class="useridField" id="userid" value="4908">\n                            <input type="hidden" name="survey_type" value="Feedbacks">\n                            <input type="hidden" name="survey_name" value="UX feedback">\n                            <div data-role="fieldcontain" class="UXsurveyA1 ui-field-contain" *ngIf="feedback[0]==1">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ1" value="This app is easy to get comfortable with pretty fast.">\n                                <label for="surveyA1"><span class="greenfont">This app is easy to get comfortable with pretty fast.</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[0][0]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA1_1\']}}" >{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA1_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA1_2\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA1_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA1_3\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA1_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA1_4\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA1_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA1_5\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA1_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showUXSurveyA2" *ngIf="answers[0][0]!=\'\'">                     \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(0,2)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">2 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="UXsurveyA2 ui-field-contain" *ngIf="feedback[0]==2">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ2" value="If we told you google built this app, the first thought that will come to you will be…">\n                                <label for="surveyA2"><span class="greenfont">If we told you google built this app, the first thought that will come to you will be…</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[0][1]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA2_1\']}}" >{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA2_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA2_2\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA2_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA2_3\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA2_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA2_4\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA2_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA2_5\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA2_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showUXSurveyA3" *ngIf="answers[0][1]!=\'\'"> \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(0,3)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">3 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="UXsurveyA3 ui-field-contain" *ngIf="feedback[0]==3">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ3" value="I think this app should be released to the market as it is today.">\n                                <label for="surveyA3"><span class="greenfont">I think this app should be released to the market as it is today.</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[0][2]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA3_1\']}}" >{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA3_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA3_2\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA3_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA3_3\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA3_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA3_4\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA3_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA3_5\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA3_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showUXSurveyA4" *ngIf="answers[0][2]!=\'\'"> \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(0,4)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">4 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="UXsurveyA4 ui-field-contain" *ngIf="feedback[0]==4">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ4" value="What is the most important thing that prevented you from having a good user experience?">\n                                <label for="surveyA4"><span class="greenfont">What is the most important thing that prevented you from having a good user experience?</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[0][3]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA4_1\']}}" >{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA4_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA4_2\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA4_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA4_3\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA4_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA4_4\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA4_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA4_5\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA4_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showUXSurveyA5" *ngIf="answers[0][3]!=\'\'"> \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(0,5)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">5 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="UXsurveyA5 ui-field-contain" *ngIf="feedback[0]==5">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ5" value="I think this app is ready for prime time.">\n                                <label for="surveyA5"><span class="greenfont">I think this app is ready for prime time.</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[0][4]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA5_1\']}}" >{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA5_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA5_2\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA5_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA5_3\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA5_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA5_4\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA5_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA5_5\']}}">{{feedback_contents[\'rsUXSurveyQuestions\'][\'surveyA5_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="submitSurvey centerText" *ngIf="answers[0][4]!=\'\'">\n                                    <input type="submit" id="submitUXSurvey" name="submitUXSurvey" data-role="none" class="buttonBlueBorder fontLarge" value="Send Feedback" (tap)="transitFeedback(0,6)">\n                                </p>\n                            </div>\n                        </form>\n                        <p>&nbsp;</p>\n                        <p>&nbsp;</p>\n                        <p>&nbsp;</p>\n                    </div>\n                </div>\n                <br>\n                <hr class="hrblue">\n                <br>\n                <div data-collapsed-icon="arrow-r" data-inset="false" data-expanded-icon="arrow-d" data-corners="false" class="ui-nodisc-icon ui-collapsible ui-collapsible-themed-content ui-collapsible-collapsed" data-role="collapsible">\n                    <h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-left ui-btn-inherit" (tap)="toggleState(\'tab-nnnn\',1)" [ngClass]="{\'ui-icon-arrow-r\': state[\'tab-nnnn\'][1], \'ui-icon-arrow-d\': !state[\'tab-nnnn\'][1]}"><span class="bluefont robotoLight">User Interface (UI)</span>         \n                        <span class="redfont robotoLight font12" *ngIf="feedback_contents[\'rsUISurveyName\']>0">(<span class="mbsc-ic mbsc-ic-ion-android-checkmark"></span> Thank you!)</span>  \n                        <span class="ui-collapsible-heading-status"> click to expand contents</span></a>\n                    </h3>\n                    <div class="ui-collapsible-content ui-body-inherit" [ngClass]="{\'ui-collapsible-content-collapsed\': state[\'tab-nnnn\'][1]}" aria-hidden="true">\n                        <div class="UIsurveyIntroDiv" *ngIf="feedback[1]==0 && feedback_contents[\'rsUISurveyName\']>0">\n                            <div class="maxwidth300">\n                                <div class="ovalBorderRightRed centerText"> \n                                    <span class="redfont">UI feedback received!</span><br>\n                                    Like to leave another UI feedback?\n                                </div>\n                                <div align="right">\n                                    <img src="assets/img/pharm/male/pharm-john-port-red.svg" alt="pharmacist" width="80">\n                                </div>\n                            </div>\n                            <p class="centerText">\n                                <button data-inline="true" data-role="none" class="buttonRedBorderThin showUISurveyA1" (tap)="transitFeedback(1,1)">Let\'s Start</button>\n                            </p>\n                        </div>\n                        <form action="" method="POST" name="UI_feedback_survey_form" id="UI_feedback_survey_form">\n                            <input type="hidden" name="userid" class="useridField" id="userid" value="4908">\n                            <input type="hidden" name="survey_type" value="Feedbacks">\n                            <input type="hidden" name="survey_name" value="UI feedback">\n                            <div data-role="fieldcontain" class="UIsurveyA1 ui-field-contain" *ngIf="feedback[1]==1">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ1" value="How acceptable is using speech bubbles in conversations to you?">\n                                <label for="surveyA1"><span class="greenfont">How acceptable is using speech bubbles in conversations to you?</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[1][0]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA1_1\']}}" >{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA1_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA1_2\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA1_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA1_3\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA1_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA1_4\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA1_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA1_5\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA1_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showUISurveyA2" *ngIf="answers[1][0]!=\'\'">                     \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(1,2)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">2 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="UIsurveyA2 ui-field-contain" *ngIf="feedback[1]==2">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ2" value="This app needs a getting started guide because it was hard to figure out at first.">\n                                <label for="surveyA2"><span class="greenfont">This app needs a getting started guide because it was hard to figure out at first.</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[1][1]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA2_1\']}}" >{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA2_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA2_2\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA2_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA2_3\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA2_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA2_4\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA2_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA2_5\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA2_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showUISurveyA3" *ngIf="answers[1][1]!=\'\'"> \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(1,3)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">3 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="UIsurveyA3 ui-field-contain" *ngIf="feedback[1]==3">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ3" value="This app is designed for all levels of users?">\n                                <label for="surveyA3"><span class="greenfont">This app is designed for all levels of users?</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[1][2]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA3_1\']}}" >{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA3_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA3_2\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA3_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA3_3\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA3_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA3_4\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA3_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA3_5\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA3_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showUISurveyA4" *ngIf="answers[1][2]!=\'\'"> \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(1,4)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">4 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="UIsurveyA4 ui-field-contain" *ngIf="feedback[1]==4">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ4" value="The organization of information on the screen was clear and consistent throughout the&nbsp;app.">\n                                <label for="surveyA4"><span class="greenfont">The organization of information on the screen was clear and consistent throughout the&nbsp;app.</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[1][3]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA4_1\']}}" >{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA4_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA4_2\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA4_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA4_3\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA4_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA4_4\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA4_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA4_5\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA4_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showUISurveyA5" *ngIf="answers[1][3]!=\'\'"> \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(1,5)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">5 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="UIsurveyA5 ui-field-contain" *ngIf="feedback[1]==5">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ5" value="The flow of this app is ...">\n                                <label for="surveyA5"><span class="greenfont">The flow of this app is ...</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[1][4]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA5_1\']}}" >{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA5_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA5_2\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA5_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA5_3\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA5_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA5_4\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA5_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA5_5\']}}">{{feedback_contents[\'rsUISurveyQuestions\'][\'surveyA5_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="submitSurvey centerText" *ngIf="answers[1][4]!=\'\'">\n                                    <input type="submit" id="submitUISurvey" name="submitUISurvey" data-role="none" class="buttonBlueBorder fontLarge" value="Send Feedback" (tap)="transitFeedback(1,6)">\n                                </p>\n                            </div>\n                        </form>\n                        <p>&nbsp;</p>\n                        <p>&nbsp;</p>\n                        <p>&nbsp;</p>\n                    </div>\n                </div>\n                <br>\n                <hr class="hrblue">\n                <div data-collapsed-icon="arrow-r" data-inset="false" data-expanded-icon="arrow-d" data-corners="false" class="ui-nodisc-icon ui-collapsible ui-collapsible-themed-content ui-collapsible-collapsed" data-role="collapsible">\n                    <h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-left ui-btn-inherit" (tap)="toggleState(\'tab-nnnn\',2)" [ngClass]="{\'ui-icon-arrow-r\': state[\'tab-nnnn\'][2], \'ui-icon-arrow-d\': !state[\'tab-nnnn\'][2]}"><span class="bluefont robotoLight">Application Value (AV)</span>         \n                        <span class="redfont robotoLight font12" *ngIf="feedback_contents[\'rsAVSurveyName\']>0">(<span class="mbsc-ic mbsc-ic-ion-android-checkmark"></span> Thank you!)</span>  \n                        <span class="ui-collapsible-heading-status"> click to expand contents</span></a>\n                    </h3>\n                    <div class="ui-collapsible-content ui-body-inherit" [ngClass]="{\'ui-collapsible-content-collapsed\': state[\'tab-nnnn\'][2]}" aria-hidden="true">\n                        <div class="AVsurveyIntroDiv" *ngIf="feedback[2]==0 && feedback_contents[\'rsAVSurveyName\']>0">\n                            <div class="maxwidth300">\n                                <div class="ovalBorderRightRed centerText"> \n                                    <span class="redfont">AV feedback received!</span><br>\n                                    Like to leave another AV feedback?\n                                </div>\n                                <div align="right">\n                                    <img src="assets/img/pharm/male/pharm-john-port-red.svg" alt="pharmacist" width="80">\n                                </div>\n                            </div>\n                            <p class="centerText">\n                                <button data-inline="true" data-role="none" class="buttonRedBorderThin showAVSurveyA1" (tap)="transitFeedback(2,1)">Let\'s Start</button>\n                            </p>\n                        </div>\n                        <form action="" method="POST" name="AV_feedback_survey_form" id="AV_feedback_survey_form">\n                            <input type="hidden" name="userid" class="useridField" id="userid" value="4908">\n                            <input type="hidden" name="survey_type" value="Feedbacks">\n                            <input type="hidden" name="survey_name" value="AV feedback">\n                            <div data-role="fieldcontain" class="AVsurveyA1 ui-field-contain" *ngIf="feedback[2]==1">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ1" value="I will pay for this app if I have to.">\n                                <label for="surveyA1"><span class="greenfont">I will pay for this app if I have to.</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[2][0]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA1_1\']}}" >{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA1_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA1_2\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA1_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA1_3\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA1_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA1_4\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA1_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA1_5\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA1_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showAVSurveyA2" *ngIf="answers[2][0]!=\'\'">                     \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(2,2)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">2 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="AVsurveyA2 ui-field-contain" *ngIf="feedback[2]==2">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ2" value="I can see myself using this app...">\n                                <label for="surveyA2"><span class="greenfont">I can see myself using this app...</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[2][1]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA2_1\']}}" >{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA2_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA2_2\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA2_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA2_3\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA2_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA2_4\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA2_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA2_5\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA2_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showAVSurveyA3" *ngIf="answers[2][1]!=\'\'"> \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(2,3)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">3 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="AVsurveyA3 ui-field-contain" *ngIf="feedback[2]==3">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ3" value="I definitely need this app.">\n                                <label for="surveyA3"><span class="greenfont">I definitely need this app.</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[2][2]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA3_1\']}}" >{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA3_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA3_2\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA3_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA3_3\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA3_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA3_4\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA3_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA3_5\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA3_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showAVSurveyA4" *ngIf="answers[2][2]!=\'\'"> \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(2,4)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">4 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="AVsurveyA4 ui-field-contain" *ngIf="feedback[2]==4">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ4" value="How long did it take before you knew this app was right for you or not?">\n                                <label for="surveyA4"><span class="greenfont">How long did it take before you knew this app was right for you or not?</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[2][3]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA4_1\']}}" >{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA4_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA4_2\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA4_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA4_3\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA4_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA4_4\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA4_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA4_5\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA4_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showAVSurveyA5" *ngIf="answers[2][3]!=\'\'"> \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(2,5)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">5 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="AVsurveyA5 ui-field-contain" *ngIf="feedback[2]==5">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ5" value="If a friend has healthcare needs, I will probably share this app with them on Facebook.">\n                                <label for="surveyA5"><span class="greenfont">If a friend has healthcare needs, I will probably share this app with them on Facebook.</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[2][4]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA5_1\']}}" >{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA5_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA5_2\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA5_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA5_3\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA5_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA5_4\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA5_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA5_5\']}}">{{feedback_contents[\'rsAVSurveyQuestions\'][\'surveyA5_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="submitSurvey centerText" *ngIf="answers[2][4]!=\'\'">\n                                    <input type="submit" id="submitAVSurvey" name="submitAVSurvey" data-role="none" class="buttonBlueBorder fontLarge" value="Send Feedback" (tap)="transitFeedback(2,6)">\n                                </p>\n                            </div>\n                        </form>\n                        <p>&nbsp;</p>\n                        <p>&nbsp;</p>\n                        <p>&nbsp;</p>\n                    </div>\n                </div>\n                <br>\n                <hr class="hrblue">\n                <br>\n                <div data-collapsed-icon="arrow-r" data-inset="false" data-expanded-icon="arrow-d" data-corners="false" class="ui-nodisc-icon ui-collapsible ui-collapsible-themed-content ui-collapsible-collapsed" data-role="collapsible">\n                    <h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-left ui-btn-inherit" (tap)="toggleState(\'tab-nnnn\',3)" [ngClass]="{\'ui-icon-arrow-r\': state[\'tab-nnnn\'][3], \'ui-icon-arrow-d\': !state[\'tab-nnnn\'][3]}"><span class="bluefont robotoLight">Content Quality (CQ)</span>         \n                        <span class="redfont robotoLight font12" *ngIf="feedback_contents[\'rsCQSurveyName\']>0">(<span class="mbsc-ic mbsc-ic-ion-android-checkmark"></span> Thank you!)</span>  \n                        <span class="ui-collapsible-heading-status"> click to expand contents</span></a>\n                    </h3>\n                    <div class="ui-collapsible-content ui-body-inherit" [ngClass]="{\'ui-collapsible-content-collapsed\': state[\'tab-nnnn\'][3]}" aria-hidden="true">\n                        <div class="CQsurveyIntroDiv" *ngIf="feedback[3]==0 && feedback_contents[\'rsCQSurveyName\']>0">\n                            <div class="maxwidth300">\n                                <div class="ovalBorderRightRed centerText"> \n                                    <span class="redfont">CQ feedback received!</span><br>\n                                    Like to leave another CQ feedback?\n                                </div>\n                                <div align="right">\n                                    <img src="assets/img/pharm/male/pharm-john-port-red.svg" alt="pharmacist" width="80">\n                                </div>\n                            </div>\n                            <p class="centerText">\n                                <button data-inline="true" data-role="none" class="buttonRedBorderThin showCQSurveyA1" (tap)="transitFeedback(3,1)">Let\'s Start</button>\n                            </p>\n                        </div>\n                        <form action="" method="POST" name="CQ_feedback_survey_form" id="CQ_feedback_survey_form">\n                            <input type="hidden" name="userid" class="useridField" id="userid" value="4908">\n                            <input type="hidden" name="survey_type" value="Feedbacks">\n                            <input type="hidden" name="survey_name" value="CQ feedback">\n                            <div data-role="fieldcontain" class="CQsurveyA1 ui-field-contain" *ngIf="feedback[3]==1">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ1" value="How would you rate the contents of this app in terms of presentation quality?">\n                                <label for="surveyA1"><span class="greenfont">How would you rate the contents of this app in terms of presentation quality?</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[3][0]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA1_1\']}}" >{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA1_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA1_2\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA1_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA1_3\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA1_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA1_4\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA1_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA1_5\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA1_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showCQSurveyA2" *ngIf="answers[3][0]!=\'\'">                     \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(3,2)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">2 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="CQsurveyA2 ui-field-contain" *ngIf="feedback[3]==2">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ2" value="Please rate the contents in terms of trust.">\n                                <label for="surveyA2"><span class="greenfont">Please rate the contents in terms of trust.</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[3][1]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA2_1\']}}" >{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA2_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA2_2\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA2_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA2_3\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA2_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA2_4\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA2_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA2_5\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA2_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showCQSurveyA3" *ngIf="answers[3][1]!=\'\'"> \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(3,3)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">3 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="CQsurveyA3 ui-field-contain" *ngIf="feedback[3]==3">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ3" value="How well does this app meet the objectives of getting an over-the-counter self-care pharmacist\'s recommendation?">\n                                <label for="surveyA3"><span class="greenfont">How well does this app meet the objectives of getting an over-the-counter self-care pharmacist\'s recommendation?</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[3][2]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA3_1\']}}" >{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA3_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA3_2\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA3_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA3_3\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA3_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA3_4\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA3_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA3_5\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA3_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showCQSurveyA4" *ngIf="answers[3][2]!=\'\'"> \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(3,4)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">4 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="CQsurveyA4 ui-field-contain" *ngIf="feedback[3]==4">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ4" value="Were abbreviations and acronyms used easy to understand?">\n                                <label for="surveyA4"><span class="greenfont">Were abbreviations and acronyms used easy to understand?</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[3][3]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA4_1\']}}" >{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA4_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA4_2\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA4_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA4_3\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA4_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA4_4\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA4_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA4_5\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA4_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="centerText showCQSurveyA5" *ngIf="answers[3][3]!=\'\'"> \n                                    <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="transitFeedback(3,5)">Next Question <span class="mbsc-ic mbsc-ic-ion-arrow-right-c mobi-icon-font24"></span><br> <span class="graygrayfontSmall">5 of 5</span></a>\n                                </p>\n                            </div>\n                            <div data-role="fieldcontain" class="CQsurveyA5 ui-field-contain" *ngIf="feedback[3]==5">\n                                <p>&nbsp;</p>\n                                <p>&nbsp;</p>\n                                <input type="hidden" name="surveyQ5" value="What part of this app did the contents not meet your expectations?">\n                                <label for="surveyA5"><span class="greenfont">What part of this app did the contents not meet your expectations?</span></label><br>\n                                <ion-item class="feedback_selects">\n                                  <ion-label>Please answer here</ion-label>\n                                  <ion-select [(ngModel)]="answers[3][4]" name="surveyA1" id="UX_feedback_surveyA1">\n                                    <ion-option selected="" disabled=""></ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA5_1\']}}" >{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA5_1\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA5_2\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA5_2\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA5_3\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA5_3\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA5_4\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA5_4\']}}</ion-option>\n                                    <ion-option value="{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA5_5\']}}">{{feedback_contents[\'rsCQSurveyQuestions\'][\'surveyA5_5\']}}</ion-option>\n                                  </ion-select>\n                                </ion-item>\n                                <div class="clearboth"></div>\n                                <br>\n                                <p class="submitSurvey centerText" *ngIf="answers[3][4]!=\'\'">\n                                    <input type="submit" id="submitCQSurvey" name="submitCQSurvey" data-role="none" class="buttonBlueBorder fontLarge" value="Send Feedback" (tap)="transitFeedback(3,6)">\n                                </p>\n                            </div>\n                        </form>\n                        <p>&nbsp;</p>\n                        <p>&nbsp;</p>\n                        <p>&nbsp;</p>\n                    </div>\n                </div>\n                <br>\n                <hr class="hrblue">\n                <br>\n                <br>\n                <p>&nbsp;</p>\n                <p>&nbsp;</p>\n            </div>\n\n            <p>&nbsp;</p>\n        </div>\n    </div>\n    <div class="ui-content" *ngIf="feedback_confirm==true">\n        <div [innerHTML]="html_data?.confirm.data"></div>\n        <p class="centerText"> \n            <a href="mailto:contactus@selfcare-otc.com?Subject=Feedback%20for%20Selfcare-OTC%20app" target="_top" class="linkOrangeBorder ui-link" data-inline="true">Contact Us</a>\n            <a href="#" class="linkBlue ui-link" data-inline="true" (tap)="goBack()">Continue</a>\n        </p>\n        <p>&nbsp;</p>\n        <p>&nbsp;</p>\n        <p>&nbsp;</p>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__["a" /* AuthService */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfCarePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adult_take_mobile_list_adult_take_mobile_list__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SelfCarePage = (function () {
    function SelfCarePage(navCtrl, navParams, menu, alertCtrl, loadingCtrl, http, sanitizer, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.sanitizer = sanitizer;
        this.toastCtrl = toastCtrl;
        this.dsearch = "";
        this.menu = menu;
        this.pmode = 0;
        this.page = 0;
        this.topPx = 0;
        this.noscroll = false;
    }
    SelfCarePage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/self_care.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    SelfCarePage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting('a');
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    SelfCarePage.prototype.hereGo = function () {
        if (this.dsearch == "")
            this.showToast("First name please.");
        else {
            this.pmode = 1;
            this.page = 0;
            this.noscroll = false;
            this.html_data.main_header = this.html_data.main_header.replace("{{dsearch}}", this.dsearch);
        }
    };
    SelfCarePage.prototype.showWhy = function () {
        this.showToast("For a great conversational user experience. No information is stored.");
    };
    SelfCarePage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    SelfCarePage.prototype.gotoPage = function (p) {
        __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].setFirstname(this.dsearch);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__adult_take_mobile_list_adult_take_mobile_list__["a" /* AdultTakeMobileListPage */]);
    };
    SelfCarePage.prototype.transitPage = function (p) {
        this.page = p;
        if (p > 0) {
            this.noscroll = true;
            this.topPx = this.content.getContentDimensions().scrollTop;
        }
        else
            this.noscroll = false;
    };
    SelfCarePage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return SelfCarePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], SelfCarePage.prototype, "content", void 0);
SelfCarePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-self-care',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/self-care/self-care.html"*/'\n<ion-header class="ui-header">\n    <ion-navbar>\n        <ion-title>\n            <h1 class="ui-title">\n                Introduction\n            </h1>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (tap)="showMenu()">\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-navbar>\n        <p class="fullWidth robotoLight bgLightBlue" *ngIf="pmode==0">Hello,</p>\n        <p class="fullWidth robotoLight bgLightBlue" *ngIf="pmode==1">Who is this for?</p>\n    </ion-navbar>\n</ion-header>\n<ion-content overflow-scroll="true"  class="ui-page-theme-a" [ngClass]="{\'back1\': pmode==0, \'back2\': pmode==1, \'no-scroll\': noscroll}">\n    <div class="ui-content intro-page" *ngIf="pmode==0">\n        <div [innerHTML]="html_data?.intro_header"></div>\n        <div class="centerText">\n            <div [innerHTML]="html_data?.intro_footer"></div>\n            <p><a href="#" data-role="button" class="ui-btn ui-btn-j ui-shadow ui-btn-inline" id="intro_firstname_link" data-inline="true" data-theme="j" (tap)="transitPage(1)">Let\'s get Started</a></p>\n            <div [innerHTML]="html_data?.intro_footer"></div>\n        </div>\n        <div [innerHTML]="html_data?.intro_footer"></div>\n    </div>\n    <div lang="en" class="mbsc-mobi-blue mbsc-mobiscroll dw-top  mbsc-wdg" *ngIf="page==1&&pmode==0">\n        <div class="dw-persp slidedown in">\n            <div class="dwo" (tap)="transitPage(0)"></div>\n            <div role="dialog" tabindex="-1" class="dw dw-ltr">\n                <div class="dwwr">\n                    <div aria-live="assertive" class="dw-aria dw-hidden"></div>\n                    <div class="dwcc mbsc-wdg-c mbsc-w-p">\n                        <div id="intro_firstname" style="" class="mbsc-comp">\n                            <div class="maxwidth300">\n                                <div [innerHTML]="html_data?.mbsc_header"></div>\n                                <form data-enhance="false" class="md-form mbsc-comp mbsc-form mbsc-mobi-blue mbsc-mobiscroll mbsc-ltr" mbsc-enhance="" id="mobiscroll1492698110595">\n                                    <div class="mbsc-input">\n                                        <span class="mbsc-input-wrap">\n                                            <input id="firstname_input" type="text" name="firstname-input" placeholder="First Name Please" required="" autofocus="" value="" class="mbsc-control mbsc-control-ev" [(ngModel)]="dsearch">\n                                        </span>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="dwbc">\n                        <div class="dwbw ">\n                            <div tabindex="0" role="button" class="dwb0 dwb-e dwb" (tap)="hereGo()">Here You Go</div>\n                        </div>\n                        <div class="dwbw ">\n                            <div tabindex="0" role="button" class="dwb1 dwb-e dwb" (tap)="showWhy()">Why?</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="ui-content fullWidth main-page slidedown in" role="main" *ngIf="pmode==1">\n        <div [innerHTML]="html_data?.main_header"></div>\n        <div>\n            <p>&nbsp;</p>\n            <p class="centerText">\n                <img src="assets/img/backgrounds/treatment/family-intro.png" alt="Who is this for?" width="300" usemap="#Map">\n                <map name="Map">\n                    <area shape="rect" coords="0,0,110,292" href="#" alt="Adult" target="_top" (tap)="gotoPage(0)">\n                    <area shape="rect" coords="120,92,184,291" href="#" alt="Child" target="_top" (tap)="gotoPage(1)">\n                    <area shape="rect" coords="192,7,296,292" href="#" alt="Adult" target="_top" (tap)="gotoPage(0)">\n                </map>\n            </p>\n            <div [innerHTML]="html_data?.intro_footer"></div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/self-care/self-care.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], SelfCarePage);

//# sourceMappingURL=self-care.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdultTakeMobileChildlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adult_symptom_childs_adult_symptom_childs__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__adult_pharmacist_childs_adult_pharmacist_childs__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//  ---------- For SymptomChilds pages -----------
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
//  ---------- For PharmacistChilds pages -----------
var AdultTakeMobileChildlistPage = (function () {
    function AdultTakeMobileChildlistPage(navCtrl, navParams, menu, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.sanitizer = sanitizer;
        this.mode = {
            0: 'a',
            1: 'n'
        };
        this.menu = menu;
        this.pageId = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageId();
        this.setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting(this.mode[this.pageId]);
        this.pages = [true, true, true, true, true, true, true, true, true, true, true, true, true];
    }
    AdultTakeMobileChildlistPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/adult_take_mobile_childlist.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    AdultTakeMobileChildlistPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting(this.mode[this.pageId]);
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    AdultTakeMobileChildlistPage.prototype.gotoSubPage = function (id) {
        __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].setPageId(id);
        if (this.pageId == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__adult_symptom_childs_adult_symptom_childs__["a" /* AdultSymptomChildsPage */]);
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__adult_pharmacist_childs_adult_pharmacist_childs__["a" /* AdultPharmacistChildsPage */]);
    };
    AdultTakeMobileChildlistPage.prototype.togglePage = function (ind) {
        this.pages[ind] = !this.pages[ind];
    };
    AdultTakeMobileChildlistPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return AdultTakeMobileChildlistPage;
}());
AdultTakeMobileChildlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-adult-take-mobile-childlist',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/adult-take-mobile-childlist/adult-take-mobile-childlist.html"*/'<ion-header class="ui-header {{setting.class}}">\n  <ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title">\n      	&nbsp;\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n	<ion-navbar class="fullWidth robotoLight {{setting.p}}">\n		<p>{{html_data?.title[pageId]}}</p>\n	</ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  padding class="{{setting.class}} content{{pageId}}">\n	<div class="ui-content">\n	    <div class="opacity1">\n	        <div [innerHTML]="html_data?.header[pageId]"></div>\n	        <ng-container *ngFor="let each_data of html_data?.content[pageId]; let i = index">\n	        	<div data-role="collapsible" data-collapsed="true" data-inset="false" class="ui-nodisc-icon ui-collapsible ui-collapsible-themed-content" [ngClass]="{\'ui-collapsible-collapsed\': pages[i]}">\n	            	<h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed">\n	            		<a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-left ui-btn-inherit" [ngClass]="{\'ui-icon-plus\': pages[i], \'ui-icon-minus\': !pages[i]}" (click)="togglePage(i)">\n	            			<div [innerHTML]="each_data?.header"></div>\n	            		</a>\n	            	</h3>\n	            	<div class="ui-collapsible-content ui-body-inherit " [ngClass]="{\'ui-collapsible-content-collapsed\': pages[i]}" aria-hidden="true">\n	            		<div>\n	            			<div [innerHTML]="each_data?.subheader"></div>\n	            			<ng-container *ngFor="let li_data of each_data?.list">\n	            				<div class="ui-grid-a">\n	                        		<div class="ui-block-a padded centerText">\n			            				<a href="#" class="ui-link" (tap)="gotoSubPage(li_data[0].id)">\n			                        		<div [innerHTML]="li_data[0].con"></div>\n			                    		</a>\n			                    	</div>\n			                    	<div class="ui-block-b padded centerText" *ngIf="li_data[1]?.con.length>0">\n			                            <a href="#" class="ui-link" (click)="gotoSubPage(li_data[1].id)">\n			                                <div [innerHTML]="li_data[1].con"></div>\n			                            </a>\n			                        </div>\n			                    </div>\n			                    <br><hr class="hrblue"><br>\n			            	</ng-container>\n			            	<div class="clearboth divider9"></div>\n	            		</div>\n	            	</div>\n	            </div>\n	            <br><hr class="hrblue"><br>\n	        </ng-container>\n	        <div [innerHTML]="html_data?.footer"></div>\n	    </div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/adult-take-mobile-childlist/adult-take-mobile-childlist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], AdultTakeMobileChildlistPage);

//# sourceMappingURL=adult-take-mobile-childlist.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdultSymptomChildsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__find_nearest_find_nearest__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nearest_nearest__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__adult_take_mobile_list_adult_take_mobile_list__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { ColdMobilePage } from '../cold-mobile/cold-mobile';
// import { UrgentCarePage } from '../urgent-care/urgent-care';


var AdultSymptomChildsPage = AdultSymptomChildsPage_1 = (function () {
    function AdultSymptomChildsPage(navCtrl, navParams, menu, platform, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.platform = platform;
        this.http = http;
        this.sanitizer = sanitizer;
        this.pagemode = {
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
            63: 'o',
            64: 'e',
            65: 'a',
            66: 'o',
            67: 'i'
        };
        this.MyContent = {
            screenWidth: 0,
            screenHeight: 0,
        };
        this.menu = menu;
        this.AbsoluteURL = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getAbsoluteURL();
        this.page = 0;
        this.pageId = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageId();
        this.setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting(this.pagemode[this.pageId]);
        this.firstname = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getFirstname();
        this.currentTemp = 0;
        if (this.firstname != "")
            this.firstname += ",";
        this.html_data = null;
        this.subPages = [
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_6__find_nearest_find_nearest__["a" /* FindNearestPage */]
            },
            {
                "id": 1,
                "page": __WEBPACK_IMPORTED_MODULE_6__find_nearest_find_nearest__["a" /* FindNearestPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_9__adult_take_mobile_list_adult_take_mobile_list__["a" /* AdultTakeMobileListPage */]
            },
            {
                "id": 24,
                "page": AdultSymptomChildsPage_1
            },
            {
                "id": 0,
                "page": AdultSymptomChildsPage_1
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_7__nearest_nearest__["a" /* NearestPage */]
            },
            {
                "id": 8,
                "page": AdultSymptomChildsPage_1
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 13,
                "page": AdultSymptomChildsPage_1
            },
            {
                "id": 14,
                "page": AdultSymptomChildsPage_1
            },
            {
                "id": 17,
                "page": AdultSymptomChildsPage_1
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": AdultSymptomChildsPage_1
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": AdultSymptomChildsPage_1
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 1,
                "page": AdultSymptomChildsPage_1
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 40,
                "page": AdultSymptomChildsPage_1
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 41,
                "page": AdultSymptomChildsPage_1
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 15,
                "page": AdultSymptomChildsPage_1
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 48,
                "page": AdultSymptomChildsPage_1
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            },
            {
                "id": 64,
                "page": AdultSymptomChildsPage_1
            },
            {
                "id": 0,
                "page": __WEBPACK_IMPORTED_MODULE_8__adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */]
            }
        ];
        this.recs = [
            false, false, false, false, false, false, false, false, false, false, false, false, false
        ];
        this.pages = [true, true, true, true, true, true, true, true, true, true, true, true, true];
        this.mode = 0;
    }
    AdultSymptomChildsPage.prototype.getTitle = function () {
        if (this.html_data != null) {
            var navbar = this.html_data[this.pageId].navbar;
            var title = void 0;
            title = "&nbsp;";
            for (var each in navbar) {
                if (navbar[each]['min'] <= this.page && navbar[each]['max'] > this.page) {
                    title = navbar[each]['content'];
                }
            }
            if (title == "firstname")
                title = this.firstname;
            return title;
        }
        else
            return "";
    };
    AdultSymptomChildsPage.prototype.getHeader = function () {
        if (this.html_data != null) {
            var data = this.html_data[this.pageId]['pages'][this.page]['header'];
            data = data.replace("{{currentTemp}}", this.currentTemp);
            data = data.replace("{{firstname}}", this.firstname);
            return data;
        }
        else
            return "";
    };
    AdultSymptomChildsPage.prototype.getHtmlData = function () {
        var _this = this;
        var num = Math.floor(this.pageId / 4);
        this.html_data = null;
        this.http.get("assets/json/adult_symptom_childs_" + num + ".json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
            _this.FYIDlg = _this.html_data[_this.pageId]['fyidlg'];
            _this.dlgcount = _this.FYIDlg.length;
        });
    };
    AdultSymptomChildsPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting(this.pagemode[this.pageId]);
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    AdultSymptomChildsPage.prototype.processFunc = function (button) {
        if (button.go == 0)
            return;
        else if (button.go > 0) {
            var slider = void 0, myslider = void 0, options = void 0;
            myslider = this.html_data[this.pageId]['pages'][this.page]['slider'];
            if (myslider != undefined && myslider != null) {
                var sliderstep = this.html_data[this.pageId]['pages'][this.page]['sliderstep'], go = this.page + 1;
                for (var each in sliderstep) {
                    if (sliderstep[each]['min'] < this.currentTemp && sliderstep[each]['max'] >= this.currentTemp) {
                        go = sliderstep[each]['go'];
                        break;
                    }
                }
                this.togglePage(go);
            }
            else {
                slider = this.html_data[this.pageId]['pages'][button.go]['slider'];
                options = this.html_data[this.pageId]['pages'][button.go]['options'];
                if (slider != undefined && slider != null)
                    this.currentTemp = slider['min'];
                if (options != undefined && options != null) {
                    for (var i = 0; i < this.recs.length; i++)
                        this.recs[i] = false;
                }
                this.togglePage(button.go);
            }
        }
        else if (button.go > -200 && button.go <= -100)
            this.toggleFYIDlg(true, -button.go - 101);
        else {
            var ind = 0 - button.go - 201;
            __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].setPageId(this.subPages[ind].id);
            this.navCtrl.push(this.subPages[ind].page);
        }
    };
    AdultSymptomChildsPage.prototype.togglePages = function (ind) {
        this.pages[ind] = !this.pages[ind];
    };
    AdultSymptomChildsPage.prototype.toggleFYIDlg = function (b, id) {
        if (b) {
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
    };
    AdultSymptomChildsPage.prototype.toggleRecs = function (ind) {
        if (ind == 10) {
            this.recs[9] = false;
            this.toggleAllRecs(false);
        }
        else if (ind == 9) {
            this.recs[10] = false;
            this.toggleAllRecs(true);
        }
        else
            this.recs[10] = false;
    };
    AdultSymptomChildsPage.prototype.toggleAllRecs = function (b) {
        for (var i = 0; i < 9; i++)
            this.recs[i] = b;
    };
    AdultSymptomChildsPage.prototype.togglePage = function (ind) {
        if (this.pageId == 0 && ind == 32) {
            var len = 0;
            for (var i = 0; i < 6; i++) {
                if (this.recs[i] == true)
                    len++;
            }
            this.mode = 0;
            if (this.recs[10] == true)
                this.page = 32;
            else if (len > 0)
                this.page = 33;
            else {
                this.mode = 100;
                ind = 31;
            }
        }
        else if (this.pageId == 1 && ind == 11) {
            var trueCount = 0;
            for (var i = 0; i < 9; i++)
                if (this.recs[i] == true)
                    trueCount++;
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
            else {
                this.mode = 6;
                ind = 10;
            }
            if (this.mode != 6)
                ind = 11 + this.mode - 1;
        }
        else if (this.pageId == 1 && ind == 42) {
            var trueCount = 0;
            for (var i = 0; i < 6; i++)
                if (this.recs[i] == true)
                    trueCount++;
            this.mode = 0;
            if (this.recs[10] == true)
                ind = 43;
            else if (trueCount > 0)
                ind = 42;
            else {
                this.mode = 100;
                ind = 41;
            }
        }
        else if (this.pageId == 2 && ind == 51) {
            var trueCount = 0;
            for (var i = 0; i < 9; i++)
                if (this.recs[i] == true)
                    trueCount++;
            if (this.recs[10] == true)
                this.mode = 1;
            else if (this.recs[9] == true)
                this.mode = 2;
            else if (trueCount > 0)
                this.mode = 3;
            else {
                this.mode = 100;
                ind = 50;
            }
            if (this.mode != 100)
                ind = 50 + this.mode;
        }
        else if (this.pageId == 3 && ind == 111) {
            var trueCount = 0;
            for (var i = 0; i < 5; i++)
                if (this.recs[i] == true)
                    trueCount++;
            if (this.recs[10] == true)
                this.mode = 1;
            else if (this.recs[3] == true)
                this.mode = 2;
            else if (trueCount > 0)
                this.mode = 3;
            else {
                this.mode = 100;
                ind = 110;
            }
            if (this.mode != 100)
                ind = 110 + this.mode;
        }
        else if (this.pageId == 4 && ind == 21) {
            var trueCount = 0;
            for (var i = 0; i < 7; i++)
                if (this.recs[i] == true)
                    trueCount++;
            if (this.recs[10] == true)
                this.mode = 1;
            else if (trueCount > 0)
                this.mode = 2;
            else {
                this.mode = 100;
                ind = 20;
            }
            if (this.mode != 100)
                ind = 20 + this.mode;
        }
        else if (this.pageId == 4 && ind == 31) {
            var trueCount = 0;
            for (var i = 0; i < 7; i++)
                if (this.recs[i] == true)
                    trueCount++;
            if (this.recs[10] == true)
                this.mode = 1;
            else if (this.recs[5] == true)
                this.mode = 2;
            else if (trueCount > 0)
                this.mode = 3;
            else {
                this.mode = 100;
                ind = 30;
            }
            if (this.mode != 100)
                ind = 30 + this.mode;
        }
        else if (this.pageId == 4 && ind == 41) {
            var trueCount = 0;
            for (var i = 0; i < 6; i++)
                if (this.recs[i] == true)
                    trueCount++;
            if (this.recs[10] == true)
                this.mode = 1;
            else if (trueCount > 0)
                this.mode = 2;
            else {
                this.mode = 100;
                ind = 40;
            }
            if (this.mode != 100)
                ind = 40 + this.mode;
        }
        else if (this.pageId == 4 && ind == 61) {
            var trueCount = 0;
            for (var i = 0; i < 6; i++)
                if (this.recs[i] == true)
                    trueCount++;
            if (this.recs[10] == true)
                this.mode = 1;
            else if (this.recs[3] == true)
                this.mode = 2;
            else if (trueCount > 0)
                this.mode = 3;
            else {
                this.mode = 100;
                ind = 60;
            }
            if (this.mode != 100)
                ind = 60 + this.mode;
        }
        else if (this.pageId == 14 && ind == 2) {
            var trueCount = 0;
            for (var i = 0; i < 5; i++)
                if (this.recs[i] == true)
                    trueCount++;
            if (this.recs[10] == true)
                this.mode = 1;
            else if (this.recs[0] == true)
                this.mode = 2;
            else if (this.recs[0] == true)
                this.mode = 3;
            else if (trueCount > 0)
                this.mode = 4;
            else {
                this.mode = 100;
                ind = 1;
            }
            if (this.mode != 100)
                ind = 1 + this.mode;
        }
        else if (this.pageId == 16 && ind == 11) {
            var trueCount = 0;
            for (var i = 0; i < 8; i++)
                if (this.recs[i] == true)
                    trueCount++;
            if (this.recs[10] == true)
                this.mode = 1;
            else if (trueCount > 0)
                this.mode = 2;
            else {
                this.mode = 100;
                ind = 10;
            }
            if (this.mode != 100)
                ind = 10 + this.mode;
        }
        else if (this.pageId == 16 && ind == 31) {
            var trueCount = 0;
            for (var i = 0; i < 7; i++)
                if (this.recs[i] == true)
                    trueCount++;
            if (this.recs[10] == true)
                this.mode = 1;
            else if (trueCount > 0)
                this.mode = 2;
            else {
                this.mode = 100;
                ind = 30;
            }
            if (this.mode != 100)
                ind = 30 + this.mode;
        }
        else if (this.pageId == 18 && ind == 21) {
            var trueCount = 0;
            for (var i = 0; i < 7; i++)
                if (this.recs[i] == true)
                    trueCount++;
            if (this.recs[7] == true)
                this.mode = 1;
            else if (this.recs[6] == true)
                this.mode = 2;
            else if (trueCount > 0)
                this.mode = 3;
            else {
                this.mode = 100;
                ind = 20;
            }
            if (this.mode != 100)
                ind = 20 + this.mode;
        }
        else if (this.pageId == 19 && ind == 31) {
            var trueCount = 0;
            for (var i = 0; i < 9; i++)
                if (this.recs[i] == true)
                    trueCount++;
            if (this.recs[10] == true)
                this.mode = 1;
            else if (this.recs[5] == true)
                this.mode = 2;
            else if (this.recs[7] == true)
                this.mode = 3;
            else if (trueCount > 0)
                this.mode = 4;
            else {
                this.mode = 100;
                ind = 30;
            }
            if (this.mode != 100)
                ind = 30 + this.mode;
        }
        else if (this.pageId == 22 && ind == 2) {
            var trueCount = 0;
            for (var i = 0; i < 5; i++)
                if (this.recs[i] == true)
                    trueCount++;
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
            else {
                this.mode = 100;
                ind = 1;
            }
            if (this.mode != 100)
                ind = 1 + this.mode;
        }
        else if (this.pageId == 27 && ind == 41) {
            var trueCount = 0;
            for (var i = 0; i < 5; i++)
                if (this.recs[i] == true)
                    trueCount++;
            if (this.recs[10] == true)
                this.mode = 1;
            else if (trueCount > 0)
                this.mode = 2;
            else {
                this.mode = 100;
                ind = 40;
            }
            if (this.mode != 100)
                ind = 40 + this.mode;
        }
        else if (this.pageId == 32 && ind == 2) {
            var trueCount = 0;
            for (var i = 0; i < 6; i++)
                if (this.recs[i] == true)
                    trueCount++;
            if (this.recs[10] == true)
                this.mode = 1;
            else if (this.recs[9] == true)
                this.mode = 2;
            else if (trueCount > 0)
                this.mode = 3;
            else {
                this.mode = 100;
                ind = 1;
            }
            if (this.mode != 100)
                ind = 1 + this.mode;
        }
        else if (this.pageId == 55 && ind == 21) {
            var trueCount = 0;
            for (var i = 0; i < 9; i++)
                if (this.recs[i] == true)
                    trueCount++;
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
            else {
                this.mode = 100;
                ind = 20;
            }
            if (this.mode != 100)
                ind = 20 + this.mode;
        }
        this.page = ind;
    };
    AdultSymptomChildsPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return AdultSymptomChildsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], AdultSymptomChildsPage.prototype, "content", void 0);
AdultSymptomChildsPage = AdultSymptomChildsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-adult-symptom-childs',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/adult-symptom-childs/adult-symptom-childs.html"*/'<ion-header class="ui-header {{setting.class}}">\n  <ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title" *ngIf="html_data!=null">\n      		{{html_data[pageId]?.title}}\n      	</h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n  <ion-navbar class="fullWidth robotoLight {{setting.p}}">\n  	<p [innerHTML]="getTitle()"></p>\n  </ion-navbar>\n</ion-header>\n<ion-content overflow-scroll="true"  padding class="{{setting.class}} content{{pageId}} ui-page-theme-{{pagemode[pageId]}}">\n	<div class="ui-content" role="main" *ngIf="html_data!=null">\n		<div [innerHTML]="getHeader()"></div>\n		<div *ngIf="html_data[pageId]?.pages[page][\'options\']!=null">\n			<div id="allergy3_mobile_q1_form_div" style="" mbsc-enhance="" data-enhance="false" class="mbsc-comp mbsc-form mbsc-mobi-{{html_data[pageId]?.pages[page][\'optcolor\']}} mbsc-mobiscroll mbsc-ltr">\n				<ng-container *ngFor="let each_option of html_data[pageId]?.pages[page][\'options\'];">\n		            <label for="allergy3_mobile_q1_{{each_option.id}}" class="mbsc-checkbox" (tap)="toggleRecs(each_option.id)">\n		            	<input type="checkbox" name="allergy3_mobile_q1" id="allergy3_mobile_q1_{{each_option.id}}" class="allergy3_mobileQ1 mbsc-control mbsc-control-ev" value="" data-enhanced="false" [(ngModel)]="recs[each_option.id]">\n		        		<span class="mbsc-checkbox-box"></span>         \n		        		<span class="mbsc-label">{{each_option.title}}</span>\n		            </label>\n		            <hr class="hr{{html_data[pageId]?.pages[page][\'optcolor\']}}">\n				</ng-container>\n				<div class="clearboth divider1"></div>\n				<p class="centerText"> \n					<input type="button" data-inline="true" id="get_allergy3_mobile_q1" value="{{html_data[pageId]?.pages[page][\'buttons\'][0][\'title\']}}" class="mbsc-control mbsc-btn mbsc-control-ev" (tap)="processFunc(html_data[pageId]?.pages[page][\'buttons\'][0])">\n				</p>\n			</div>\n			<div *ngIf="mode==100" [innerHTML]="html_data[pageId]?.pages[page][\'except\']">\n			</div>\n		</div>\n		<div data-role="fieldcontain" class="ui-field-contain" *ngIf="html_data[pageId]?.pages[page][\'slider\']!=null">\n            <label for="slider_cold_fever_mobile" id="slider_cold_fever_mobile-label" [innerHTML]="html_data[pageId]?.pages[page][\'slider\'][\'label\']"></label>\n            <div class="ui-slider">\n            	<ion-item>\n					<ion-range min="{{html_data[pageId]?.pages[page][\'slider\'][\'min\']}}" max="{{html_data[pageId]?.pages[page][\'slider\'][\'max\']}}" step="{{html_data[pageId]?.pages[page][\'slider\'][\'step\']}}" [(ngModel)]="currentTemp" color="sliderPink">\n						<ion-label range-left>{{currentTemp}}</ion-label>\n					</ion-range>\n				</ion-item>\n            </div>\n            <input type="hidden" id="mobi_cold_temp" name="mobi_cold_temp" value="" class="displayNone mbsc-comp" readonly="">\n        </div>\n        <div *ngIf="html_data[pageId]?.pages[page][\'lists\']!=null">\n	        <ng-container *ngFor="let each_data of html_data[pageId]?.pages[page][\'lists\']; let i = index">\n	        	<div data-role="collapsible" data-collapsed="true" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-corners="false" class="ui-nodisc-icon ui-collapsible ui-collapsible-inset ui-collapsible-themed-content " [ngClass]="{\'ui-collapsible-collapsed\': pages[i]}">\n	            	<h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed">\n	            		<a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-left ui-btn-inherit" [ngClass]="{\'ui-icon-arrow-r\': pages[i], \'ui-icon-arrow-d\': !pages[i]}" (tap)="togglePages(i)">\n	            			<div [innerHTML]="each_data?.title"></div>\n	            		</a>\n	            	</h3>\n	            	<div class="ui-collapsible-content ui-body-inherit " [ngClass]="{\'ui-collapsible-content-collapsed\': pages[i]}" aria-hidden="true">\n	            		<div [innerHTML]="each_data?.content"></div>\n	            	</div>\n	            </div>\n	        </ng-container>\n	    </div>\n	    <div *ngIf="html_data[pageId]?.pages[page][\'buttonlist\']!=null">\n	    	<ul data-role="listview" data-inset="true" class="ui-nodisc-icon ui-listview ui-listview-inset ui-corner-all ui-shadow">\n	    		<li *ngFor="let each_data of html_data[pageId]?.pages[page][\'buttonlist\']">\n	    			<a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" (tap)="togglePage(each_data?.go)">\n	                    <div [innerHTML]="each_data?.title"></div>\n	                </a>\n	    		</li>\n	    	</ul>\n	   	</div>\n		<p class="centerText" *ngIf="html_data[pageId]?.pages[page][\'options\']==null">\n			<ng-container *ngFor="let each_but of html_data[pageId]?.pages[page][\'buttons\']">\n				<p *ngIf="each_but.type==\'refresh\'" class="orangeBorderWhite orangefontSmall centerText">\n					If this is the case, tap&nbsp;  <span data-inline="true" class="mbsc-ic mbsc-ic-ion-ios7-refresh-outline mobi-icon-font40 refreshPage" (click)="processFunc(each_but)"></span> to start over.<br>\n				</p>\n				<a *ngIf="each_but.type==\'tel\'" href="tel:" data-role="button" data-inline="true" class="ui-link ui-btn ui-btn-{{each_but.theme}} ui-btn-inline ui-shadow ui-corner-all" role="button">{{each_but.title}}</a>\n				<div *ngIf="each_but.type==\'div\'" href="#" class="{{each_but.theme}}" role="button">\n					<a href="#" data-rel="popup" data-transition="slide" class="linkBanner ui-link" aria-haspopup="true" aria-owns="3BPRa-jpg-modal" aria-expanded="false" (click)="processFunc(each_but)">\n		                <div [innerHTML]="each_but.title"></div>\n		            </a>\n				</div>\n				<a *ngIf="each_but.type==\'a\'" href="#" class="ui-link ui-btn ui-btn-{{each_but.theme}} ui-btn-inline ui-shadow ui-corner-all" role="button" (click)="processFunc(each_but)">\n					<div [innerHTML]="each_but.title"></div>\n				</a>\n				<button *ngIf="each_but.type==\'button\'" data-inline="true" class="allergy1_mobile_2_y_link ui-btn ui-btn-{{each_but.theme}} ui-btn-inline ui-shadow ui-corner-all" (click)="processFunc(each_but)">\n					<div [innerHTML]="each_but.title"></div>\n				</button>\n			</ng-container>\n		</p>\n		<p>&nbsp;</p>\n	</div>\n	<ng-container *ngFor="let eachDlg of FYIDlg;let i=index">\n		<div class="ui-popup-screen ui-overlay-b in" id="allergy_mobile_pop-screen" *ngIf="eachDlg.show" (click)="toggleFYIDlg(false,i)"></div>\n		<div class="ui-popup-container pop in ui-popup-active" id="allergy_mobile_pop-popup" *ngIf="eachDlg.show" [ngStyle]="{\'max-width\': eachDlg.maxWidth+\'px\',\'top\': eachDlg.top+\'px\', \'left\': eachDlg.left+\'px\', \'width\': eachDlg.width+\'px\'}">\n		    <div data-role="popup" id="allergy_mobile_pop" class="ui-content ui-popup ui-body-inherit ui-overlay-shadow ui-corner-all" data-overlay-theme="b" data-position-to="window">\n		        <a href="#" data-rel="back" data-role="button" data-icon="delete" data-iconpos="notext" class="ui-btn-right ui-link ui-btn ui-icon-delete ui-btn-icon-notext ui-shadow ui-corner-all" role="button" (tap)="toggleFYIDlg(false,i)">Close</a>\n		        <div [innerHTML]="html_data[pageId]?.dlg[i]" style="max-height: 500px; overflow-y: scroll;"></div>\n		    </div>\n		</div>\n	</ng-container>\n</ion-content>'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/adult-symptom-childs/adult-symptom-childs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], AdultSymptomChildsPage);

var AdultSymptomChildsPage_1;
//# sourceMappingURL=adult-symptom-childs.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindNearestListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__place_details_place_details__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var params = [
    {
        api: "nearest_hospital",
        query: "hospital",
    },
    {
        api: "urgentcare_list",
        query: "urgent care clinic",
    },
    {
        api: "nearest_hospital",
        query: "family practice primary care medical doctor",
    },
    {
        api: "nearest_hospital",
        query: "pediatrician",
    },
    {
        api: "nearest_hospital",
        query: "dentist",
    },
    {
        api: "nearest_hospital",
        query: "pharmacy store",
    },
];
var FindNearestListPage = (function () {
    function FindNearestListPage(navCtrl, navParams, menu, mapsAPILoader, ngZone, http, sanitizer, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.http = http;
        this.sanitizer = sanitizer;
        this.mode = [
            'n', 'i', 'o', 'c', 'a', 'g'
        ];
        this.pageTitle = {
            0: "Hospital Care",
            1: "Urgent care",
            2: "Doctor's Offices",
            3: "Children's Clinic",
            4: "Dental Care",
            5: "Pharmacy Care",
        };
        this.pageClasses = [
            {
                0: "buttonWhiteBorder",
                1: "buttonWhite",
                2: "buttonBlue",
                3: "bluefont",
            },
            {
                0: "buttonAmberBorder",
                1: "buttonOrange",
                2: "buttonOrange",
                3: "purple_redfont",
            },
            {
                0: "buttonWhiteBorder",
                1: "buttonWhite",
                2: "buttonOrange",
                3: "orangefont",
            },
            {
                0: "buttonWhiteBorder",
                1: "buttonWhite",
                2: "buttonPurple",
                3: "purplefont",
            },
            {
                0: "buttonWhiteBorder",
                1: "buttonWhite",
                2: "buttonBlue",
                3: "bluefont",
            },
            {
                0: "buttonWhiteBorder",
                1: "buttonWhite",
                2: "buttonGreen",
                3: "greenfont",
            },
        ];
        this.mapData = {
            latitude: 0,
            longitude: 0,
            zoom: 1,
            location: ""
        };
        this.DataDisplay = {
            0: 'none',
            1: 'block'
        };
        this.menu = menu;
        this.TableData = [];
        this.TableMaxCount = 0;
        this.TableMaxDisplayCount = 15;
        this.sortby = "distance";
        this.sortDlg = false;
        this.map = null;
        this.bounds = new google.maps.LatLngBounds();
        this.infowindow = new google.maps.InfoWindow();
        this.ib = new google.maps.InfoWindow();
        this.MapHeight = platform.height() - 160;
        this.pageId = __WEBPACK_IMPORTED_MODULE_6__providers_globalvars__["a" /* GlobalVars */].getPageId();
        this.setting = __WEBPACK_IMPORTED_MODULE_6__providers_globalvars__["a" /* GlobalVars */].getPageSetting(this.mode[this.pageId]);
        this.RestApiURL = __WEBPACK_IMPORTED_MODULE_6__providers_globalvars__["a" /* GlobalVars */].getApiURL() + "ppp=" + params[this.pageId]["api"];
    }
    FindNearestListPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        menu.className = "outer-content content" + " " + this.setting['class'];
        this.menu.open();
    };
    FindNearestListPage.prototype.ShowMore = function () {
        this.TableMaxDisplayCount = this.TableMaxDisplayCount + 15;
    };
    FindNearestListPage.prototype.toggleSortDlg = function (b) {
        this.sortDlg = b;
    };
    FindNearestListPage.prototype.SortBy = function (by) {
        this.sortby = by;
    };
    FindNearestListPage.prototype.loadData = function () {
        // this.loadDataFromDatabase();
        this.loadDataFromOnline();
    };
    FindNearestListPage.prototype.loadDataFromDatabase = function () {
        var url = this.RestApiURL + "&lat=" + this.mapData.latitude + "&lng=" + this.mapData.longitude;
        this.http.get(url).map(function (res) { return res.json(); })
            .subscribe(function (data) {
        }),
            function (err) {
                // console.log("Oops!");
            };
    };
    FindNearestListPage.prototype.loadDataFromOnline = function () {
        var userlocation = new google.maps.LatLng(this.mapData.latitude, this.mapData.longitude);
        // let distance = google.maps.places.RankBy.DISTANCE;
        var query = params[this.pageId]["query"];
        var request = {
            location: userlocation,
            // radius: "500",
            query: query
        };
        var $this = this;
        this.map = new google.maps.Map(document.createElement('div'), {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: userlocation,
            zoom: this.mapData.zoom
        });
        var service = new google.maps.places.PlacesService(this.map);
        service.textSearch(request, function (results, status) {
            if (status != google.maps.places.PlacesServiceStatus.OK) {
                alert(status);
                return;
            }
            else {
                $this.TableData = [];
                for (var i = 0; i < results.length; i++) {
                    $this.calculateDistance(results[i]);
                }
            }
        });
    };
    FindNearestListPage.prototype.calculateDistance = function (places) {
        //Lets's get the distance using the distance matrix
        var userLocation = new google.maps.LatLng(this.mapData.latitude, this.mapData.longitude);
        var placeDestinations = [places.geometry.location];
        var placeName = [places.name];
        var placeID = [places.place_id];
        var service = new google.maps.DistanceMatrixService();
        var $this = this;
        service.getDistanceMatrix({
            origins: [userLocation],
            destinations: placeDestinations,
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            avoidHighways: false,
            avoidTolls: false
        }, function placeDistance(response, status) {
            if (status != google.maps.DistanceMatrixStatus.OK) {
                alert('Error was: ' + status);
            }
            else {
                var origins = response.originAddresses;
                var destinations = response.destinationAddresses;
                for (var i = 0; i < origins.length; i++) {
                    var results = response.rows[i].elements;
                    for (var j = 0; j < results.length; j++) {
                        var element = results[j];
                        var distance = "";
                        var duration = "";
                        var place_address = destinations[j];
                        var obj = {};
                        var image = 'assets/img/icons/Map-Marker-Ball-Blue.png';
                        if (element.distance != undefined)
                            distance = element.distance.text;
                        if (element.duration != undefined)
                            duration = element.duration.text;
                        obj['id'] = placeID;
                        obj['lat'] = places.geometry.location.lat();
                        obj['lng'] = places.geometry.location.lng();
                        obj['marker_icon'] = image;
                        obj['iw_open'] = false;
                        obj['formatted_address'] = places.formatted_address;
                        obj['name'] = placeName;
                        obj['address'] = place_address;
                        obj['distance'] = distance;
                        obj['duration'] = duration;
                        $this.TableData.push(obj);
                        $this.TableMaxCount++;
                    }
                }
                $this.ngZone.run(function () { return $this.TableData; });
            }
        });
    };
    FindNearestListPage.prototype.clickedMarker = function (label, id) {
        for (var i = 0; i < this.TableData.length; i++) {
            if (id != i)
                this.TableData[i]['iw_open'] = false;
            else
                this.TableData[i]['iw_open'] = true;
        }
    };
    FindNearestListPage.prototype.showDetails = function (m) {
        __WEBPACK_IMPORTED_MODULE_6__providers_globalvars__["a" /* GlobalVars */].setMapPlaceId(m.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__place_details_place_details__["a" /* PlaceDetailsPage */]);
    };
    FindNearestListPage.prototype.toggleResult = function (id) {
        this.DataDisplay[id - 1] = 'block';
        this.DataDisplay[2 - id] = 'none';
    };
    FindNearestListPage.prototype.ionViewDidLoad = function () {
        this.mapData = __WEBPACK_IMPORTED_MODULE_6__providers_globalvars__["a" /* GlobalVars */].getMapData();
        this.loadData();
    };
    return FindNearestListPage;
}());
FindNearestListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-find-nearest-list',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/find-nearest-list/find-nearest-list.html"*/'<ion-header class="ui-header {{setting.class}}">\n	<ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title">\n      		{{pageTitle[pageId]}}\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n	<ion-navbar class="fullWidth">\n	  	<div class="{{setting.p}} floatright"></div>\n	  	<div align="center" class="floatright">\n			<button ion-button data-inline="true" data-role="none" class="{{pageClasses[pageId][0]}} navbarButtons" id="results-switch" (tap)="toggleResult(1)">List</button>\n			<button ion-button data-inline="true" data-role="none" class="{{pageClasses[pageId][1]}} navbarButtons" id="map-switch" (tap)="toggleResult(2)">Map</button>\n	 	</div>\n	</ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  class="{{setting.class}}">\n	<div class="ui-content" role="main" #mainWindow>\n	    <div id="results" [ngStyle]="{\'display\': DataDisplay[0]}">\n	        <div>\n	            <ul data-role="listview" id="list-database" data-inset="true" class="searchResult ui-listview ui-listview-inset ui-corner-all ui-shadow">\n	            </ul>\n	            <p>&nbsp;</p>\n	            <div class="floatright"><a href="#" data-rel="popup" data-transition="slidedown" class="{{pageClasses[pageId][2]}} ui-link" aria-haspopup="true" aria-owns="popupMenu" aria-expanded="false" (tap)="toggleSortDlg(true)">Sort List</a></div>\n	            <div class="clearboth"></div>\n	            <ul data-role="listview" id="list-canvas" data-inset="true" class="searchResult ui-listview ui-listview-inset ui-corner-all ui-shadow">\n	            	<li *ngFor="let each of TableData | orderby: sortby : false ; let i=index">\n	            		<a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" *ngIf="i<TableMaxDisplayCount" (tap)="showDetails(each)" >\n	            			<h3 class="{{pageClasses[pageId][3]}} placename">{{each.name}}</h3>\n	                        <p class="grayfontSmall placeaddress">{{each.address}}</p>\n	                        <p class="graygrayfontSmall"><span>Distance:</span> <span>{{each.distance}}</span> <span>(about</span> {{each.duration}} <span>drive)</span></p>\n	            		</a>\n	            	</li>\n	            </ul>\n	            <br>\n	            <p id="more" class="centerText">\n	                <button data-inline="true" class=" ui-btn ui-btn-inline ui-shadow ui-corner-all" (tap)="ShowMore()">More...</button>\n	            </p>\n	        </div>\n	    </div>\n	    <sebm-google-map [scrollwheel]="true" [latitude]="mapData.latitude" [longitude]="mapData.longitude" [zoom]="mapData.zoom" [ngStyle]="{\'display\': DataDisplay[1], \'height\': MapHeight + \'px\'}" >\n	    	<ng-container *ngFor="let m of TableData; let i = index">\n		    	<sebm-google-map-marker \n		    		*ngIf="i<TableMaxDisplayCount" \n			        (markerClick)="clickedMarker(m.name, i)"\n			        [latitude]="m.lat"\n			        [longitude]="m.lng" \n			        [markerDraggable]="false"\n			        [iconUrl]="m.marker_icon">\n			        \n			      	<sebm-google-map-info-window class="info_window" [isOpen] = "m.iw_open">\n			      		<div (tap)="showDetails(m)">\n					    	{{m.name}}<br>\n					    	{{m.formatted_address}}\n					    </div>\n			      	</sebm-google-map-info-window>\n			    </sebm-google-map-marker>\n        	</ng-container>\n		</sebm-google-map>\n	</div>\n	<div class="ui-popup-screen ui-overlay-inherit in" id="popupMenu-screen" *ngIf="sortDlg" (tap)="toggleSortDlg(false)"></div>\n	<div class="ui-popup-container slidedown in ui-popup-active" id="popupMenu-popup" style="max-width: 702px; top: 33px; right: 90px;" *ngIf="sortDlg">\n	    <div data-role="popup" id="popupMenu" data-theme="n centerText" class="ui-popup ui-body-n centerText ui-overlay-shadow ui-corner-all">\n	        <div>Sort by:</div>\n	        <hr class="{{setting.hr}}">\n	        <button data-inline="true" data-role="none" class="buttonBlue" id="by_distance" (tap)="SortBy(\'distance\')">Distance</button>\n	        <hr class="{{setting.hr}}">\n	        <button data-inline="true" data-role="none" class="buttonCyan" id="by_name" (tap)="SortBy(\'name\')">Name</button>\n	        <hr class="{{setting.hr}}">\n	        <button data-inline="true" data-role="none" class="buttonPink" id="by_address" (tap)="SortBy(\'address\')">Address</button>\n	    </div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/find-nearest-list/find-nearest-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], FindNearestListPage);

//# sourceMappingURL=find-nearest-list.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__place_navigation_place_navigation__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlaceDetailsPage = (function () {
    function PlaceDetailsPage(navCtrl, navParams, menu, sanitizer, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.sanitizer = sanitizer;
        this.mapData = {
            latitude: 0,
            longitude: 0,
            zoom: 1,
            location: ""
        };
        this.locationData = {
            name: "",
            formatted_address: "",
            website: "",
            telnumber: "",
            telfullnumber: ""
        };
        this.convertTime = function (UNIX_timestamp) {
            var a = new Date(UNIX_timestamp * 1000);
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var time = months[a.getMonth()] + ' ' + a.getDate() + ', ' + a.getFullYear();
            return time;
        };
        this.menu = menu;
        this.MapHeight = 400;
        this.greviews = [];
        this.map = null;
    }
    PlaceDetailsPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */].getPageSetting('e');
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    PlaceDetailsPage.prototype.getDirection = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__place_navigation_place_navigation__["a" /* PlaceNavigationPage */]);
    };
    PlaceDetailsPage.prototype.loadData = function () {
        this.displayInformationWithPlaceId(this.placeId);
    };
    PlaceDetailsPage.prototype.displayInformationWithPlaceId = function (placeId) {
        var geocoder = new google.maps.Geocoder;
        var request = { placeId: placeId };
        var $this = this;
        this.map = new google.maps.Map(document.createElement('div'), {
            mapTypeId: google.maps.MapTypeId.HYBRID,
        });
        geocoder.geocode({ 'placeId': placeId[0] }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var location;
                    var result = results[0];
                    $this.mapData.zoom = 11;
                    $this.mapData.latitude = result.geometry.location.lat();
                    $this.mapData.longitude = result.geometry.location.lng();
                    $this.mapData.location = location = result.formatted_address;
                    __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */].setAddress2($this.mapData.location);
                }
            }
            else {
            }
        });
        this.getService(request);
    };
    PlaceDetailsPage.prototype.getService = function (request) {
        var service = new google.maps.places.PlacesService(this.map);
        var $this = this;
        service.getDetails(request, function (details, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                var website;
                if (details.website == undefined)
                    website = "";
                else
                    website = details.website;
                $this.locationData.name = details.name;
                $this.locationData.formatted_address = details.formatted_address;
                $this.locationData.website = website;
                $this.locationData.telnumber = details.formatted_phone_number;
                $this.locationData.telfullnumber = 'tel:+1' + details.formatted_phone_number;
                if (details.reviews != undefined)
                    $this.calcRating(details);
            }
        });
    };
    PlaceDetailsPage.prototype.calcRating = function (details) {
        var reviews = details.reviews;
        var minrate = 0;
        reviews = this.sortByDate(reviews);
        for (var i = 0; i < reviews.length; i++) {
            if (reviews[i].rating >= minrate) {
                var each = {};
                var stars = this.renderStars(reviews[i].rating);
                var date = this.convertTime(reviews[i].time);
                each['author_url'] = reviews[i].author_url;
                each['author_name'] = reviews[i].author_name;
                each['date'] = date;
                each['stars'] = stars;
                each['text'] = reviews[i].text;
                this.greviews.push(each);
            }
        }
    };
    PlaceDetailsPage.prototype.sortByDate = function (ray) {
        ray.sort(function (a, b) {
            var keyA = new Date(a.time), keyB = new Date(b.time);
            // Compare the 2 dates
            if (keyA < keyB)
                return -1;
            if (keyA > keyB)
                return 1;
            return 0;
        });
        return ray;
    };
    PlaceDetailsPage.prototype.renderStars = function (rating) {
        var stars = "<div class='review-stars'><ul>";
        for (var i = 0; i < rating; i++) {
            stars = stars + "<li><i class='star'></i></li>";
        }
        ;
        if (rating < 5) {
            for (var i = 0; i < (5 - rating); i++) {
                stars = stars + "<li><i class='star inactive'></i></li>";
            }
            ;
        }
        stars = stars + "</ul></div>";
        return stars;
    };
    PlaceDetailsPage.prototype.ngOnInit = function () {
    };
    PlaceDetailsPage.prototype.ionViewDidLoad = function () {
        this.placeId = __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */].getMapPlaceId();
        this.loadData();
    };
    return PlaceDetailsPage;
}());
PlaceDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-place-details',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/place-details/place-details.html"*/'<ion-header class="ui-header">\n	<ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title">\n      	Place Details\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n	<ion-navbar class="fullWidth">\n	  	<div class="spinner floatright"></div>\n	</ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  class="ui-page-theme-e">\n    <div class="ui-content" role="main">\n        <div id="results">\n            <p class="orangefont placename">\n            	{{locationData.name}}<br>\n            	<span class="grayfontSmall">{{locationData.formatted_address}}</span><br>\n            	<span class="graygrayfontSmall">{{locationData.telnumber}}</span>\n            </p>\n            <hr class="hrorange">\n            <p>\n            	<a class="linkPink" data-inline="true" href="{{locationData.website}}">website</a>\n            	<a class="linkBlue" data-inline="true" href="{{locationData.telfullnumber}}">Call</a>\n            </p>\n            <p> &nbsp;</p>\n        </div>\n        <sebm-google-map [latitude]="mapData.latitude" [longitude]="mapData.longitude" [zoom]="mapData.zoom" [scrollwheel]="true" [ngStyle]="{\'height\': MapHeight + \'px\'}" >\n        	<sebm-google-map-marker \n		        [latitude]="mapData.latitude"\n		        [longitude]="mapData.longitude" \n		        [markerDraggable]="false">\n		        <sebm-google-map-info-window class="info_window" [isOpen] = "true">\n				    {{mapData.location}}\n		      	</sebm-google-map-info-window>\n			</sebm-google-map-marker>\n        </sebm-google-map>\n        <br>\n        <p class="centerText">\n        	<a href="#" id="directions-button" class="linkAmber ui-link" data-inline="true" (tap)="getDirection()">Get Directions</a>\n        </p>\n        <h3 class="bluefont lineBlue"><span class="redfont">google+</span> Reviews</h3>\n        <div id="google-reviews">\n            <div class=\'review-item\' *ngFor="let review of greviews">\n			    <div class=\'review-meta\'>\n			    	<span class=\'review-author\'>\n			    		<a class=\'authorLink\' href="{{review[\'author_url\']}}">{{review[\'author_name\']}}</a>\n			    	</span><br>\n			    	<span class=\'graygrayfontSmall\'>{{review[\'date\']}}</span>\n			    </div>\n			    <div [innerHTML]="sanitizer.bypassSecurityTrustHtml(review[\'stars\'])"></div>\n			    <p class=\'review-text\'>{{review[\'text\']}}</p>\n			    <br>\n			    <hr class=\'hrorange\'>\n			    <br>\n			</div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/place-details/place-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], PlaceDetailsPage);

//# sourceMappingURL=place-details.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceNavigationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__google_map_directive__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlaceNavigationPage = (function () {
    function PlaceNavigationPage(navCtrl, navParams, menu, mapsAPILoader, sanitizer, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.mapsAPILoader = mapsAPILoader;
        this.sanitizer = sanitizer;
        this.mapData = {
            latitude: 0,
            longitude: 0,
            zoom: 1,
            location: ""
        };
        this.origin = {
            latitude: 0,
            longitude: 0,
            address: ""
        };
        this.destination = {
            latitude: 0,
            longitude: 0,
            address: ""
        };
        this.menu = menu;
        this.MapHeight = 400;
        this.map = null;
        this.detailRoute = "";
    }
    PlaceNavigationPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting('a');
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    PlaceNavigationPage.prototype.showPath = function (address1, address2) {
        var location1, location2;
        var geocoder = new google.maps.Geocoder();
        var $this = this;
        if (geocoder) {
            geocoder.geocode({ 'address': address1 }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    location1 = results[0].geometry.location;
                    $this.origin.latitude = location1.lat();
                    $this.origin.longitude = location1.lng();
                    $this.origin.address = address1;
                    $this.vc.origin = $this.origin;
                    $this.vc.originPlaceId = results[0].place_id;
                }
                else {
                }
            });
            geocoder.geocode({ 'address': address2 }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    location2 = results[0].geometry.location;
                    $this.destination.latitude = location2.lat();
                    $this.destination.longitude = location2.lng();
                    $this.destination.address = address2;
                    $this.vc.destination = $this.destination;
                    $this.vc.destinationPlaceId = results[0].place_id;
                    $this.vc.updateDirections();
                    $this.showMap();
                }
                else {
                }
            });
        }
    };
    PlaceNavigationPage.prototype.showMap = function () {
        var $this = this;
        var lat = ($this.origin.latitude + $this.destination.latitude) / 2;
        var lng = ($this.origin.longitude + $this.destination.longitude) / 2;
        this.mapData.latitude = lat;
        this.mapData.longitude = lng;
        this.mapData.zoom = 11;
    };
    PlaceNavigationPage.prototype.loadData = function () {
        var _this = this;
        var mapData = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getMapData();
        if (this.vc.directionsDisplay === undefined) {
            this.mapsAPILoader.load().then(function () {
                _this.vc.directionsDisplay = new google.maps.DirectionsRenderer;
            });
        }
        this.showPath(mapData.location, __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getAddress2());
    };
    PlaceNavigationPage.prototype.ionViewDidLoad = function () {
        this.loadData();
        // console.log('ionViewDidLoad PlaceNavigationPage');
    };
    return PlaceNavigationPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__google_map_directive__["a" /* DirectionsMapDirective */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__google_map_directive__["a" /* DirectionsMapDirective */])
], PlaceNavigationPage.prototype, "vc", void 0);
PlaceNavigationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-place-navigation',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/place-navigation/place-navigation.html"*/'<ion-header class="ui-header">\n	<ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title">\n      	Directions\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n	<ion-navbar class="fullWidth">\n	  	<div class="spinner floatright"></div>\n	</ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  class="ui-page-theme-a">\n    <div class="ui-content" role="main">\n        <sebm-google-map [latitude]="mapData.latitude" [longitude]="mapData.longitude" [zoom]="mapData.zoom" [scrollwheel]="true" [ngStyle]="{\'height\': MapHeight + \'px\'}" >\n        	<sebm-google-map-directions [origin]="origin" [destination]="destination"></sebm-google-map-directions>\n			<sebm-google-map-polyline [strokeColor]="\'#2196f3\'" [geodesic]="true" [strokeOpacity]="0.6" [strokeWeight]="7">\n				<sebm-google-map-polyline-point [latitude]="origin.latitude" [longitude]="origin.longitude">\n				</sebm-google-map-polyline-point>\n				<sebm-google-map-polyline-point [latitude]="destination.latitude" [longitude]="destination.longitude">\n				</sebm-google-map-polyline-point>\n			</sebm-google-map-polyline>\n        </sebm-google-map>\n        <div id="directions" [innerHTML]="sanitizer.bypassSecurityTrustHtml(vc.routeHtml)">\n\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/place-navigation/place-navigation.html"*/,
        providers: []
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"],
        __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], PlaceNavigationPage);

//# sourceMappingURL=place-navigation.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionsMapDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DirectionsMapDirective = (function () {
    function DirectionsMapDirective(gmapsApi) {
        this.gmapsApi = gmapsApi;
        this.routeHtml = "";
    }
    DirectionsMapDirective.prototype.updateDirections = function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            if (!_this.originPlaceId || !_this.destinationPlaceId) {
                return;
            }
            var directionsService = new google.maps.DirectionsService;
            var me = _this;
            _this.directionsDisplay.setMap(map);
            _this.directionsDisplay.setOptions({
                polylineOptions: {
                    strokeWeight: 7,
                    strokeOpacity: 0.8,
                    strokeColor: '#FFAA00'
                }
            });
            _this.directionsDisplay.setDirections({ routes: [] });
            directionsService.route({
                origin: { placeId: _this.originPlaceId },
                destination: { placeId: _this.destinationPlaceId },
                avoidHighways: true,
                travelMode: google.maps.DirectionsTravelMode.DRIVING
            }, function (response, status) {
                if (status === 'OK') {
                    me.directionsDisplay.setDirections(response);
                    map.setZoom(11);
                    var point = response.routes[0].legs[0];
                    me.detailRoute = point.steps;
                    me.estimatedTime = point.duration.text;
                    me.estimatedDistance = point.distance.text;
                    me.makeRouteHtml();
                }
                else {
                }
            });
        });
    };
    DirectionsMapDirective.prototype.makeRouteHtml = function () {
        var deetailHtml = "";
        for (var i = 0; i < this.detailRoute.length; i++) {
            var maneuver = "";
            var mancon = "";
            if (this.detailRoute[i]["maneuver"] == "") {
                maneuver = "<div jstcache='30' class='adp-maneuver' jsan='7.adp-maneuver'></div>";
                mancon = "<div jstcache='29' class='adp-stepicon' style='display: none;'>" + maneuver + "</div>";
            }
            else {
                maneuver = "<div jstcache='30' class='adp-" + this.detailRoute[i]["maneuver"] + " adp-maneuver' jsan='7.adp-" + this.detailRoute[i]["maneuver"] + ",7.adp-maneuver'></div>";
                mancon = "<div jstcache='29' class='adp-stepicon' >" + maneuver + "</div>";
            }
            deetailHtml += "<tr data-leg-index='0' data-step-index='" + i + "' jstcache='28' jsaction='directionsPanel.selectLegAndStep' jsinstance='0'>\
            <td class='adp-substep' width='25%'>"
                + mancon +
                "</td>\
            <td jstcache='31' class='adp-substep' jsan='7.adp-substep' width='25%'>" + (i + 1) + ".</td>\
            <td jstcache='32' class='adp-substep' width='25%'>\
                " + this.detailRoute[i]["instructions"] + "\
            </td>\
            <td class='adp-substep' width='25%'>\
                <div jstcache='33' class='adp-distance' jsan='7.adp-distance'>" + this.detailRoute[i]["distance"]["text"] + "</div>\
            </td>\
        </tr>";
        }
        this.routeHtml = " <div id='directions' style='direction: ltr;'>\
        <div jstcache='0'>\
            <div jstcache='124' class='adp'>\
                <div jstcache='19' class='adp-warnbox' style='display:none'>\
                    <div class='warnbox-c2'></div>\
                    <div class='warnbox-c1'></div>\
                    <div jstcache='20' class='warnbox-content' jsan='7.warnbox-content'></div>\
                    <div class='warnbox-c1'></div>\
                    <div class='warnbox-c2'></div>\
                </div>\
                <div data-leg-index='0' jsaction='directionsPanel.selectLeg'>\
                    <table class='adp-placemark'>\
                        <tbody>\
                            <tr>\
                                <td width='25%'>\
                                  <img jstcache='21' src='https://mts.googleapis.com/maps/vt/icon/name=icons/spotlight/spotlight-waypoint-a.png&amp;text=A&amp;psize=16&amp;font=fonts/Roboto-Regular.ttf&amp;color=ff333333&amp;ax=44&amp;ay=48&amp;scale=1' class='adp-marker' />\
                                </td>\
                                <td jstcache='22' class='adp-text' jsan='7.adp-text'>" + this.origin.address + "</td>\
                            </tr>\
                        </tbody>\
                    </table>\
                </div>\
                <div jstcache='23' jsinstance='*0'>\
                    <div class='adp-summary'>\
                      <span jstcache='24'>" + this.estimatedDistance + "</span>\
                      <span jstcache='25'>. </span>\
                      <span jstcache='26'>About \
                        <span jstcache='50'>" + this.estimatedTime + "</span>\
                      </span> <span jstcache='27' style='display:none'></span></div>\
                    <div>\
                        <table class='adp-directions'>\
                            <tbody>\
                                " + deetailHtml + "\
                            </tbody>\
                        </table>\
                    </div>\
                    <div data-leg-index='1' jstcache='34' jsaction='directionsPanel.selectLeg'>\
                        <table class='adp-placemark'>\
                            <tbody>\
                                <tr>\
                                    <td width='22'><img jstcache='35' src='https://mts.googleapis.com/maps/vt/icon/name=icons/spotlight/spotlight-waypoint-b.png&amp;text=B&amp;psize=16&amp;font=fonts/Roboto-Regular.ttf&amp;color=ff333333&amp;ax=44&amp;ay=48&amp;scale=1' class='adp-marker' /></td>\
                                    <td jstcache='36' class='adp-text' jsan='7.adp-text'>" + this.destination.address + "</td>\
                                </tr>\
                            </tbody>\
                        </table>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    ";
    };
    return DirectionsMapDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "origin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "destination", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "originPlaceId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "destinationPlaceId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "waypoints", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "directionsDisplay", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "estimatedTime", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "estimatedDistance", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "detailRoute", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "routeHtml", void 0);
DirectionsMapDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'sebm-google-map-directions'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__["GoogleMapsAPIWrapper"]])
], DirectionsMapDirective);

//# sourceMappingURL=google-map.directive.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdultSymptomInfographicsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AdultSymptomInfographics page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AdultSymptomInfographicsPage = (function () {
    function AdultSymptomInfographicsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdultSymptomInfographicsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdultSymptomInfographicsPage');
    };
    return AdultSymptomInfographicsPage;
}());
AdultSymptomInfographicsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-adult-symptom-infographics',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/adult-symptom-infographics/adult-symptom-infographics.html"*/'<!--\n  Generated template for the AdultSymptomInfographics page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>adult-symptom-infographics</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/adult-symptom-infographics/adult-symptom-infographics.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AdultSymptomInfographicsPage);

//# sourceMappingURL=adult-symptom-infographics.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdultPharmacistChildsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { UrgentCarePage } from '../urgent-care/urgent-care';
// import { AllergyMedsPage } from '../allergy-meds/allergy-meds';
// import { ContactSocialMobilePage } from '../contact-social-mobile/contact-social-mobile';
// import { CommentLoginPage } from '../comment-login/comment-login';
var AdultPharmacistChildsPage = (function () {
    function AdultPharmacistChildsPage(navCtrl, navParams, menu, platform, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.platform = platform;
        this.http = http;
        this.sanitizer = sanitizer;
        this.pagemode = {
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
        };
        this.MyContent = {
            screenWidth: 0,
            screenHeight: 0,
        };
        this.menu = menu;
        this.AbsoluteURL = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getAbsoluteURL();
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
        this.firstname = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getFirstname();
        if (this.firstname != "")
            this.firstname += ",";
        this.subPages = [];
        this.tabId = 1;
        this.tabCss = "translate3d(0px, 0px, 0px)";
        this.tabConCss = "translate3d(0px, 0px, 0px)";
        this.pageId = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageId();
        this.setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting(this.pagemode[this.pageId]);
        this.html_data = null;
        this.getHtmlData();
    }
    AdultPharmacistChildsPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting(this.pagemode[this.pageId]);
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    AdultPharmacistChildsPage.prototype.showTab = function (id) {
        this.tabId = id;
        this.content.scrollToTop(0);
        this.tabCss = "translate3d(" + ((id - 1) * 100) + "%, 0px, 0px)";
        this.tabConCss = "translate3d(" + ((-id + 1) * 100) + "%, 0px, 0px)";
    };
    AdultPharmacistChildsPage.prototype.toggleRecs = function (ind) {
        var special = this.html_data[this.pageId]['tabs'][0]['fieldspecial'];
        var temp = this.recs[ind];
        this.recs[special[1]] = false; // prevention
        this.recs[special[2]] = false; // none
        if (ind >= special[0]) {
            this.recs[special[0]] = false; // all
            this.recs[ind] = temp;
            if (ind == special[0] && special[0] != special[1])
                this.toggleAllRecs(true, special[0]);
            else
                this.toggleAllRecs(false, special[0]);
        }
    };
    AdultPharmacistChildsPage.prototype.toggleAllRecs = function (b, last) {
        for (var i = 0; i < last; i++)
            this.recs[i] = b;
    };
    AdultPharmacistChildsPage.prototype.goBack = function () {
        this.toggleAllRecs(false, this.recs.length);
    };
    AdultPharmacistChildsPage.prototype.goBackSymptom = function () {
        this.goBack();
        this.page = 0;
        this.mode = 0;
    };
    AdultPharmacistChildsPage.prototype.toggleWhy = function () {
        this.why = !this.why;
    };
    AdultPharmacistChildsPage.prototype.gotoSubPage = function (id) {
        if (id != -1) {
            if (id < 100)
                this.navCtrl.push(this.subPages[id]);
            else if (id == 100)
                this.toggleWhy();
            else if (id == 200)
                this.goBackSymptom();
        }
    };
    AdultPharmacistChildsPage.prototype.expandPage = function (id) {
        this.expands[id] = !this.expands[id];
    };
    AdultPharmacistChildsPage.prototype.togglePage = function (ind) {
        if (ind == 0) {
            this.page = ind;
            this.mode = 0;
        }
        else if (ind == 1) {
            if (this.pageId == 0) {
                var sorethroat_1 = this.recs[0], scratchythroat_1 = this.recs[1], stuffynose_1 = this.recs[2], runnynose_1 = this.recs[3], sneezing_1 = this.recs[4], headache_1 = this.recs[5], itchyeyes = this.recs[6], cough_1 = this.recs[7], wateryeyes_1 = this.recs[8], sinuscongestion_1 = false, chestcongestion_1 = this.recs[9], prevention_1 = this.recs[11], All_1 = this.recs[10], none_1 = this.recs[12];
                //category variables
                var antihistamine_1 = runnynose_1 || scratchythroat_1 || sneezing_1 || itchyeyes || wateryeyes_1, decongestant_1 = stuffynose_1 || sinuscongestion_1, painrelief_1 = headache_1 || sorethroat_1, coughrelief_1 = cough_1 || chestcongestion_1, itchyeyesrelief = itchyeyes || wateryeyes_1;
                if (none_1) {
                    this.mode = 1;
                }
                else if (prevention_1) {
                    this.mode = 2;
                }
                else if (All_1) {
                    this.mode = 3;
                }
                else if (antihistamine_1 && !(decongestant_1 || painrelief_1 || coughrelief_1 || itchyeyesrelief)) {
                    this.mode = 4;
                }
                else if (decongestant_1 && !(antihistamine_1 || painrelief_1 || coughrelief_1 || itchyeyesrelief)) {
                    this.mode = 5;
                }
                else if (painrelief_1 && !(decongestant_1 || antihistamine_1 || coughrelief_1 || itchyeyesrelief)) {
                    this.mode = 6;
                }
                else if (coughrelief_1 && !(decongestant_1 || painrelief_1 || antihistamine_1 || itchyeyesrelief)) {
                    this.mode = 7;
                }
                else if (itchyeyesrelief && !(decongestant_1 || painrelief_1 || antihistamine_1 || coughrelief_1)) {
                    this.mode = 8;
                }
                else if (painrelief_1 && decongestant_1 && !(coughrelief_1 || antihistamine_1 || itchyeyesrelief)) {
                    this.mode = 9;
                }
                else if (painrelief_1 && antihistamine_1 && !(coughrelief_1 || decongestant_1 || itchyeyesrelief)) {
                    this.mode = 10;
                }
                else if (painrelief_1 && coughrelief_1 && !(antihistamine_1 || decongestant_1 || itchyeyesrelief)) {
                    this.mode = 11;
                }
                else if (painrelief_1 && itchyeyesrelief && !(antihistamine_1 || decongestant_1 || coughrelief_1)) {
                    this.mode = 12;
                }
                else if (antihistamine_1 && decongestant_1 && !(painrelief_1 || coughrelief_1 || itchyeyesrelief)) {
                    this.mode = 13;
                }
                else if (antihistamine_1 && coughrelief_1 && !(painrelief_1 || decongestant_1 || itchyeyesrelief)) {
                    this.mode = 14;
                }
                else if (antihistamine_1 && itchyeyesrelief && !(painrelief_1 || coughrelief_1 || decongestant_1)) {
                    this.mode = 15;
                }
                else if (decongestant_1 && coughrelief_1 && !(painrelief_1 || antihistamine_1 || itchyeyesrelief)) {
                    this.mode = 16;
                }
                else if (decongestant_1 && itchyeyesrelief && !(painrelief_1 || antihistamine_1 || coughrelief_1)) {
                    this.mode = 17;
                }
                else if (itchyeyesrelief && coughrelief_1 && !(painrelief_1 || antihistamine_1 || decongestant_1)) {
                    this.mode = 18;
                }
                else if (painrelief_1 && antihistamine_1 && decongestant_1 && !(coughrelief_1 || itchyeyesrelief)) {
                    this.mode = 19;
                }
                else if (painrelief_1 && antihistamine_1 && coughrelief_1 && !(decongestant_1 || itchyeyesrelief)) {
                    this.mode = 20;
                }
                else if (painrelief_1 && antihistamine_1 && itchyeyesrelief && !(decongestant_1 || coughrelief_1)) {
                    this.mode = 21;
                }
                else if (painrelief_1 && decongestant_1 && coughrelief_1 && !(antihistamine_1 || itchyeyesrelief)) {
                    this.mode = 22;
                }
                else if (painrelief_1 && decongestant_1 && itchyeyesrelief && !(antihistamine_1 || coughrelief_1)) {
                    this.mode = 23;
                }
                else if (painrelief_1 && itchyeyesrelief && coughrelief_1 && !(decongestant_1 || antihistamine_1)) {
                    this.mode = 24;
                }
                else if (decongestant_1 && itchyeyesrelief && coughrelief_1 && !(antihistamine_1 || painrelief_1)) {
                    this.mode = 25;
                }
                else if (antihistamine_1 && itchyeyesrelief && coughrelief_1 && !(decongestant_1 || painrelief_1)) {
                    this.mode = 26;
                }
                else if (antihistamine_1 && decongestant_1 && coughrelief_1 && !(itchyeyesrelief || painrelief_1)) {
                    this.mode = 27;
                }
                else if (antihistamine_1 && decongestant_1 && itchyeyesrelief && !(coughrelief_1 || painrelief_1)) {
                    this.mode = 28;
                }
                else if (painrelief_1 && antihistamine_1 && decongestant_1 && itchyeyesrelief && !(coughrelief_1)) {
                    this.mode = 29;
                }
                else if (painrelief_1 && antihistamine_1 && decongestant_1 && coughrelief_1 && !(itchyeyesrelief)) {
                    this.mode = 30;
                }
                else if (painrelief_1 && antihistamine_1 && itchyeyesrelief && coughrelief_1 && !(decongestant_1)) {
                    this.mode = 31;
                }
                else if (painrelief_1 && decongestant_1 && itchyeyesrelief && coughrelief_1 && !(antihistamine_1)) {
                    this.mode = 32;
                }
                else if (antihistamine_1 && decongestant_1 && itchyeyesrelief && coughrelief_1 && !(painrelief_1)) {
                    this.mode = 33;
                }
                else if (painrelief_1 && antihistamine_1 && decongestant_1 && coughrelief_1 && itchyeyesrelief) {
                    this.mode = 34;
                }
                else {
                    ind = 0;
                    this.mode = 50;
                }
            }
            else if (this.pageId == 1) {
                var sorethroat = this.recs[0], scratchythroat = this.recs[1], stuffynose = this.recs[2], runnynose = this.recs[3], sneezing = this.recs[4], headache = this.recs[5], bodyache = this.recs[6], cough = this.recs[7], wateryeyes = this.recs[8], sinuscongestion = this.recs[9], chestcongestion = this.recs[10], prevention = this.recs[12], All = this.recs[11], none = this.recs[13];
                //category variables
                var antihistamine = runnynose || sneezing || wateryeyes || scratchythroat, decongestant = stuffynose || sinuscongestion, painrelief = headache || bodyache || sorethroat, coughrelief = cough || chestcongestion;
                //conditions for showing none of the above division.
                if (none) {
                    this.mode = 1;
                }
                else if (prevention) {
                    this.mode = 2;
                }
                else if (All) {
                    this.mode = 3;
                }
                else if (antihistamine && !(decongestant || painrelief || coughrelief)) {
                    this.mode = 4;
                }
                else if (decongestant && !(antihistamine || painrelief || coughrelief)) {
                    this.mode = 5;
                }
                else if (painrelief && !(decongestant || antihistamine || coughrelief)) {
                    this.mode = 6;
                }
                else if (coughrelief && !(decongestant || painrelief || antihistamine)) {
                    this.mode = 7;
                }
                else if (antihistamine && decongestant && !(coughrelief || painrelief)) {
                    this.mode = 8;
                }
                else if (antihistamine && painrelief && !(coughrelief || decongestant)) {
                    this.mode = 9;
                }
                else if (antihistamine && coughrelief && !(painrelief || decongestant)) {
                    this.mode = 10;
                }
                else if (antihistamine && painrelief && decongestant && !coughrelief) {
                    this.mode = 11;
                }
                else if (antihistamine && coughrelief && decongestant && !painrelief) {
                    this.mode = 12;
                }
                else if (antihistamine && coughrelief && painrelief && !decongestant) {
                    this.mode = 13;
                }
                else if (antihistamine && coughrelief && painrelief && decongestant) {
                    this.mode = 14;
                }
                else if (decongestant && painrelief && !(coughrelief || antihistamine)) {
                    this.mode = 15;
                }
                else if (decongestant && coughrelief && !(painrelief || antihistamine)) {
                    this.mode = 16;
                }
                else if (decongestant && coughrelief && painrelief && !antihistamine) {
                    this.mode = 17;
                }
                else if (painrelief && coughrelief && !(decongestant || antihistamine)) {
                    this.mode = 18;
                }
                else {
                    this.mode = 50;
                }
            }
            else if (this.pageId == 2) {
                var sorethroat = this.recs[0], fever = this.recs[1], stuffynose = this.recs[2], diarrhea = this.recs[3], chills = this.recs[4], headache = this.recs[5], bodyache = this.recs[6], cough = this.recs[7], tired = this.recs[8], nausea = this.recs[9], prevention = this.recs[12], runnynose = this.recs[13], chestcongestion = this.recs[14], sinuspain = this.recs[15], All = this.recs[10], none = this.recs[11];
                //category variables
                var antihistamine = runnynose, decongestant = stuffynose || sinuspain, painrelief = headache || bodyache || sorethroat || fever || chills || tired, coughrelief = cough || chestcongestion, stomachrelief = nausea || diarrhea;
                //conditions for showing none of the above division.
                if (none) {
                    this.mode = 1;
                }
                else if (prevention) {
                    this.mode = 2;
                }
                else if (All) {
                    this.mode = 3;
                }
                else if (antihistamine && !(decongestant || painrelief || coughrelief || stomachrelief)) {
                    this.mode = 4;
                }
                else if (decongestant && !(antihistamine || painrelief || coughrelief || stomachrelief)) {
                    this.mode = 5;
                }
                else if (painrelief && !(decongestant || antihistamine || coughrelief || stomachrelief)) {
                    this.mode = 6;
                }
                else if (coughrelief && !(decongestant || painrelief || antihistamine || stomachrelief)) {
                    this.mode = 7;
                }
                else if (stomachrelief && !(decongestant || painrelief || antihistamine || coughrelief)) {
                    this.mode = 8;
                }
                else if (painrelief && decongestant && !(coughrelief || antihistamine || stomachrelief)) {
                    this.mode = 9;
                }
                else if (painrelief && antihistamine && !(coughrelief || decongestant || stomachrelief)) {
                    this.mode = 10;
                }
                else if (painrelief && coughrelief && !(antihistamine || decongestant || stomachrelief)) {
                    this.mode = 11;
                }
                else if (painrelief && stomachrelief && !(antihistamine || decongestant || coughrelief)) {
                    this.mode = 12;
                }
                else if (antihistamine && decongestant && !(painrelief || coughrelief || stomachrelief)) {
                    this.mode = 13;
                }
                else if (antihistamine && coughrelief && !(painrelief || decongestant || stomachrelief)) {
                    this.mode = 14;
                }
                else if (antihistamine && stomachrelief && !(painrelief || coughrelief || decongestant)) {
                    this.mode = 15;
                }
                else if (decongestant && coughrelief && !(painrelief || antihistamine || stomachrelief)) {
                    this.mode = 16;
                }
                else if (decongestant && stomachrelief && !(painrelief || antihistamine || coughrelief)) {
                    this.mode = 17;
                }
                else if (stomachrelief && coughrelief && !(painrelief || antihistamine || decongestant)) {
                    this.mode = 18;
                }
                else if (painrelief && antihistamine && decongestant && !(coughrelief || stomachrelief)) {
                    this.mode = 19;
                }
                else if (painrelief && antihistamine && coughrelief && !(decongestant || stomachrelief)) {
                    this.mode = 20;
                }
                else if (painrelief && antihistamine && stomachrelief && !(decongestant || coughrelief)) {
                    this.mode = 21;
                }
                else if (painrelief && decongestant && coughrelief && !(antihistamine || stomachrelief)) {
                    this.mode = 22;
                }
                else if (painrelief && decongestant && stomachrelief && !(antihistamine || coughrelief)) {
                    this.mode = 23;
                }
                else if (painrelief && stomachrelief && coughrelief && !(decongestant || antihistamine)) {
                    this.mode = 24;
                }
                else if (decongestant && stomachrelief && coughrelief && !(antihistamine || painrelief)) {
                    this.mode = 25;
                }
                else if (antihistamine && stomachrelief && coughrelief && !(decongestant || painrelief)) {
                    this.mode = 26;
                }
                else if (antihistamine && decongestant && coughrelief && !(stomachrelief || painrelief)) {
                    this.mode = 27;
                }
                else if (antihistamine && decongestant && stomachrelief && !(coughrelief || painrelief)) {
                    this.mode = 28;
                }
                else if (painrelief && antihistamine && decongestant && stomachrelief && !(coughrelief)) {
                    this.mode = 29;
                }
                else if (painrelief && antihistamine && decongestant && coughrelief && !(stomachrelief)) {
                    this.mode = 30;
                }
                else if (painrelief && antihistamine && stomachrelief && coughrelief && !(decongestant)) {
                    this.mode = 31;
                }
                else if (painrelief && decongestant && stomachrelief && coughrelief && !(antihistamine)) {
                    this.mode = 32;
                }
                else if (antihistamine && decongestant && stomachrelief && coughrelief && !(painrelief)) {
                    this.mode = 33;
                }
                else if (painrelief && antihistamine && decongestant && coughrelief && stomachrelief) {
                    this.mode = 34;
                }
                else {
                    this.mode = 50;
                }
            }
            else if (this.pageId == 4) {
                var sleep_quicker = this.recs[0], wake_early = this.recs[1], wake_often = this.recs[2], work_nights = this.recs[3], stressed = this.recs[4], toothache = this.recs[5], headache = this.recs[6], anxiety = this.recs[7], bigday = this.recs[8], jetlag = this.recs[9], prevention = this.recs[11], allabove = this.recs[10], none = this.recs[12];
                //Medication variables in collapsible
                var antihistamine = wake_early || wake_often, antihistamine_painrelief = toothache || headache, melatonin = sleep_quicker || work_nights || bigday || jetlag, valerian = stressed || anxiety || bigday, combination = stressed || anxiety || bigday || sleep_quicker;
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
                }
                else if (antihistamine_painrelief && !(antihistamine || melatonin || valerian || combination)) {
                    this.mode = 5;
                }
                else if (melatonin && !(antihistamine || antihistamine_painrelief || valerian || combination)) {
                    this.mode = 6;
                }
                else if (valerian && !(antihistamine || antihistamine_painrelief || melatonin || combination)) {
                    this.mode = 7;
                }
                else if (combination && !(antihistamine || antihistamine_painrelief || valerian || melatonin)) {
                    this.mode = 8;
                }
                else if (antihistamine && antihistamine_painrelief && !(melatonin || valerian || combination)) {
                    this.mode = 9;
                }
                else if (antihistamine && melatonin && !(antihistamine_painrelief || valerian || combination)) {
                    this.mode = 10;
                }
                else if (antihistamine && valerian && !(antihistamine_painrelief || melatonin || combination)) {
                    this.mode = 11;
                }
                else if (antihistamine && combination && !(antihistamine_painrelief || melatonin || valerian)) {
                    this.mode = 12;
                }
                else if (antihistamine_painrelief && melatonin && !(antihistamine || valerian || combination)) {
                    this.mode = 13;
                }
                else if (antihistamine_painrelief && valerian && !(antihistamine || melatonin || combination)) {
                    this.mode = 14;
                }
                else if (antihistamine_painrelief && combination && !(antihistamine || melatonin || valerian)) {
                    this.mode = 15;
                }
                else if (melatonin && valerian && !(antihistamine || antihistamine_painrelief || combination)) {
                    this.mode = 16;
                }
                else if (melatonin && combination && !(antihistamine || antihistamine_painrelief || valerian)) {
                    this.mode = 17;
                }
                else if (valerian && combination && !(antihistamine || antihistamine_painrelief || melatonin)) {
                    this.mode = 18;
                }
                else if (antihistamine && antihistamine_painrelief && melatonin && !(valerian || combination)) {
                    this.mode = 19;
                }
                else if (antihistamine && antihistamine_painrelief && valerian && !(melatonin || combination)) {
                    this.mode = 20;
                }
                else if (antihistamine && antihistamine_painrelief && combination && !(melatonin || valerian)) {
                    this.mode = 21;
                }
                else if (antihistamine && melatonin && valerian && !(antihistamine_painrelief || combination)) {
                    this.mode = 22;
                }
                else if (antihistamine && melatonin && combination && !(antihistamine_painrelief || valerian)) {
                    this.mode = 23;
                }
                else if (antihistamine && valerian && combination && !(antihistamine_painrelief || melatonin)) {
                    this.mode = 24;
                }
                else if (antihistamine_painrelief && melatonin && valerian && !(antihistamine || combination)) {
                    this.mode = 25;
                }
                else if (antihistamine_painrelief && melatonin && combination && !(antihistamine || valerian)) {
                    this.mode = 26;
                }
                else if (antihistamine_painrelief && valerian && combination && !(antihistamine || melatonin)) {
                    this.mode = 27;
                }
                else if (melatonin && valerian && combination && !(antihistamine || antihistamine_painrelief)) {
                    this.mode = 28;
                }
                else if (antihistamine && antihistamine_painrelief && melatonin && valerian && !(combination)) {
                    this.mode = 29;
                }
                else if (antihistamine && antihistamine_painrelief && melatonin && combination && !(valerian)) {
                    this.mode = 30;
                }
                else if (antihistamine && antihistamine_painrelief && valerian && combination && !(melatonin)) {
                    this.mode = 31;
                }
                else if (antihistamine && melatonin && valerian && combination && !(antihistamine_painrelief)) {
                    this.mode = 32;
                }
                else if (antihistamine_painrelief && melatonin && valerian && combination && !(antihistamine)) {
                    this.mode = 33;
                }
                else if (antihistamine && antihistamine_painrelief && melatonin && valerian && combination) {
                    this.mode = 34;
                }
                else {
                    this.mode = 50;
                    ind = 0;
                }
            }
            else if (this.pageId == 6) {
                var mild = this.recs[0], moderate = this.recs[1], severe = this.recs[2], painful = this.recs[3], crusty = this.recs[4], drainy = this.recs[5], blonde = this.recs[6], colored = this.recs[7], oily = this.recs[8], dry = this.recs[9], prevention = this.recs[11], allabove = this.recs[10], none = this.recs[12];
                //Medication variables in collapsible
                var mild = mild, moderate = moderate, severe = severe, warning = oily || dry || blonde || colored, doctor = severe || painful || crusty || drainy;
                if (none) {
                    this.mode = 34;
                }
                else if (prevention) {
                    this.mode = 1;
                }
                else if (allabove) {
                    this.mode = 2;
                }
                else if (mild && !(moderate || severe || warning || doctor)) {
                    this.mode = 3;
                }
                else if (moderate && !(mild || severe || warning || doctor)) {
                    this.mode = 4;
                }
                else if (severe && !(mild || moderate || warning || doctor)) {
                    this.mode = 5;
                }
                else if (warning && !(mild || moderate || severe || doctor)) {
                    this.mode = 6;
                }
                else if (doctor && !(mild || moderate || warning || severe)) {
                    this.mode = 7;
                }
                else if (mild && moderate && !(severe || warning || doctor)) {
                    this.mode = 8;
                }
                else if (mild && severe && !(moderate || warning || doctor)) {
                    this.mode = 9;
                }
                else if (mild && warning && !(moderate || severe || doctor)) {
                    this.mode = 10;
                }
                else if (mild && doctor && !(moderate || severe || warning)) {
                    this.mode = 11;
                }
                else if (moderate && severe && !(mild || warning || doctor)) {
                    this.mode = 12;
                }
                else if (moderate && warning && !(mild || severe || doctor)) {
                    this.mode = 13;
                }
                else if (moderate && doctor && !(mild || severe || warning)) {
                    this.mode = 14;
                }
                else if (severe && warning && !(mild || moderate || doctor)) {
                    this.mode = 15;
                }
                else if (severe && doctor && !(mild || moderate || warning)) {
                    this.mode = 16;
                }
                else if (warning && doctor && !(mild || moderate || severe)) {
                    this.mode = 17;
                }
                else if (mild && moderate && severe && !(warning || doctor)) {
                    this.mode = 18;
                }
                else if (mild && moderate && warning && !(severe || doctor)) {
                    this.mode = 19;
                }
                else if (mild && moderate && doctor && !(severe || warning)) {
                    this.mode = 20;
                }
                else if (mild && severe && warning && !(moderate || doctor)) {
                    this.mode = 21;
                }
                else if (mild && severe && doctor && !(moderate || warning)) {
                    this.mode = 22;
                }
                else if (mild && warning && doctor && !(moderate || severe)) {
                    this.mode = 23;
                }
                else if (moderate && severe && warning && !(mild || doctor)) {
                    this.mode = 24;
                }
                else if (moderate && severe && doctor && !(mild || warning)) {
                    this.mode = 25;
                }
                else if (moderate && warning && doctor && !(mild || severe)) {
                    this.mode = 26;
                }
                else if (severe && warning && doctor && !(mild || moderate)) {
                    this.mode = 27;
                }
                else if (mild && moderate && severe && warning && !(doctor)) {
                    this.mode = 28;
                }
                else if (mild && moderate && severe && doctor && !(warning)) {
                    this.mode = 29;
                }
                else if (mild && moderate && warning && doctor && !(severe)) {
                    this.mode = 30;
                }
                else if (mild && severe && warning && doctor && !(moderate)) {
                    this.mode = 31;
                }
                else if (moderate && severe && warning && doctor && !(mild)) {
                    this.mode = 32;
                }
                else if (mild && moderate && severe && warning && doctor) {
                    this.mode = 33;
                }
                else {
                    this.mode = 50;
                    ind = 0;
                }
            }
            else if (this.pageId == 7) {
                var 
                //found = $('#adult_recom_lice_mobile_q1_0'),
                severe = this.recs[1], best = this.recs[2], prefer_natural = this.recs[3], tried = this.recs[4], returned = this.recs[5], resistant = this.recs[6], crusty = this.recs[7], family = this.recs[8], money = this.recs[9], prevention = this.recs[11], allabove = this.recs[10], none = this.recs[12];
                //Medication variables in collapsible
                var pediculicides = family || best, natural = prefer_natural, outsource = severe || money || family, doctor = severe || tried || returned || resistant || crusty;
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
                }
                else if (natural && !(pediculicides || outsource || doctor)) {
                    this.mode = 5;
                }
                else if (outsource && !(pediculicides || natural || doctor)) {
                    this.mode = 6;
                }
                else if (doctor && !(pediculicides || natural || outsource)) {
                    this.mode = 7;
                }
                else if (pediculicides && natural && !(outsource || doctor)) {
                    this.mode = 8;
                }
                else if (pediculicides && outsource && !(natural || doctor)) {
                    this.mode = 9;
                }
                else if (pediculicides && doctor && !(natural || outsource)) {
                    this.mode = 10;
                }
                else if (natural && outsource && !(pediculicides || doctor)) {
                    this.mode = 11;
                }
                else if (natural && doctor && !(pediculicides || outsource)) {
                    this.mode = 12;
                }
                else if (outsource && doctor && !(pediculicides || natural)) {
                    this.mode = 13;
                }
                else if (pediculicides && natural && outsource && !(doctor)) {
                    this.mode = 14;
                }
                else if (pediculicides && natural && doctor && !(outsource)) {
                    this.mode = 15;
                }
                else if (pediculicides && outsource && doctor && !(natural)) {
                    this.mode = 16;
                }
                else if (natural && outsource && doctor && !(pediculicides)) {
                    this.mode = 17;
                }
                else if (pediculicides && natural && outsource && doctor) {
                    this.mode = 18;
                }
                else {
                    this.mode = 50;
                    ind = 0;
                }
            }
            else if (this.pageId == 8) {
                var pus = this.recs[0], one_eye = this.recs[1], eyelids_stuck = this.recs[2], watery = this.recs[3], foreign_object = this.recs[4], allergy_symptoms = this.recs[5], red_quickly = this.recs[6], itchy = this.recs[7], contact_lens = this.recs[8], chemical = this.recs[9], prevention = this.recs[10], allabove, none = this.recs[11];
                allabove = false;
                //Medication variables in collapsible
                var allergy = allergy_symptoms || itchy || red_quickly, viral = foreign_object || watery, doctor = pus || one_eye || eyelids_stuck;
                //conditions for showing none of the above division.
                if (none) {
                    this.mode = 1;
                }
                else if (prevention) {
                    this.mode = 2;
                }
                else if (allabove) {
                    this.mode = 3;
                }
                else if (contact_lens) {
                    this.mode = 4;
                }
                else if (chemical) {
                    this.mode = 5;
                }
                else if (allergy && !(viral || doctor)) {
                    this.mode = 6;
                }
                else if (viral && !(allergy || doctor)) {
                    this.mode = 7;
                }
                else if (doctor && !(allergy || viral)) {
                    this.mode = 8;
                }
                else if (allergy && viral && !(doctor)) {
                    this.mode = 9;
                }
                else if (allergy && doctor && !(viral)) {
                    this.mode = 10;
                }
                else if (viral && doctor && !(allergy)) {
                    this.mode = 11;
                }
                else if (allergy && viral && doctor) {
                    this.mode = 12;
                }
                else {
                    ind = 0;
                    this.mode = 50;
                }
            }
            else if (this.pageId == 11) {
                var severe = this.recs[0], mild = this.recs[1], burning = this.recs[2], morning = this.recs[3], painful = this.recs[4], sand = this.recs[5], four_times = this.recs[6], blurry = this.recs[7], 
                /*iiii = $('#adult_recom_dryeye_mobile_q1_8'),
                jjjj = $('#adult_recom_dryeye_mobile_q1_9'),*/
                prevention = this.recs[8], allabove, none = this.recs[9];
                allabove = false;
                //Medication variables in collapsible
                var thicker = severe || painful || sand, watery = mild || burning || sand || blurry || painful, nighttime = severe || mild || morning, cold_warm_compress = severe || mild || painful, preservative_free = severe || four_times;
                if (none) {
                    this.mode = 1;
                }
                else if (prevention) {
                    this.mode = 2;
                }
                else if (allabove) {
                    this.mode = 3;
                }
                else if (thicker && !(watery || nighttime || cold_warm_compress || preservative_free)) {
                    this.mode = 4;
                }
                else if (watery && !(thicker || nighttime || cold_warm_compress || preservative_free)) {
                    this.mode = 5;
                }
                else if (nighttime && !(thicker || watery || cold_warm_compress || preservative_free)) {
                    this.mode = 6;
                }
                else if (cold_warm_compress && !(thicker || watery || nighttime || preservative_free)) {
                    this.mode = 7;
                }
                else if (preservative_free && !(thicker || watery || cold_warm_compress || nighttime)) {
                    this.mode = 8;
                }
                else if (thicker && watery && !(nighttime || cold_warm_compress || preservative_free)) {
                    this.mode = 9;
                }
                else if (thicker && nighttime && !(watery || cold_warm_compress || preservative_free)) {
                    this.mode = 10;
                }
                else if (thicker && cold_warm_compress && !(watery || nighttime || preservative_free)) {
                    this.mode = 11;
                }
                else if (thicker && preservative_free && !(watery || nighttime || cold_warm_compress)) {
                    this.mode = 12;
                }
                else if (watery && nighttime && !(thicker || cold_warm_compress || preservative_free)) {
                    this.mode = 13;
                }
                else if (watery && cold_warm_compress && !(thicker || nighttime || preservative_free)) {
                    this.mode = 14;
                }
                else if (watery && preservative_free && !(thicker || nighttime || cold_warm_compress)) {
                    this.mode = 15;
                }
                else if (nighttime && cold_warm_compress && !(thicker || watery || preservative_free)) {
                    this.mode = 16;
                }
                else if (nighttime && preservative_free && !(thicker || watery || cold_warm_compress)) {
                    this.mode = 17;
                }
                else if (cold_warm_compress && preservative_free && !(thicker || watery || nighttime)) {
                    this.mode = 18;
                }
                else if (thicker && watery && nighttime && !(cold_warm_compress || preservative_free)) {
                    this.mode = 19;
                }
                else if (thicker && watery && cold_warm_compress && !(nighttime || preservative_free)) {
                    this.mode = 20;
                }
                else if (thicker && watery && preservative_free && !(nighttime || cold_warm_compress)) {
                    this.mode = 21;
                }
                else if (thicker && nighttime && cold_warm_compress && !(watery || preservative_free)) {
                    this.mode = 22;
                }
                else if (thicker && nighttime && preservative_free && !(watery || cold_warm_compress)) {
                    this.mode = 23;
                }
                else if (thicker && cold_warm_compress && preservative_free && !(watery || nighttime)) {
                    this.mode = 24;
                }
                else if (watery && nighttime && cold_warm_compress && !(thicker || preservative_free)) {
                    this.mode = 25;
                }
                else if (watery && nighttime && preservative_free && !(thicker || cold_warm_compress)) {
                    this.mode = 26;
                }
                else if (watery && cold_warm_compress && preservative_free && !(thicker || nighttime)) {
                    this.mode = 27;
                }
                else if (nighttime && cold_warm_compress && preservative_free && !(thicker || watery)) {
                    this.mode = 28;
                }
                else if (thicker && watery && nighttime && cold_warm_compress && !(preservative_free)) {
                    this.mode = 29;
                }
                else if (thicker && watery && nighttime && preservative_free && !(cold_warm_compress)) {
                    this.mode = 30;
                }
                else if (thicker && watery && cold_warm_compress && preservative_free && !(nighttime)) {
                    this.mode = 31;
                }
                else if (thicker && nighttime && cold_warm_compress && preservative_free && !(watery)) {
                    this.mode = 32;
                }
                else if (watery && nighttime && cold_warm_compress && preservative_free && !(thicker)) {
                    this.mode = 33;
                }
                else if (thicker && watery && nighttime && cold_warm_compress && preservative_free) {
                    this.mode = 34;
                }
                else {
                    this.mode = 50;
                    ind = 0;
                }
            }
            else if (this.pageId == 12) {
                var cold = this.recs[0], ruptured = this.recs[1], toothache = this.recs[2], water = this.recs[3], swollen = this.recs[4], itchy = this.recs[5], fever = this.recs[6], sore_throat = this.recs[7], pressure = this.recs[8], draining = this.recs[9], prevention = this.recs[10], allabove, none = this.recs[11];
                allabove = false;
                //Medication variables in collapsible
                var pain_reliever = cold || swollen || toothache || pressure, eardrops = water || itchy, decongestant = cold || pressure, warm_compress = ruptured || swollen || toothache, doctor = ruptured || swollen || fever || sore_throat || draining;
                //conditions for showing none of the above division.
                if (none) {
                    this.mode = 1;
                }
                else if (prevention) {
                    this.mode = 2;
                }
                else if (ruptured) {
                    this.mode = 3;
                }
                else if (allabove) {
                    this.mode = 4;
                }
                else if (pain_reliever && !(eardrops || decongestant || warm_compress || doctor)) {
                    this.mode = 5;
                }
                else if (eardrops && !(pain_reliever || decongestant || warm_compress || doctor)) {
                    this.mode = 6;
                }
                else if (decongestant && !(pain_reliever || eardrops || warm_compress || doctor)) {
                    this.mode = 7;
                }
                else if (warm_compress && !(pain_reliever || eardrops || decongestant || doctor)) {
                    this.mode = 8;
                }
                else if (doctor && !(pain_reliever || eardrops || warm_compress || decongestant)) {
                    this.mode = 9;
                }
                else if (pain_reliever && eardrops && !(decongestant || warm_compress || doctor)) {
                    this.mode = 10;
                }
                else if (pain_reliever && decongestant && !(eardrops || warm_compress || doctor)) {
                    this.mode = 11;
                }
                else if (pain_reliever && warm_compress && !(eardrops || decongestant || doctor)) {
                    this.mode = 12;
                }
                else if (pain_reliever && doctor && !(eardrops || decongestant || warm_compress)) {
                    this.mode = 13;
                }
                else if (eardrops && decongestant && !(pain_reliever || warm_compress || doctor)) {
                    this.mode = 14;
                }
                else if (eardrops && warm_compress && !(pain_reliever || decongestant || doctor)) {
                    this.mode = 15;
                }
                else if (eardrops && doctor && !(pain_reliever || decongestant || warm_compress)) {
                    this.mode = 16;
                }
                else if (decongestant && warm_compress && !(pain_reliever || eardrops || doctor)) {
                    this.mode = 17;
                }
                else if (decongestant && doctor && !(pain_reliever || eardrops || warm_compress)) {
                    this.mode = 18;
                }
                else if (warm_compress && doctor && !(pain_reliever || eardrops || decongestant)) {
                    this.mode = 19;
                }
                else if (pain_reliever && eardrops && decongestant && !(warm_compress || doctor)) {
                    this.mode = 20;
                }
                else if (pain_reliever && eardrops && warm_compress && !(decongestant || doctor)) {
                    this.mode = 21;
                }
                else if (pain_reliever && eardrops && doctor && !(decongestant || warm_compress)) {
                    this.mode = 22;
                }
                else if (pain_reliever && decongestant && warm_compress && !(eardrops || doctor)) {
                    this.mode = 23;
                }
                else if (pain_reliever && decongestant && doctor && !(eardrops || warm_compress)) {
                    this.mode = 24;
                }
                else if (pain_reliever && warm_compress && doctor && !(eardrops || decongestant)) {
                    this.mode = 25;
                }
                else if (eardrops && decongestant && warm_compress && !(pain_reliever || doctor)) {
                    this.mode = 26;
                }
                else if (eardrops && decongestant && doctor && !(pain_reliever || warm_compress)) {
                    this.mode = 27;
                }
                else if (eardrops && warm_compress && doctor && !(pain_reliever || decongestant)) {
                    this.mode = 28;
                }
                else if (decongestant && warm_compress && doctor && !(pain_reliever || eardrops)) {
                    this.mode = 29;
                }
                else if (pain_reliever && eardrops && decongestant && warm_compress && !(doctor)) {
                    this.mode = 30;
                }
                else if (pain_reliever && eardrops && decongestant && doctor && !(warm_compress)) {
                    this.mode = 31;
                }
                else if (pain_reliever && eardrops && warm_compress && doctor && !(decongestant)) {
                    this.mode = 32;
                }
                else if (pain_reliever && decongestant && warm_compress && doctor && !(eardrops)) {
                    this.mode = 33;
                }
                else if (eardrops && decongestant && warm_compress && doctor && !(pain_reliever)) {
                    this.mode = 34;
                }
                else if (pain_reliever && eardrops && decongestant && warm_compress && doctor) {
                    this.mode = 35;
                }
                else {
                    this.mode = 50;
                    ind = 0;
                }
            }
            else if (this.pageId == 13) {
                var ruptured = this.recs[0], pus = this.recs[1], painful = this.recs[2], fluid = this.recs[3], swollen = this.recs[4], fever = this.recs[5], muffled = this.recs[6], itchy = this.recs[7], 
                /*iiii = $('#adult_recom_swimear_mobile_q1_8'),
                jjjj = $('#adult_recom_swimear_mobile_q1_9'),*/
                prevention = this.recs[8], allabove, none = this.recs[9];
                allabove = false;
                //Medication variables in collapsible
                var ear_drops = fluid || muffled || itchy, pain_reliever = painful || swollen || fever, antihistamine = itchy, warm_compress = ruptured || painful || swollen, doctor = ruptured || pus || painful || swollen || fever || muffled;
                //conditions for showing none of the above division.
                if (none) {
                    this.mode = 1;
                }
                else if (prevention) {
                    this.mode = 2;
                }
                else if (allabove) {
                    this.mode = 3;
                }
                else if (ruptured) {
                    this.mode = 4;
                }
                else if (ear_drops && !(pain_reliever || antihistamine || warm_compress || doctor)) {
                    this.mode = 5;
                }
                else if (pain_reliever && !(ear_drops || antihistamine || warm_compress || doctor)) {
                    this.mode = 6;
                }
                else if (antihistamine && !(ear_drops || pain_reliever || warm_compress || doctor)) {
                    this.mode = 7;
                }
                else if (warm_compress && !(ear_drops || pain_reliever || antihistamine || doctor)) {
                    this.mode = 8;
                }
                else if (doctor && !(ear_drops || pain_reliever || warm_compress || antihistamine)) {
                    this.mode = 9;
                }
                else if (ear_drops && pain_reliever && !(antihistamine || warm_compress || doctor)) {
                    this.mode = 10;
                }
                else if (ear_drops && antihistamine && !(pain_reliever || warm_compress || doctor)) {
                    this.mode = 11;
                }
                else if (ear_drops && warm_compress && !(pain_reliever || antihistamine || doctor)) {
                    this.mode = 12;
                }
                else if (ear_drops && doctor && !(pain_reliever || antihistamine || warm_compress)) {
                    this.mode = 13;
                }
                else if (pain_reliever && antihistamine && !(ear_drops || warm_compress || doctor)) {
                    this.mode = 14;
                }
                else if (pain_reliever && warm_compress && !(ear_drops || antihistamine || doctor)) {
                    this.mode = 15;
                }
                else if (pain_reliever && doctor && !(ear_drops || antihistamine || warm_compress)) {
                    this.mode = 16;
                }
                else if (antihistamine && warm_compress && !(ear_drops || pain_reliever || doctor)) {
                    this.mode = 17;
                }
                else if (antihistamine && doctor && !(ear_drops || pain_reliever || warm_compress)) {
                    this.mode = 18;
                }
                else if (warm_compress && doctor && !(ear_drops || pain_reliever || antihistamine)) {
                    this.mode = 19;
                }
                else if (ear_drops && pain_reliever && antihistamine && !(warm_compress || doctor)) {
                    this.mode = 20;
                }
                else if (ear_drops && pain_reliever && warm_compress && !(antihistamine || doctor)) {
                    this.mode = 21;
                }
                else if (ear_drops && pain_reliever && doctor && !(antihistamine || warm_compress)) {
                    this.mode = 22;
                }
                else if (ear_drops && antihistamine && warm_compress && !(pain_reliever || doctor)) {
                    this.mode = 23;
                }
                else if (ear_drops && antihistamine && doctor && !(pain_reliever || warm_compress)) {
                    this.mode = 24;
                }
                else if (ear_drops && warm_compress && doctor && !(pain_reliever || antihistamine)) {
                    this.mode = 25;
                }
                else if (pain_reliever && antihistamine && warm_compress && !(ear_drops || doctor)) {
                    this.mode = 26;
                }
                else if (pain_reliever && antihistamine && doctor && !(ear_drops || warm_compress)) {
                    this.mode = 27;
                }
                else if (pain_reliever && warm_compress && doctor && !(ear_drops || antihistamine)) {
                    this.mode = 28;
                }
                else if (antihistamine && warm_compress && doctor && !(ear_drops || pain_reliever)) {
                    this.mode = 29;
                }
                else if (ear_drops && pain_reliever && antihistamine && warm_compress && !(doctor)) {
                    this.mode = 30;
                }
                else if (ear_drops && pain_reliever && antihistamine && doctor && !(warm_compress)) {
                    this.mode = 31;
                }
                else if (ear_drops && pain_reliever && warm_compress && doctor && !(antihistamine)) {
                    this.mode = 32;
                }
                else if (ear_drops && antihistamine && warm_compress && doctor && !(pain_reliever)) {
                    this.mode = 33;
                }
                else if (pain_reliever && antihistamine && warm_compress && doctor && !(ear_drops)) {
                    this.mode = 34;
                }
                else if (ear_drops && pain_reliever && antihistamine && warm_compress && doctor) {
                    this.mode = 35;
                }
                else {
                    this.mode = 50;
                    ind = 0;
                }
            }
            else if (this.pageId == 18) {
                var tingling = this.recs[0], blistering = this.recs[1], weeping = this.recs[2], scabbing = this.recs[3], healing = this.recs[4], fluid = this.recs[5], large = this.recs[6], leaking = this.recs[7], red = this.recs[8], painful = this.recs[9], prevention = this.recs[11], allabove = this.recs[10], none = this.recs[12];
                var docosanol = tingling || blistering || fluid, antiinflammatory = weeping || red || fluid || large, analgesic = painful, antiseptic = weeping || blistering || large || leaking, protectants = scabbing || healing, supplements = tingling;
                if (none) {
                    this.mode = 1;
                }
                else if (prevention) {
                    this.mode = 2;
                }
                else if (allabove) {
                    this.mode = 3;
                }
                else if (docosanol && !(antiinflammatory || analgesic || antiseptic || protectants || supplements)) {
                    this.mode = 4;
                }
                else if (antiinflammatory && !(docosanol || analgesic || antiseptic || protectants || supplements)) {
                    this.mode = 5;
                }
                else if (analgesic && !(docosanol || antiinflammatory || antiseptic || protectants || supplements)) {
                    this.mode = 6;
                }
                else if (antiseptic && !(docosanol || antiinflammatory || analgesic || protectants || supplements)) {
                    this.mode = 7;
                }
                else if (protectants && !(docosanol || antiinflammatory || antiseptic || analgesic || supplements)) {
                    this.mode = 8;
                }
                else if (supplements && !(docosanol || antiinflammatory || antiseptic || analgesic || protectants)) {
                    this.mode = 9;
                }
                else if (docosanol && antiinflammatory && !(analgesic || antiseptic || protectants || supplements)) {
                    this.mode = 10;
                }
                else if (docosanol && analgesic && !(antiinflammatory || antiseptic || protectants || supplements)) {
                    this.mode = 11;
                }
                else if (docosanol && antiseptic && !(antiinflammatory || analgesic || protectants || supplements)) {
                    this.mode = 12;
                }
                else if (docosanol && protectants && !(antiinflammatory || analgesic || antiseptic || supplements)) {
                    this.mode = 13;
                }
                else if (docosanol && supplements && !(antiinflammatory || analgesic || antiseptic || protectants)) {
                    this.mode = 14;
                }
                else if (antiinflammatory && analgesic && !(docosanol || antiseptic || protectants || supplements)) {
                    this.mode = 15;
                }
                else if (antiinflammatory && antiseptic && !(docosanol || analgesic || protectants || supplements)) {
                    this.mode = 16;
                }
                else if (antiinflammatory && protectants && !(docosanol || analgesic || antiseptic || supplements)) {
                    this.mode = 17;
                }
                else if (antiinflammatory && supplements && !(docosanol || analgesic || antiseptic || protectants)) {
                    this.mode = 18;
                }
                else if (analgesic && antiseptic && !(docosanol || antiinflammatory || protectants || supplements)) {
                    this.mode = 19;
                }
                else if (analgesic && protectants && !(docosanol || antiinflammatory || antiseptic || supplements)) {
                    this.mode = 20;
                }
                else if (analgesic && supplements && !(docosanol || antiinflammatory || antiseptic || protectants)) {
                    this.mode = 21;
                }
                else if (antiseptic && protectants && !(docosanol || antiinflammatory || analgesic || supplements)) {
                    this.mode = 22;
                }
                else if (antiseptic && supplements && !(docosanol || antiinflammatory || analgesic || protectants)) {
                    this.mode = 23;
                }
                else if (protectants && supplements && !(docosanol || antiinflammatory || analgesic || antiseptic)) {
                    this.mode = 24;
                }
                else if (docosanol && antiinflammatory && analgesic && !(antiseptic || protectants || supplements)) {
                    this.mode = 25;
                }
                else if (docosanol && antiinflammatory && antiseptic && !(analgesic || protectants || supplements)) {
                    this.mode = 26;
                }
                else if (docosanol && antiinflammatory && protectants && !(analgesic || antiseptic || supplements)) {
                    this.mode = 27;
                }
                else if (docosanol && antiinflammatory && supplements && !(analgesic || antiseptic || protectants)) {
                    this.mode = 28;
                }
                else if (docosanol && analgesic && antiseptic && !(antiinflammatory || protectants || supplements)) {
                    this.mode = 29;
                }
                else if (docosanol && analgesic && protectants && !(antiinflammatory || antiseptic || supplements)) {
                    this.mode = 30;
                }
                else if (docosanol && analgesic && supplements && !(antiinflammatory || antiseptic || protectants)) {
                    this.mode = 31;
                }
                else if (docosanol && antiseptic && protectants && !(antiinflammatory || analgesic || supplements)) {
                    this.mode = 32;
                }
                else if (docosanol && antiseptic && supplements && !(antiinflammatory || analgesic || protectants)) {
                    this.mode = 33;
                }
                else if (docosanol && protectants && supplements && !(antiinflammatory || analgesic || antiseptic)) {
                    this.mode = 34;
                }
                else if (antiinflammatory && analgesic && antiseptic && !(docosanol || protectants || supplements)) {
                    this.mode = 35;
                }
                else if (antiinflammatory && analgesic && protectants && !(docosanol || antiseptic || supplements)) {
                    this.mode = 36;
                }
                else if (antiinflammatory && analgesic && supplements && !(docosanol || antiseptic || protectants)) {
                    this.mode = 37;
                }
                else if (antiinflammatory && antiseptic && protectants && !(docosanol || analgesic || supplements)) {
                    this.mode = 38;
                }
                else if (antiinflammatory && antiseptic && supplements && !(docosanol || analgesic || protectants)) {
                    this.mode = 39;
                }
                else if (antiinflammatory && protectants && supplements && !(docosanol || analgesic || antiseptic)) {
                    this.mode = 40;
                }
                else if (analgesic && antiseptic && protectants && !(docosanol || antiinflammatory || supplements)) {
                    this.mode = 41;
                }
                else if (analgesic && antiseptic && supplements && !(docosanol || antiinflammatory || protectants)) {
                    this.mode = 42;
                }
                else if (analgesic && protectants && supplements && !(docosanol || antiinflammatory || antiseptic)) {
                    this.mode = 43;
                }
                else if (antiseptic && protectants && supplements && !(docosanol || antiinflammatory || analgesic)) {
                    this.mode = 44;
                }
                else if (docosanol && antiinflammatory && analgesic && antiseptic && !(protectants || supplements)) {
                    this.mode = 45;
                }
                else if (docosanol && antiinflammatory && analgesic && protectants && !(antiseptic || supplements)) {
                    this.mode = 46;
                }
                else if (docosanol && antiinflammatory && analgesic && supplements && !(antiseptic || protectants)) {
                    this.mode = 47;
                }
                else if (docosanol && antiinflammatory && antiseptic && protectants && !(analgesic || supplements)) {
                    this.mode = 48;
                }
                else if (docosanol && antiinflammatory && antiseptic && supplements && !(analgesic || protectants)) {
                    this.mode = 49;
                }
                else if (docosanol && antiinflammatory && protectants && supplements && !(analgesic || antiseptic)) {
                    this.mode = 60;
                }
                else if (docosanol && analgesic && antiseptic && protectants && !(antiinflammatory || supplements)) {
                    this.mode = 61;
                }
                else if (docosanol && analgesic && antiseptic && supplements && !(antiinflammatory || protectants)) {
                    this.mode = 62;
                }
                else if (docosanol && analgesic && protectants && supplements && !(antiinflammatory || antiseptic)) {
                    this.mode = 63;
                }
                else if (docosanol && antiseptic && protectants && supplements && !(antiinflammatory || analgesic)) {
                    this.mode = 64;
                }
                else if (antiinflammatory && analgesic && antiseptic && protectants && !(docosanol || supplements)) {
                    this.mode = 65;
                }
                else if (antiinflammatory && analgesic && antiseptic && supplements && !(docosanol || protectants)) {
                    this.mode = 66;
                }
                else if (antiinflammatory && analgesic && protectants && supplements && !(docosanol || antiseptic)) {
                    this.mode = 67;
                }
                else if (antiinflammatory && antiseptic && protectants && supplements && !(docosanol || analgesic)) {
                    this.mode = 68;
                }
                else if (analgesic && antiseptic && protectants && supplements && !(docosanol || antiinflammatory)) {
                    this.mode = 69;
                }
                else if (docosanol && antiinflammatory && analgesic && antiseptic && protectants && !(supplements)) {
                    this.mode = 70;
                }
                else if (docosanol && antiinflammatory && analgesic && antiseptic && supplements && !(protectants)) {
                    this.mode = 71;
                }
                else if (docosanol && antiinflammatory && analgesic && protectants && supplements && !(antiseptic)) {
                    this.mode = 72;
                }
                else if (docosanol && antiinflammatory && antiseptic && protectants && supplements && !(analgesic)) {
                    this.mode = 73;
                }
                else if (docosanol && analgesic && antiseptic && protectants && supplements && !(antiinflammatory)) {
                    this.mode = 74;
                }
                else if (antiinflammatory && analgesic && antiseptic && protectants && supplements && !(docosanol)) {
                    this.mode = 75;
                }
                else if (docosanol && antiinflammatory && analgesic && antiseptic && protectants && supplements) {
                    this.mode = 76;
                }
                else {
                    this.mode = 50;
                    ind = 0;
                }
            }
            else if (this.pageId == 26) {
                var dry = this.recs[0], productive = this.recs[1], congestion = this.recs[2], runnyNose = this.recs[3], soreThroat = this.recs[4], night = this.recs[5], tickly = this.recs[6], itchy = this.recs[7], heaviness = this.recs[8], headache = this.recs[9], blood = this.recs[10], noSleep = this.recs[11], prevention, allabove = this.recs[12], none = this.recs[13];
                //Medication variables in collapsible
                var dextromethorphan = dry || tickly || night, guaifenesin = productive || heaviness, coughDrops = dry || tickly || soreThroat, decongestant = congestion, antihistamine = runnyNose || itchy;
                prevention = false;
                //conditions for showing none of the above division.
                if (none) {
                    this.mode = 1;
                }
                else if (prevention) {
                    this.mode = 2;
                }
                else if (allabove) {
                    this.mode = 3;
                }
                else if (headache || blood || noSleep) {
                    this.mode = 4;
                }
                else if (dextromethorphan && !(guaifenesin || coughDrops || decongestant || antihistamine)) {
                    this.mode = 5;
                }
                else if (guaifenesin && !(dextromethorphan || coughDrops || decongestant || antihistamine)) {
                    this.mode = 6;
                }
                else if (coughDrops && !(dextromethorphan || guaifenesin || decongestant || antihistamine)) {
                    this.mode = 7;
                }
                else if (decongestant && !(dextromethorphan || guaifenesin || coughDrops || antihistamine)) {
                    this.mode = 8;
                }
                else if (antihistamine && !(dextromethorphan || guaifenesin || decongestant || coughDrops)) {
                    this.mode = 9;
                }
                else if (dextromethorphan && guaifenesin && !(coughDrops || decongestant || antihistamine)) {
                    this.mode = 10;
                }
                else if (dextromethorphan && coughDrops && !(guaifenesin || decongestant || antihistamine)) {
                    this.mode = 11;
                }
                else if (dextromethorphan && decongestant && !(guaifenesin || coughDrops || antihistamine)) {
                    this.mode = 12;
                }
                else if (dextromethorphan && antihistamine && !(guaifenesin || coughDrops || decongestant)) {
                    this.mode = 13;
                }
                else if (guaifenesin && coughDrops && !(dextromethorphan || decongestant || antihistamine)) {
                    this.mode = 14;
                }
                else if (guaifenesin && decongestant && !(dextromethorphan || coughDrops || antihistamine)) {
                    this.mode = 15;
                }
                else if (guaifenesin && antihistamine && !(dextromethorphan || coughDrops || decongestant)) {
                    this.mode = 16;
                }
                else if (coughDrops && decongestant && !(dextromethorphan || guaifenesin || antihistamine)) {
                    this.mode = 17;
                }
                else if (coughDrops && antihistamine && !(dextromethorphan || guaifenesin || decongestant)) {
                    this.mode = 18;
                }
                else if (decongestant && antihistamine && !(dextromethorphan || guaifenesin || coughDrops)) {
                    this.mode = 19;
                }
                else if (dextromethorphan && guaifenesin && coughDrops && !(decongestant || antihistamine)) {
                    this.mode = 20;
                }
                else if (dextromethorphan && guaifenesin && decongestant && !(coughDrops || antihistamine)) {
                    this.mode = 21;
                }
                else if (dextromethorphan && guaifenesin && antihistamine && !(coughDrops || decongestant)) {
                    this.mode = 22;
                }
                else if (dextromethorphan && coughDrops && decongestant && !(guaifenesin || antihistamine)) {
                    this.mode = 23;
                }
                else if (dextromethorphan && coughDrops && antihistamine && !(guaifenesin || decongestant)) {
                    this.mode = 24;
                }
                else if (dextromethorphan && decongestant && antihistamine && !(guaifenesin || coughDrops)) {
                    this.mode = 25;
                }
                else if (guaifenesin && coughDrops && decongestant && !(dextromethorphan || antihistamine)) {
                    this.mode = 26;
                }
                else if (guaifenesin && coughDrops && antihistamine && !(dextromethorphan || decongestant)) {
                    this.mode = 27;
                }
                else if (guaifenesin && decongestant && antihistamine && !(dextromethorphan || coughDrops)) {
                    this.mode = 28;
                }
                else if (coughDrops && decongestant && antihistamine && !(dextromethorphan || guaifenesin)) {
                    this.mode = 29;
                }
                else if (dextromethorphan && guaifenesin && coughDrops && decongestant && !(antihistamine)) {
                    this.mode = 30;
                }
                else if (dextromethorphan && guaifenesin && coughDrops && antihistamine && !(decongestant)) {
                    this.mode = 31;
                }
                else if (dextromethorphan && guaifenesin && decongestant && antihistamine && !(coughDrops)) {
                    this.mode = 32;
                }
                else if (dextromethorphan && coughDrops && decongestant && antihistamine && !(guaifenesin)) {
                    this.mode = 33;
                }
                else if (guaifenesin && coughDrops && decongestant && antihistamine && !(dextromethorphan)) {
                    this.mode = 34;
                }
                else if (dextromethorphan && guaifenesin && coughDrops && decongestant && antihistamine) {
                    this.mode = 35;
                }
                else {
                    this.mode = 50;
                    ind = 0;
                }
            }
            else if (this.pageId == 31) {
                var indigestion = this.recs[0], bloated = this.recs[1], reflux = this.recs[2], fast = this.recs[3], often = this.recs[4], weeks = this.recs[5], stuck = this.recs[6], tar = this.recs[7], situps = this.recs[8], prevention = this.recs[9], none = this.recs[10];
                var antacid = fast || indigestion || reflux || often || stuck || situps, antigas = indigestion || bloated, h2_blocker = reflux || often || weeks, ppi = reflux || often || stuck, doctor = stuck || tar || weeks;
                //conditions for showing none of the above division.
                if (none) {
                    this.mode = 1;
                }
                else if (prevention) {
                    this.mode = 2;
                }
                else if (antacid && !(antigas || h2_blocker || ppi || doctor)) {
                    this.mode = 3;
                }
                else if (antigas && !(antacid || h2_blocker || ppi || doctor)) {
                    this.mode = 4;
                }
                else if (h2_blocker && !(antacid || antigas || ppi || doctor)) {
                    this.mode = 5;
                }
                else if (ppi && !(antacid || antigas || h2_blocker || doctor)) {
                    this.mode = 6;
                }
                else if (doctor && !(antacid || antigas || ppi || h2_blocker)) {
                    this.mode = 7;
                }
                else if (antacid && antigas && !(h2_blocker || ppi || doctor)) {
                    this.mode = 8;
                }
                else if (antacid && h2_blocker && !(antigas || ppi || doctor)) {
                    this.mode = 9;
                }
                else if (antacid && ppi && !(antigas || h2_blocker || doctor)) {
                    this.mode = 10;
                }
                else if (antacid && doctor && !(antigas || h2_blocker || ppi)) {
                    this.mode = 11;
                }
                else if (antigas && h2_blocker && !(antacid || ppi || doctor)) {
                    this.mode = 12;
                }
                else if (antigas && ppi && !(antacid || h2_blocker || doctor)) {
                    this.mode = 13;
                }
                else if (antigas && doctor && !(antacid || h2_blocker || ppi)) {
                    this.mode = 14;
                }
                else if (h2_blocker && ppi && !(antacid || antigas || doctor)) {
                    this.mode = 15;
                }
                else if (h2_blocker && doctor && !(antacid || antigas || ppi)) {
                    this.mode = 16;
                }
                else if (ppi && doctor && !(antacid || antigas || h2_blocker)) {
                    this.mode = 17;
                }
                else if (antacid && antigas && h2_blocker && !(ppi || doctor)) {
                    this.mode = 18;
                }
                else if (antacid && antigas && ppi && !(h2_blocker || doctor)) {
                    this.mode = 19;
                }
                else if (antacid && antigas && doctor && !(h2_blocker || ppi)) {
                    this.mode = 20;
                }
                else if (antacid && h2_blocker && ppi && !(antigas || doctor)) {
                    this.mode = 21;
                }
                else if (antacid && h2_blocker && doctor && !(antigas || ppi)) {
                    this.mode = 22;
                }
                else if (antacid && ppi && doctor && !(antigas || h2_blocker)) {
                    this.mode = 23;
                }
                else if (antigas && h2_blocker && ppi && !(antacid || doctor)) {
                    this.mode = 24;
                }
                else if (antigas && h2_blocker && doctor && !(antacid || ppi)) {
                    this.mode = 25;
                }
                else if (antigas && ppi && doctor && !(antacid || h2_blocker)) {
                    this.mode = 26;
                }
                else if (h2_blocker && ppi && doctor && !(antacid || antigas)) {
                    this.mode = 27;
                }
                else if (antacid && antigas && h2_blocker && ppi && !(doctor)) {
                    this.mode = 28;
                }
                else if (antacid && antigas && h2_blocker && doctor && !(ppi)) {
                    this.mode = 29;
                }
                else if (antacid && antigas && ppi && doctor && !(h2_blocker)) {
                    this.mode = 30;
                }
                else if (antacid && h2_blocker && ppi && doctor && !(antigas)) {
                    this.mode = 31;
                }
                else if (antigas && h2_blocker && ppi && doctor && !(antacid)) {
                    this.mode = 32;
                }
                else if (antacid && antigas && h2_blocker && ppi && doctor) {
                    this.mode = 33;
                }
                else {
                    this.mode = 50;
                    ind = 0;
                }
            }
            else if (this.pageId == 38) {
                var indigestion = this.recs[0], bloated = this.recs[1], reflux = this.recs[2], fast = this.recs[3], often = this.recs[4], weeks = this.recs[5], stuck = this.recs[6], tar = this.recs[7], situps = this.recs[8], prevention = this.recs[9], none = this.recs[10];
                //Medication variables in collapsible
                var antacid = fast || indigestion || reflux || often || stuck || situps;
                antigas = indigestion || bloated;
                h2_blocker = reflux || often || weeks;
                ppi = reflux || often || stuck;
                doctor = stuck || tar || weeks;
                //conditions for showing none of the above division.
                if (none) {
                    this.mode = 1;
                }
                else if (prevention) {
                    this.mode = 2;
                }
                else if (antacid && !(antigas || h2_blocker || ppi || doctor)) {
                    this.mode = 3;
                }
                else if (antigas && !(antacid || h2_blocker || ppi || doctor)) {
                    this.mode = 4;
                }
                else if (h2_blocker && !(antacid || antigas || ppi || doctor)) {
                    this.mode = 5;
                }
                else if (ppi && !(antacid || antigas || h2_blocker || doctor)) {
                    this.mode = 6;
                }
                else if (doctor && !(antacid || antigas || ppi || h2_blocker)) {
                    this.mode = 7;
                }
                else if (antacid && antigas && !(h2_blocker || ppi || doctor)) {
                    this.mode = 8;
                }
                else if (antacid && h2_blocker && !(antigas || ppi || doctor)) {
                    this.mode = 9;
                }
                else if (antacid && ppi && !(antigas || h2_blocker || doctor)) {
                    this.mode = 10;
                }
                else if (antacid && doctor && !(antigas || h2_blocker || ppi)) {
                    this.mode = 11;
                }
                else if (antigas && h2_blocker && !(antacid || ppi || doctor)) {
                    this.mode = 12;
                }
                else if (antigas && ppi && !(antacid || h2_blocker || doctor)) {
                    this.mode = 13;
                }
                else if (antigas && doctor && !(antacid || h2_blocker || ppi)) {
                    this.mode = 14;
                }
                else if (h2_blocker && ppi && !(antacid || antigas || doctor)) {
                    this.mode = 15;
                }
                else if (h2_blocker && doctor && !(antacid || antigas || ppi)) {
                    this.mode = 16;
                }
                else if (ppi && doctor && !(antacid || antigas || h2_blocker)) {
                    this.mode = 17;
                }
                else if (antacid && antigas && h2_blocker && !(ppi || doctor)) {
                    this.mode = 18;
                }
                else if (antacid && antigas && ppi && !(h2_blocker || doctor)) {
                    this.mode = 19;
                }
                else if (antacid && antigas && doctor && !(h2_blocker || ppi)) {
                    this.mode = 20;
                }
                else if (antacid && h2_blocker && ppi && !(antigas || doctor)) {
                    this.mode = 21;
                }
                else if (antacid && h2_blocker && doctor && !(antigas || ppi)) {
                    this.mode = 22;
                }
                else if (antacid && ppi && doctor && !(antigas || h2_blocker)) {
                    this.mode = 23;
                }
                else if (antigas && h2_blocker && ppi && !(antacid || doctor)) {
                    this.mode = 24;
                }
                else if (antigas && h2_blocker && doctor && !(antacid || ppi)) {
                    this.mode = 25;
                }
                else if (antigas && ppi && doctor && !(antacid || h2_blocker)) {
                    this.mode = 26;
                }
                else if (h2_blocker && ppi && doctor && !(antacid || antigas)) {
                    this.mode = 27;
                }
                else if (antacid && antigas && h2_blocker && ppi && !(doctor)) {
                    this.mode = 28;
                }
                else if (antacid && antigas && h2_blocker && doctor && !(ppi)) {
                    this.mode = 29;
                }
                else if (antacid && antigas && ppi && doctor && !(h2_blocker)) {
                    this.mode = 30;
                }
                else if (antacid && h2_blocker && ppi && doctor && !(antigas)) {
                    this.mode = 31;
                }
                else if (antigas && h2_blocker && ppi && doctor && !(antacid)) {
                    this.mode = 32;
                }
                else if (antacid && antigas && h2_blocker && ppi && doctor) {
                    this.mode = 33;
                }
                else {
                    this.mode = 50;
                    ind = 0;
                }
            }
            if (this.html_data != null) {
                var length = this.html_data[this.pageId].tabs[0].collapsable.length;
                for (var i = 0; i < length; i++) {
                    var m = this.html_data[this.pageId].tabs[0].collapsable[i].mode;
                    var ma = this.html_data[this.pageId].tabs[0].collapsable[i].mode_above;
                    this.html_data[this.pageId].tabs[0].collapsable[i].show = true;
                    if (m != undefined) {
                        var m_arr = m.split(",");
                        var found = false;
                        for (var j = 0; j < m_arr.length; j++) {
                            if (m_arr[j] == this.mode) {
                                found = true;
                                break;
                            }
                        }
                        if (found)
                            this.html_data[this.pageId].tabs[0].collapsable[i].show = true;
                        else
                            this.html_data[this.pageId].tabs[0].collapsable[i].show = false;
                    }
                    if (ma != undefined) {
                        if (this.mode > parseInt(ma))
                            this.html_data[this.pageId].tabs[0].collapsable[i].show = true;
                        else
                            this.html_data[this.pageId].tabs[0].collapsable[i].show = false;
                    }
                }
            }
            this.page = ind;
        }
        else if (ind >= 101 && ind < 200) {
            this.page = 1;
            this.mode = ind - 100;
            if (this.html_data != null) {
                this.checkCollapsableShow();
            }
        }
        else if (ind >= 501 && ind < 600) {
            this.page = 1;
            this.mode = ind - 500;
            this.checkCollapsableShow();
        }
    };
    AdultPharmacistChildsPage.prototype.getHtmlData = function () {
        var _this = this;
        var num = Math.floor(this.pageId / 4);
        this.html_data = null;
        this.http.get("assets/json/adult_pharmacist_childs_" + num + ".json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
            if (data[_this.pageId].tabs[0]['startpage'] != undefined) {
                _this.page = data[_this.pageId].tabs[0]['startpage'];
                _this.mode = _this.page;
                _this.checkCollapsableShow();
            }
            // console.log(this.html_data[this.pageId]);
        });
    };
    AdultPharmacistChildsPage.prototype.checkCollapsableShow = function () {
        var length = this.html_data[this.pageId].tabs[0].collapsable.length;
        for (var i = 0; i < length; i++) {
            var m = this.html_data[this.pageId].tabs[0].collapsable[i].mode;
            if (m != undefined) {
                var m_arr = m.split(",");
                var found = false;
                for (var j = 0; j < m_arr.length; j++) {
                    if (m_arr[j] == this.mode) {
                        found = true;
                        break;
                    }
                }
                if (found)
                    this.html_data[this.pageId].tabs[0].collapsable[i].show = true;
                else
                    this.html_data[this.pageId].tabs[0].collapsable[i].show = false;
            }
        }
    };
    return AdultPharmacistChildsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]) === "function" && _a || Object)
], AdultPharmacistChildsPage.prototype, "content", void 0);
AdultPharmacistChildsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-adult-pharmacist-childs',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/adult-pharmacist-childs/adult-pharmacist-childs.html"*/'<ion-header class="ui-header {{setting.class}}">\n	<ion-navbar>\n    	<ion-title>\n	    	<h1 class="ui-title" *ngIf="html_data!=null">\n	      		{{html_data[pageId]?.title}}\n	      	</h1>\n    	</ion-title>\n    	<ion-buttons end>\n      		<button ion-button icon-only (click)="showMenu()">\n        		<ion-icon name="menu"></ion-icon>\n      		</button>\n    	</ion-buttons>\n	</ion-navbar>\n</ion-header>\n<ion-content overflow-scroll="true" class="{{setting.class}} content{{pageId}} ui-page-theme-{{pagemode[pageId]}}">\n	<div class="fullWidth" style="padding:0px;">\n		<div class="fullWidth">\n		    <div class="tabs" *ngIf="html_data!=null">\n		    	<ng-container *ngFor="let each of html_data[pageId]?.tabs_title;let i=index">\n		    		<a href="#" class="ui-link" (click)="showTab(i+1)" [ngClass]="{\'active\': tabId==(i+1)}">{{each}}</a>\n		    	</ng-container>\n		        <div class="clearboth"></div>\n		        <div class="swiper-scrollbar shadowBottom">\n		            <div class="swiper-scrollbar-drag swiper-scrollbar-cursor-drag" [ngStyle]="{\'transform\': tabCss+\'\'}"></div>\n		        </div>\n		        <div class="clearboth"></div>\n		    </div>\n		</div>\n		<div class="swipe-container" *ngIf="html_data!=null">\n			<div class="swiper-wrapper opacity5" [ngStyle]="{\'transform\': tabConCss+\'\'}" *ngIf="html_data[pageId]?.tabs?.length>0">\n				<div class="swiper-slide">\n					<div class="content-slide ui-content">\n					    <div [innerHTML]="html_data[pageId]?.tabs[0][\'top_header\']" *ngIf="html_data!=null"></div>\n					    <div [innerHTML]="html_data[pageId]?.tabs[0][\'header_iregular\']" *ngIf="html_data[pageId]?.tabs[0][\'header_iregular\']!==undefined && page==-1"></div>\n					    <div id="adult_recom_allergy_mobile_q1" *ngIf="page==0">\n					        <div [innerHTML]="html_data[pageId]?.tabs[0][\'header\']"></div>\n					        <div data-role="fieldcontain" class="ui-field-contain">\n					            <fieldset data-role="controlgroup" id="adult_recom_allergy_mobile_q1_form_div" class="ui-controlgroup ui-controlgroup-vertical ui-corner-all">\n					                <div class="ui-controlgroup-controls ">\n					                	<ng-container *ngFor="let each of html_data[pageId]?.tabs[0].fieldset;let i=index">\n					                		<div class="ui-checkbox">\n					                			<label for="adult_recom_allergy_mobile_q1_{{i}}" class="ui-btn ui-corner-all ui-btn-inherit ui-btn-icon-left ui-first-child" [ngClass]="{\'ui-checkbox-on\': recs[i], \'ui-checkbox-off\': !recs[i]}" (click)="toggleRecs(i)">\n					                				<div [innerHTML]="each"></div>\n					                			</label>\n					                			<input type="checkbox" name="adult_recom_allergy_mobile_q1" id="adult_recom_allergy_mobile_q1_{{i}}" class="adult_recom_allergy_mobileQ1" value="" data-cacheval="true" [(ngModel)]="recs[i]"></div>\n					                	</ng-container>\n					                    <hr class="hrgreen">\n					                </div>\n					            </fieldset>\n					            <div class="clearboth divider1"></div>\n					            <div class="centerText" *ngIf="html_data[pageId]?.tabs[0].fieldset?.length > 0">\n					            	<div class="ui-btn ui-input-btn ui-btn-l ui-corner-all ui-shadow ui-btn-inline">Here you go<input type="button" data-inline="true" data-theme="l" id="get_adult_recom_allergy_mobile_q1" value="Here you go" (click)="togglePage(1)"></div> \n					            </div>\n					        </div>\n					        <ul class="ui-nodisc-icon ui-listview ui-listview-inset ui-corner-all ui-shadow">\n					        	<ng-container *ngFor="let each of html_data[pageId]?.tabs[0].ullist">\n					        		<li class="ui-li-has-thumb">\n	                                	<a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" (click)="togglePage(each.goto)">\n	                                		<div [innerHTML]="each.text"></div>\n	                                	</a>\n	                                </li>\n					       		</ng-container>\n					       	</ul>\n					    </div>\n					    <div [innerHTML]="html_data[pageId]?.tabs[0][\'mode\'][mode]" *ngIf="mode>0"></div>\n					    <ng-container *ngFor="let each of html_data[pageId]?.tabs[0].collapsable;let i=index">\n					    	<div data-role="collapsible" data-collapsed="false" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-corners="false" class="ui-nodisc-icon ui-collapsible ui-collapsible-inset ui-collapsible-themed-content ui-collapsible-collapsed" *ngIf="each.show && (page==1 || page == -1)">\n					            <h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-left ui-btn-inherit" (click)="expandPage(i)" [ngClass]="{\'ui-icon-arrow-r\': expands[i], \'ui-icon-arrow-d\': !expands[i]}"><div [innerHTML]="each[\'title\']"></div></a></h3>\n					            <div class="ui-collapsible-content ui-body-inherit" [ngClass]="{\'ui-collapsible-content-collapsed\': expands[i]}" aria-hidden="true" [innerHTML]="each[\'content\']">\n					            </div>\n							</div>\n					    </ng-container>\n					    <ng-container *ngFor="let each of html_data[pageId]?.tabs[0].mode_not">\n							<div data-inline="true" *ngIf="page==1 && mode!=each.mode_no">\n								<div [innerHTML]="each[\'content1\']"></div>\n								<p class="centerText">\n									<a href="#" data-inline="true" class="{{each.buttons[0].class}} ui-link" (click)="gotoSubPage(each.buttons[0].goto)">\n										<span [innerHTML]="each.buttons[0][\'title\']"></span>\n									</a>\n								</p>\n								<div [innerHTML]="each[\'content2\']"></div>\n								<p class="centerText">\n									<ng-container *ngFor="let each_but of each.buttons;let i=index">\n										<a href="#" data-inline="true" class="{{each_but.class}} ui-link" (click)="gotoSubPage(each_but.goto)" *ngIf="i!=0">\n											<span [innerHTML]="each_but[\'title\']"></span>\n										</a>\n									</ng-container>\n								</p>\n							</div>\n					   	</ng-container>\n					   	<p class="centerText" *ngIf="html_data[pageId]?.tabs[0].firstpage_buttons!==undefined && page<1">\n					   		<ng-container *ngFor="let each of html_data[pageId]?.tabs[0].firstpage_buttons">\n					   			<button data-inline="true" data-role="none" class="{{each.type}} robotoLight" (click)="togglePage(each.goto)">{{each.title}}</button>\n					   		</ng-container>\n					   	</p>\n					   	<div *ngIf="page==-1 && html_data[pageId]?.tabs[0].irregular!==undefined">\n					   		<div [innerHTML]="html_data[pageId]?.tabs[0].irregular.content"></div>\n					   		<button data-inline="true" class="ui-btn ui-btn-inline ui-shadow ui-corner-all" (click)="togglePage(html_data[pageId]?.tabs[0].irregular.button.goto)" *ngIf="html_data[pageId]?.tabs[0].irregular.button!==undefined">{{html_data[pageId]?.tabs[0].irregular.button.title}}</button>\n					   		<p class="centerText" *ngIf="html_data[pageId]?.tabs[0].irregular.buttongo!==undefined">\n					   			<ng-container *ngFor="let each of html_data[pageId]?.tabs[0].irregular.buttongo">\n					   				<a href="#" data-inline="true" class="{{each.class}}" (click)="gotoSubPage(each.goto)" >{{each.title}}</a>\n					   			</ng-container>\n					   		</p>\n					   	</div>\n					</div>\n				</div>\n				<div class="swiper-slide">\n				    <div class="content-slide ui-content">\n				    	<div [innerHTML]="html_data[pageId]?.tabs[1][\'header\']" *ngIf="html_data!=null"></div>\n				    	<ng-container *ngFor="let each of html_data[pageId]?.tabs[1].collapsable;let i=index">\n					    	<div data-role="collapsible" data-collapsed="false" data-corners="false" class="ui-nodisc-icon ui-collapsible ui-collapsible-inset ui-collapsible-themed-content ui-collapsible-collapsed">\n					            <h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-left ui-btn-inherit" (click)="expandPage(i+html_data[pageId]?.tabs[1].colstart)" [ngClass]="{\'ui-icon-plus\': expands[i+html_data[pageId]?.tabs[1].colstart], \'ui-icon-minus\': !expands[i+html_data[pageId]?.tabs[1].colstart]}"><div [innerHTML]="each[\'title\']"></div></a></h3>\n					            <div class="ui-collapsible-content ui-body-inherit" [ngClass]="{\'ui-collapsible-content-collapsed\': expands[i+html_data[pageId]?.tabs[1].colstart]}" aria-hidden="true" [innerHTML]="each[\'content\']">\n					            </div>\n							</div>\n					    </ng-container>\n				    </div>\n				</div>\n				<div class="swiper-slide">\n				    <div class="content-slide ui-content">\n				        <div [innerHTML]="html_data[pageId]?.tabs[2][\'header\']" *ngIf="html_data!=null"></div>\n				        <ng-container *ngFor="let each of html_data[pageId]?.tabs[2].collapsable;let i=index">\n					    	<div data-role="collapsible" data-collapsed="false" data-corners="false" class="ui-nodisc-icon ui-collapsible ui-collapsible-inset ui-collapsible-themed-content ui-collapsible-collapsed" *ngIf="i!=0"> \n					            <h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-left ui-btn-inherit" (click)="expandPage(i+html_data[pageId]?.tabs[2].colstart)" [ngClass]="{\'ui-icon-plus\': expands[i+html_data[pageId]?.tabs[2].colstart], \'ui-icon-minus\': !expands[i+html_data[pageId]?.tabs[2].colstart]}">\n					            	<div [innerHTML]="each[\'title\']"></div>\n					            </a></h3>\n					            <div class="ui-collapsible-content ui-body-inherit" [ngClass]="{\'ui-collapsible-content-collapsed\': expands[i+html_data[pageId]?.tabs[2].colstart]}" aria-hidden="true">\n					            	<div [innerHTML]="each[\'content\']"></div>\n					            	<div class="centerText" *ngIf="each[\'buttons\']">\n					            		<ng-container *ngFor="let each_but of each[\'buttons\']">\n							        		<a data-role="button" data-inline="true" class="ui-link ui-btn ui-btn-{{each_but.type}} ui-btn-inline ui-shadow ui-corner-all" role="button" (click)="gotoSubPage(each_but.goto)">{{each_but.title}}</a> 	\n							        	</ng-container>\n					            	</div>\n					            </div>\n							</div>\n					    </ng-container>\n				    </div>\n				</div>\n				<div class="swiper-slide">\n				    <div class="content-slide ui-content">\n				        <div [innerHTML]="html_data[pageId]?.tabs[3][\'header\']" *ngIf="html_data!=null"></div>\n				        <p class="centerText">\n				        	<ng-container *ngFor="let each of html_data[pageId]?.tabs[3][\'buttons\']">\n				        		<a class="{{each.class}} ui-link" href="#" (click)="gotoSubPage(each.goto)">{{each.title}}</a> 	\n				        	</ng-container>\n				        </p>\n				        <div class="comment_why_div" *ngIf="why" [innerHTML]="html_data[pageId]?.tabs[3][\'why\']"></div>\n				    </div>\n				</div>\n				<p>&nbsp;</p><p>&nbsp;</p>\n			</div>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/adult-pharmacist-childs/adult-pharmacist-childs.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _g || Object])
], AdultPharmacistChildsPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=adult-pharmacist-childs.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareChildsContainerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__compare_childs_compare_childs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__compare_yesno_compare_yesno__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var mode = {
    0: 'a',
    2: 'a',
    3: 'n',
    4: 'n',
    5: 'o',
};
var CompareChildsContainerPage = (function () {
    function CompareChildsContainerPage(navCtrl, navParams, menu, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.sanitizer = sanitizer;
        this.menu = menu;
        this.pageId = __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */].getPageId();
        this.setting = __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */].getPageSetting(mode[this.pageId]);
    }
    CompareChildsContainerPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/compare_child_container.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    CompareChildsContainerPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        menu.className = "outer-content content" + " " + this.setting['class'];
        this.menu.open();
    };
    CompareChildsContainerPage.prototype.showPage = function (id) {
        if (id != 6 && id != 7) {
            __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */].setPageId(id + 14);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__compare_childs_compare_childs__["a" /* CompareChildsPage */]);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */].setPageId(id - 5);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__compare_yesno_compare_yesno__["a" /* CompareYesnoPage */]);
        }
    };
    CompareChildsContainerPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return CompareChildsContainerPage;
}());
CompareChildsContainerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-compare-childs-container',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/compare-childs-container/compare-childs-container.html"*/'<ion-header class="ui-header {{setting.class}}">\n	<ion-navbar>\n	    <ion-title>\n	    	<h1 class="ui-title hide">\n	      		Compare\n	      	</h1>\n	    </ion-title>\n	    <ion-buttons end>\n	      	<button ion-button icon-only (tap)="showMenu()">\n	        	<ion-icon name="menu"></ion-icon>\n	      	</button>\n	    </ion-buttons>\n	</ion-navbar>\n  	<ion-navbar class="fullWidth {{setting.p}} robotoLight shadowBottom">\n    	<p>{{html_data?.pageTitle[pageId]}}</p>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  padding class="{{setting.class}} content{{pageId}}">\n	<div class="ui-content">\n		<p>&nbsp;</p>\n		<div class="maxwidth450">\n		    <div class="{{setting.oval}}">\n		    	<span [innerHTML]="html_data?.span[pageId]"></span>\n		        <br>\n		    </div>\n		    <div align="right">\n		    	<img src="assets/img/{{html_data?.imageUrls[pageId]}}" width="100" alt="Pharmacist"> \n		    </div>\n		</div>\n		<div class="clearboth divider1"></div>\n		<br>\n		<p>&nbsp;</p>\n		<div align="center">\n			<ng-container *ngFor="let eachData of html_data?.links[pageId]">\n                <a href="#" class="{{eachData.class}} ui-link" data-inline="true" (tap)="showPage(eachData.transit)">{{eachData.name}}</a>\n		    	<p>&nbsp;</p>\n            </ng-container>\n		</div>\n		<p>&nbsp;</p>\n		<p>&nbsp;</p>\n		<p>&nbsp;</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/compare-childs-container/compare-childs-container.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], CompareChildsContainerPage);

//# sourceMappingURL=compare-childs-container.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveDoseInsertSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dosing_dosing__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__save_dose_list_save_dose_list__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SaveDoseInsertSuccessPage = (function () {
    function SaveDoseInsertSuccessPage(navCtrl, navParams, menu, authService, alertCtrl, loadingCtrl, toastCtrl, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.sanitizer = sanitizer;
        this.loginCredentials = { 'email': '', 'password': '' };
        this.menu = menu;
        this.AbsoluteURL = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getAbsoluteURL();
    }
    SaveDoseInsertSuccessPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/save_dose_insert_success.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    SaveDoseInsertSuccessPage.prototype.showMenu = function () {
        this.menu.open();
    };
    SaveDoseInsertSuccessPage.prototype.gotoDose = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__dosing_dosing__["a" /* DosingPage */]);
    };
    SaveDoseInsertSuccessPage.prototype.gotoSavedDose = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__save_dose_list_save_dose_list__["a" /* SaveDoseListPage */]);
    };
    SaveDoseInsertSuccessPage.prototype.gotoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    SaveDoseInsertSuccessPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return SaveDoseInsertSuccessPage;
}());
SaveDoseInsertSuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-save-dose-insert-success',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/save-dose-insert-success/save-dose-insert-success.html"*/'<ion-header class="ui-header">\n\n  <ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title">\n      	&nbsp;\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n  <ion-navbar class="fullWidth roboto bgCyan">\n    <p>Dose saved</p>\n  </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  padding class="ui-page-theme-n ui-mobile">\n	<div class="ui-content">\n	   <div [innerHTML]="html_data?.header"></div>\n	   <p class="centerText">\n	      <a href="#" data-inline="true" class="linkPink ui-link" (tap)="gotoDose()">New Dose</a>\n	      <a href="#" data-inline="true" class="linkCyanBorder ui-link" (tap)="gotoSavedDose()">See It</a>\n	      <a href="#" data-inline="true" class="linkBlueThin ui-link" (tap)="gotoHome()">Home</a>\n	   </p>\n	   <p>&nbsp;</p>\n	   <p>&nbsp;</p>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/save-dose-insert-success/save-dose-insert-success.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], SaveDoseInsertSuccessPage);

//# sourceMappingURL=save-dose-insert-success.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveDoseRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__save_dose_login_save_dose_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SaveDoseRegisterPage = (function () {
    function SaveDoseRegisterPage(navCtrl, menu, authService, alertCtrl, loadingCtrl, toastCtrl, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.sanitizer = sanitizer;
        this.registerCredentials = { 'name': '', 'email': '', 'password': '', 'confirm': '', 'city': '', 'gender': '', 'newsletter': '' };
        this.menu = menu;
        this.AbsoluteURL = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getAbsoluteURL();
    }
    SaveDoseRegisterPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/save_dose_register.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    SaveDoseRegisterPage.prototype.showMenu = function () {
        this.menu.open();
    };
    SaveDoseRegisterPage.prototype.registerPage = function () {
        this.authService.setMainPage(this);
        this.authService.setLoginPage(__WEBPACK_IMPORTED_MODULE_7__save_dose_login_save_dose_login__["a" /* SaveDoseLoginPage */]);
        this.authService.register(this.registerCredentials);
    };
    SaveDoseRegisterPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return SaveDoseRegisterPage;
}());
SaveDoseRegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-save-dose-register',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/save-dose-register/save-dose-register.html"*/'<ion-header class="ui-header">\n\n  <ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title">\n      	&nbsp;\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n  <ion-navbar class="fullWidth roboto bgCyan">\n    <p>Save Dose</p>\n  </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  padding class="ui-page-theme-n ui-mobile">\n	<div class="ui-content">\n	    <p>&nbsp;</p>\n	    <p>\n	    </p>\n	    <div class="maxwidth650" style="padding:16px;">\n	        <div [innerHTML]="html_data?.header"></div>\n	        <form (ngSubmit)="registerPage()" #registerForm="ngForm">\n	        	<ion-row>\n			        <ion-col>\n			          <ion-list inset>\n			            <ion-item>\n			              <ion-input type="text" placeholder="Your Name" name="name" [(ngModel)]="registerCredentials.name" required></ion-input>\n			            </ion-item>\n			            <ion-item>\n			              <ion-input type="text" placeholder="Email Address" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n			            </ion-item>\n			            <ion-item>\n			              <ion-input type="password" placeholder="Create A Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n			            </ion-item>\n			            <ion-item>\n			              <ion-input type="password" placeholder="Confirm Password Entered" name="password_confirm" [(ngModel)]="registerCredentials.confirm" required></ion-input>\n			            </ion-item>\n			            <ion-item>\n			              <ion-input type="text" placeholder="City / State" name="city" [(ngModel)]="registerCredentials.city" required></ion-input>\n			            </ion-item>\n			            <ion-item>\n			              <ion-input type="text" placeholder="Male / Female" name="gender" [(ngModel)]="registerCredentials.gender" required></ion-input>\n			            </ion-item>\n			            <ion-item>\n			              <ion-input type="text" placeholder="Newsletter" name="newsletter" [(ngModel)]="registerCredentials.newsletter" required></ion-input>\n			            </ion-item>\n			          </ion-list>\n			        </ion-col>\n				</ion-row>\n	            <p class="centerText">  \n	                <input name="send_dosing_reg_form" type="submit" id="send_dosing_reg_form" class="buttonBlue robotoLight" data-inline="true" data-enhanced="false" data-role="none" value="Here You Go" [disabled]="!registerForm.form.valid">\n	            </p>\n	        </form>\n	        <p>&nbsp;</p>\n	    </div>\n	    <p>&nbsp;</p>\n	    <p>&nbsp;</p>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/save-dose-register/save-dose-register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], SaveDoseRegisterPage);

//# sourceMappingURL=save-dose-register.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(263);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalvars__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var User = (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    User.prototype.getEmail = function () {
        return this.email;
    };
    return User;
}());

var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        // console.log('Hello UsuarioService Provider');
        this.mainPage = null;
        this.currentUser = null;
        this.transitionPage = null;
        this.loginPage = null;
        this.loading = null;
    }
    AuthService.prototype.removeSpecialChars = function (data) {
        var obj = {};
        for (var prop in data) {
            if (!data.hasOwnProperty(prop))
                continue;
            obj[prop] = encodeURIComponent(data[prop]);
        }
        return obj;
    };
    AuthService.prototype.loginCheck = function (credentials) {
        if (credentials.email === null || credentials.password === null)
            return false;
        else
            return true;
    };
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        if (this.loginCheck(credentials)) {
            var cre = this.removeSpecialChars(credentials);
            var loginApiUrl = __WEBPACK_IMPORTED_MODULE_3__globalvars__["a" /* GlobalVars */].getApiURL() + "email=" + cre['email'] + "&password=" + cre['password'] + "&ppp=login";
            this.showLoading();
            this.http.get(loginApiUrl).map(function (response) { return response.json(); }).subscribe(function (data) {
                setTimeout(function () {
                    _this.loading.dismiss().catch(function () { });
                    if (data.res == 'success') {
                        _this.currentUser = data.user;
                        _this.movePage();
                    }
                    else {
                        _this.showToast(data.msg);
                    }
                });
            }),
                function (err) {
                    setTimeout(function () {
                        _this.loading.dismiss().catch(function () { });
                        _this.showToast("Access denied");
                        // this.showToast("Your email or password doesn't match");
                    });
                };
        }
        else {
            // console.log("You didn't input the required data");
            this.showToast("Please input the email and password");
        }
    };
    AuthService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    AuthService.prototype.registerCheck = function (credentials) {
        if (credentials.email === null || credentials.password === null || credentials.confirm === null
            || credentials.gender === null || credentials.name === null) {
            this.showToast("Please fill the required fields");
            return false;
        }
        else if (!this.validateEmail(credentials.email)) {
            this.showToast("Please input valid email");
            return false;
        }
        else if (credentials.password != credentials.confirm) {
            this.showToast("The confirm password doesn't match with the password");
            return false;
        }
        else
            return true;
    };
    AuthService.prototype.register = function (credentials) {
        var _this = this;
        if (this.registerCheck(credentials)) {
            var cre = this.removeSpecialChars(credentials);
            var registerApiUrl = __WEBPACK_IMPORTED_MODULE_3__globalvars__["a" /* GlobalVars */].getApiURL() + "email=" + cre['email'] + "&password=" + cre['password']
                + "&name=" + cre['name'] + "&gender=" + cre['gender'] + "&city=" + cre['city'] + "&newsletter=" + cre['newsletter'] + "&ppp=register";
            this.showLoading();
            this.http.get(registerApiUrl).map(function (response) { return response.json(); }).subscribe(function (data) {
                setTimeout(function () {
                    _this.loading.dismiss().catch(function () { });
                    if (data.res == 'success') {
                        // this.currentUser = data.user;
                        _this.moveLoginPage();
                    }
                    else {
                        _this.showToast(data.msg);
                    }
                });
            }),
                function (err) {
                    setTimeout(function () {
                        _this.loading.dismiss().catch(function () { });
                        _this.showToast("Access denied");
                    });
                };
        }
    };
    AuthService.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthService.prototype.logout = function () {
        this.currentUser = null;
        this.moveLoginPage();
    };
    AuthService.prototype.setMainPage = function (main) {
        this.mainPage = main;
    };
    AuthService.prototype.setLoginPage = function (login) {
        this.loginPage = login;
    };
    AuthService.prototype.setTransitionPage = function (tran) {
        this.transitionPage = tran;
    };
    AuthService.prototype.showLoading = function () {
        this.loading = this.mainPage.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    AuthService.prototype.showToast = function (message) {
        if (this.loading != null) {
            this.loading.dismiss().catch(function () { });
        }
        var toast = this.mainPage.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    AuthService.prototype.movePage = function () {
        this.mainPage.navCtrl.push(this.transitionPage);
    };
    AuthService.prototype.moveLoginPage = function () {
        this.mainPage.navCtrl.push(this.loginPage);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_adult_take_mobile_list_adult_take_mobile_list__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dosing_dosing__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_self_care_self_care__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_compare_compare__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_nearest_nearest__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_drug_drug__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_find_nearest_find_nearest__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_find_nearest_list_find_nearest_list__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_place_details_place_details__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_orderby_orderby__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_place_navigation_place_navigation__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_place_navigation_google_map_directive__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_compare_childs_compare_childs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_compare_childs_container_compare_childs_container__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_compare_yesno_compare_yesno__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_save_dose_insert_save_dose_insert__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_save_dose_login_save_dose_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_save_dose_insert_success_save_dose_insert_success__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_save_dose_list_save_dose_list__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_save_dose_logout_confirm_save_dose_logout_confirm__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_save_dose_login_direct_save_dose_login_direct__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_save_dose_register_save_dose_register__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_diphenhydramine_diphenhydramine__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_dosing_child_container_dosing_child_container__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_dosing_childs_dosing_childs__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_adult_take_mobile_childlist_adult_take_mobile_childlist__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_adult_symptom_childs_adult_symptom_childs__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_adult_symptom_infographics_adult_symptom_infographics__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_adult_pharmacist_childs_adult_pharmacist_childs__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_providers_auth_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_adult_take_mobile_list_adult_take_mobile_list__["a" /* AdultTakeMobileListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_dosing_dosing__["a" /* DosingPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_self_care_self_care__["a" /* SelfCarePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_compare_compare__["a" /* ComparePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_nearest_nearest__["a" /* NearestPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_drug_drug__["a" /* DrugPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_find_nearest_find_nearest__["a" /* FindNearestPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_find_nearest_list_find_nearest_list__["a" /* FindNearestListPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_place_details_place_details__["a" /* PlaceDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_orderby_orderby__["a" /* OrderByPipe */],
            __WEBPACK_IMPORTED_MODULE_21__pages_place_navigation_place_navigation__["a" /* PlaceNavigationPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_place_navigation_google_map_directive__["a" /* DirectionsMapDirective */],
            __WEBPACK_IMPORTED_MODULE_23__pages_compare_childs_compare_childs__["a" /* CompareChildsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_compare_childs_container_compare_childs_container__["a" /* CompareChildsContainerPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_compare_yesno_compare_yesno__["a" /* CompareYesnoPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_save_dose_insert_save_dose_insert__["a" /* SaveDoseInsertPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_save_dose_login_save_dose_login__["a" /* SaveDoseLoginPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_save_dose_insert_success_save_dose_insert_success__["a" /* SaveDoseInsertSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_save_dose_list_save_dose_list__["a" /* SaveDoseListPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_save_dose_logout_confirm_save_dose_logout_confirm__["a" /* SaveDoseLogoutConfirmPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_save_dose_login_direct_save_dose_login_direct__["a" /* SaveDoseLoginDirectPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_save_dose_register_save_dose_register__["a" /* SaveDoseRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_diphenhydramine_diphenhydramine__["a" /* DiphenhydraminePage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_dosing_child_container_dosing_child_container__["a" /* DosingChildContainerPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_dosing_childs_dosing_childs__["a" /* DosingChildsPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_adult_take_mobile_childlist_adult_take_mobile_childlist__["a" /* AdultTakeMobileChildlistPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_adult_symptom_childs_adult_symptom_childs__["a" /* AdultSymptomChildsPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_adult_pharmacist_childs_adult_pharmacist_childs__["a" /* AdultPharmacistChildsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: "AIzaSyAB-IzrU8UFGLp9h772cgt3-5DscZYMnYE",
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_adult_take_mobile_list_adult_take_mobile_list__["a" /* AdultTakeMobileListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_dosing_dosing__["a" /* DosingPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_self_care_self_care__["a" /* SelfCarePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_compare_compare__["a" /* ComparePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_nearest_nearest__["a" /* NearestPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_drug_drug__["a" /* DrugPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_find_nearest_find_nearest__["a" /* FindNearestPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_find_nearest_list_find_nearest_list__["a" /* FindNearestListPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_place_details_place_details__["a" /* PlaceDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_place_navigation_place_navigation__["a" /* PlaceNavigationPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_compare_childs_compare_childs__["a" /* CompareChildsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_compare_childs_container_compare_childs_container__["a" /* CompareChildsContainerPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_compare_yesno_compare_yesno__["a" /* CompareYesnoPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_save_dose_insert_save_dose_insert__["a" /* SaveDoseInsertPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_save_dose_login_save_dose_login__["a" /* SaveDoseLoginPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_save_dose_insert_success_save_dose_insert_success__["a" /* SaveDoseInsertSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_save_dose_list_save_dose_list__["a" /* SaveDoseListPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_save_dose_logout_confirm_save_dose_logout_confirm__["a" /* SaveDoseLogoutConfirmPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_save_dose_login_direct_save_dose_login_direct__["a" /* SaveDoseLoginDirectPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_save_dose_register_save_dose_register__["a" /* SaveDoseRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_diphenhydramine_diphenhydramine__["a" /* DiphenhydraminePage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_dosing_child_container_dosing_child_container__["a" /* DosingChildContainerPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_dosing_childs_dosing_childs__["a" /* DosingChildsPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_adult_take_mobile_childlist_adult_take_mobile_childlist__["a" /* AdultTakeMobileChildlistPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_adult_symptom_childs_adult_symptom_childs__["a" /* AdultSymptomChildsPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_adult_symptom_infographics_adult_symptom_infographics__["a" /* AdultSymptomInfographicsPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_adult_pharmacist_childs_adult_pharmacist_childs__["a" /* AdultPharmacistChildsPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_40__pages_providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_adult_take_mobile_list_adult_take_mobile_list__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dosing_dosing__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_compare_compare__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_nearest_nearest__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_drug_drug__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_providers_globalvars__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menu) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menu = menu;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.appPages = [
            { title: 'Home', description: 'Main app menu.', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Adult Symptoms', description: 'Pharmacist over the counter (OTC) recommendation.', component: __WEBPACK_IMPORTED_MODULE_6__pages_adult_take_mobile_list_adult_take_mobile_list__["a" /* AdultTakeMobileListPage */], index: 1, icon: 'man' },
            { title: 'Child Symptoms', description: 'Pharmacist recommendation for common child symptoms.', component: __WEBPACK_IMPORTED_MODULE_6__pages_adult_take_mobile_list_adult_take_mobile_list__["a" /* AdultTakeMobileListPage */], index: 2, icon: 'female' },
            { title: 'Product Comparison', description: 'Compare over-the-counter products.', component: __WEBPACK_IMPORTED_MODULE_8__pages_compare_compare__["a" /* ComparePage */], index: 3, icon: 'git-compare' },
            { title: 'Medication Dosing', description: 'Kids over-the-counter medication dosing.', component: __WEBPACK_IMPORTED_MODULE_7__pages_dosing_dosing__["a" /* DosingPage */], index: 4, icon: 'eye-off' },
            { title: 'Drug Savings', description: 'Drug manufactures Rx savings program', component: __WEBPACK_IMPORTED_MODULE_10__pages_drug_drug__["a" /* DrugPage */], index: 5, icon: 'attach' },
            { title: 'Nearest Health Care', description: 'Hospital, Urgentcare, Dentists, Pharmacy Doctors Office', component: __WEBPACK_IMPORTED_MODULE_9__pages_nearest_nearest__["a" /* NearestPage */], index: 6, icon: 'pin' },
            { title: 'About This App', description: 'What, where, when and how to use this.', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */], index: 7, icon: 'information-circle' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            if (platform.is('mobileweb')) {
                // console.log("running on a web device");
                __WEBPACK_IMPORTED_MODULE_11__pages_providers_globalvars__["a" /* GlobalVars */].setDeviceNumber(1);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_11__pages_providers_globalvars__["a" /* GlobalVars */].setDeviceNumber(0);
            }
        });
    }
    MyApp.prototype.openPage = function (page) {
        if (page.index) {
            if (page.index <= 2)
                __WEBPACK_IMPORTED_MODULE_11__pages_providers_globalvars__["a" /* GlobalVars */].setPageId(page.index - 1);
            this.nav.push(page.component);
        }
        else {
            this.nav.setRoot(page.component).catch(function () {
                // console.log("Didn't set nav root");
            });
        }
    };
    MyApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        if (childNav) {
            if (childNav.getSelected()) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().component === page.component) {
            return 'primary';
        }
        return;
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/app/app.html"*/'<ion-nav [root]="rootPage" #content></ion-nav>\n\n<ion-menu [content]="content" class="{{className}}">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>&nbsp;</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class="outer-content" overflow-scroll=\'true\'>\n    <ion-list class="menu-lists">\n      <button ion-item menuClose>\n        <h3>Close Menu</h3>\n      </button>\n      <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n        <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n        <h3>{{p.title}}</h3><p>{{p.description}}</p>\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, orderField, orderType) {
        array.sort(function (a, b) {
            var ae = a[orderField];
            var be = b[orderField];
            if (ae == undefined && be == undefined)
                return 0;
            if (ae == undefined && be != undefined)
                return orderType ? 1 : -1;
            if (ae != undefined && be == undefined)
                return orderType ? -1 : 1;
            if (ae == be)
                return 0;
            if (orderField == 'distance')
                return orderType ? (parseFloat(ae) > parseFloat(be) ? -1 : 1) : (parseFloat(be) > parseFloat(ae) ? -1 : 1);
            else {
                var ael = ae.toString().toLowerCase(), bel = be.toString().toLowerCase();
                return orderType ? (ael > bel ? -1 : 1) : (bel > ael ? -1 : 1);
            }
        });
        return array;
    };
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'orderby' })
], OrderByPipe);

//# sourceMappingURL=orderby.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveDoseLogoutConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaveDoseLogoutConfirmPage = (function () {
    function SaveDoseLogoutConfirmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SaveDoseLogoutConfirmPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad SaveDoseLogoutConfirmPage');
    };
    return SaveDoseLogoutConfirmPage;
}());
SaveDoseLogoutConfirmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-save-dose-logout-confirm',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/save-dose-logout-confirm/save-dose-logout-confirm.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>save-dose-logout-confirm</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content overflow-scroll="true"  padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/save-dose-logout-confirm/save-dose-logout-confirm.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SaveDoseLogoutConfirmPage);

//# sourceMappingURL=save-dose-logout-confirm.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveDoseLoginDirectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaveDoseLoginDirectPage = (function () {
    function SaveDoseLoginDirectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SaveDoseLoginDirectPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad SaveDoseLoginDirectPage');
    };
    return SaveDoseLoginDirectPage;
}());
SaveDoseLoginDirectPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-save-dose-login-direct',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/save-dose-login-direct/save-dose-login-direct.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>save-dose-login-direct</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content overflow-scroll="true"  padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/save-dose-login-direct/save-dose-login-direct.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SaveDoseLoginDirectPage);

//# sourceMappingURL=save-dose-login-direct.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__compare_childs_compare_childs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__compare_childs_container_compare_childs_container__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__compare_yesno_compare_yesno__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ComparePage = (function () {
    function ComparePage(navCtrl, navParams, menu, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.sanitizer = sanitizer;
        this.modes = {
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
        };
        this.items = {
            0: 'a',
            1: 0,
            2: 'a',
            3: 'n',
            4: 'n',
            5: 'o',
        };
        this.menu = menu;
    }
    ComparePage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/compare.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    ComparePage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting('n');
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    ComparePage.prototype.goToLeft = function (index) {
        this.goTo(index * 2 + 1);
    };
    ComparePage.prototype.goToRight = function (index) {
        this.goTo(index * 2 + 2);
    };
    ComparePage.prototype.goTo = function (index) {
        if (index > 0) {
            var mode = this.modes[index];
            if (mode >= 'a' && mode <= 'z') {
                __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].setPageId(index);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__compare_childs_compare_childs__["a" /* CompareChildsPage */]);
            }
            else {
                var item = this.items[mode];
                if (item >= 'a' && item <= 'z') {
                    __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].setPageId(parseInt(mode, 10));
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__compare_childs_container_compare_childs_container__["a" /* CompareChildsContainerPage */]);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].setPageId(0);
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__compare_yesno_compare_yesno__["a" /* CompareYesnoPage */]);
                }
            }
        }
    };
    ComparePage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return ComparePage;
}());
ComparePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-compare',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/compare/compare.html"*/'<ion-header class="ui-header">\n	<ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title hide">\n      		Compare over-the-counter OTC medicines side-by-side using a comparison table. | Self-care OTC\n      	</h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n  <ion-navbar class="bgCyan">\n  	<p class="boxSpinnerCyan"></p>\n    <p class="robotoLight">Compare</p>\n  </ion-navbar>\n</ion-header>\n<ion-content overflow-scroll="true"  class="ui-page-theme-n">\n	<div class="opacity1">\n		<div [innerHTML]="html_data?.header"></div>\n		<ng-container *ngFor="let each_data of html_data?.items; let i = index">\n			<ion-grid class="interface-items">\n				<ion-row>\n			      	<ion-col width-50>\n				        <ion-item class="centerText page-theme-childs" (tap)="goToLeft(i)">\n				        	<div [innerHTML]="each_data?.left"></div>\n				        </ion-item>\n			      	</ion-col>\n			      	<ion-col width-50>\n				        <ion-item class="centerText page-theme-childs" (tap)="goToRight(i)">\n				        	<div [innerHTML]="each_data?.right"></div>\n				        </ion-item>\n			      	</ion-col>\n			    </ion-row>\n			</ion-grid>\n			<hr class="hrblue">\n		</ng-container>\n		<ion-grid class="interface-items">\n		    <ion-row>\n		      	<ion-col width-50>\n		        	<ion-item class="centerText page-theme-childs" (tap)="goTo(\'13\')">\n		        		<div [innerHTML]="html_data?.item_last"></div>\n		        	</ion-item>\n		      	</ion-col>\n		      	<ion-col width-50>\n		  		</ion-col>\n		    </ion-row>\n		</ion-grid>\n		<div [innerHTML]="html_data?.footer"></div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/compare/compare.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], ComparePage);

//# sourceMappingURL=compare.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DosingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__save_dose_login_save_dose_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__save_dose_list_save_dose_list__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__diphenhydramine_diphenhydramine__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dosing_child_container_dosing_child_container__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dosing_childs_dosing_childs__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// LoratadinePage,       // 1
// CetirizinePage,       // 2
// FexofenadinePage,     // 3
// TumsPage,             // 4
// MaaloxPage,           // 5
// MyliconPage,          // 6
// SudafedPage,          // 7
// PediacarePage,        // 8
// DimetappPage,         // 9
// TriaminicPage,        // 10
// PeptoPage,            // 11
// MucinexPage,          // 12
// LittleRemediesPage,   // 13
// AcetaminophenPage,    // 14
// IbuprofenPage,        // 15
// MiralaxPage,          // 16
// PedialaxPage,         // 17
// FletchersPage,        // 18
// ImodiumPage,          // 19
// MilkMagnesiaPage,     // 20
// RobitussinPage        // 21
var DosingPage = (function () {
    function DosingPage(navCtrl, navParams, http, sanitizer, menu, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.sanitizer = sanitizer;
        this.menu = menu;
        this.authService = authService;
        var user = this.authService.getUserInfo();
        if (user == null)
            this.isLoggedIn = false;
        else
            this.isLoggedIn = true;
        this.menu = menu;
        this.AbsoluteURL = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getAbsoluteURL();
        this.currentPage = 0;
        this.pages = [true, true, true, true, true, true, true];
    }
    DosingPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/dosing.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    DosingPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting('i');
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    DosingPage.prototype.transitPage = function (pageNumber) {
        this.currentPage = pageNumber;
    };
    DosingPage.prototype.togglePage = function (ind) {
        this.pages[ind] = !this.pages[ind];
    };
    DosingPage.prototype.gotoSubPage = function (id) {
        if (id == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__diphenhydramine_diphenhydramine__["a" /* DiphenhydraminePage */]);
        else if (id == 16 || id == 18 || id == 19 || id == 20) {
            var ids = {
                16: 63,
                18: 64,
                19: 65,
                20: 66
            };
            __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].setPageId(ids[id]);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__dosing_childs_dosing_childs__["a" /* DosingChildsPage */]);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].setPageId(id);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__dosing_child_container_dosing_child_container__["a" /* DosingChildContainerPage */]);
        }
    };
    DosingPage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__save_dose_login_save_dose_login__["a" /* SaveDoseLoginPage */]);
    };
    DosingPage.prototype.gotoSavedDose = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__save_dose_list_save_dose_list__["a" /* SaveDoseListPage */]);
    };
    DosingPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return DosingPage;
}());
DosingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dosing',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/dosing/dosing.html"*/'\n<ion-header class="ui-header">\n\n  <ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title">\n      	&nbsp;\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n  <ion-navbar class="fullWidth roboto bgPink" *ngIf="currentPage==0">\n    <div [innerHTML]="html_data?.navbar"></div>\n  </ion-navbar>\n  <ion-navbar class="fullWidth robotoLight bgPink" *ngIf="currentPage==1 && isLoggedIn == false">\n  	<div class="floatright"> \n	    <a href="#" class="linkGrayLight font12 absoluteRight ui-link" data-inline="true" (tap)="gotoLogin()">Login</a>\n	</div>\n	<p class="font14">Which medication?</p>\n  </ion-navbar>\n  <ion-navbar class="fullWidth robotoLight bgPink" *ngIf="currentPage==1 && isLoggedIn == true">\n  	<div class="spinner floatright"></div>\n	<div class="floatright savedDose">\n	   <a href="#" class="linkGrayBorderLightThin font12 absoluteRight ui-link" data-inline="true" (tap)="gotoSavedDose()">Saved Doses</a>  \n	</div>\n	<p>Medication?</p>\n  </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  padding class="ui-page-theme-i">\n	<div class="ui-content">\n		<div class="fullWidth mainPage" *ngIf="currentPage==0">\n			<div [innerHTML]="html_data?.header"></div>\n			<p class="centerText">\n				<a href="#" class="linkRedBorder ui-link" (tap)="transitPage(1)">Let\'s get started</a>\n			</p>\n			<div [innerHTML]="html_data?.ppp"></div>\n		</div>\n		<div class="fullWidth mainPage transparentButton" *ngIf="currentPage==1">\n			<div class="opacity1">\n				<div [innerHTML]="html_data?.main_header"></div>\n			    <ng-container *ngFor="let each_data of html_data?.data; let i = index">\n			    	<div data-role="collapsible" data-collapsed="true" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-corners="false" class="ui-nodisc-icon ui-collapsible ui-collapsible-inset ui-collapsible-themed-content" [ngClass]="{\'ui-collapsible-collapsed\': pages[i]}">\n				        <h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed">\n				        	<a href="#" class="ui-collapsible-heading-toggle ui-btn ui-icon-arrow-r ui-btn-icon-left ui-btn-inherit" [ngClass]="{\'ui-icon-arrow-r\': pages[i], \'ui-icon-arrow-d\': !pages[i]}" (tap)="togglePage(i)">\n				        		<div [innerHTML]="each_data?.header"></div>\n				        	</a>\n				        </h3>\n				        <div class="ui-collapsible-content ui-body-inherit" aria-hidden="true" [ngClass]="{\'ui-collapsible-content-collapsed\': pages[i]}">\n				            <br>\n				            <ul data-role="listview" class="ui-listview">\n				            	<li *ngFor="let li_data of each_data?.list">\n				            		<a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" (tap)="gotoSubPage(li_data.id)">\n				                        <div [innerHTML]="li_data?.content"></div>\n				                    </a>\n				            	</li>\n				            </ul>\n				            <p>&nbsp;</p>\n				        </div>\n				    </div>\n				    <hr class="pink">\n			    </ng-container>\n			    <div [innerHTML]="html_data?.ppp"></div>\n			</div>\n		</div>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/dosing/dosing.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__["a" /* AuthService */]])
], DosingPage);

//# sourceMappingURL=dosing.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveDoseLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__save_dose_insert_save_dose_insert__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__save_dose_register_save_dose_register__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__save_dose_list_save_dose_list__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SaveDoseLoginPage = (function () {
    function SaveDoseLoginPage(navCtrl, navParams, menu, authService, alertCtrl, loadingCtrl, toastCtrl, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.sanitizer = sanitizer;
        this.loginCredentials = { 'email': '', 'password': '' };
        this.menu = menu;
        this.AbsoluteURL = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getAbsoluteURL();
    }
    SaveDoseLoginPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/save_dose_login.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    SaveDoseLoginPage.prototype.showMenu = function () {
        this.menu.open();
    };
    SaveDoseLoginPage.prototype.loginPage = function () {
        this.authService.setMainPage(this);
        if (__WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getDosingWeight() != 0)
            this.authService.setTransitionPage(__WEBPACK_IMPORTED_MODULE_7__save_dose_insert_save_dose_insert__["a" /* SaveDoseInsertPage */]);
        else
            this.authService.setTransitionPage(__WEBPACK_IMPORTED_MODULE_9__save_dose_list_save_dose_list__["a" /* SaveDoseListPage */]);
        this.authService.login(this.loginCredentials);
    };
    SaveDoseLoginPage.prototype.gotoRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__save_dose_register_save_dose_register__["a" /* SaveDoseRegisterPage */]);
    };
    SaveDoseLoginPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return SaveDoseLoginPage;
}());
SaveDoseLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-save-dose-login',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/save-dose-login/save-dose-login.html"*/'<ion-header class="ui-header">\n\n  <ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title">\n      	&nbsp;\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n  <ion-navbar class="fullWidth roboto bgCyan">\n    <p>Please Login</p>\n  </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  padding class="ui-page-theme-n ui-mobile">\n	<div class="ui-content">\n	    <p>&nbsp;</p>\n	    <div style="padding:16px;">\n	        <div [innerHTML]="html_data?.header"></div>\n	        <div>\n	            <form (ngSubmit)="loginPage()" #loginForm="ngForm">\n	            	<ion-row>\n				        <ion-col>\n				          <ion-list inset>\n				            \n				            <ion-item>\n				              <ion-input type="text" placeholder="Email Address" name="email" [(ngModel)]="loginCredentials.email" required></ion-input>\n				            </ion-item>\n				              \n				            <ion-item>\n				              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="loginCredentials.password" required></ion-input>\n				            </ion-item>\n				            \n				          </ion-list>\n				        </ion-col>\n					</ion-row>\n	                <p style="padding-left: 20px;">\n	                    <a href="#" class="linkCyan ui-link" (tap)="gotoRegisterPage()">Register</a>\n	                    <input name="save_dose_submit_login" type="submit" id="save_dose_submit_login" data-enhanced="false" data-role="none" class="buttonAmberBorder" value="Login" [disabled]="!loginForm.form.valid">\n	                </p>\n	            </form>\n	        </div>\n	        <p>&nbsp;</p>\n	        <p>&nbsp;</p>\n	    </div>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/save-dose-login/save-dose-login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], SaveDoseLoginPage);

//# sourceMappingURL=save-dose-login.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdultTakeMobileListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adult_take_mobile_childlist_adult_take_mobile_childlist__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var mode = {
    0: 'a',
    1: 'i'
};
var AdultTakeMobileListPage = (function () {
    function AdultTakeMobileListPage(navCtrl, navParams, menu, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.sanitizer = sanitizer;
        this.menu = menu;
        this.pageId = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageId();
        this.setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting(mode[this.pageId]);
    }
    AdultTakeMobileListPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/adult_take_mobile_list.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    AdultTakeMobileListPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting(mode[this.pageId]);
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    AdultTakeMobileListPage.prototype.movePage = function (p) {
        if (this.pageId == 0) {
            __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].setPageId(p);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__adult_take_mobile_childlist_adult_take_mobile_childlist__["a" /* AdultTakeMobileChildlistPage */]);
        }
    };
    AdultTakeMobileListPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return AdultTakeMobileListPage;
}());
AdultTakeMobileListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-adult-take-mobile-list',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/adult-take-mobile-list/adult-take-mobile-list.html"*/'\n<ion-header class="ui-header {{setting.class}}">\n\n  <ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title">\n      	&nbsp;\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n  <ion-navbar class="fullWidth robotoLight {{setting.p}}">\n    <p>Check or Skip Symptoms</p>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content overflow-scroll="true"  padding class="{{setting.class}} content{{pageId}}">\n	<p>&nbsp;</p>\n	<div class="opacity4">\n		<div [innerHTML]="html_data?.header[pageId]"></div>\n		<p class="centerText"> \n			<a href="#" class="{{html_data?.atag1[pageId]}} ui-link" data-inline="true" (tap)="movePage(0)">CHECK</a>\n			<a href="#" class="{{html_data?.atag2[pageId]}} ui-link" data-inline="true" (tap)="movePage(1)">Skip</a>\n		</p>\n		<p>&nbsp;</p>\n	</div>\n	\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/adult-take-mobile-list/adult-take-mobile-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], AdultTakeMobileListPage);

//# sourceMappingURL=adult-take-mobile-list.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindNearestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__find_nearest_list_find_nearest_list__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var mode = [
    'n', 'i', 'o', 'c', 'a', 'g'
];
var FindNearestPage = (function () {
    function FindNearestPage(navCtrl, navParams, menu, http, sanitizer, mapsAPILoader, ngZone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.sanitizer = sanitizer;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.pageTitle = {
            0: "Hospital / ER",
            1: "Urgent care",
            2: "Doctor Office",
            3: "Children's Clinic",
            4: "Dental Care",
            5: "Pharmacy Care",
        };
        this.mapData = {
            latitude: 0,
            longitude: 0,
            zoom: 1,
            location: ""
        };
        this.pageId = __WEBPACK_IMPORTED_MODULE_7__providers_globalvars__["a" /* GlobalVars */].getPageId();
        this.menu = menu;
        this.setting = __WEBPACK_IMPORTED_MODULE_7__providers_globalvars__["a" /* GlobalVars */].getPageSetting(mode[this.pageId]);
        this.enterLocation = false;
        this.locationPage = 1;
    }
    FindNearestPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        menu.className = "outer-content content" + " " + this.setting['class'];
        this.menu.open();
    };
    FindNearestPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/findnearest.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    FindNearestPage.prototype.transitionPage = function (pageNum) {
        if (pageNum == 2)
            this.mapData.location = this.searchElementRef.nativeElement.value;
        this.locationPage = pageNum;
    };
    FindNearestPage.prototype.findHospital = function () {
        __WEBPACK_IMPORTED_MODULE_7__providers_globalvars__["a" /* GlobalVars */].setMapData(this.mapData);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__find_nearest_list_find_nearest_list__["a" /* FindNearestListPage */]);
    };
    FindNearestPage.prototype.useCurrentLocation = function () {
        this.setCurrentPosition();
        this.locationPage = 3;
    };
    FindNearestPage.prototype.toggleLocationByInput = function () {
        this.enterLocation = !this.enterLocation;
    };
    FindNearestPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    FindNearestPage.prototype.ngOnInit = function () {
        var _this = this;
        //set google maps defaults
        this.mapData.zoom = 4;
        this.mapData.latitude = 39.8282;
        this.mapData.longitude = -98.5795;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.mapData.latitude = place.geometry.location.lat();
                    _this.mapData.longitude = place.geometry.location.lng();
                    _this.mapData.zoom = 11;
                    _this.mapData.location = place.formatted_address;
                });
            });
        });
    };
    FindNearestPage.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.mapData.latitude = position.coords.latitude;
                _this.mapData.longitude = position.coords.longitude;
                _this.mapData.zoom = 11;
                _this.printAddress(_this.mapData.latitude, _this.mapData.longitude);
            });
        }
    };
    FindNearestPage.prototype.printAddress = function (latitude, longitude) {
        var geocoder = new google.maps.Geocoder();
        var userLocation = new google.maps.LatLng(latitude, longitude);
        var $this = this;
        geocoder.geocode({ 'location': userLocation }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    $this.mapData.location = results[0].formatted_address;
                }
            }
        });
    };
    return FindNearestPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], FindNearestPage.prototype, "searchElementRef", void 0);
FindNearestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-find-nearest',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/find-nearest/find-nearest.html"*/'<ion-header class="ui-header {{setting.class}}">\n	<ion-navbar>\n	    <ion-title>\n	    	<h1 class="ui-title">\n	      		{{pageTitle[pageId]}}\n	      	</h1>\n	    </ion-title>\n	    <ion-buttons end>\n	      <button ion-button icon-only (tap)="showMenu()">\n	        <ion-icon name="menu"></ion-icon>\n	      </button>\n	    </ion-buttons>\n	</ion-navbar>\n	<ion-navbar class="fullWidth">\n	  	<div class="{{setting.spinner}} floatright"></div>\n		<p *ngIf="locationPage==1" class="robotoLight {{setting.p}}">{{html_data?.navbar[pageId]}}</p>\n		<p *ngIf="locationPage==2" class="robotoLight {{setting.p}}">Search By Address</p>\n		<p *ngIf="locationPage==3" class="robotoLight {{setting.p}}">&nbsp;</p>\n	</ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  class="{{setting.class}}">\n	<div class="ui-content hospital_content" *ngIf="locationPage==1">\n		<div class="opacity5">\n		  <div class="opacity7">\n		    <div class="maxwidth450">\n		      <div class="{{setting.oval}} centerText">\n		        <span>From <span class="{{setting.font}}">where</span> should the search begin?</span><br>\n		      </div>\n		      <div align="right">\n		      	<img src="{{html_data?.imgsrc[pageId]}}" width="100">\n		      </div>\n		    </div>\n		    <p>&nbsp;</p>\n		    <hr class="{{setting.hr}}">\n		    <ul data-role="listview" data-inset="true" class="ui-listview ui-listview-inset ui-corner-all ui-shadow">\n		      <li class="ui-li-has-icon ui-first-child" (tap)="useCurrentLocation()">\n		        <a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">\n		        	<img src="{{html_data?.curloc[pageId]}}" alt="location icon" class="ui-li-icon ui-corner-none">\n		         	<h3 class="{{setting.font}}">Use My Current Location</h3>\n					<p class="grayfontSmall">Search based on where you are now.</p>\n		        </a>\n		      </li>\n		      <hr class="{{setting.hr}}">\n		      <li data-icon="arrow-d" class="ui-li-has-icon ui-last-child" (tap)="toggleLocationByInput()">\n		        <a href="#" id="show_address_form" class="ui-btn ui-btn-icon-right ui-icon-arrow-d">\n		        	<img src="{{html_data?.enterloc[pageId]}}" alt="Location icon" class="ui-li-icon ui-corner-none">\n					<h3 class="{{html_data?.h3[pageId]}}">I will enter a Location</h3>\n					<p class="grayfontSmall">Address | City, State | Zip code</p>\n		        </a>\n		      </li>\n		    </ul>\n		    <div id="address_form" [ngClass]="{\'displayNone\': !enterLocation}">\n			    <div>\n			    	<img src="assets/img/backgrounds/nearest/pointing-arrow-address.png" width="200" height="auto" alt="tap here to enter address arrow">\n			    </div>\n			    <div id="map"></div>\n			    <form action="" method="get" name="address_search" id="address_search" data-ajax="false" class="mbsc-comp mbsc-form mbsc-mobiscroll mbsc-ltr">\n			        <div data-role="fieldcontain" class="ui-field-contain">\n			            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset mbsc-input">\n			            	<span class="mbsc-input-wrap">\n			            		<input name="enter_address" id="enter_address" placeholder="Start typing address here...." autocorrect="off" autocapitalize="off" spellcheck="off" type="text" class="form-control" #search [formControl]="searchControl" class="mbsc-control mbsc-control-ev">\n				            </span>\n			            </div>\n			            <p class="centerText"><br>\n			                <a href="#" class="linkAmberBorder ui-link" data-inline="true" (tap)="transitionPage(2)">Here You Go</a>\n			            </p>\n			        </div>\n			    </form>\n			</div>\n		    <div [innerHTML]="html_data?.ppp"></div>\n		  </div>\n		  <div class="{{setting.spinner}} floatright"></div>\n\n		</div>\n	</div>\n	<div class="ui-content hospital_content" role="main" *ngIf="locationPage==2">\n	    <div class="opacity8">\n	        <div class="maxwidth450">\n	            <div class="{{setting.oval}} centerText">\n	            	<span [innerHTML]="html_data?.content[pageId]"></span>\n	                <br>\n	            </div>\n	            <div align="right">\n	            	<img src="{{html_data?.imgsrc[pageId]}}" width="100">\n	            </div>\n	        </div>\n	        <div class="clearboth divider1"></div>\n	        <p>&nbsp;</p>\n	        <h3 class="{{html_data?.line[pageId]}} {{html_data?.h3[pageId]}}">You entered a location of:</h3>\n        	<div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset bg_highlight">\n        		{{mapData.location}}\n        	</div>\n	        <p>&nbsp;</p>\n	        <div class="clearboth divider1"></div>\n	        <p class="centerText">\n	        	<a href="#" class="{{html_data?.aclass[pageId]}} ui-link" id="hospital_list" data-inline="true" (tap)="findHospital()">{{html_data?.atext[pageId]}}</a>\n	        </p>\n	        <div class="{{setting.spinner}} floatright"></div>\n	        <div [innerHTML]="html_data?.ppp"></div>\n	    </div>\n	    \n	</div>\n	<div class="ui-mobile ui-content hospital_content" role="main" *ngIf="locationPage==3">\n	    <div class="opacity8">\n	        <div class="maxwidth450">\n	            <div class="{{setting.oval}} centerText">\n	            	<span [innerHTML]="html_data?.content2[pageId]"></span>\n	                <br>\n	            </div>\n	            <div align="right">\n	            	<img src="{{html_data?.imgsrc[pageId]}}" width="100">\n	            </div>\n	        </div>\n	        <div class="clearboth divider1"></div>\n	        <!-- ---------------End Border right person------------------- -->\n	        <p>&nbsp;</p>\n	        <form action="" method="post" name="search" id="search" data-ajax="false">\n	            <div data-role="fieldcontain" class="ui-field-contain">\n	                <label for="your_location" class="bluefont">Your current location is:</label>\n	                <div class="ui-input-text ui-shadow-inset ui-body-inherit ui-corner-all ui-textinput-autogrow">\n	                	{{mapData.location}}\n	                </div>\n	            </div>\n	        </form>\n	        <br>\n	        <div class="clearboth divider1"></div>\n	        <br>\n	        <p class="centerText">\n	        	<a href="#" class="{{html_data?.aclass[pageId]}} ui-link" id="hospital_list" data-inline="true" (tap)="findHospital()">{{html_data?.atext[pageId]}}</a>\n	        </p>\n	        <div class="{{setting.spinner}} floatright"></div>\n	        <div [innerHTML]="html_data?.ppp"></div>\n	    </div>\n	    \n	</div>\n	<div [innerHTML]="html_data?.ppp"></div>\n	<div [innerHTML]="html_data?.ppp"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/find-nearest/find-nearest.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_3_angular2_google_maps_core__["MapsAPILoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], FindNearestPage);

//# sourceMappingURL=find-nearest.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveDoseListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__save_dose_login_save_dose_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SaveDoseListPage = (function () {
    function SaveDoseListPage(http, sanitizer, navCtrl, navParams, menu, authService) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.authService = authService;
        this.loginCredentials = { 'email': '', 'password': '' };
        this.menu = menu;
        this.AbsoluteURL = __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */].getAbsoluteURL();
        this.dosingData = [];
    }
    SaveDoseListPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/save_dose_list.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    SaveDoseListPage.prototype.showMenu = function () {
        this.menu.open();
    };
    SaveDoseListPage.prototype.logout = function () {
        this.authService.setLoginPage(__WEBPACK_IMPORTED_MODULE_6__save_dose_login_save_dose_login__["a" /* SaveDoseLoginPage */]);
        this.authService.logout();
    };
    SaveDoseListPage.prototype.loadData = function () {
        var _this = this;
        var user = this.authService.getUserInfo();
        var email = user.email;
        var url = __WEBPACK_IMPORTED_MODULE_4__providers_globalvars__["a" /* GlobalVars */].getApiURL() + "page=dosing_list&email=" + email;
        this.http.get(url).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.dosingData = data;
        }), function (err) {
            // console.log("Oops");
        };
    };
    SaveDoseListPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
        this.loadData();
    };
    return SaveDoseListPage;
}());
SaveDoseListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-save-dose-list',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/save-dose-list/save-dose-list.html"*/'<ion-header class="ui-header">\n\n  <ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title">\n      	&nbsp;\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n  <ion-navbar class="fullWidth roboto bgCyan">\n    <p class="floatright paddingSides">\n    	<a href="#" class="linkGrayLightThin ui-link" (tap)="logout()">Log out</a>\n    </p>\n    <p>Saved doses</p>\n  </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  padding class="ui-page-theme-n ui-mobile">\n	<div class="ui-content">\n	   	<div [innerHTML]="html_data?.header"></div>\n	   	<div class="mbsc-lv-cont mbsc-lv-mobi-blue mbsc-lv-mobiscroll mbsc-lv-ic-anim mbsc-lv-alt-row  mbsc-lv-handle-right">\n	      	<ul class="mbsc-lv mbsc-lv-dummy"></ul>\n	      	<div class="mbsc-lv-sl-c" data-ref="1">\n	         <ul id="saved_dose_list" class="dose-list mbsc-comp mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr" style="">\n	            <li *ngFor="let eachDosing of dosingData" class="mbsc-lv-item mbsc-lv-item-enhanced">\n				   <h3 class="mbsc-lv-txt">\n				   	<span class="grayfontSmall">Dose for</span> \n				   	<span class="cyanfontLarge caps" [innerHTML]="sanitizer.bypassSecurityTrustHtml(eachDosing[\'child_name\'])"></span></h3>\n				   <p class="mbsc-lv-txt"> \n				      Acetaminophen Infant Suspension<br> <span class="redfontSmall centerText"> \n				      160 mg / 5 ml</span><br>\n				      <span class="grayfontSmall">Saved on: <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(eachDosing[\'saved_date\'])"></span> at <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(eachDosing[\'saved_time\'])"></span></span>\n				   </p>\n				   <br>\n				   <div *ngIf="eachDosing[\'complete\'] == \'Yes\'">\n            			<div>\n            				<span class="redfontLarge">Completed</span> \n            				<span class="grayfontSmall"> on: <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(eachDosing[\'completed_date\'])"></span> at <span [innerHTML]="sanitizer.bypassSecurityTrustHtml(eachDosing[\'completed_time\'])"></span></span>\n            			</div>\n            		</div>\n            		<div *ngIf="eachDosing[\'complete\'] == \'No\'">\n            			<div class="greenfontLarge">In Progress ...</div>\n            		</div>\n				   	<div [innerHTML]="html_data?.mbsc"></div>\n				</li>\n	         </ul>\n	      </div>\n	   	</div>\n		<div [innerHTML]="html_data?.footer"></div>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/save-dose-list/save-dose-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__["a" /* AuthService */]])
], SaveDoseListPage);

//# sourceMappingURL=save-dose-list.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DosingChildContainerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dosing_childs_dosing_childs__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var mode = {
    0: 'i',
    1: 'a',
    2: 'g',
    3: 'd',
    4: 'a',
    5: 'a',
    6: 'p',
    7: 'i',
    8: 'a',
    9: 'd',
    10: 'a',
    11: 'a',
    12: 'a',
    13: 'i',
    14: 'i',
    15: 'o',
    17: 'a',
    21: 'i'
};
var pageStart = {
    0: 0,
    1: 3,
    2: 7,
    3: 10,
    4: 12,
    5: 14,
    6: 17,
    7: 17,
    8: 21,
    9: 28,
    10: 33,
    11: 38,
    12: 38,
    13: 42,
    14: 44,
    15: 52,
    16: 56,
    17: 56,
    21: 60
};
var DosingChildContainerPage = (function () {
    function DosingChildContainerPage(navCtrl, navParams, menu, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.sanitizer = sanitizer;
        this.menu = menu;
        this.pageId = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageId();
        this.setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting(mode[this.pageId]);
        this.pages = [true, true, true, true];
    }
    DosingChildContainerPage.prototype.getHtmlData = function () {
        var _this = this;
        this.html_data = null;
        this.http.get("assets/json/dosing_child_container.json").map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.html_data = data;
        });
    };
    DosingChildContainerPage.prototype.showMenu = function () {
        var menu = document.querySelector('ion-menu ion-content');
        var setting = __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].getPageSetting(mode[this.pageId]);
        menu.className = "outer-content content" + " " + setting['class'];
        this.menu.open();
    };
    DosingChildContainerPage.prototype.togglePage = function (ind) {
        this.pages[ind] = !this.pages[ind];
    };
    DosingChildContainerPage.prototype.gotoSubPage = function (id) {
        __WEBPACK_IMPORTED_MODULE_5__providers_globalvars__["a" /* GlobalVars */].setPageId(pageStart[this.pageId] + id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__dosing_childs_dosing_childs__["a" /* DosingChildsPage */]);
    };
    DosingChildContainerPage.prototype.ionViewDidLoad = function () {
        this.getHtmlData();
    };
    return DosingChildContainerPage;
}());
DosingChildContainerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dosing-child-container',template:/*ion-inline-start:"/Users/administrator/Desktop/pharmacist/src/pages/dosing-child-container/dosing-child-container.html"*/'\n<ion-header class="ui-header {{setting.class}}">\n\n  <ion-navbar>\n    <ion-title>\n    	<h1 class="ui-title">\n      	&nbsp;\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="showMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n  <ion-navbar class="fullWidth robotoLight {{setting.p}}">\n    <p [innerHTML]="html_data?.title[pageId]"></p>\n  </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true"  padding class="{{setting.class}} content{{pageId}}">\n	<div class="ui-content transparentButton">\n	    <div [innerHTML]="html_data?.header[pageId]"></div>\n	    <div class="opacity4" style="padding:0 15px;" *ngIf="pageId!=14 && pageId!=15">\n	        <br>\n	        <ul data-role="listview" class="ui-nodisc-icon ui-listview" data-corners="false">\n	        	<ng-container *ngFor="let eachdata of html_data?.lidata[pageId]; let i=index">\n	        		<li>\n		                <a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" (tap)="gotoSubPage(i)">\n		                    <div [innerHTML]="eachdata"></div>\n		                </a>\n		            </li>\n		            <hr>\n	        	</ng-container>\n	        </ul>\n	        <p>&nbsp;</p>\n	        <p>&nbsp;</p>\n	    </div>\n	    <div class="maxwidth600" *ngIf="pageId==14 || pageId==15">\n	        <ng-container *ngFor="let each_data of html_data?.lidata[pageId]; let i = index">\n		    	<div data-role="collapsible" data-collapsed="true" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-corners="false" class="ui-nodisc-icon ui-collapsible ui-collapsible-inset ui-collapsible-themed-content" [ngClass]="{\'ui-collapsible-collapsed\': pages[i]}">\n			        <h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed">\n			        	<a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-left ui-btn-inherit" [ngClass]="{\'ui-icon-plus\': pages[i], \'ui-icon-minus\': !pages[i]}" (tap)="togglePage(i)">\n			        		<div [innerHTML]="each_data?.header"></div>\n			        	</a>\n			        </h3>\n			        <div class="ui-collapsible-content ui-body-inherit" aria-hidden="true" [ngClass]="{\'ui-collapsible-content-collapsed\': pages[i]}">\n			            <br>\n			            <ul data-role="listview" class="ui-listview">\n			            	<li *ngFor="let li_data of each_data?.list">\n			            		<a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" (tap)="gotoSubPage(li_data.id)">\n			                        <div [innerHTML]="li_data?.content"></div>\n			                    </a>\n			            	</li>\n			            	<hr class="hrpink">\n			            </ul>\n			            <br>\n			        </div>\n			    </div>\n			    <hr class="hrpink">\n		    </ng-container>\n	    </div>\n	    <p>&nbsp;</p>\n	    <p>&nbsp;</p>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/administrator/Desktop/pharmacist/src/pages/dosing-child-container/dosing-child-container.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], DosingChildContainerPage);

//# sourceMappingURL=dosing-child-container.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVars; });
var char_number = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
};
var settings = [
    {},
    {
        spinner: "spinner-blue",
        p: "bgLightBlue",
        oval: "ovalBorderRightBlue",
        hr: "hrblue",
        font: "orangefont",
        arrow: "light-blue",
    },
    {
        spinner: "",
        p: "",
    },
    {
        spinner: "spinner-purple",
        p: "bgDeepPurple",
        oval: "ovalBorderRightPurple",
        font: "purplefont",
        hr: "hrpurple",
    },
    {
        spinner: "",
        p: "bgPurple",
        oval: "ovalBorderRightPurple_red",
        hr: ""
    },
    {
        spinner: "",
        p: "bgOrange",
        oval: "ovalBorderRightOrange",
        hr: "hrorange",
        arrow: "orange",
    },
    {
        spinner: "",
        p: "bgRed",
        oval: "ovalBorderRightRed",
        arrow: "red",
        hr: "hrpink",
    },
    {
        spinner: "spinner-green",
        p: "bgGreen",
        oval: "ovalBorderRightGreen",
        font: "orangefont",
        arrow: "green",
        hr: "hrgreen",
    },
    {
        spinner: "",
        p: "",
        oval: "ovalBorderRightGreen",
        arrow: "light-green",
        hr: "hrgreen",
    },
    {
        spinner: "spinner",
        p: "bgPink",
        oval: "ovalBorderRightPurple_red",
        font: "orangefont",
        hr: "hrpink",
        arrow: "pink",
    },
    {
        spinner: "",
        p: "",
    },
    {
        spinner: "",
        p: "",
    },
    {
        spinner: "",
        p: "",
    },
    {
        spinner: "",
        p: "",
    },
    {
        spinner: "spinner-blue",
        p: "bgCyan",
        oval: "ovalBorderRightBlue",
        arrow: "cyan",
        font: "orangefont",
        hr: "hrblue",
    },
    {
        spinner: "spinner",
        p: "bgDeepOrange",
        oval: "ovalBorderRightOrange",
        font: "orangefont",
        hr: "hrorange",
        arrow: "deep-orange",
    },
    {
        spinner: "",
        p: "bgTeal",
        oval: "",
        hr: "",
        arrow: "",
    },
];
var GlobalVars = {
    AbsoluteURL: "http://www.selfcarepharmacist.com",
    DeviceNumber: 0,
    RestApiURLs: [
        "http://selfcarepharmacist.com/api/call.php?",
        "api/call.php?",
    ],
    dosingWeight: 0,
    mapData: {
        latitude: 0,
        longitude: 0,
        zoom: 1,
        location: ""
    },
    mapPlaceId: "",
    address2: "",
    firstname: "",
    // Relating pages
    pageId: 0,
    getAbsoluteURL: function () {
        return this.AbsoluteURL;
    },
    setDeviceNumber: function (device) {
        this.DeviceNumber = device;
    },
    getApiURL: function () {
        return this.RestApiURLs[this.DeviceNumber];
    },
    getDosingWeight: function () {
        return this.dosingWeight;
    },
    setDosingWeight: function (wei) {
        this.dosingWeight = wei;
    },
    getMapData: function () {
        return this.mapData;
    },
    setMapData: function (data) {
        this.mapData = data;
    },
    getMapPlaceId: function () {
        return this.mapPlaceid;
    },
    setMapPlaceId: function (placeid) {
        this.mapPlaceid = placeid;
    },
    getAddress2: function () {
        return this.address2;
    },
    setAddress2: function (addr) {
        this.address2 = addr;
    },
    getFirstname: function () {
        return this.firstname;
    },
    setFirstname: function (name) {
        this.firstname = name;
    },
    getPageId: function () {
        return this.pageId;
    },
    setPageId: function (id) {
        this.pageId = id;
    },
    getPageSetting: function (id_char) {
        var pageSetting = {
            id: 0,
            class: "",
            spinner: "",
            p: "",
            oval: "",
        };
        if (id_char != "") {
            var num_id = char_number[id_char];
            pageSetting["id"] = num_id;
            pageSetting["class"] = "ui-page-theme-" + num_id;
            pageSetting["spinner"] = settings[num_id]["spinner"];
            pageSetting["p"] = settings[num_id]["p"];
            pageSetting["font"] = settings[num_id]["font"];
            pageSetting["oval"] = settings[num_id]["oval"];
            pageSetting["hr"] = settings[num_id]["hr"];
            pageSetting["arrow"] = settings[num_id]["arrow"];
        }
        return pageSetting;
    },
};
//# sourceMappingURL=globalvars.js.map

/***/ })

},[244]);
//# sourceMappingURL=main.js.map