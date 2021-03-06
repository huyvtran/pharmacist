import { Component,ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';

import { AdultTakeMobileListPage } from '../pages/adult-take-mobile-list/adult-take-mobile-list';
import { DosingPage } from '../pages/dosing/dosing';
import { ComparePage } from '../pages/compare/compare';
import { NearestPage } from '../pages/nearest/nearest';
import { DrugPage } from '../pages/drug/drug';

import { GlobalVars } from '../pages/providers/globalvars';

export interface PageInterface {
    title: string;
    description: string;
    component: any;
    icon: string;
    logsOut?: boolean;
    index?: number;
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav:Nav;
    rootPage = HomePage;
    appPages: PageInterface[] = [
        { title: 'Home', description: '', component: HomePage,icon: 'home' },
        { title: 'Analyze Symptoms', description: '+ Get OTC recommendation', component: AdultTakeMobileListPage, index: 1, icon: 'body' },
        { title: 'Compare OTC Products', description: 'Side-by-side comparison.', component: ComparePage, index: 3, icon: 'options' },
        { title: 'Medication Dosing', description: 'Using Weight Of A Child.', component: DosingPage, index: 4, icon: 'flask' },
        { title: 'Drug Savings', description: 'Drug manufacturer coupons', component: DrugPage, index: 5, icon: 'cut' },
        { title: 'Nearby Health Care', description: 'Hospital, Urgentcare, Dentist, Doctor', component: NearestPage, index: 6, icon: 'pin' },
        { title: 'About This App', description: 'What, where, when, how.', component: AboutPage, index: 7, icon: 'information-circle' }
    ];
    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        public menu: MenuController,
    ) {
        platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            if (platform.is('mobileweb')) {
                // console.log("running on a web device");
                GlobalVars.setDeviceNumber(1);
            }
            else
            {
                GlobalVars.setDeviceNumber(0);
            }
        });
    }
    openPage(page: PageInterface) {
        if (page.index) {
            if (page.index <= 2)
                GlobalVars.setPageId(page.index - 1);
            this.nav.push(page.component);
        } else {
            this.nav.setRoot(page.component).catch(() => {
                // console.log("Didn't set nav root");
            });
        }
    }
    isActive(page: PageInterface) {
        let childNav = this.nav.getActiveChildNavs()[0];
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
    }
}
