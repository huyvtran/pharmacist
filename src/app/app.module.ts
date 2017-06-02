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

import { AuthService} from '../pages/providers/auth-service';

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
        ],
    providers: [
        AuthService,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
