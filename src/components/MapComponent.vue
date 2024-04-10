<script>
import gsap from 'gsap';
import displayMap from '../scripts/displayMap.js'
import '../../node_modules/leaflet/dist/leaflet.css'

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
</template>
<style scoped lang="scss">

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

</style>