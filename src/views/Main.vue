<template>
    <div>
        <div class="presentDiv1">
            <video class="backgroundVideo" autoplay muted loop>
                <source src="../assets/background-anime.mp4" type="video/mp4">
            </video>
            <div class="firstText">
                <h1 class="stroke-shadow">Bienvenue sur mon site personnel,</h1>
            </div>
            <div class="secondText">
                <h2 class="stroke-shadow">Je m'appelle Nathan Schneider, j'ai 21 ans et je suis actuellement alternant en informatique</h2>
            </div>
        </div>

        <div class="presentDiv2">
            <h2>Ce site comprend...</h2>
            <div class="presentItem">
                <font-awesome-icon icon="fa-solid fa-code" />
                <h3>Mon <span><a href="/projects" class="inPageLink green">portfolio</a></span> avec tous les projets que j'ai mené ou ceux auxquels j'ai participé,</h3>
            </div>
            <div class="presentItem">
                <font-awesome-icon icon="fa-solid fa-message" />
                <h3>Un <span><a href="/blog" class="inPageLink green">blog</a></span> dans lequel je répertorie mes articles qui traitent de sujets touchant de loin ou de près à l'informatique,</h3>
            </div>
            <div class="presentItem">
                <font-awesome-icon icon="fa-solid fa-user-tie" />
                <h3>Une page "<span><a href="/about" class="inPageLink green">À propos</a></span>" pour en savoir plus sur mon parcours, mes motivations et mes objectifs,</h3>
            </div>
            <div class="presentItem">
                <font-awesome-icon icon="fa-solid fa-envelope-open-text" />
                <h3>Un formulaire de <span><a href="/contact" class="inPageLink green">contact</a></span> si vous souhaitez en apprendre davantage, parler d'une éventuelle collaboration ou me faire parvenir une remarque.</h3>
            </div>
        </div>

        <footer>
            <p>Développé en <span>VueJS</span> avec l'aide de <span>FontAwesome</span> et déployé via <span>Vercel</span>.</p>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Main',
    }
</script>

<style scoped>

    header {
        background-color: #090525 !important;
    }

    .presentDiv1 {
        position: relative;
        background-color: #090525;
        width: 100%;
        height: calc(100vh - 100px);
        padding: 3%;

        -webkit-box-shadow: 0px 19px 14px -10px rgba(172,255,227,0.49); 
        box-shadow: 0px 19px 14px -10px rgba(172,255,227,0.49);
        overflow: hidden;

        /* -webkit-box-shadow: 0px -19px 14px -10px rgba(172,255,227,0.49); 
        box-shadow: 0px -19px 14px -10px rgba(172,255,227,0.49); */
    }
    .firstText {
        position: absolute;
        left: 3%;
        color: white;
    }
    .presentDiv1 h1 ~ h1 {
        margin-left: 10%;
        text-align: end;
    }
    .secondText {
        position: absolute;
        bottom: 20px;
        right: 3%;
        width: 50%;
    }
    .secondText h2 {
        text-align: end;
    }
    .presentDiv1 h2:first-of-type {
        margin-top: 30px;
    }

    .stroke-shadow {
        color: #090525;
        text-shadow: -2px 0 #ffffff, 0 -2px #ffffff, 2px 0 #ffffff, 0 2px #ffffff, 2px 2px #ffffff, -2px -2px #ffffff, -2px 2px #ffffff, 2px -2px #ffffff, 5px 5px #00BD7E;
        font-size: 2vw;
        font-weight: bold;
        letter-spacing: 5px;
        margin: 0;
    }

    .backgroundVideo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
        width: 190.77777778vh; /* 100 * 16 / 9 */
        min-width: 100%;
        min-height: 70.25vw; /* 100 * 9 / 16 */
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

    .presentItem svg {
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
        color: #E2E6E9;
    }
    footer p span {
        font-weight: bold;
        color: #00BD7E;
    }
</style>