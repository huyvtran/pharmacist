import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Compare page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

// import { AllergyMedsPage } from '../allergy-meds/allergy-meds';
// import { ColdMedsPage } from '../cold-meds/cold-meds';
// import { ColdMedsChildPage } from '../cold-meds-child/cold-meds-child';
// import { CoughMedsPage } from '../cough-meds/cough-meds';
// import { ColdsoreMedsPage } from '../coldsore-meds/coldsore-meds';
// import { EnergyDrinksPage } from '../energy-drinks/energy-drinks';
// import { EyeDropsPage } from '../eye-drops/eye-drops';
// import { AntifungiMedsPage } from '../antifungi-meds/antifungi-meds';
// import { HeartburnMedsPage } from '../heartburn-meds/heartburn-meds';
// import { LaxativesPage } from '../laxatives/laxatives';
// import { PainRelieversPage } from '../pain-relievers/pain-relievers';
// import { ProbioticsPage } from '../probiotics/probiotics';
// import { SleepAidsPage } from '../sleep-aids/sleep-aids';

import { GlobalVars } from '../providers/globalvars';
import { CompareChildsPage } from '../compare-childs/compare-childs';
import { CompareChildsContainerPage } from '../compare-childs-container/compare-childs-container';
import { CompareYesnoPage } from '../compare-yesno/compare-yesno';

@Component({
  selector: 'page-compare',
  templateUrl: 'compare.html'
})
export class ComparePage {
  modes = {
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
  items = {
    0: 'a',
    1: 0,
    2: 'a',
    3: 'n',
    4: 'n',
    5: 'o',
  }
  // items = {
  //   1     : AllergyMedsPage,
  //   2     : ColdMedsPage,
  //   3     : ColdMedsChildPage,
  //   4     : CoughMedsPage,
  //   5     : ColdsoreMedsPage,
  //   6     : EnergyDrinksPage,
  //   7     : EyeDropsPage,
  //   8     : AntifungiMedsPage,
  //   9     : HeartburnMedsPage,
  //   10    : LaxativesPage,
  //   11    : PainRelieversPage,
  //   12    : ProbioticsPage,
  //   13    : SleepAidsPage,
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  }
  showMenu() {
    var menu = document.querySelector( 'ion-menu ion-content' );
    var setting = GlobalVars.getPageSetting('n');
    menu.className = "outer-content content" + " " + setting['class'];
  	this.menu.open();
  }
  goTo(index: string) {
    if (index.length > 0)
    {
      let mode = (<any>this.modes)[index];
      if (mode >='a' && mode<='z'){
        GlobalVars.setPageId(parseInt(index,10));
        this.navCtrl.push(CompareChildsPage);
      }
      else
      {
        let item = this.items[ mode ];
        if (item >= 'a' && item<='z'){
          GlobalVars.setPageId(parseInt(mode,10));
          this.navCtrl.push(CompareChildsContainerPage);
        }
        else
        {
          GlobalVars.setPageId(0);
          this.navCtrl.push(CompareYesnoPage);
          // cough_meds page
        }
      }
    }
  }
  ionViewDidLoad() {
    
  }

}
