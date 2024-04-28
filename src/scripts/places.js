import L from 'leaflet'
import HS from '../layers/POIS/hunting_stands.json'
import huntingStandIcon from '../assets/icons/huntingStandIcon.svg'

const HSIcon = L.icon({
    iconUrl: huntingStandIcon,
    iconSize: [15,15]
})
const HuntingStandLayer = L.geoJSON(HS, {
    pointToLayer: (feature, latlng)=> L.marker(latlng, {icon: HSIcon})
    
})

const overlayPlaces = {
    "Wieże myśliwskie": HuntingStandLayer
}

export {overlayPlaces}