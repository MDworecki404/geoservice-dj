import L from 'leaflet'
import parkAreaLayer from './parkArea';
//import bikeRoutesGroup from './bikeRoutes';
import {bikeRoutesLayers, overlayBikeRoutes} from './bikeRoutes'
import $ from 'jquery'

import huntingStands from '../layers/POIS/hunting_stands.json'

const displayMap = async () => {

    const basemap = L.tileLayer('http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {
            //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
    ); 

    const map = L.map('map', {
        layers: [basemap, ...bikeRoutesLayers]
    }).setView([51.35986770935379, 16.57109135732551], 12);
    

    const HS = L.geoJSON(huntingStands)

    parkAreaLayer.addTo(map)
    parkAreaLayer.setZIndex(-1)
    

    const bikeRoutesGroup = L.layerGroup(bikeRoutesLayers)
    const layerControl = L.control.layers(null, overlayBikeRoutes).addTo(map)
    layerControl.addOverlay(parkAreaLayer, 'Obszar parku <br><hr>')
    layerControl.addOverlay(HS, 'wieze')
    $('<span id="mapTitle"><b>Trasy Rowerowe</b><span>').insertBefore('.leaflet-control-layers-overlays label:nth-child(1)');
    $('<span id="mapTitle"><b>POIS</b><span>').insertBefore('.leaflet-control-layers-overlays label:nth-child(8)');

}

export default displayMap