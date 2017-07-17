import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the AdultSymptomInfographics page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-adult-symptom-infographics',
  templateUrl: 'adult-symptom-infographics.html'
})
export class AdultSymptomInfographicsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdultSymptomInfographicsPage');
  }

}
