import L from 'leaflet'
import L_K_M_D_T from '../layers/bikeRoutes/lubiaz_krzydlina_mala_debno_tarchlice.json'
import S_W_W from '../layers/bikeRoutes/szlaki_wokol_wolowa.json'
import T_P_D_W from '../layers/bikeRoutes/trasa_przez_dworzec_wolow.json'
import T_R_123109 from '../layers/bikeRoutes/trasa_rowerowa_123109.json'
import U_W from '../layers/bikeRoutes/uroczysko_wrzosy.json'

const L_K_M_D_TLayer = L.geoJson(L_K_M_D_T)

const S_W_WLayer = L.geoJson(S_W_W)

const T_P_D_WLayer = L.geoJson(T_P_D_W)

const T_R_123109Layer = L.geoJson(T_R_123109)

const U_WLayer = L.geoJson(U_W)

const bikeRoutesLayers = [
    L_K_M_D_TLayer,
    S_W_WLayer,
    T_P_D_WLayer,
    T_R_123109Layer,
    U_WLayer,
]

export default bikeRoutesLayers