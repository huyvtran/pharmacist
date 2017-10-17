import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Platform } from 'ionic-angular';

import { MapsAPILoader} from 'angular2-google-maps/core';

import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';
import { DirectionsMapDirective } from './google-map.directive';

declare var google:any;

@Component({
  selector: 'page-place-navigation',
  templateUrl: 'place-navigation.html',
  providers : [  ]
})
export class PlaceNavigationPage {
	@ViewChild(DirectionsMapDirective) vc: DirectionsMapDirective;
	mapData = {
		latitude: 0,
		longitude: 0,
		zoom: 1,
		location: ""
	};
	origin = {
		latitude: 0,
		longitude: 0,
		address: ""
	};
	destination = {
		latitude: 0,
		longitude: 0,
		address: ""
	}
	map: any;
	MapHeight: number;
	detailRoute: string;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
    	private mapsAPILoader: MapsAPILoader,
    	private sanitizer: DomSanitizer, platform: Platform) 
	{
		this.menu = menu;
		this.MapHeight = 400;
		this.map = null;
		this.detailRoute = "";
	}
	showMenu() {
	    var menu = document.querySelector( 'ion-menu ion-content' );
	    var setting = GlobalVars.getPageSetting('a');
    	menu.className = "outer-content content" + " " + setting['class'];
	  	this.menu.open();
	}
	showPath(address1, address2){
		var location1, location2;
		var geocoder = new google.maps.Geocoder();
		let $this = this;
		if (geocoder)
		{
			geocoder.geocode( { 'address': address1}, function(results, status)
		    {
		        if (status == google.maps.GeocoderStatus.OK)
		        {
		            location1 = results[0].geometry.location;
		            $this.origin.latitude = location1.lat();
		            $this.origin.longitude = location1.lng();
		            $this.origin.address = address1;
		            $this.vc.origin = $this.origin;
		            $this.vc.originPlaceId = results[0].place_id;
		        } else
		        {
		            // alert("Geocode was not successful for the following reason: " + status);
		        }
		    });
		    geocoder.geocode({'address': address2}, function(results, status)
		    {
		        if (status == google.maps.GeocoderStatus.OK)
		        {
		            location2 = results[0].geometry.location;
		            $this.destination.latitude = location2.lat();
		            $this.destination.longitude = location2.lng();
		            $this.destination.address = address2;
		            $this.vc.destination = $this.destination;
		            $this.vc.destinationPlaceId = results[0].place_id;
		            $this.vc.updateDirections();
		            $this.showMap();
		        } else
		        {
		            // alert("Geocode was not successful for the following reason: " + status);
		        }
		    });
		}
	}
	showMap() {
		let $this = this;
		let lat = ($this.origin.latitude+$this.destination.latitude)/2;
		let lng = ($this.origin.longitude+$this.destination.longitude)/2;
	    this.mapData.latitude = lat;
	    this.mapData.longitude = lng;
	    this.mapData.zoom = 11;
	}
	loadData() {
		let mapData = GlobalVars.getMapData();
		if(this.vc.directionsDisplay === undefined){
			this.mapsAPILoader.load().then(() => {
                this.vc.directionsDisplay = new google.maps.DirectionsRenderer;
			}); 
        }
		this.showPath(mapData.location, GlobalVars.getAddress2());
	}
	ionViewDidLoad() {
		this.loadData();
		// console.log('ionViewDidLoad PlaceNavigationPage');
	}

}
