<script>

    import gsap from 'gsap';
    import ScrollToPlugin from 'gsap/ScrollToPlugin';
    gsap.registerPlugin(ScrollToPlugin)

    const enterAnimation = () =>{
        gsap.to('.main--title', {opacity: 1, duration: 2, delay: 0.2, ease: "power1.in"})
    }


    export default {
        data(){
            return {
                parkInfo: '',
                animState: 0
            }
        },
        methods: {
            gotoMapHover(){
                gsap.to('.earth', {scale: 1.1, rotateY: 180})
                gsap.to('.pin', {y: -50})
            },
            gotoMapHoverOut(){
                gsap.to('.earth', {scale: 1, rotateY: 0})
                gsap.to('.pin', {y: 0, ease: "bounce.out"})
            },
            gotoAbout(){
                const scrollAbout = document.querySelector('#AboutPark')
                gsap.to(window, {duration: 1, scrollTo: scrollAbout})
                
            },
            gotoProject(){
                const scrollProject = document.querySelector('#AboutProject')
                gsap.to(window, {duration: 1, scrollTo: scrollProject})
                
            },
                
        },
        mounted: ()=>{
            enterAnimation()
        }
    }
    

</script>

<template>
<div id="view">
    <div id="main">
        <div class="main--nav">
            <ul>
                <li><span @click="gotoAbout">O parku</span></li>
                <li><span @click="gotoProject">O projekcie</span></li>
            </ul>
        </div>
        <div @load="enterAnimation" class="main--title">
            Park Krajobrazowy<br>Dolina Jezierzycy
        </div>
        <div class="main--gotoMap">
            
                <div @mouseover="gotoMapHover" @mouseleave="gotoMapHoverOut" class="button">
                    <router-link to="/map">
                        <img class="earth" src="../assets/earth.png">
                        <img class="pin" src="../assets/pin.png">
                    </router-link>
                </div>
            
        </div>
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

<style scoped lang="scss">

@media screen and (min-width: 1281px) {

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

    #main{
        
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1696ffb2;
        display: flex;
        flex-direction: column;
    }
    .main--nav{
        width: 100%;
        height: 15%;
        color: white;
        font-size: 1.5vw;
        position: fixed;
        z-index: 100;

        ul{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            list-style-type: none;
            margin: 0;
            padding: 0;
            padding-top: 1%;

            li{
                width: 50%;
                text-align: center;

                span:hover{
                    cursor: pointer;
                    color: rgb(194, 194, 194);
                    transition: 0.2s all ease-in-out;
                }
            }
        }
    }
    .main--title{
        width: 100vw;
        height: 100%;
        color: white;
        display: flex;
        justify-content: center;
        text-align: center;
        font-size: 5vw;
        padding-top: 16%;
        opacity: 0;
    }
    .main--gotoMap{
        width: 100vw;
        height:25%;
        position: fixed;
        bottom: 0;
        
        .button{
            margin-left: auto;
            margin-right: auto;
            
            height: 100%;
            width: 128px;
            display: flex;
            

            img{
                position: fixed;
                width: 128px;
                height: 128px;
                cursor: pointer;
                
                &:first-child{
                    margin-top: 3%;
                }
            }
            
        }
    }

    #AboutPark{
        
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1696ffb2;
        display: flex;
        flex-direction: column;

        .AboutParkArticle{
            width: 90vw;
            height: 80vh;
            margin-top: 10vh;
            display: flex;
            padding-left: 5vw;
            padding-right: 5vw;
            color: white;
            font-size: 32px;
            padding-top: 15%;

        }
    }
    #AboutProject{
        
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1696ffb2;
        display: flex;
        flex-direction: column;

        .AboutProjectArticle{
            width: 90vw;
            height: 80vh;
            margin-top: 10vh;
            display: flex;
            padding-left: 5vw;
            padding-right: 5vw;
            color: white;
            font-size: 32px;
            padding-top: 8%;
            flex-direction: column;

            a{
                color: rgb(23, 75, 124);
                font-style: italic;
            }

        }
    }
}
</style>
<style scoped lang="scss">
    @media screen and (max-width: 1280px) {

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

    #main{
        
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1696ffb2;
        display: flex;
        flex-direction: column;
    }
    .main--nav{
        width: 100%;
        height: 15%;
        color: white;
        font-size: 2vw;
        position: fixed;
        z-index: 100;

        ul{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            list-style-type: none;
            margin: 0;
            padding: 0;
            padding-top: 1%;

            li{
                width: 50%;
                text-align: center;

                span:hover{
                    cursor: pointer;
                    color: rgb(194, 194, 194);
                    transition: 0.2s all ease-in-out;
                }
            }
        }
    }
    .main--title{
        width: 100vw;
        height: 100%;
        color: white;
        display: flex;
        justify-content: center;
        text-align: center;
        font-size: 6vw;
        padding-top: 20%;
        opacity: 0;
    }
    .main--gotoMap{
        width: 100vw;
        height:25%;
        position: fixed;
        bottom: 0;
        
        .button{
            margin-left: auto;
            margin-right: auto;
            
            height: 100%;
            width: 128px;
            display: flex;
            

            img{
                position: fixed;
                width: 128px;
                height: 128px;
                cursor: pointer;
                
                &:first-child{
                    margin-top: 3%;
                }
            }
            
        }
    }

    #AboutPark{
        
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1696ffb2;
        display: flex;
        flex-direction: column;

        .AboutParkArticle{
            width: 90vw;
            height: 80vh;
            margin-top: 10vh;
            display: flex;
            padding-left: 5vw;
            padding-right: 5vw;
            color: white;
            font-size: 32px;
            padding-top: 15%;

        }
    }
    #AboutProject{
        
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1696ffb2;
        display: flex;
        flex-direction: column;

        .AboutProjectArticle{
            width: 90vw;
            height: 80vh;
            margin-top: 10vh;
            display: flex;
            padding-left: 5vw;
            padding-right: 5vw;
            color: white;
            font-size: 32px;
            padding-top: 8%;
            flex-direction: column;

            a{
                color: rgb(23, 75, 124);
                font-style: italic;
            }

        }
    }
}
</style>
<style scoped lang="scss">
    @media screen and (max-width: 992px) {
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

    #main{
        
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1696ffb2;
        display: flex;
        flex-direction: column;
    }
    .main--nav{
        width: 100%;
        height: 15%;
        color: white;
        font-size: 4vw;
        position: fixed;
        z-index: 100;

        ul{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            list-style-type: none;
            margin: 0;
            padding: 0;
            padding-top: 1%;

            li{
                width: 50%;
                text-align: center;

                span:hover{
                    cursor: pointer;
                    color: rgb(194, 194, 194);
                    transition: 0.2s all ease-in-out;
                }
            }
        }
    }
    .main--title{
        width: 100vw;
        height: 100%;
        color: white;
        display: flex;
        justify-content: center;
        text-align: center;
        font-size: 8vw;
        padding-top: 55%;
        opacity: 0;
    }
    .main--gotoMap{
        width: 100vw;
        height:25%;
        position: fixed;
        bottom: 0;
        
        .button{
            margin-left: auto;
            margin-right: auto;
            
            height: 100%;
            width: 212px;
            display: flex;
            

            img{
                position: fixed;
                width: 212px;
                height: 212px;
                cursor: pointer;
                
                &:first-child{
                    margin-top: 3%;
                }
            }
            
        }
    }

    #AboutPark{
        
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1696ffb2;
        display: flex;
        flex-direction: column;

        .AboutParkArticle{
            width: 90vw;
            height: 80vh;
            margin-top: 10vh;
            display: flex;
            padding-left: 5vw;
            padding-right: 5vw;
            color: white;
            font-size: 44px;
            padding-top: 30%;

        }
    }
    #AboutProject{
        
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1696ffb2;
        display: flex;
        flex-direction: column;

        .AboutProjectArticle{
            width: 90vw;
            height: 80vh;
            margin-top: 10vh;
            display: flex;
            padding-left: 5vw;
            padding-right: 5vw;
            color: white;
            font-size: 40px;
            padding-top: 15%;
            flex-direction: column;

            a{
                color: rgb(23, 75, 124);
                font-style: italic;
            }

        }
    }
}
</style>
<style scoped lang="scss">
    @media screen and (max-width: 768px) {
        .backgroundVideo{
        position: fixed;
        left: -100%;
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

    #main{
        
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1696ffb2;
        display: flex;
        flex-direction: column;
    }
    .main--nav{
        width: 100%;
        height: 15%;
        color: white;
        font-size: 6vw;
        position: fixed;
        z-index: 100;

        ul{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            list-style-type: none;
            margin: 0;
            padding: 0;
            padding-top: 1%;

            li{
                width: 50%;
                text-align: center;

                span:hover{
                    cursor: pointer;
                    color: rgb(194, 194, 194);
                    transition: 0.2s all ease-in-out;
                }
            }
        }
    }
    .main--title{
        width: 100vw;
        height: 100%;
        color: white;
        display: flex;
        justify-content: center;
        text-align: center;
        font-size: 10vw;
        padding-top: 75%;
        opacity: 0;
    }
    .main--gotoMap{
        width: 100vw;
        height:25%;
        position: fixed;
        bottom: 0;
        
        .button{
            margin-left: auto;
            margin-right: auto;
            
            height: 100%;
            width: 212px;
            display: flex;
            

            img{
                position: fixed;
                width: 212px;
                height: 212px;
                cursor: pointer;
                
                &:first-child{
                    margin-top: 3%;
                }
            }
            
        }
    }

    #AboutPark{
        
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1696ffb2;
        display: flex;
        flex-direction: column;

        .AboutParkArticle{
            width: 90vw;
            height: 80vh;
            margin-top: 10vh;
            display: flex;
            padding-left: 5vw;
            padding-right: 5vw;
            color: white;
            font-size: 36px;
            padding-top: 45%;

        }
    }
    #AboutProject{
        
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1696ffb2;
        display: flex;
        flex-direction: column;

        .AboutProjectArticle{
            width: 90vw;
            height: 80vh;
            margin-top: 10vh;
            display: flex;
            padding-left: 5vw;
            padding-right: 5vw;
            color: white;
            font-size: 36px;
            padding-top: 10%;
            flex-direction: column;

            a{
                color: rgb(23, 75, 124);
                font-style: italic;
            }

        }
    }
}
</style>
<style scoped lang="scss">
    @media screen and (max-width: 576px) {
        .backgroundVideo{
        position: fixed;
        left: -100%;
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

    #main{
        
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1696ffb2;
        display: flex;
        flex-direction: column;
    }
    .main--nav{
        width: 100%;
        height: 15%;
        color: white;
        font-size: 6vw;
        position: fixed;
        z-index: 100;

        ul{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            list-style-type: none;
            margin: 0;
            padding: 0;
            padding-top: 5%;

            li{
                width: 50%;
                text-align: center;

                span:hover{
                    cursor: pointer;
                    color: rgb(194, 194, 194);
                    transition: 0.2s all ease-in-out;
                }
            }
        }
    }
    .main--title{
        width: 100vw;
        height: 100%;
        color: white;
        display: flex;
        justify-content: center;
        text-align: center;
        font-size: 10vw;
        padding-top: 90%;
        opacity: 0;
    }
    .main--gotoMap{
        width: 100vw;
        height:25%;
        position: fixed;
        bottom: 0;
        
        .button{
            margin-left: auto;
            margin-right: auto;
            
            height: 100%;
            width: 128px;
            display: flex;
            

            img{
                position: fixed;
                width: 128px;
                height: 128px;
                cursor: pointer;
                
                &:first-child{
                    margin-top: 3%;
                }
            }
            
        }
    }

    #AboutPark{
        
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1696ffb2;
        display: flex;
        flex-direction: column;

        .AboutParkArticle{
            width: 90vw;
            height: 80vh;
            margin-top: 10vh;
            display: flex;
            padding-left: 5vw;
            padding-right: 5vw;
            color: white;
            font-size: 20px;
            padding-top: 45%;

        }
    }
    #AboutProject{
        
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1696ffb2;
        display: flex;
        flex-direction: column;

        .AboutProjectArticle{
            width: 90vw;
            height: 80vh;
            margin-top: 10vh;
            display: flex;
            padding-left: 5vw;
            padding-right: 5vw;
            color: white;
            font-size: 20px;
            padding-top: 10%;
            flex-direction: column;

            a{
                color: rgb(23, 75, 124);
                font-style: italic;
            }

        }
    }
}
</style>