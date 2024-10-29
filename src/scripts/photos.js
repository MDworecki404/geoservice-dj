import photos from '../layers/photos/photos.json'
import photoIcon from '../assets/icons/photoIcon.svg'

const PIcon = L.icon({
    iconUrl: photoIcon,
    iconSize: [25,25]
})

const photosLayer = L.geoJSON(photos, {
    pointToLayer: (feature, latlng)=> L.marker(latlng, {icon: PIcon}),
    onEachFeature: (feature, layer) => {
        layer.bindPopup(
            `
            <a target="_blank" href='/photos/${feature.properties.name}'>
                <img style="min-width: 300px;max-width: 300px;" src='/photos/${feature.properties.name}'></img>
            </a>
            `
        )
    }
    
})

const overlayPhotos = {
    "Galeria zdjęć <br><hr>": photosLayer,
}

export {overlayPhotos}