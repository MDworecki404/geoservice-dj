import L from 'leaflet'
import parkAreaLayer from './parkArea';
import bikeRoutesLayers from './bikeRoutes';



const displayMap = async () => {

    const map = L.map('map').setView([51.35986770935379, 16.57109135732551], 12);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
    ).addTo(map);  

    parkAreaLayer.addTo(map)

    //Bike routes loading

    for(let i=0; i<bikeRoutesLayers.length; i++){
        bikeRoutesLayers[i].addTo(map)
    }
}

export default displayMap