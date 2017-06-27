import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, Platform } from 'ionic-angular';

import { NgZone } from '@angular/core';
import { MapsAPILoader } from 'angular2-google-maps/core';

import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the NearestHospital page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { PlaceDetailsPage } from '../place-details/place-details';
import { OrderByPipe } from '../orderby/orderby';

declare var google: any;
let params = [
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
]

@Component({
  selector: 'page-find-nearest-list',
  templateUrl: 'find-nearest-list.html'
})
export class FindNearestListPage {
	mode = [
		'n','i','o','c','a','g'
	];
	pageTitle = {
		0: "Hospital Care",
		1: "Urgent care",
		2: "Doctor's Offices",
		3: "Children's Clinic",
		4: "Dental Care",
		5: "Pharmacy Care",
	};
	pageClasses = [
		{ // 0
			0: "buttonWhiteBorder",
			1: "buttonWhite",
			2: "buttonBlue",
			3: "bluefont",
		},
		{ // 1
			0: "buttonAmberBorder",
			1: "buttonOrange",
			2: "buttonOrange",
			3: "purple_redfont",
		},
		{ // 2
			0: "buttonWhiteBorder",
			1: "buttonWhite",
			2: "buttonOrange",
			3: "orangefont",
		},
		{ // 3
			0: "buttonWhiteBorder",
			1: "buttonWhite",
			2: "buttonPurple",
			3: "purplefont",
		},
		{ // 4
			0: "buttonWhiteBorder",
			1: "buttonWhite",
			2: "buttonBlue",
			3: "bluefont",
		},
		{ // 5
			0: "buttonWhiteBorder",
			1: "buttonWhite",
			2: "buttonGreen",
			3: "greenfont",
		},
	]
	setting: any;
	pageId: number;
	mapData = {
		latitude: 0,
		longitude: 0,
		zoom: 1,
		location: ""
	};
	TableData: any;
	TableMaxCount: number;
	TableMaxDisplayCount: number;
	RestApiURL: string;
	sortby: string;
	sortDlg: boolean;
	map: any;
	bounds: any;
	infowindow: any;
	ib: any;
	MapHeight: any;
	DataDisplay = {
		0: 'none',
		1: 'block'
	};
	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
    	private mapsAPILoader: MapsAPILoader,private ngZone: NgZone, public http: Http, 
    	private sanitizer: DomSanitizer, platform: Platform) 
	{
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

        this.pageId = GlobalVars.getPageId();
  		this.setting = GlobalVars.getPageSetting(this.mode[this.pageId]);
		this.RestApiURL = GlobalVars.getApiURL() + "ppp=" + params[ this.pageId ]["api"];
	}
	showMenu() {
	    var menu = document.querySelector( 'ion-menu ion-content' );
	    menu.className = "outer-content content" + " " + this.setting['class'];
	  	this.menu.open();
	  }
	ShowMore() {
		this.TableMaxDisplayCount = this.TableMaxDisplayCount + 15;
	}
	toggleSortDlg(b: boolean) {
		this.sortDlg = b;
	}
	SortBy(by: string) {
		this.sortby = by;
	}
	loadData() {
		// this.loadDataFromDatabase();
		this.loadDataFromOnline();    
	}
	loadDataFromDatabase() {
		let url = this.RestApiURL + "&lat=" + this.mapData.latitude + "&lng=" + this.mapData.longitude;
	    this.http.get(url).map(res => res.json())
	      .subscribe(data => {
	        // this.TableData = this.TableData.concat(data);
	        console.log(data);
	      }),
	      err => {
	        console.log("Oops!");
	      }
	}
	loadDataFromOnline() {
		let userlocation = new google.maps.LatLng(this.mapData.latitude, this.mapData.longitude);
		// let distance = google.maps.places.RankBy.DISTANCE;
		let query = params[ this.pageId ]["query"];
		let request = {
				location: userlocation,
				// radius: "500",
				query: query
			};
		let $this = this;
		this.map = new google.maps.Map(document.createElement('div'), {
		          mapTypeId: google.maps.MapTypeId.ROADMAP,
		          center: userlocation, 
		          zoom: this.mapData.zoom
       		});
		let service = new google.maps.places.PlacesService(this.map);
		service.textSearch(request, function(results, status) {
			if (status != google.maps.places.PlacesServiceStatus.OK) { 
				alert(status);
	            return;
	        } else {
	        	$this.TableData = [];
				for (let i = 0; i < results.length; i++) {
					$this.calculateDistance(results[i]);
				}
			}
		});
	}
	calculateDistance(places) {
		//Lets's get the distance using the distance matrix
		var userLocation = new google.maps.LatLng(this.mapData.latitude, this.mapData.longitude);
		var placeDestinations = [places.geometry.location];
		var placeName = [places.name];
		var placeID = [places.place_id];
		var service = new google.maps.DistanceMatrixService();
		let $this = this;
		service.getDistanceMatrix(
			{		
				origins: [userLocation],
				destinations: placeDestinations,
				travelMode: google.maps.TravelMode.DRIVING,
				unitSystem: google.maps.UnitSystem.IMPERIAL,
				avoidHighways: false,
				avoidTolls: false
			}, 
			function placeDistance(response, status) {
				if (status != google.maps.DistanceMatrixStatus.OK) {
					alert('Error was: ' + status);
				} else {
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
							let image = 'assets/img/icons/Map-Marker-Ball-Blue.png';
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
					$this.ngZone.run(() => $this.TableData);
				}
			});
	}
	ngOnInit() {
		
	}
	clickedMarker(label: string, id: number){
		for (let i=0;i<this.TableData.length;i++)
		{
			if (id != i)
				this.TableData[i]['iw_open'] = false;
			else
				this.TableData[i]['iw_open'] = true;
		}
	}
	showDetails(m: any)
	{
		GlobalVars.setMapPlaceId(m.id);
		this.navCtrl.push(PlaceDetailsPage);
	}
	toggleResult(id: number){
		this.DataDisplay[id-1] = 'block';
		this.DataDisplay[2-id] = 'none';
	}
	ionViewDidLoad() {
		this.mapData = GlobalVars.getMapData();
		this.loadData();
	}

}
