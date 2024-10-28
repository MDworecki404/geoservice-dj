<script>
import gsap from 'gsap';
import displayMap from '../scripts/displayMap.js'

const coverAnimation = () =>{
  gsap.to('.cover', {opacity: 0, duration: 2, delay: 0})
  gsap.to('.cover', {visibility: 'hidden', delay: 1})
}

export default {
  mounted: () => {
    displayMap()
    coverAnimation()
  }
}



</script>
<template lang="pug">
.cover
#map
.poisLegend
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
  height: 40vh;
  width: 25vw;
  max-height: 45vh;
  max-width: 90vw;
  position: absolute;
  z-index: 1000;
  bottom: 0;
  margin-right: 10px;
  right: 0;
  margin-bottom: 10px;
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-clip: padding-box;
  visibility: hidden;
  opacity: 0;
}



</style>