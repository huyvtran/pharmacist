import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { GlobalVars } from '../providers/globalvars';
import { AuthService} from '../providers/auth-service';
import { SaveDoseLoginPage } from '../save-dose-login/save-dose-login';
import { SaveDoseListPage } from '../save-dose-list/save-dose-list';

import { DiphenhydraminePage } from '../diphenhydramine/diphenhydramine';
import { DosingChildContainerPage } from '../dosing-child-container/dosing-child-container';
import { DosingChildsPage } from '../dosing-childs/dosing-childs';

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

var url_length = 67;
var url_analysis = {
  "0": "/diphenhydramine/diphen_liquid_mobile.php",
  "1": "/diphenhydramine/diphen_chewable_mobile.php",
  "2": "/diphenhydramine/diphen_adult_mobile.php",
  "3": "/loratadine/loratadine_liquid_mobile.php",
  "4": "/loratadine/loratadine_chewable_mobile.php",
  "5": "/loratadine/loratadine_disintegrating_mobile.php",
  "6": "/loratadine/loratadine_adult_mobile.php",
  "7": "/cetirizine/cetirizine_liquid_mobile.php",
  "8": "/cetirizine/cetirizine_chewable_mobile.php",
  "9": "/cetirizine/cetirizine_adult_mobile.php",
  "10": "/fexofenadine/fexofenadine_liquid_mobile.php",
  "11": "/fexofenadine/fexofenadine_chewable_mobile.php",
  "12": "/tums/tums_kids_mobile.php",
  "13": "/tums/tums_regular_mobile.php",
  "14": "/maalox/maalox_children_mobile.php",
  "15": "/maalox/maalox_junior_mobile.php",
  "16": "/maalox/maalox_regular_mobile.php",
  "17": "/sudafed/sudafed.php",
  "18": "/sudafed/sudafed_pe_mobile.php",
  "19": "/sudafed/sudafed_cold_cough_mobile.php",
  "20": "/sudafed/sudafed_pseudotab_mobile.php",
  "21": "/pediacare/pediacare_multi_symptom_cold_mobile.php",
  "22": "/pediacare/pediacare_cough_runnynose_mobile.php",
  "23": "/pediacare/pediacare_cough_congestion_mobile.php",
  "24": "/pediacare/pediacare_daytime_ms_cold_mobile.php",
  "25": "/pediacare/pediacare_flu_mobile.php",
  "27": "/pediacare/pediacare_cough_sorethroat_mobile.php",
  "28": "/dimetapp/dimetapp_cold_cough_mobile.php",
  "29": "/dimetapp/dimetapp_cold_allergy_mobile.php",
  "30": "/dimetapp/dimetapp_cold_flu_mobile.php",
  "31": "/dimetapp/dimetapp_cold_coughla_mobile.php",
  "32": "/dimetapp/dimetapp_cold_congestion_mobile.php",
  "33": "/triaminic/triaminic_multi_symptom_fever_cold_mobile.php",
  "34": "/triaminic/triaminic_cough_congestion_mobile.php",
  "35": "/triaminic/triaminic_cough_sorethroat_mobile.php",
  "36": "/triaminic/triaminic_daytime_cold_cough_mobile.php",
  "37": "/triaminic/triaminic_nighttime_cold_cough_mobile.php",
  "38": "/mucinex/mucinex_ms_cold_fever_mobile.php",
  "39": "/mucinex/mucinex_ms_cold_mobile.php",
  "40": "/mucinex/mucinex_cold_cough_sorethroat_mobile.php",
  "41": "/mucinex/mucinex_nighttime_ms_cold_mobile.php",
  "42": "/little/little_ms_cold_fever_mobile.php",
  "43": "/little/little_decongestant_drops_mobile.php",
  "44": "/acetaminophen/infant_susp_mobile.php",
  "45": "/acetaminophen/children_susp_mobile.php",
  "46": "/acetaminophen/children_chewable_mobile.php",
  "47": "/acetaminophen/junior_chewable_mobile.php",
  "48": "/acetaminophen/regular_acet_mobile.php",
  "49": "/acetaminophen/infant_suppository_mobile.php",
  "50": "/acetaminophen/children_suppository_mobile.php",
  "51": "/acetaminophen/junior_suppository_mobile.php",
  "52": "/ibuprofen/ibuprofen_infant_drops_mobile.php",
  "53": "/ibuprofen/ibuprofen_suspension_mobile.php",
  "54": "/ibuprofen/ibuprofen_chewable_mobile.php",
  "55": "/ibuprofen/ibuprofen_adult_mobile.php",
  "56": "/pedialax/pedialax_chewable_mobile.php",
  "57": "/pedialax/pedialax_liquid_mobile.php",
  "58": "/pedialax/pedialax_glycerin_mobile.php",
  "59": "/pedialax/pedialax_enema_mobile.php",
  "60": "/robitussin/robitussin_cough_cold_mobile.php",
  "61": "/robitussin/robitussin_cough_chest_mobile.php",
  "62": "/robitussin/robitussin_cough_cold_la_mobile.php",
  "63": "/others/miralax.php",
  "64": "/others/fletchers.php",
  "65": "/others/imodium.php",
  "66": "/others/milk_magnesia.php"
};

@Component({
  selector: 'page-dosing',
  templateUrl: 'dosing.html'
})
export class DosingPage {
  @ViewChild(Content) content: Content;
  currentPage: number;
	AbsoluteURL: string;
  pages: any;
  isLoggedIn: boolean;
  html_data: any;
  barcodeDlg = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, 
      public http: Http, private sanitizer: DomSanitizer,
      public menu: MenuController, private authService: AuthService,
      private barcodeScanner: BarcodeScanner, public platform: Platform) {
    let user = this.authService.getUserInfo();
    if (user == null)
      this.isLoggedIn = false;
    else
      this.isLoggedIn = true;
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
    this.currentPage = 0;
    this.pages = [true, true, true, true, true, true, true];

    this.barcodeDlg['show'] = 0;
    this.barcodeDlg['maxWidth'] = 600;
    this.barcodeDlg['left'] = 0;
    this.barcodeDlg['top'] = 0;
    this.barcodeDlg['width'] = 200;
    this.barcodeDlg['height'] = 100;
    this.barcodeDlg['name'] = "";
    this.barcodeDlg['description'] = "";
    this.barcodeDlg['image'] = "";
    this.barcodeDlg['url'] = "";
    this.barcodeDlg['goto'] = -1;
    this.barcodeDlg['msg'] = "";
  }
  getHtmlData(){
    this.html_data = null
    this.http.get("assets/json/dosing.json").map(response => response.json()).subscribe(data => {
        this.html_data = data;
    });
  }
  showMenu() {
    var menu = document.querySelector( 'ion-menu ion-content' );
    var setting = GlobalVars.getPageSetting('i');
    menu.className = "outer-content content" + " " + setting['class'];
  	this.menu.open();
  }
  transitPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  togglePage(ind: number) {
    this.pages[ind] = !this.pages[ind];
  }
  gotoSubPage(id: number) {
    if (id == 0)
      this.navCtrl.push(DiphenhydraminePage);
    else if (id==16 || id==18 || id==19 || id==20){
      let ids = {
        16: 63,
        18: 64,
        19: 65,
        20: 66
      }
      GlobalVars.setPageId(ids[id]);
      this.navCtrl.push(DosingChildsPage);
    }
    else
    {
      
      GlobalVars.setPageId(id);
      this.navCtrl.push(DosingChildContainerPage);
    }
  }
  gotoLogin() {
    this.navCtrl.push(SaveDoseLoginPage);
  }
  gotoSavedDose() {
    this.navCtrl.push(SaveDoseListPage);
  }
  ionViewDidLoad() {
    this.getHtmlData();
  }
  scanner(){   
    this.barcodeScanner.scan().then(brcode=>{
      // var scannedCode = "041100811028";
      var scannedCode=brcode.text;
      if (scannedCode.length == 12)
        scannedCode = "0" + scannedCode;
      let barApiUrl = GlobalVars.getApiURL() + "code=" + scannedCode + "&ppp=barcode";
      this.http.get(barApiUrl).map(response => response.json()).subscribe(data => {
          setTimeout(() => {
            if (data.res == 'success')
            {
              this.barcodeDlg['name'] = data['drug_name'];
              this.barcodeDlg['description'] = data['drug_description'];
              this.barcodeDlg['image'] = data['drug_image_file'];
              this.barcodeDlg['url'] = data['drug_ingredient_url'];
              for (let i=0;i<url_length;i++)
              {
                if (url_analysis[i] == data['drug_ingredient_url'])
                {
                  this.barcodeDlg['goto'] = i; break;
                }
              }
              this.toggleDlg(1);
            }
            else
            {
              this.barcodeDlg['msg'] = 'Failed to get the required data. The current barcode is ' + scannedCode;
              this.toggleDlg(2);
            }
          });
        }),
        err => {
          setTimeout(() => {
              this.barcodeDlg['msg'] = "Access denied.";
              this.toggleDlg(2);
          });
        }
    }, (err)=>{
      this.barcodeDlg['msg'] = "Barcode is not working.";
      this.toggleDlg(2);
    });
  }
  toggleDlg(b: number)
  {
    if (b != 0)
    {
      var scrollPos = this.content.getContentDimensions().scrollTop;
      if (b == 1)
        this.barcodeDlg['height'] = 400;
      else
        this.barcodeDlg['height'] = 100;
      this.barcodeDlg['width'] = this.platform.width() * 0.9;
      if (this.barcodeDlg['width'] > this.barcodeDlg['maxWidth'])
        this.barcodeDlg['width'] = this.barcodeDlg['maxWidth'];
      this.barcodeDlg['left'] = (this.platform.width() - this.barcodeDlg['width']) / 2;
      this.barcodeDlg['top'] = (this.platform.height() - this.barcodeDlg['height']) / 2 + scrollPos - 60;
    }
    this.barcodeDlg['show'] = b;
  }
  clickBarcode(n: number)
  {
    if (n==0) // No
      this.toggleDlg(0);
    else
    {
      GlobalVars.setPageId(this.barcodeDlg['goto']);
      this.navCtrl.push(DosingChildsPage);
    }
  }
}
