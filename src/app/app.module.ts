import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AgmCoreModule } from "angular2-google-maps/core";

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';

import { AdultTakeMobileListPage } from '../pages/adult-take-mobile-list/adult-take-mobile-list';
import { DosingPage } from '../pages/dosing/dosing';
import { SelfCarePage } from '../pages/self-care/self-care';
import { ComparePage } from '../pages/compare/compare';
import { NearestPage } from '../pages/nearest/nearest';
import { DrugPage } from '../pages/drug/drug';

import { FindNearestPage } from '../pages/find-nearest/find-nearest';
import { FindNearestListPage } from '../pages/find-nearest-list/find-nearest-list';
import { PlaceDetailsPage } from '../pages/place-details/place-details';
import { OrderByPipe } from '../pages/orderby/orderby';
import { PlaceNavigationPage } from '../pages/place-navigation/place-navigation';
import { DirectionsMapDirective } from '../pages/place-navigation/google-map.directive';

import { CompareChildsPage } from '../pages/compare-childs/compare-childs';
import { CompareChildsContainerPage } from '../pages/compare-childs-container/compare-childs-container';
import { CompareYesnoPage } from '../pages/compare-yesno/compare-yesno';

import { SaveDoseInsertPage } from '../pages/save-dose-insert/save-dose-insert';
import { SaveDoseLoginPage } from '../pages/save-dose-login/save-dose-login';
import { SaveDoseInsertSuccessPage } from '../pages/save-dose-insert-success/save-dose-insert-success';
import { SaveDoseListPage } from '../pages/save-dose-list/save-dose-list';
import { SaveDoseLogoutConfirmPage } from '../pages/save-dose-logout-confirm/save-dose-logout-confirm';
import { SaveDoseLoginDirectPage } from '../pages/save-dose-login-direct/save-dose-login-direct';
import { SaveDoseRegisterPage } from '../pages/save-dose-register/save-dose-register';

import { DiphenhydraminePage } from '../pages/diphenhydramine/diphenhydramine';
import { DosingChildContainerPage } from '../pages/dosing-child-container/dosing-child-container';
import { DosingChildsPage } from '../pages/dosing-childs/dosing-childs';

import { AdultTakeMobileChildlistPage } from '../pages/adult-take-mobile-childlist/adult-take-mobile-childlist';
import { AdultSymptomChildsPage } from '../pages/adult-symptom-childs/adult-symptom-childs';
import { AdultSymptomInfographicsPage } from '../pages/adult-symptom-infographics/adult-symptom-infographics';
import { AdultPharmacistChildsPage } from '../pages/adult-pharmacist-childs/adult-pharmacist-childs';

import { AuthService} from '../pages/providers/auth-service';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        AboutPage,

        AdultTakeMobileListPage,
        DosingPage,
        SelfCarePage,
        ComparePage,
        NearestPage,
        DrugPage,

        FindNearestPage,
        FindNearestListPage,
        PlaceDetailsPage,
        OrderByPipe,
        PlaceNavigationPage,
        DirectionsMapDirective,

        CompareChildsPage,
        CompareChildsContainerPage,
        CompareYesnoPage,

        SaveDoseInsertPage,
        SaveDoseLoginPage,
        SaveDoseInsertSuccessPage,
        SaveDoseListPage,
        SaveDoseLogoutConfirmPage,
        SaveDoseLoginDirectPage,
        SaveDoseRegisterPage,

        DiphenhydraminePage,
        DosingChildContainerPage,
        DosingChildsPage,

        AdultTakeMobileChildlistPage,
        AdultSymptomChildsPage,
        AdultSymptomInfographicsPage,
        AdultPharmacistChildsPage,
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyAB-IzrU8UFGLp9h772cgt3-5DscZYMnYE",
            libraries: ["places"]
        }),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            HomePage,
            AboutPage,

            AdultTakeMobileListPage,
            DosingPage,
            SelfCarePage,
            ComparePage,
            NearestPage,
            DrugPage,

            FindNearestPage,
            FindNearestListPage,
            PlaceDetailsPage,
            PlaceNavigationPage,

            CompareChildsPage,
            CompareChildsContainerPage,
            CompareYesnoPage,

            SaveDoseInsertPage,
            SaveDoseLoginPage,
            SaveDoseInsertSuccessPage,
            SaveDoseListPage,
            SaveDoseLogoutConfirmPage,
            SaveDoseLoginDirectPage,
            SaveDoseRegisterPage,

            DiphenhydraminePage,
            DosingChildContainerPage,
            DosingChildsPage,

            AdultTakeMobileChildlistPage,
            AdultSymptomChildsPage,
            AdultSymptomInfographicsPage,
            AdultPharmacistChildsPage,
        ],
    providers: [
        AuthService,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
