import L from 'leaflet'
import parkArea from '../layers/parkArea.json'

const parkAreaStyle = {
    "fillColor": '#ffffff',
    "color": 'blue',
    "fillOpacity": 0
}
const parkAreaLayer = L.geoJson(parkArea, {
    style: parkAreaStyle
})



export default parkAreaLayer