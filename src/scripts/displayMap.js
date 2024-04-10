import L from 'leaflet'
import layers from './layers';



const displayMap = async () => {

    const map = L.map('map').setView([51.35986770935379, 16.57109135732551], 12);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
    ).addTo(map);  

    for(let i=0; i<layers.length; i++){
        layers[i].addTo(map)
    }
}

export default displayMap