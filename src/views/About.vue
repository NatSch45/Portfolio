<template>
    <div class="aboutContainer">
        <div class="me">
            <div class="circle"></div>
            <div class="meImg"></div>

            <div class="line a"></div>
            <div class="line b"></div>
            <div class="line c"></div>
            <div class="line d"></div>
            <div class="line e"></div>
            <div class="line f"></div>

            <div class="textZone a">Développeur Web qui n'attend que de faire ses preuves en entreprise</div>
            <div class="textZone b">Aime explorer de nouveaux domaines tels que la data, l'IA ou encore l'IoT</div>
            <div class="textZone c">Commence sa 3ème année d'études supérieures à Ynov</div>
            <div class="textZone d">Est plus à l'aise dans le développement Web mais est ouvert à tout autre domaine</div>
            <div class="textZone e">Motivé, rigoureux et sait s'intégrer à une équipe</div>
            <div class="textZone f">Possède un magnifique C.V. à retrouver en bas de cette page</div>
        </div>

        <Timeline />

        <hr>

        <div class="cvZone">
            <img 
            src="../assets/myCV.svg" 
            alt="C.V. Nathan Schneider"
            />
        </div>
    </div>
</template>

<script>
import Timeline from '../components/Timeline.vue';

export default {
    name: "About",
    components: { Timeline }
}
</script>

<style>
    .aboutContainer {
        width: 100%;
        min-height: 100%; 
        padding: 3%;

        background-color: #E7F3F1;
    }
    
    .me {
        width: 100%;
        height: 600px;
        position: relative;
    }

    .meImg {
        z-index: 10;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url("../assets/img/moiDetoureBisRognable.png");
        background-repeat: no-repeat;
        background-size: 210% 150%;
        background-position: 47% 25%;
        border-radius: 50%;
        height: 300px;
        width: 300px;
        border: 2px solid black;
    }
    .circle {
        z-index: 10;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #E7F3F1;
        border-radius: 50%;
        height: 300px;
        width: 300px;
    }

    .line {
        z-index: 1;
        width: 2px;
        height: 0px;
        background-color: black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform-origin: top;
    }
    .line.a {
        transform: rotate(125deg);
        animation: fillLine 1s forwards ease-in-out;
    }
    .line.b {
        transform: rotate(90deg);
        animation: fillLine 1s forwards .3s ease-in-out;
    }
    .line.c {
        transform: rotate(55deg);
        animation: fillLine 1s forwards .6s ease-in-out;
    }
    .line.d {
        transform: rotate(-125deg);
        animation: fillLine 1s forwards .9s ease-in-out;
    }
    .line.e {
        transform: rotate(-90deg);
        animation: fillLine 1s forwards 1.2s ease-in-out;
    }
    .line.f {
        transform: rotate(-55deg);
        animation: fillLine 1s forwards 1.5s ease-in-out;
    }

    .textZone {
        position: absolute;
        font-size: 20px;
        width: 300px;
        height: auto;
    }
    .textZone.a {
        top: 20px;
        left: 160px;
    }
    .textZone.b {
        top: 268px;
        left: 80px;
    }
    .textZone.c {
        top: 500px;
        left: 190px;
    }
    .textZone.d {
        top: 20px;
        right: 140px;
    }
    .textZone.e {
        top: 268px;
        right: 70px;
    }
    .textZone.f {
        top: 500px;
        right: 140px;
    }

    @keyframes fillLine {
        100% {
            height: 400px;
        }
    }


    .cvZone {
        margin-top: 100px;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>