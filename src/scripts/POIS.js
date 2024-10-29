import POIS from '../layers/POIS/POIS_ALL.json'
import huntingStandIcon from '../assets/icons/huntingStandIcon.svg'
import archaeologicalIcon from '../assets/icons/archaeologicalIcon.svg'
import attractionIcon from '../assets/icons/attractionIcon.svg'
import benchIcon from '../assets/icons/benchIcon.svg'
import hotelIcon from '../assets/icons/hotelIcon.svg'
import memorialIcon from '../assets/icons/memorialIcon.svg'
import observationTowerIcon from '../assets/icons/observationTowerIcon.svg'
import picnicIcon from '../assets/icons/picnicIcon.svg'
import pitchIcon from '../assets/icons/pitchIcon.svg'
import postBoxIcon from '../assets/icons/postBoxIcon.svg'
import shelterIcon from '../assets/icons/shelterIcon.svg'
import touristInfoIcon from '../assets/icons/touristInfoIcon.svg'
import crossIcon from '../assets/icons/crossIcon.svg'
import shrineIcon from '../assets/icons/shrineIcon.svg'
import { layerControl } from './displayMap'
import $ from 'jquery'
import gsap from 'gsap'


const POISLayer = L.geoJSON(POIS, {
    pointToLayer: (feature, latlng) => {
        let iconUrl
        let iconSize

        switch(feature.properties.fclass){
            case 'archaeological':
                iconUrl = archaeologicalIcon
                iconSize = [25,25]
                break
            case 'attraction':
                iconUrl = attractionIcon
                iconSize = [25,25]
                break
            case 'bench':
                iconUrl = benchIcon
                iconSize = [35,35]
                break
            case 'guesthouse':
                iconUrl = hotelIcon
                iconSize = [25,25]
                break
            case 'hunting_stand':
                iconUrl = huntingStandIcon
                iconSize = [20,20]
                break
            case 'memorial':
                iconUrl = memorialIcon
                iconSize = [25,25]
                break
            case 'observation_tower':
                iconUrl = observationTowerIcon
                iconSize = [25,25]
                break
            case 'picnic_site':
                iconUrl = picnicIcon
                iconSize = [25,25]
                break
            case 'pitch':
                iconUrl = pitchIcon
                iconSize = [25,25]
                break
            case 'post_box':
                iconUrl = postBoxIcon
                iconSize = [25,25]
                break
            case 'shelter':
                iconUrl = shelterIcon
                iconSize = [25,25]
                break
            case 'tourist_info':
                iconUrl = touristInfoIcon
                iconSize = [25,25]
                break
            case 'wayside_cross':
                iconUrl = crossIcon
                iconSize = [25,25]
                break
            case 'wayside_shrine':
                iconUrl = shrineIcon
                iconSize = [25,25]
                break
        }

        const customIcon = L.icon({
            iconUrl: iconUrl,
            iconSize: iconSize
        })

        return L.marker(latlng, {icon: customIcon})
    },
    onEachFeature: (feature, layer) => {
        layer.bindPopup(
            `
                <p><b>${feature.properties.fclass_pl}</b></p>
                <hr>
                ${feature.properties.name}
                
            `
        )
    },
    
    
})

const overlayPOIS = {
    "Punkty użyteczności publicznej": POISLayer,
}

const showPoisLegend = () => {
    $('.leaflet-control-layers-overlays label:nth-child(17) span .leaflet-control-layers-selector').on('click', function(){
        const poisCheck = $('.leaflet-control-layers-overlays label:nth-child(17) span .leaflet-control-layers-selector').is(":checked")
        if(poisCheck==true){
            gsap.to('.poisLegend', {visibility: "visible"})
            gsap.to('.poisLegend', {opacity: 1, delay: 0.1, duration: 0.5})
        }
        else{
            gsap.to('.poisLegend', {opacity: 0, duration: 0.5})
            gsap.to('.poisLegend', {visibility: "hidden", delay: 0.5})
        }
    })
}





export {overlayPOIS, showPoisLegend}