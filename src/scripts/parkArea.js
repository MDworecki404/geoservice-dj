import L from 'leaflet'
import parkArea from '../layers/parkArea.json'

const parkAreaStyle = {
    "fillColor": 'none',
    "color": '#4389d4',
    "fillOpacity": 0
}
const parkAreaLayer = L.geoJson(parkArea, {
    style: parkAreaStyle
})



export default parkAreaLayer