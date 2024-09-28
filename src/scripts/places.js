import L from 'leaflet'
import HS from '../layers/POIS/hunting_stands.json'
import huntingStandIcon from '../assets/icons/huntingStandIcon.svg'
import historicalPlaces from '../layers/POIS/miejsca_historyczne_zabytki.json'
import historicalIcon from '../assets/icons/historicalIcon.svg'

const HSIcon = L.icon({
    iconUrl: huntingStandIcon,
    iconSize: [15,15]
})
const HIcon = L.icon({
    iconUrl: historicalIcon,
    iconSize: [20,20]
})
const HuntingStandLayer = L.geoJSON(HS, {
    pointToLayer: (feature, latlng)=> L.marker(latlng, {icon: HSIcon})
    
})

const HistoricalPlacesLayer = L.geoJSON(historicalPlaces, {
    pointToLayer: (feature, latlng)=> L.marker(latlng, {icon: HIcon}),
    onEachFeature: (feature, layer) => {
        layer.bindPopup(
            `
                <p><b>${feature.properties.nazwa}</b></p>
                <hr>
                <br>
                ${feature.properties.opis}
                
            `
        )
    }
    
})

const overlayPlaces = {
    "Wieże myśliwskie": HuntingStandLayer,
    "Miejsca historyczne": HistoricalPlacesLayer
}

export {overlayPlaces}