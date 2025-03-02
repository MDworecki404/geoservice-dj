import L from 'leaflet'
import T_A_O_W from '../layers/walkRoutes/tracks_azymut_okolice_wolowa.json'
import T_R from '../layers/walkRoutes/tracks_rudno.json'
import T_W_W_W from '../layers/walkRoutes/tracks_wolow_wrzosy_wolow.json'
import T_W from '../layers/walkRoutes/tracks_wrzosy.json'


const T_A_O_WLayer = L.geoJSON(T_A_O_W, {
    
    onEachFeature: (feature, layer) => {
        layer.bindPopup(
            `
                <p><b>${feature.properties.name}</b></p>
                <hr>
                <br>
                Długość trasy: ${feature.properties.dlugosc}km
                <br>
                <a target="_blank" href="${feature.properties.link}">Link do trasy</a>
            `
        )
        layer.on('mouseover', function(e){
            e.target.setStyle({
                "weight": 4,
                "color": 'yellow'
            })
        })
        layer.on('mouseout', function(e){
            e.target.setStyle({
                "weight": 3,
                "color": '#4d11d9'
            })
        })
    },
    style: {
        "color": '#4d11d9',
        "dashArray": '1, 5',
        "weight": "3",
        
        
    }
})
const T_RLayer = L.geoJSON(T_R, {
    
    onEachFeature: (feature, layer) => {
        layer.bindPopup(
            `
                <p><b>${feature.properties.name}</b></p>
                <hr>
                <br>
                Długość trasy: ${feature.properties.dlugosc}km
                <br>
                <a target="_blank" href="${feature.properties.link}">Link do trasy</a>
            `
        )
        layer.on('mouseover', function(e){
            e.target.setStyle({
                "weight": 4,
                "color": 'yellow'
            })
        })
        layer.on('mouseout', function(e){
            e.target.setStyle({
                "weight": 3,
                "color": '#2d4ded'
            })
        })
    },
    style: {
        "color": '#2d4ded',
        "dashArray": '1, 5',
        "weight": "3",
        
        
    }
})
const T_W_W_WLayer = L.geoJSON(T_W_W_W, {
    
    onEachFeature: (feature, layer) => {
        layer.bindPopup(
            `
                <p><b>${feature.properties.name}</b></p>
                <hr>
                <br>
                Długość trasy: ${feature.properties.dlugosc}km
                <br>
                <a target="_blank" href="${feature.properties.link}">Link do trasy</a>
            `
        )
        layer.on('mouseover', function(e){
            e.target.setStyle({
                "weight": 4,
                "color": 'yellow'
            })
        })
        layer.on('mouseout', function(e){
            e.target.setStyle({
                "weight": 3,
                "color": '#ff0162'
            })
        })
    },
    style: {
        "color": '#ff0162',
        "dashArray": '1, 5',
        "weight": "3",
        
        
    }
})

const T_WLayer = L.geoJSON(T_W, {
    
    onEachFeature: (feature, layer) => {
        layer.bindPopup(
            `
                <p><b>${feature.properties.name}</b></p>
                <hr>
                <br>
                Długość trasy: ${feature.properties.dlugosc}km
                <br>
                <a target="_blank" href="${feature.properties.link}">Link do trasy</a>
            `
        )
        layer.on('mouseover', function(e){
            e.target.setStyle({
                "weight": 4,
                "color": 'yellow'
            })
        })
        layer.on('mouseout', function(e){
            e.target.setStyle({
                "weight": 3,
                "color": '#ffaa01'
            })
        })
    },
    style: {
        "color": '#ffaa01',
        "dashArray": '1, 5',
        "weight": "3",
        
        
    }
})

const overlayWalkRoutes = {
    "Trasa na azymut w okolicach Wołowa <img class='TAOWimg legendimg'/>": T_A_O_WLayer,
    "Rudno <img class='TRimg legendimg'/>": T_RLayer,
    "Wołów - Wrzosy - Wołów <img class='TWWWimg legendimg'/>": T_W_W_WLayer,
    "Wrzosy koło Wołowa <img class='TWimg legendimg'/>": T_WLayer
}

export {overlayWalkRoutes}