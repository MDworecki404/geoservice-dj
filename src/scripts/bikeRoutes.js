import L from 'leaflet'
import L_K_M_D_T from '../layers/bikeRoutes/lubiaz_krzydlina_mala_debno_tarchlice.json'
import S_W_W from '../layers/bikeRoutes/szlaki_wokol_wolowa.json'
import T_P_D_W from '../layers/bikeRoutes/trasa_przez_dworzec_wolow.json'
import T_R_123109 from '../layers/bikeRoutes/trasa_rowerowa_123109.json'
import U_W from '../layers/bikeRoutes/uroczysko_wrzosy.json'

const L_K_M_D_TLayer = L.geoJson(L_K_M_D_T , {
    onEachFeature: (feature, layer) => {
        layer.bindPopup(
            `
                <p><b>${feature.properties.Name}</b></p>
                <hr>
                <br>
                Długość trasy: ${feature.properties.dlugosc}
                <br>
                <a target="_blank" href="${feature.properties.link}">Link do trasy</a>
            `
        )
        layer.on('mouseover', function(e){
            e.target.setStyle({
                "weight": 4
            })
        })
        layer.on('mouseout', function(e){
            e.target.setStyle({
                "weight": 3
            })
        })
        layer.on('click', function(e){
            e.target.setStyle({
                "weight": 5
            })
        })
    },
    style: {
        "color": '#6a93e4',
        "dashArray": '10, 10',
        "weight": "3",
        
        
    }
})


const S_W_WLayer = L.geoJson(S_W_W , {
    onEachFeature: (feature, layer) => {
        layer.bindPopup(
            `
                <p><b>${feature.properties.Name}</b></p>
                <hr>
                <br>
                Długość trasy: ${feature.properties.dlugosc}
                <br>
                <a target="_blank" href="${feature.properties.link}">Link do trasy</a>
            `
        )
        layer.on('mouseover', function(e){
            e.target.setStyle({
                "weight": 4
            })
        })
        layer.on('mouseout', function(e){
            e.target.setStyle({
                "weight": 3
            })
        })
    },
    style: {
        "color": '#acc734',
        "dashArray": '10, 10',
        "weight": "3",
        
        
    }
})

const T_P_D_WLayer = L.geoJson(T_P_D_W , {
    onEachFeature: (feature, layer) => {
        layer.bindPopup(
            `
                <p><b>${feature.properties.Name}</b></p>
                <hr>
                <br>
                Długość trasy: ${feature.properties.dlugosc}
                <br>
                <a target="_blank" href="${feature.properties.link}">Link do trasy</a>
            `
        )
        layer.on('mouseover', function(e){
            e.target.setStyle({
                "weight": 4
            })
        })
        layer.on('mouseout', function(e){
            e.target.setStyle({
                "weight": 3
            })
        })
    },
    style: {
        "color": '#a8323c',
        "dashArray": '10, 10',
        "weight": "3",
        
        
    }
})

const T_R_123109Layer = L.geoJson(T_R_123109 , {
    onEachFeature: (feature, layer) => {
        layer.bindPopup(
            `
                <p><b>${feature.properties.Name}</b></p>
                <hr>
                <br>
                Długość trasy: ${feature.properties.dlugosc}
                <br>
                <a target="_blank" href="${feature.properties.link}">Link do trasy</a>
            `
        )
        layer.on('mouseover', function(e){
            e.target.setStyle({
                "weight": 4
            })
        })
        layer.on('mouseout', function(e){
            e.target.setStyle({
                "weight": 3
            })
        })
    },
    style: {
        "color": '#6d32a8',
        "dashArray": '10, 10',
        "weight": "3",
        
        
    }
})

const U_WLayer = L.geoJson(U_W , {
    onEachFeature: (feature, layer) => {
        layer.bindPopup(
            `
                <p><b>${feature.properties.Name}</b></p>
                <hr>
                <br>
                Długość trasy: ${feature.properties.dlugosc}
                <br>
                <a target="_blank" href="${feature.properties.link}">Link do trasy</a>
            `
        )
        layer.on('mouseover', function(e){
            e.target.setStyle({
                "weight": 4
            })
        })
        layer.on('mouseout', function(e){
            e.target.setStyle({
                "weight": 3
            })
        })
    },
    style: {
        "color": '#d642a5',
        "dashArray": '10, 10',
        "weight": "3",
        
        
    }
})

const bikeRoutesLayers = [
    L_K_M_D_TLayer,
    S_W_WLayer,
    T_P_D_WLayer,
    T_R_123109Layer,
    U_WLayer,
]

const bikeRoutesGroup = L.layerGroup(bikeRoutesLayers)

const overlayBikeRoutes = {
    "Uroczysko wrzosy": U_WLayer,
    "Trasa rowerowa nr 123109": T_R_123109Layer,
    "Trasa przez dworzec Wołów": T_P_D_WLayer,
    "Szlaki wokół Wołowa": S_W_WLayer,
    "Trasa Lubiąż-Krzydlina Mała-Dębno-Tarchlice": L_K_M_D_TLayer
}


export default bikeRoutesGroup