<template>
    <div class="presentDiv1">
        <h1>Bonjour, je suis Nathan SCHNEIDER et voici mon site personnel</h1>

        <div class="meImg"></div>
    </div>

    <div class="presentDiv2">
        <h2>Ce site comprend...</h2>
        <div class="presentItem">
            <font-awesome-icon icon="fa-solid fa-code" />
            <h3>Mon <span><a href="/projects">portfolio</a></span> avec tous les projets que j'ai mené ou ceux auxquels j'ai participé,</h3>
        </div>
        <div class="presentItem">
            <font-awesome-icon icon="fa-solid fa-message" />
            <h3>Un <span><a href="/blog">blog</a></span> dans lequel je répertorie mes articles qui traitent de sujets touchant de loin ou de près à l'informatique,</h3>
        </div>
        <div class="presentItem">
            <font-awesome-icon icon="fa-solid fa-user-tie" />
            <h3>Une page "<span><a href="/about">À propos</a></span>" pour en savoir plus sur mon parcours, mes motivations et mes objectifs,</h3>
        </div>
        <div class="presentItem">
            <font-awesome-icon icon="fa-solid fa-envelope-open-text" />
            <h3>Un formulaire de <span><a href="/contact">contact</a></span> si vous souhaitez en apprendre davantage, parler d'une éventuelle collaboration ou me faire parvenir une remarque.</h3>
        </div>
    </div>

    <footer>
        <p>Développé en <span>VueJS</span> avec l'aide de <span>FontAwesome</span>.</p>
    </footer>
</template>

<script>
    export default {
        name: 'Main',
    }
</script>

<style>
    .presentDiv1 {
        background-color: rgba(127, 255, 212, 0.65);
        width: 100%;
        height: 700px;
        padding: 3%;

        -webkit-box-shadow: 0px 19px 14px -10px rgba(172,255,227,0.49); 
        box-shadow: 0px 19px 14px -10px rgba(172,255,227,0.49);

        /* -webkit-box-shadow: 0px -19px 14px -10px rgba(172,255,227,0.49); 
        box-shadow: 0px -19px 14px -10px rgba(172,255,227,0.49); */
    }

    .meImg {
        float: right;
        background: url("../assets/moiDetoureBisRognable.png");
        background-repeat: no-repeat;
        background-size: 210% 150%;
        background-position: 47% 25%;
        border-radius: 50%;
        height: 300px;
        width: 300px;
        border: 2px solid black;
        transform: scaleX(-1);
    }

    .presentDiv2 {
        background-color: rgba(112, 128, 144, 0.2);
        width: 100%;
        height: 800px;
        padding: 3%;
    }
    .presentDiv2 h2 {
        text-align: center;
    }

    .presentItem {
        display: flex;
        padding: 1%;
        flex-direction: row;
        align-items: center;
        justify-content: left;
    }
    .presentItem:nth-child(odd) {
        justify-content: right;
        flex-direction: row-reverse;
    }
    .presentItem:nth-child(odd) h3 {
        text-align: right;
    }
    .presentItem h3 span {
        cursor: pointer;
        color: #00BD7E;
        text-transform: capitalize;
        transition: background-color .4s;
    }
    .presentItem h3 span:hover {
        background-color: hsla(160, 100%, 37%, 0.2);
    }

    svg {
        padding: 3%;
        color: #00BD7E;
        font-size: 50px;
    }

    footer {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgb(0, 0, 0);
    }
    footer p span {
        font-weight: bold;
    }
</style>