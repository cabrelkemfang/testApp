import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
//import { } from '@types/googlemaps';

declare const google: any;

interface Marker {
    lat: number;
    lng: number;
    label?: string;
    draggable?: boolean;

}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'SWAG-PD';
    time: string;


    //   @ViewChild('gmap') gmapElement: any;
    //   map: google.maps.Map;

    //   ngOnInit() {
    //     var mapProp = {
    //       center: new google.maps.LatLng(4.159400, 9.236700),
    //       zoom: 15,
    //       mapTypeId: google.maps.MapTypeId.ROADMAP
    //     };
    //     this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    //     this.map.setMapTypeId("terrain") 
    //   }

    // }
    constructor() {
        setInterval(() => {
            let currenDate = new Date();
            this.time = currenDate.toDateString() + ' ' + currenDate.toLocaleString();
        }, 100)
    }
    ngOnInit() {

        var myLatlng = new google.maps.LatLng(4.159400, 9.236700);
        var mapOptions = {
            zoom: 15,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{
                "featureType": "water",
                "stylers": [{
                    "saturation": 43
                }, {
                    "lightness": -11
                }, {
                    "hue": "#0088ff"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "hue": "#ff0000"
                }, {
                    "saturation": -100
                }, {
                    "lightness": 99
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#808080"
                }, {
                    "lightness": 54
                }]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ece2d9"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ccdca1"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#767676"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#b8cb93"
                }]
            }, {
                "featureType": "poi.park",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.sports_complex",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.medical",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }]

        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "here"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    }


}



