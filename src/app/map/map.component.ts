import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet.awesome-markers';
import 'ionicons'; 
import 'leaflet-control-geocoder';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit, OnInit {
map!: L.Map;




constructor() {

 }



  ngAfterViewInit(): void {
    this.createMap();
  }

    createMap() {
const Tunisia ={
  lat:33.584800,
  lng : 9.322400,
};

const zoomlevel = 12;

this.map=L.map('map',{
  center:[Tunisia.lat, Tunisia.lng],
  zoom: zoomlevel
});

const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
 minZoom :5,
 maxZoom:17,
attribution : '&copy; <a href="https://wiki.openstreetmap.org/wiki/FR:Tunisie>OpenStreetMap</a>contributors'
 });
 mainLayer.addTo(this.map);
 this.addMarker(Tunisia);
 
}

redMarker = L.AwesomeMarkers.icon({
  icon: 'truck',
  markerColor: 'red',
  prefix: 'fa'
});

yellowMarker = L.AwesomeMarkers.icon({
  icon: 'truck',
  markerColor: 'orange',
  prefix: 'fa'
});

greenMarker = L.AwesomeMarkers.icon({
  icon: 'truck',
  markerColor: 'green',
  prefix: 'fa'
});

blueMarker = L.AwesomeMarkers.icon({
  icon: 'truck',
  markerColor: 'blue',
  prefix: 'fa'
});
addMarker (coords: { lat: any; lng: any; }){
  L.marker([36.800072, 10.187060], {
    title: 'Martainer',
    icon: this.redMarker
}).addTo(this.map).bindPopup('<b>Localización: </b> Martainer' + '<br /><b>Tipo: </b> Contador de ejes'),

L.marker([36.169750, 8.704470], {
    title: 'Granollers',
    icon: this.greenMarker
}).addTo(this.map).bindPopup('<b>Localización: </b> Granollers' + '<br /><b>Tipo: </b> Contador de ejes'),

L.marker([36.805809, 10.088530], {
    title: 'Vitoria',
    icon: this.yellowMarker
}).addTo(this.map).bindPopup('<b>Localización: </b> Vitoria' + '<br /><b>Tipo: </b> Contador de ejes')

L.marker([33.584800, 9.322400], {
  title: 'Vitora',
  icon: this.blueMarker
}).addTo(this.map).bindPopup('<b>Localización: </b> Vitoria' + '<br /><b>Tipo: </b> Contador de ejes')
 

var geocoder = L.Control.Geocoder.nominatim(),
    waypoints = [], // can be populated later
    routeControl = L.Routing.control({
        plan: L.Routing.plan(waypoints, {
                createMarker: function(i, wp) {
                    return L.marker(wp.latLng, {
                        draggable: true,
                    }).bindPopup("Some data for popup");
                },
            geocoder: geocoder,
            routeWhileDragging: false,
        })
    }).addTo(this.map);



 

}

 ngOnInit() {
  // ...
}
Getrouting(){
L.Routing.control({
  waypoints : [
     L.latLng(36.800072, 10.187060),
     L.latLng(36.169750, 8.704470)
   ],
   }).addTo(this.map);
 
}
 }
