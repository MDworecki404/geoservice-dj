import L from 'leaflet'
import historicalPlaces from '../layers/POIS/miejsca_historyczne_zabytki.json'
import historicalIcon from '../assets/icons/historicalIcon.svg'

const HIcon = L.icon({
    iconUrl: historicalIcon,
    iconSize: [30,30]
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
                <br>
                <a target="_blank" href="${feature.properties.link}">LINK</a>
                
            `
        )
    }
    
})

const overlayPlaces = {
    "Miejsca historyczne": HistoricalPlacesLayer
}

export {overlayPlaces}