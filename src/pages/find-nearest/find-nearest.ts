import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from 'angular2-google-maps/core';

import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';

import { FindNearestListPage } from '../find-nearest-list/find-nearest-list';

declare var google: any;

let mode = [
		'n','i','o','c','a','g'
	];

@Component({
  selector: 'page-find-nearest',
  templateUrl: 'find-nearest.html'
})
export class FindNearestPage {

	enterLocation: boolean;
	setting: any;
	pageId: number;
	pageTitle = {
		0: "Hospital / ER",
		1: "Urgent care",
		2: "Doctor Office",
		3: "Children's Clinic",
		4: "Dental Care",
		5: "Pharmacy Care",
	}
  locationPage: number;
  public mapData = {
    latitude: 0,
    longitude: 0,
    zoom: 1,
    location: ""
  }
  public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;
  html_data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
    public http: Http, private sanitizer: DomSanitizer,
    private mapsAPILoader: MapsAPILoader,private ngZone: NgZone) 
  {
  	this.pageId = GlobalVars.getPageId();
  	this.menu = menu;
  	this.setting = GlobalVars.getPageSetting(mode[this.pageId]);
    this.enterLocation = false;
    this.locationPage = 1;
  }
  showMenu() {
    var menu = document.querySelector( 'ion-menu ion-content' );
    menu.className = "outer-content content" + " " + this.setting['class'];
  	this.menu.open();
  }
  getHtmlData(){
    this.html_data = null
    this.http.get("assets/json/findnearest.json").map(response => response.json()).subscribe(data => {
        this.html_data = data;
    });
  }
  transitionPage(pageNum: number){
    if (pageNum == 2)
      this.mapData.location = this.searchElementRef.nativeElement.value;
    this.locationPage = pageNum;
  }
  findHospital(){
    GlobalVars.setMapData(this.mapData);
    this.navCtrl.push(FindNearestListPage);
  }
  useCurrentLocation() {
    this.setCurrentPosition();
    this.locationPage = 3;
  }
  toggleLocationByInput() {
    this.enterLocation = !this.enterLocation;
  }
  ionViewDidLoad() {
    this.getHtmlData();
  }  
  ngOnInit() {
    //set google maps defaults
    this.mapData.zoom = 4;
    this.mapData.latitude = 39.8282;
    this.mapData.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.mapData.latitude = place.geometry.location.lat();
          this.mapData.longitude = place.geometry.location.lng();
          this.mapData.zoom = 11;
          this.mapData.location = place.formatted_address;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.mapData.latitude = position.coords.latitude;
        this.mapData.longitude = position.coords.longitude;
        this.mapData.zoom = 11;
        this.printAddress(this.mapData.latitude, this.mapData.longitude);
      });
    }
  }
  printAddress(latitude, longitude){
    var geocoder = new google.maps.Geocoder();
    var userLocation = new google.maps.LatLng(latitude, longitude);
    var $this = this;
    geocoder.geocode({'location' : userLocation}, function (results, status){
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          $this.mapData.location = results[0].formatted_address;
        }
      }
    });
  }

}
