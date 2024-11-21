<script>
import gsap from 'gsap';
import displayMap from '../scripts/displayMap.js'
import $ from 'jquery';
import { showPoisLegend } from '../scripts/POIS.js';

const coverAnimation = () =>{
  gsap.to('.cover', {opacity: 0, duration: 2, delay: 0})
  gsap.to('.cover', {visibility: 'hidden', delay: 1})
}

export default {
  mounted: () => {
    displayMap()
    coverAnimation()
    showPoisLegend()
    
  },
}

</script>
<template lang="pug">
.cover
#map
.poisLegend
  ul
    li 
      img(src='../assets/icons/archaeologicalIcon.svg')
      span Archeologia
    li 
      img(src='../assets/icons/attractionIcon.svg')
      span Atrakcje
    li 
      img(src='../assets/icons/benchIcon.svg')
      span Ławki
    li 
      img(src='../assets/icons/hotelIcon.svg')
      span Pensjonaty
    li 
      img(src='../assets/icons/huntingStandIcon.svg')
      span Wieże myśliwskie
    li 
      img(src='../assets/icons/memorialIcon.svg')
      span Memoriały
    li 
      img(src='../assets/icons/observationTowerIcon.svg')
      span Wieże obserwacyjne
    li 
      img(src='../assets/icons/picnicIcon.svg')
      span Miejsca piknikowe
  ul
    li 
      img(src='../assets/icons/pitchIcon.svg')
      span Boiska
    li 
      img(src='../assets/icons/postBoxIcon.svg')
      span Skrzynki pocztowe   
    li 
      img(src='../assets/icons/shelterIcon.svg')
      span Schroniska
    li 
      img(src='../assets/icons/crossIcon.svg')
      span Przydrożne krzyże
    li 
      img(src='../assets/icons/shrineIcon.svg')
      span Przydrożne kapliczki        
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
    max-height: 35vh;
  }
}



</style>