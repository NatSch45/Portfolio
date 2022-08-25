<template>
    <div class="container">
        <BlogItem 
            v-for="(article, i) in articles" :key="i"
            :title="article.title"
            :subtitle="article.subtitle"
            :image="article.presentImg"
            @click="redirect(i)"
        />
    </div>
</template>

<script>
import BlogItem from '../components/BlogItem.vue';

export default {
    name: "Blog",
    data() {
        return {
            articles: [
                {
                    title: "Projet professionnel VS projet non professionnel",
                    subtitle: "Zoom sur les différences qui existent entre un projet étudiant ou personnel avec un projet professionnel",
                    presentImg: "pro-dev.png"
                },
                {
                    title: "Bien choisir sa BDD",
                    subtitle: "Quelles technologies utiliser lorsqu'on souhaite monter une base de données ?",
                    presentImg: "bdd.png"
                },
                {
                    title: "Est-ce que Vue.js vaut le coup ?",
                    subtitle: "Aujourd'hui, la concurrence des frameworks web est très rude alors il est légitime de se poser la question : Est-ce que Vue.js vaut le coup ?",
                    presentImg: "vuejs.jpg"
                },
                {
                    title: "Voici comment faire pour devenir un meilleur développeur",
                    subtitle: "Les règles et les principes qu'un développeur doit suivre pour augmenter sa qualité de code et de réflexion",
                    presentImg: "chad-dev.jpg"
                },
                {
                    title: "Le réseau DEF",
                    subtitle: "Présentation de l'entreprise qui m'a accueilli pour mon premier stage en informatique",
                    presentImg: "reseau-def.jpg"
                },
            ]
        }
    },
    methods: {
        redirect(id) {
            this.$router.push('/blog/' + (id + 1))
        }
    },
    components: { BlogItem }
}
</script>

<style>
    .container {
        padding: 5%;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;
        justify-items: center;

        background-color: #E7F3F1;
    }
</style>