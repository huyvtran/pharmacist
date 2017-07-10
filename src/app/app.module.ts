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
import { ChildTakeMobileListPage } from '../pages/child-take-mobile-list/child-take-mobile-list';
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
// import { LoratadinePage } from '../pages/loratadine/loratadine';
// import { CetirizinePage } from '../pages/cetirizine/cetirizine';
// import { FexofenadinePage } from '../pages/fexofenadine/fexofenadine';
// import { TumsPage } from '../pages/tums/tums';
// import { MaaloxPage } from '../pages/maalox/maalox';
// import { MyliconPage } from '../pages/mylicon/mylicon';
// import { SudafedPage } from '../pages/sudafed/sudafed';
// import { PediacarePage } from '../pages/pediacare/pediacare';
// import { DimetappPage } from '../pages/dimetapp/dimetapp';
// import { TriaminicPage } from '../pages/triaminic/triaminic';
// import { PeptoPage } from '../pages/pepto/pepto';
// import { MucinexPage } from '../pages/mucinex/mucinex';
// import { LittleRemediesPage } from '../pages/little-remedies/little-remedies';
// import { AcetaminophenPage } from '../pages/acetaminophen/acetaminophen';
// import { IbuprofenPage } from '../pages/ibuprofen/ibuprofen';
// import { MiralaxPage } from '../pages/miralax/miralax';
// import { PedialaxPage } from '../pages/pedialax/pedialax';
// import { FletchersPage } from '../pages/fletchers/fletchers';
// import { ImodiumPage } from '../pages/imodium/imodium';
// import { MilkMagnesiaPage } from '../pages/milk-magnesia/milk-magnesia';
// import { RobitussinPage } from '../pages/robitussin/robitussin';

// import { ChildrenDiphenhydramineMobilePage } from '../pages/children-diphenhydramine-mobile/children-diphenhydramine-mobile';
import { DosingChildContainerPage } from '../pages/dosing-child-container/dosing-child-container';
import { DosingChildsPage } from '../pages/dosing-childs/dosing-childs';

// import { LoratadineLiquidMobilePage } from '../pages/loratadine-liquid-mobile/loratadine-liquid-mobile';
// import { LoratadineChewableMobilePage } from '../pages/loratadine-chewable-mobile/loratadine-chewable-mobile';
// import { LoratadineDisintegratingMobilePage } from '../pages/loratadine-disintegrating-mobile/loratadine-disintegrating-mobile';
// import { LoratadineAdultMobilePage } from '../pages/loratadine-adult-mobile/loratadine-adult-mobile';

// import { CetirizineLiquidMobilePage } from '../pages/cetirizine-liquid-mobile/cetirizine-liquid-mobile';
// import { CetirizineChewableMobilePage } from '../pages/cetirizine-chewable-mobile/cetirizine-chewable-mobile';
// import { CetirizineAdultMobilePage } from '../pages/cetirizine-adult-mobile/cetirizine-adult-mobile';

// import { FexofenadineLiquidMobilePage } from '../pages/fexofenadine-liquid-mobile/fexofenadine-liquid-mobile';
// import { FexofenadineChewableMobilePage } from '../pages/fexofenadine-chewable-mobile/fexofenadine-chewable-mobile';

// import { TumsKidsMobilePage } from '../pages/tums-kids-mobile/tums-kids-mobile';
// import { TumsRegularMobilePage } from '../pages/tums-regular-mobile/tums-regular-mobile';

// import { MaaloxChildrenMobilePage } from '../pages/maalox-children-mobile/maalox-children-mobile';
// import { MaaloxJuniorMobilePage } from '../pages/maalox-junior-mobile/maalox-junior-mobile';
// import { MaaloxRegularMobilePage } from '../pages/maalox-regular-mobile/maalox-regular-mobile';

// import { SudafedPseudoMobilePage } from '../pages/sudafed-pseudo-mobile/sudafed-pseudo-mobile';
// import { SudafedPeMobilePage } from '../pages/sudafed-pe-mobile/sudafed-pe-mobile';
// import { SudafedColdCoughMobilePage } from '../pages/sudafed-cold-cough-mobile/sudafed-cold-cough-mobile';
// import { SudafedPseudotabMobilePage } from '../pages/sudafed-pseudotab-mobile/sudafed-pseudotab-mobile';

// import { DimetappColdCoughMobilePage } from '../pages/dimetapp-cold-cough-mobile/dimetapp-cold-cough-mobile';
// import { DimetappColdAllergyMobilePage } from '../pages/dimetapp-cold-allergy-mobile/dimetapp-cold-allergy-mobile';
// import { DimetappColdFluMobilePage } from '../pages/dimetapp-cold-flu-mobile/dimetapp-cold-flu-mobile';
// import { DimetappColdCoughlaMobilePage } from '../pages/dimetapp-cold-coughla-mobile/dimetapp-cold-coughla-mobile';
// import { DimetappColdCongestionMobilePage } from '../pages/dimetapp-cold-congestion-mobile/dimetapp-cold-congestion-mobile';

// import { PediacareMultiSymptomColdMobilePage } from '../pages/pediacare-multi-symptom-cold-mobile/pediacare-multi-symptom-cold-mobile';
// import { PediacareCoughRunnynoseMobilePage } from '../pages/pediacare-cough-runnynose-mobile/pediacare-cough-runnynose-mobile';
// import { PediacareCoughCongestionMobilePage } from '../pages/pediacare-cough-congestion-mobile/pediacare-cough-congestion-mobile';
// import { PediacareDaytimeMsColdMobilePage } from '../pages/pediacare-daytime-ms-cold-mobile/pediacare-daytime-ms-cold-mobile';
// import { PediacareFluMobilePage } from '../pages/pediacare-flu-mobile/pediacare-flu-mobile';
// import { PediacareNightimeMsColdMobilePage } from '../pages/pediacare-nightime-ms-cold-mobile/pediacare-nightime-ms-cold-mobile';
// import { PediacareCoughSorethroatMobilePage } from '../pages/pediacare-cough-sorethroat-mobile/pediacare-cough-sorethroat-mobile';

// import { TriaminicMultiSymptomFeverColdMobilePage } from '../pages/triaminic-multi-symptom-fever-cold-mobile/triaminic-multi-symptom-fever-cold-mobile';
// import { TriaminicCoughCongestionMobilePage } from '../pages/triaminic-cough-congestion-mobile/triaminic-cough-congestion-mobile';
// import { TriaminicCoughSorethroatMobilePage } from '../pages/triaminic-cough-sorethroat-mobile/triaminic-cough-sorethroat-mobile';
// import { TriaminicDaytimeColdCoughMobilePage } from '../pages/triaminic-daytime-cold-cough-mobile/triaminic-daytime-cold-cough-mobile';
// import { TriaminicNighttimeColdCoughMobilePage } from '../pages/triaminic-nighttime-cold-cough-mobile/triaminic-nighttime-cold-cough-mobile';

// import { MucinexMsColdFeverMobilePage } from '../pages/mucinex-ms-cold-fever-mobile/mucinex-ms-cold-fever-mobile';
// import { MucinexMsColdMobilePage } from '../pages/mucinex-ms-cold-mobile/mucinex-ms-cold-mobile';
// import { MucinexColdCoughSorethroatMobilePage } from '../pages/mucinex-cold-cough-sorethroat-mobile/mucinex-cold-cough-sorethroat-mobile';
// import { MucinexNighttimeMsColdMobilePage } from '../pages/mucinex-nighttime-ms-cold-mobile/mucinex-nighttime-ms-cold-mobile';

import { CommentLoginPage } from '../pages/comment-login/comment-login';

import { AuthService} from '../pages/providers/auth-service';

// import { FakeComponent } from '../pages/dosing/dosing';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        AboutPage,

        AdultTakeMobileListPage,
        ChildTakeMobileListPage,
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

        CommentLoginPage,

        DiphenhydraminePage,
        // LoratadinePage,
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
        // RobitussinPage,       // 21

        // ChildrenDiphenhydramineMobilePage,
        DosingChildContainerPage,
        DosingChildsPage,

        // LoratadineLiquidMobilePage,                     // 0
        // LoratadineChewableMobilePage,                 // 1
        // LoratadineDisintegratingMobilePage,           // 2
        // LoratadineAdultMobilePage,                    // 3

        // CetirizineLiquidMobilePage,                 // 0
        // CetirizineChewableMobilePage,             // 1
        // CetirizineAdultMobilePage,                // 2

        // FexofenadineLiquidMobilePage,               // 0
        // FexofenadineChewableMobilePage,               // 1

        // TumsKidsMobilePage,                 // 0
        // TumsRegularMobilePage,            // 1

        // MaaloxChildrenMobilePage,               // 0
        // MaaloxJuniorMobilePage,                   // 1
        // MaaloxRegularMobilePage,                  // 2

        // SudafedPseudoMobilePage,                  // 0
        // SudafedPeMobilePage,                      // 1
        // SudafedColdCoughMobilePage,               // 2
        // SudafedPseudotabMobilePage,               // 3

        // DimetappColdCoughMobilePage,                  // 0
        // DimetappColdAllergyMobilePage,                // 1
        // DimetappColdFluMobilePage,                    // 2
        // DimetappColdCoughlaMobilePage,                // 3
        // DimetappColdCongestionMobilePage,             // 4

        // PediacareMultiSymptomColdMobilePage,                  // 0
        // PediacareCoughRunnynoseMobilePage,                    // 1
        // PediacareCoughCongestionMobilePage,                   // 2
        // PediacareDaytimeMsColdMobilePage,                     // 3
        // PediacareFluMobilePage,                               // 4
        // PediacareNightimeMsColdMobilePage,                    // 5
        // PediacareCoughSorethroatMobilePage,                   // 6

        // TriaminicMultiSymptomFeverColdMobilePage,               // 0
        // TriaminicCoughCongestionMobilePage,                       // 1
        // TriaminicCoughSorethroatMobilePage,                       // 2
        // TriaminicDaytimeColdCoughMobilePage,                      // 3
        // TriaminicNighttimeColdCoughMobilePage,                    // 4

        // MucinexMsColdFeverMobilePage,                 // 0
        // MucinexMsColdMobilePage,                      // 1
        // MucinexColdCoughSorethroatMobilePage,         // 2
        // MucinexNighttimeMsColdMobilePage,             // 3

        // FakeComponent,
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
            ChildTakeMobileListPage,
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

            CommentLoginPage,

            DiphenhydraminePage,
            // LoratadinePage,
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
            // RobitussinPage,       // 21

            // ChildrenDiphenhydramineMobilePage,
            DosingChildContainerPage,
            DosingChildsPage,

            // LoratadineLiquidMobilePage,                     // 0
            // LoratadineChewableMobilePage,                 // 1
            // LoratadineDisintegratingMobilePage,           // 2
            // LoratadineAdultMobilePage,                    // 3

            // CetirizineLiquidMobilePage,                 // 0
            // CetirizineChewableMobilePage,             // 1
            // CetirizineAdultMobilePage,                // 2

            // FexofenadineLiquidMobilePage,               // 0
            // FexofenadineChewableMobilePage,               // 1

            // TumsKidsMobilePage,                 // 0
            // TumsRegularMobilePage,            // 1

            // MaaloxChildrenMobilePage,               // 0
            // MaaloxJuniorMobilePage,                   // 1
            // MaaloxRegularMobilePage,                  // 2

            // SudafedPseudoMobilePage,                  // 0
            // SudafedPeMobilePage,                      // 1
            // SudafedColdCoughMobilePage,               // 2
            // SudafedPseudotabMobilePage,               // 3

            // DimetappColdCoughMobilePage,                  // 0
            // DimetappColdAllergyMobilePage,                // 1
            // DimetappColdFluMobilePage,                    // 2
            // DimetappColdCoughlaMobilePage,                // 3
            // DimetappColdCongestionMobilePage,             // 4

            // PediacareMultiSymptomColdMobilePage,                  // 0
            // PediacareCoughRunnynoseMobilePage,                    // 1
            // PediacareCoughCongestionMobilePage,                   // 2
            // PediacareDaytimeMsColdMobilePage,                     // 3
            // PediacareFluMobilePage,                               // 4
            // PediacareNightimeMsColdMobilePage,                    // 5
            // PediacareCoughSorethroatMobilePage,                   // 6

            // TriaminicMultiSymptomFeverColdMobilePage,               // 0
            // TriaminicCoughCongestionMobilePage,                       // 1
            // TriaminicCoughSorethroatMobilePage,                       // 2
            // TriaminicDaytimeColdCoughMobilePage,                      // 3
            // TriaminicNighttimeColdCoughMobilePage,                    // 4

            // MucinexMsColdFeverMobilePage,                 // 0
            // MucinexMsColdMobilePage,                      // 1
            // MucinexColdCoughSorethroatMobilePage,         // 2
            // MucinexNighttimeMsColdMobilePage,             // 3

            // FakeComponent,

        ],
    providers: [
        AuthService,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
