import L from 'leaflet'
import parkAreaLayer from './parkArea';
import bikeRoutesGroup from './bikeRoutes';



const displayMap = async () => {

    const basemap = L.tileLayer('http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {
            //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
    ); 

    const map = L.map('map', {
        layers: [basemap, bikeRoutesGroup]
    }).setView([51.35986770935379, 16.57109135732551], 12);
    
     

    parkAreaLayer.addTo(map)

    const overlayBikeRoutes = {
        "Trasy rowerowe": bikeRoutesGroup
    }
    const layerControl = L.control.layers(null, overlayBikeRoutes).addTo(map)
    

}

export default displayMap