import L from 'leaflet'
import parkArea from '../layers/parkArea.json'

const parkAreaLayer = L.geoJson(parkArea, {
    style: {
    "fill": false,
    "color": '#4389d4',
    "fillOpacity": 0
    }
})



export default parkAreaLayer