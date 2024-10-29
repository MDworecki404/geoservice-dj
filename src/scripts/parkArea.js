import L from 'leaflet'
import parkArea from '../layers/parkArea.json'
import natureReserve from '../layers/rezerwat_uroczysko.json'
import popupImage from '../assets/uroczysko_wrzosy/popupImage.jpg'

const parkAreaLayer = L.geoJson(parkArea, {
    style: {
    "color": '#4389d4',
    }
})
const natureReserveLayer = L.geoJson(natureReserve, {
    onEachFeature: (feature, layer) => {
        layer.bindPopup(
            `
                <p><b>${feature.properties.NAME}</b></p>
                <hr>
                <br>
                <img style="width: 300px" src=${popupImage}></img>
                <br>
                <p>${feature.properties.description}</p>
            `
        ),
        layer.on('mouseover', function(e){
            e.target.setStyle({
                "weight": 2,
                "color": 'yellow'
            })
        })
        layer.on('mouseout', function(e){
            e.target.setStyle({
                "weight": .5,
                "color": '#117d44',
                
            })
        })
    },
    style: {
        "fillColor": '#38e488',
        "color": '#117d44',
        "fillOpacity": 0.1,
        "weight": .5
    }
})


export {parkAreaLayer, natureReserveLayer}