<script>

    import gsap from 'gsap';


    export default {
        data(){
            return {
                parkInfo: '',
                animState: 0
            }
        },
        methods: {
            parkInfoFunc(){
                if(this.animState === 0){
                    this.animState = 1
                    gsap.to('.title', {y: -150, duration: 0.5})
                    gsap.fromTo('.info', {opacity: 0, duration: 0.5,}, {opacity: 1, duration: 0.5, delay: 0.5,})
                    this.parkInfo = 'Park krajobrazowy utworzony w 1994 (pow. 7953 ha) położony w województwie dolnośląskim, w powiecie wołowskim, na północny zachód od Wołowa, na pograniczu Niziny Śląskiej oraz Wału Trzebnickiego w dorzeczu Jezierzycy, do której na obszarze parku wpływa mały prawobrzeżny dopływ Juszka.'
                }
                else if(this.animState === 2 || this.animState === 3){
                    this.animState = 1
                    gsap.to('.info', {opacity: 0, duration: 0.5})
                    setTimeout(function(){
                        this.parkInfo = 'Park krajobrazowy utworzony w 1994 (pow. 7953 ha) położony w województwie dolnośląskim, w powiecie wołowskim, na północny zachód od Wołowa, na pograniczu Niziny Śląskiej oraz Wału Trzebnickiego w dorzeczu Jezierzycy, do której na obszarze parku wpływa mały prawobrzeżny dopływ Juszka.'
                    }.bind(this), 500)
                    gsap.to('.info', {opacity: 1, duration: 0.5, delay: 0.5})
                }
            },
            projectInfoFunc(){
                if(this.animState === 0){
                    this.animState = 2
                    gsap.to('.title', {y: -150, duration: 0.5})
                    gsap.fromTo('.info', {opacity: 0, duration: 0.5,}, {opacity: 1, duration: 0.5, delay: 0.5,})
                    this.parkInfo = 'Projekt jest wynikiem pracy inżynierskiej i powstał w celach edukacyjnych.'
                }
                else if(this.animState === 1 || this.animState === 3){
                    this.animState = 2
                    gsap.to('.info', {opacity: 0, duration: 0.5})
                    setTimeout(function(){
                        this.parkInfo = 'Projekt jest wynikiem pracy inżynierskiej i powstał w celach edukacyjnych.'
                    }.bind(this), 500)
                    gsap.to('.info', {opacity: 1, duration: 0.5, delay: 0.5})
                }
            },
            gotoMapHover(){
                gsap.set('.earth', {rotateY: 0})
                gsap.set('.pin', {y: 0,})
                gsap.to('.earth', {rotateY: 360, duration: 2, ease: "none"})
                gsap.to('.pin', {y: -50, duration: 0.5})
                gsap.to('.pin', {y: 0, delay: 0.5})
            },
            
        }
    }
    

</script>

<template> 
    <div id="main">
        <div class="main--nav">
            <ul>
                <li><span>O parku</span></li>
                <li><span>O projekcie</span></li>
            </ul>
        </div>
        <div class="main--title">
            Park Krajobrazowy<br>Dolina Jezierzycy
        </div>
        <div class="main--gotoMap">
            <div @mouseover="gotoMapHover" class="button">
                <img class="earth" src="../assets/earth.png">
                <img class="pin" src="../assets/pin.png">
            </div>
        </div>
    </div>
    <video class="backgroundVideo" autoplay muted loop>
        <source src="../assets/PracaINZ.mp4" type="video/mp4">
    </video>
</template>

<style lang="scss">

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
        height: 25%;
        color: white;
        font-size: 1.5vw;

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
            }
        }
    }
    .main--title{
        width: 100vw;
        height: 50%;
        color: white;
        display: flex;
        justify-content: center;
        text-align: center;
        font-size: 5vw;
        padding-top: 5%;
    }
    .main--gotoMap{
        width: 100%;
        height:25%;

        .button{
            margin-left: auto;
            margin-right: auto;
            height: 100%;
            width: 256px;
            display: flex;
            justify-content: center;

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
</style>