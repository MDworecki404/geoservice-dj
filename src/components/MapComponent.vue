<script>
import gsap from 'gsap';
import displayMap from '../scripts/displayMap.js'
import $ from 'jquery';
import { showPoisLegend } from '../scripts/POIS.js';

const coverAnimation = () =>{
  gsap.to('.cover', {opacity: 0, duration: 2, delay: 0})
  gsap.to('.cover', {visibility: 'hidden', delay: 1})
}
const infoAnimation = () =>{
  gsap.to('.info', {opacity: 0, duration: 2, delay: 5})
  gsap.to('.info', {visibility: 'hidden', duration: 0, delay: 7})
}

export default {
  mounted: () => {
    displayMap()
    coverAnimation()
    showPoisLegend()
    infoAnimation()
  },
}

</script>
<template>
  <div class="info">Jeśli podkład mapowy się nie wyświetla - odśwież stronę (F5) lub wybierz jeden z panelu warstw</div>
  <div class="cover"></div> 
  <div id="map"></div>
  <router-link to="/"><img class="goBack" src="../assets/goBack.svg" /></router-link>
  <div class="poisLegend">
      <ul>
          <li> <img src="../assets/icons/archaeologicalIcon.svg" /><span>Archeologia</span></li>
          <li> <img src="../assets/icons/attractionIcon.svg" /><span>Atrakcje</span></li>
          <li> <img src="../assets/icons/benchIcon.svg" /><span>Ławki</span></li>
          <li> <img src="../assets/icons/hotelIcon.svg" /><span>Pensjonaty</span></li>
          <li> <img src="../assets/icons/huntingStandIcon.svg" /><span>Wieże myśliwskie</span></li>
          <li> <img src="../assets/icons/memorialIcon.svg" /><span>Memoriały</span></li>
          <li> <img src="../assets/icons/observationTowerIcon.svg" /><span>Wieże obserwacyjne</span></li>
          <li> <img src="../assets/icons/picnicIcon.svg" /><span>Miejsca piknikowe</span></li>
      </ul>
      <ul>
          <li> <img src="../assets/icons/pitchIcon.svg" /><span>Boiska</span></li>
          <li> <img src="../assets/icons/postBoxIcon.svg" /><span>Skrzynki pocztowe   </span></li>
          <li> <img src="../assets/icons/shelterIcon.svg" /><span>Schroniska</span></li>
          <li> <img src="../assets/icons/crossIcon.svg" /><span>Przydrożne krzyże</span></li>
          <li> <img src="../assets/icons/shrineIcon.svg" /><span>Przydrożne kapliczki </span></li>
      </ul>
  </div>    
</template>
<style scoped lang="scss">
@import url('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
#map{
	width: 100vw;
	height: 100vh;
  border: none;
}

.cover{
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(79, 178, 219, 1);
}
.poisLegend{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 40vh;
  min-width: 25vw;
  max-height: 45vh;
  max-width: 90vw;
  position: absolute;
  z-index: 1000;
  bottom: 0;
  margin-right: 10px;
  right: 0;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.527);
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-clip: padding-box;
  visibility: hidden;
  opacity: 0;
  display: flex;
  overflow-y: scroll;
  padding-right: 10px;

  ul li{
    list-style-type: none;
  }

  img{
    width: 35px;
    height: 35px;
    position: relative;
    top: calc(35px / 3);
  }
  span{
    padding-left: 7.5px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    max-height: 25vh;
  }
}

.goBack{
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px;
  z-index: 1000 !important;
  width: 50px;
}

.info{
  position: absolute;
  width: fit-content;
  height: fit-content;
  background-color: rgba(39, 39, 39, 0.507);
  z-index: 1000000 !important;
  bottom: 8%;
  left: 0;
  right: 0;
  margin-inline: auto;
  color: white;
  text-align: center;
  border: 1px solid black;
  opacity: 1;
}
</style>