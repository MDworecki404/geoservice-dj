import L from 'leaflet'
import { parkAreaLayer, natureReserveLayer } from './parkArea'
import {overlayBikeRoutes} from './bikeRoutes'
import { overlayWalkRoutes } from './walkRoutes'
import {overlayPlaces} from './places'
import $ from 'jquery'
import bikeIcon from '../assets/icons/bikeIcon.svg'
import walkingIcon from '../assets/icons/walkingIcon.svg'
import placesIcon from '../assets/icons/placesIcon.svg'
//import legend from './legend'

const displayMap = async () => {

    const basemap = L.tileLayer('http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {
            attribution: 'Autor: <b></i>Marek Dworecki</i><b>'
        }
    ); 
    const clickTolerance = L.canvas({
        tolerance: 5
    })

    const map = L.map('map', {
        layers: [basemap, parkAreaLayer],
        minZoom: 8,
        
        renderer: clickTolerance
    }).setView([51.35986770935379, 16.57109135732551], 12);
    
    



    const overlayLayers = {
        "Obszar parku ": parkAreaLayer,
        "Rezerwat przyrody Uroczysko Wrzosy <br><hr>": natureReserveLayer,
        ...overlayBikeRoutes, 
        ...overlayWalkRoutes,
        ...overlayPlaces
    }
    console.log(overlayLayers)
    

    const layerControl = L.control.layers(null, overlayLayers).addTo(map)
    $('<span id="mapTitle"><img class="bikeIcon"></img><b style="margin-left: 5px">Trasy rowerowe</b><span>').insertBefore('.leaflet-control-layers-overlays label:nth-child(3)');
    $('.bikeIcon').attr('src',`${bikeIcon}`).css('transform', 'translate(0px,25%)')
    $('<span id="mapTitle"><img class="walkingIcon"></img><b style="margin-left: 5px">Trasy piesze</b><span>').insertBefore('.leaflet-control-layers-overlays label:nth-child(9)');
    $('.walkingIcon').attr('src',`${walkingIcon}`).css('transform', 'translate(0px,25%)')
    $('<span id="mapTitle"><img width=20 class="placesIcon"></img><b style="margin-left: 5px">Miejsca</b><span>').insertBefore('.leaflet-control-layers-overlays label:nth-child(14)');
    $('.placesIcon').attr('src',`${placesIcon}`).css('transform', 'translate(0px,25%)')
    
    //Legend
    //legend()
    

}

export default displayMap