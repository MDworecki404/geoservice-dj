<script>

    import gsap from 'gsap';

    const loadTitle = () =>{
        gsap.to('.main--title', {opacity: 1, duration: 0.0000001})
        gsap.to('#AboutPark', {opacity: 0, duration: 0.0000001})
        gsap.to('#AboutProject', {opacity: 0, duration: 0.0000001})
    }

    export default {
        data() {
            return {
                animState: 0,
            }
        },
        methods: {
            gotoMapHover(){
                gsap.to('.earth', {scale: 1.1})
            },
            gotoMapHoverOut(){
                gsap.to('.earth', {scale: 1})
            },
            infoAnimationPark(){
                if(this.animState===0){
                    this.animState = 1
                    gsap.to('.main--title', {opacity: 0, duration: 0.5})
                    gsap.to('#AboutPark', {visibility: 'visible', opacity: 1, duration: 1, delay: 0.5})
                } else if(this.animState===2){
                    this.animState = 1
                    gsap.to('#AboutProject', {opacity: 0, duration: 0.5})
                    gsap.to('#AboutProject', {visibility: 'hidden', delay: 0.5})
                    gsap.to('#AboutPark', {visibility: 'visible', opacity: 1, duration: 1, delay: 0.5})
                }
            },
            infoAnimationProject(){
                if(this.animState===0){
                    this.animState = 2
                    gsap.to('.main--title', {opacity: 0, duration: 0.5})
                    gsap.to('#AboutProject', {visibility: 'visible', opacity: 1, duration: 1, delay: 0.5})
                } else if(this.animState===1){
                    this.animState = 2
                    gsap.to('#AboutPark', {opacity: 0, duration: 0.5})
                    gsap.to('#AboutPark', {visibility: 'hidden', delay: 0.5})
                    gsap.to('#AboutProject', {visibility: 'visible', opacity: 1, duration: 1, delay: 0.5})
                }
            },
            
        },
        mounted: () => {
            loadTitle()
        }
    }
    

</script>

<template>
<div id="view">
    <div class="nav">
            <ul>
                <li><span @click="infoAnimationPark">O parku</span></li>
                <li><span @click="infoAnimationProject">O projekcie</span></li>
            </ul>
        </div>
    <div id="main">
        <div class="main--title">
            <span>Park Krajobrazowy<br>Dolina Jezierzycy</span>
        </div>
    </div>
    <div id="gotoMap">
        <router-link to="/map">
            <img @mouseover="gotoMapHover" @mouseleave="gotoMapHoverOut" class="earth" src="../assets/earth.png">
        </router-link>
        <span> Przejdź do mapy</span>
    </div>
    <div id="AboutPark">
        <article class="AboutParkArticle">
            Park krajobrazowy utworzony w 1994 (pow. 7953 ha) położony w województwie dolnośląskim, w powiecie wołowskim, na północny zachód od Wołowa, na pograniczu Niziny Śląskiej oraz Wału Trzebnickiego w dorzeczu Jezierzycy, do której na obszarze parku wpływa mały prawobrzeżny dopływ Juszka.
        </article>
    </div>
    <div id="AboutProject">
        <article class="AboutProjectArticle">
            Projekt jest wynikiem pracy inżynierskiej i powstał w celach edukacyjnych.<br><br>
            Do stworzenia aplikacji użyto danych pochodzących z następujących źródeł:
            <span>
                <ul>
                    <li>
                        Ikony i obrazy wektorowe: <a target="_blank" href='https://www.svgrepo.com'>SVG Repo</a>
                    </li>
                    <li>
                        Trasy piesze i rowerowe: 
                        <a target="_blank" href="https://maps.app.goo.gl/r2QdAkBV5SWGH4mH7">GoogleMaps </a>
                        <a target="_blank" href="https://www.traseo.pl">Traseo </a>
                        <a target="_blank" href="https://www.komoot.com/pl-pl">Komoot </a>
                        <a target="_blank" href="https://velomapa.pl">Velomapa.pl </a>
                    </li>
                    <li>
                        Miejsca historyczne: <a target="_blank" href="https://maps.app.goo.gl/r2QdAkBV5SWGH4mH7">Google Maps</a>
                    </li>
                    <li>
                        Punkty użyteczności publicznej(POIS): <a target="_blank" href="https://download.geofabrik.de/europe/poland/dolnoslaskie.html">OpenStreetMap</a>
                    </li>
                    <li>
                        Obszar parku oraz obszar rezerwatu przyrody: <a href="https://www.eea.europa.eu/en/datahub/datahubitem-view/f60cec02-6494-4d08-b12d-17a37012cb28">European Environment Agency</a>
                    </li>
                </ul>
            </span>
        </article>
    </div>
    <video class="backgroundVideo" autoplay muted loop>
        <source src="../assets/Least.mp4" type="video/mp4">
    </video>
</div>
</template>
<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
        color: white;
    }

    #view{
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        background-color: #1696ffb2;
        width: 100vw;
        height: 100vh;
    }

    .backgroundVideo{
        position: fixed;
        left: 0;
        top: 0;
        z-index: -1;
        width: 100vw;

        @media (min-aspect-ratio: 16/9){
            width: 100vw;
            height: auto;
        }
        @media (max-aspect-ratio: 16/9){
            width: auto;
            height: 100vh;
        }
    }

    .nav{
        width: 100vw;
        height: 10vh;
        position: fixed;
        font-size: 3vh;
        z-index: 1000;
        
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            align-content: center;
            

            li{
                list-style-type: none;
                cursor: pointer;

            }
        }
        
    }
    #main{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;

        .main--title{
            font-size: 5vw;
            text-align: center;

            @media screen and (max-width: 909px){
                font-size: 7vw;
            }
            @media screen and (max-width: 500px){
                font-size: 8.5vw;
            }
        }
    }
    #gotoMap{
        width: 100vw;
        height: 20vh;
        position: fixed;
        bottom: 0;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin-bottom: 2%;
        z-index: 1000;

        a{
            height: 75%;
            cursor: pointer;

            img{
                height: 100%;
            }
        }
        span{
            height: 25%;
            font-size: 3vh;
        }
        
    }
    #AboutPark{
        position: absolute;
        visibility: hidden;
        width: 100vw;
        height: 100vh;
        opacity: 0;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        font-size: 4vh;
        z-index: 100;

        @media screen and (max-width: 587px){
            font-size: 3.5vh;
        }
        @media screen and (max-width: 469px){
            font-size: 3vh;
        }
        @media screen and (max-width: 321px){
            font-size: 2.5vh;
        }

        .AboutParkArticle{
            width: 90%;
        }

    }
    #AboutProject{
        position: absolute;
        visibility: hidden;
        width: 100vw;
        height: 100vh;
        opacity: 0;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        font-size: 4vh;
        z-index: 100;

        @media screen and (max-width: 1352px){
            font-size: 3vh;
        }
        @media screen and (max-width: 515px){
            font-size: 2.7vh;
        }
        @media screen and (max-width: 446px){
            font-size: 2.3vh;
        }

        .AboutProjectArticle{
            width: 85vw;
            ul li{
                a{
                    color: #025da8;
                    font-style: italic;
                    transition: all 0.5s;

                    &:hover{
                        text-shadow: #fff 1px 0px 10px;
                    }
                }
            }
        }
    }

    
</style>
