<template>
    <div class="portfolio">
        <PortfolioItem
            v-for="(project, i) in projects" :key="i"
            :name="project.name"
            :description="project.description"
        />
    </div>
</template>

<script>
import PortfolioItem from '../components/PortfolioItem.vue';

export default {
    name: "Projects",
    data() {
        return {
            projects: [
                {
                    name: "Hope",
                    description: "Vous en avez assez des médias qui ne tirent souvent que le mauvais des informations internationales ou autres faits divers ? Alors ce média positif va vous plaire en égayant votre journée à l'aide d'anecdotes positives !",
                    date: "2020-2022",
                    backgroundImg: "backgroundImgProjt1.png",
                },
                {
                    name: "Arrivée Colis",
                    description: "Dans le cadre de mon stage, logiciel d'envoi de mails lors d'une arrivée de colis",
                    date: "05/2022-06/2022",
                    backgroundImg: "backgroundImgProjt2.png",
                },
                {
                    name: "Badgeuse Horizon",
                    description: "Dans le cadre de mon stage, logiciel de gestion de badgeages",
                    date: "06/2022",
                    backgroundImg: "backgroundImgProjt3.png",
                },
                {
                    name: "BarTradingX",
                    description: "Plateforme évenementielle transformant le temps d'une soirée votre bar en la bourse de Wall Street !",
                    date: "2020-2021",
                    backgroundImg: "backgroundImgProjt4.png",
                },
                {
                    name: "Wejmi",
                    description: "Si vous vous posez souvent la question \"Mais où est-je mis ... ?\", alors cette application est faite pour vous.",
                    date: "Début 2022",
                    backgroundImg: "backgroundImgProjt5.png",
                },
                {
                    name: "Street Fighter Arcade",
                    description: "Projet consistant à redévelopper le fameux jeu de combat Street Fighter et à le rendre jouable via des commandes d'arcade.",
                    date: "2022",
                    backgroundImg: "backgroundImgProjt6.png",
                },
                {
                    name: "Cheers Beers",
                    description: "Site de listage, classification, et recueil des bières. 🍺",
                    date: "2020-2021",
                    backgroundImg: "backgroundImgProjt4.png",
                },
            ]
        };
    },
    components: { PortfolioItem }
}
</script>

<style>
.portfolio {
    width: 100%;
    height: auto;
}
</style>