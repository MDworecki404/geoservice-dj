import L from 'leaflet'
import parkAreaLayer from './parkArea';
import {overlayBikeRoutes} from './bikeRoutes'
import { overlayWalkRoutes } from './walkRoutes';
import $ from 'jquery'
import huntingStands from '../layers/POIS/hunting_stands.json'
import legend from './legend';

const displayMap = async () => {

    const basemap = L.tileLayer('http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {
            //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
    
    

    const HS = L.geoJSON(huntingStands)


    const overlayLayers = {
        "Obszar parku <br><hr>": parkAreaLayer,
        ...overlayBikeRoutes, 
        ...overlayWalkRoutes}
    console.log(overlayLayers)
    

    const layerControl = L.control.layers(null, overlayLayers).addTo(map)
    layerControl.addOverlay(HS, 'wieze')
    $('<span id="mapTitle"><b>Trasy rowerowe</b><span>').insertBefore('.leaflet-control-layers-overlays label:nth-child(2)');
    $('<span id="mapTitle"><b>Trasy piesze</b><span>').insertBefore('.leaflet-control-layers-overlays label:nth-child(8)');
    $('<span id="mapTitle"><b>Miejsca</b><span>').insertBefore('.leaflet-control-layers-overlays label:nth-child(13)');
    
    //Legend
    legend()
    

}

export default displayMap