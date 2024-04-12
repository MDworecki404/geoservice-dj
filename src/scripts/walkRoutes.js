import L from 'leaflet'
import T_A_O_W from '../layers/walkRoutes/tracks_azymut_okolice_wolowa.json'
import T_R from '../layers/walkRoutes/tracks_rudno.json'
import T_W_W_W from '../layers/walkRoutes/tracks_wolow_wrzosy_wolow.json'
import T_W from '../layers/walkRoutes/tracks_wrzosy.json'

const clickTolerance = L.canvas({
    tolerance: 5
})

const T_A_O_WLayer = L.geoJSON(T_A_O_W, {
    renderer: clickTolerance,
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
                "color": '#a8323c'
            })
        })
    },
    style: {
        "color": '#a8323c',
        "dashArray": '10, 10',
        "weight": "3",
        
        
    }
})
const T_RLayer = L.geoJSON(T_R, {
    renderer: clickTolerance,
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
                "color": '#a8323c'
            })
        })
    },
    style: {
        "color": '#a8323c',
        "dashArray": '10, 10',
        "weight": "3",
        
        
    }
})
const T_W_W_WLayer = L.geoJSON(T_W_W_W, {
    renderer: clickTolerance,
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
                "color": '#a8323c'
            })
        })
    },
    style: {
        "color": '#a8323c',
        "dashArray": '10, 10',
        "weight": "3",
        
        
    }
})

const T_WLayer = L.geoJSON(T_W, {
    renderer: clickTolerance,
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
                "color": '#a8323c'
            })
        })
    },
    style: {
        "color": '#a8323c',
        "dashArray": '10, 10',
        "weight": "3",
        
        
    }
})

const overlayWalkRoutes = {
    "Trasa na azymut w okolicach Wołowa": T_A_O_WLayer,
    "Rudno": T_RLayer,
    "Wołów - Wrzosy - Wołów": T_W_W_WLayer,
    "Wrzosy koło Wołowa": T_WLayer
}

export {overlayWalkRoutes}