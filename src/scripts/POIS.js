import POIS from '../layers/POIS/POIS_ALL.json'
import huntingStandIcon from '../assets/icons/huntingStandIcon.svg'
import archaeologicalIcon from '../assets/icons/archaeologicalIcon.svg'

const POISLayer = L.geoJSON(POIS, {
    pointToLayer: (feature, latlng) => {
        let iconUrl

        switch(feature.properties.fclass){
            case 'archaeological':
                iconUrl = archaeologicalIcon
                break
            case 'attraction':
                iconUrl = '/'
                break
            case 'bench':
                iconUrl = '/'
                break
            case 'guesthouse':
                iconUrl = '/'
                break
            case 'hunting_stand':
                iconUrl = huntingStandIcon
                break
            case 'memorial':
                iconUrl = '/'
                break
            case 'observation_tower':
                iconUrl = '/'
                break
            case 'picnic_site':
                iconUrl = '/'
                break
            case 'pitch':
                iconUrl = '/'
                break
            case 'post_box':
                iconUrl = '/'
                break
            case 'shelter':
                iconUrl = '/'
                break
            case 'tourist_info':
                iconUrl = '/'
                break
            case 'wayside_cross':
                iconUrl = '/'
                break
            case 'wayside_shrine':
                iconUrl = '/'
                break
        }

        const customIcon = L.icon({
            iconUrl: iconUrl,
            iconSize: [15,15]
        })

        return L.marker(latlng, {icon: customIcon})
    },
    onEachFeature: (feature, layer) => {
        layer.bindPopup(
            `
                <p><b>${feature.properties.fclass}</b></p>
                <hr>
                <br>
                ${feature.properties.name}
                
            `
        )
    }
    
})

const overlayPOIS = {
    "Punkty": POISLayer,
}

export {overlayPOIS}