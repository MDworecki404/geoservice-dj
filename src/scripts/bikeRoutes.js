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
                "color": '#1154d9',
                
            })
        })
    },
    style: {
        "color": '#1154d9',
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
                "color": '#e67d22',
                
            })
        })
    },
    style: {
        "color": '#e67d22',
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

const T_R_123109Layer = L.geoJson(T_R_123109 , {
    
    onEachFeature: (feature, layer) => {
        layer.bindPopup(
            `
                <p><b>${feature.properties.Name}</b></p>
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
                "color": '#6d32a8'
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
                "color": '#d642a5',
            })
        })
    },
    style: {
        "color": '#d642a5',
        "dashArray": '10, 10',
        "weight": "3",      
        
    }
})





const overlayBikeRoutes = {
    "Uroczysko wrzosy <img class='UWimg legendimg'/>": U_WLayer,
    "Trasa rowerowa nr 123109 <img class='TR123109img legendimg'/>": T_R_123109Layer,
    "Trasa przez dworzec Wołów <img class='TPDWimg legendimg'/>": T_P_D_WLayer,
    "Szlaki wokół Wołowa <img class='SWWimg legendimg'/>": S_W_WLayer,
    "Trasa Lubiąż-Krzydlina Mała-Dębno-Tarchlice <img class='LKMDTimg legendimg'/><hr>": L_K_M_D_TLayer
}



export {overlayBikeRoutes}