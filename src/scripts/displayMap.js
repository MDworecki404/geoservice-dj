import L from 'leaflet'
import "leaflet.locatecontrol"
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css"
import { parkAreaLayer, natureReserveLayer } from './parkArea'
import {overlayBikeRoutes} from './bikeRoutes'
import { overlayWalkRoutes } from './walkRoutes'
import {overlayPlaces} from './places'
import { overlayPOIS } from './POIS'
import $ from 'jquery'
import bikeIcon from '../assets/icons/bikeIcon.svg'
import walkingIcon from '../assets/icons/walkingIcon.svg'
import placesIcon from '../assets/icons/placesIcon.svg'
import { overlayPhotos } from './photos'
import '../plugins/ActiveLayers'

const hybrid = L.tileLayer(
    'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', 
    {
    attribution: 'Autor: <b></i>Marek Dworecki</i><b>'
}
);
const osm = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
    attribution: 'Autor: <b></i>Marek Dworecki</i><b>'
}
);
const satellite = L.tileLayer(
    'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}',
    {
    attribution: 'Autor: <b></i>Marek Dworecki</i><b>'
}
);
const terrain = L.tileLayer(
    'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}',
    {
    attribution: 'Autor: <b></i>Marek Dworecki</i><b>'
}
);   
const clickTolerance = L.canvas({
tolerance: 5
})
const overlayLayers = {
"Obszar parku ": parkAreaLayer,
"Rezerwat przyrody Uroczysko Wrzosy": natureReserveLayer,
...overlayPhotos,
...overlayBikeRoutes, 
...overlayWalkRoutes,
...overlayPlaces,
...overlayPOIS,
}
const basemapLayers = {
"OpenStreetMap": osm,
"Mapa hybrydowa": hybrid,
"Satelita": satellite,
"Teren": terrain
}
const layerControl = L.control.activeLayers(basemapLayers, overlayLayers)

const displayMap = async () => {

    const map = L.map('map', {
        layers: [osm, parkAreaLayer],
        minZoom: 8,
        
        renderer: clickTolerance
    }).setView([51.35986770935379, 16.57109135732551], 12);

    

    L.control.locate({
        showPopup: false,
        strings: {
            title:'Pokaż moją pozycję'
        }
    }).addTo(map)
    layerControl.addTo(map)

    //const layerControl = L.control.activeLayers(basemapLayers, overlayLayers).addTo(map)
    $('<span id="mapTitle"><img class="bikeIcon"></img><b style="margin-left: 5px">Trasy rowerowe</b><span>').insertBefore('.leaflet-control-layers-overlays label:nth-child(4)');
    $('.bikeIcon').attr('src',`${bikeIcon}`).css('transform', 'translate(0px,25%)')
    $('<span id="mapTitle"><img class="walkingIcon"></img><b style="margin-left: 5px">Trasy piesze</b><span>').insertBefore('.leaflet-control-layers-overlays label:nth-child(10)');
    $('.walkingIcon').attr('src',`${walkingIcon}`).css('transform', 'translate(0px,25%)')
    $('<span id="mapTitle"><img width=20 class="placesIcon"></img><b style="margin-left: 5px">Miejsca</b><span>').insertBefore('.leaflet-control-layers-overlays label:nth-child(15)');
    $('.placesIcon').attr('src',`${placesIcon}`).css('transform', 'translate(0px,25%)')
    
}

export default displayMap
export {layerControl}