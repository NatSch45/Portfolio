<script>
export default {
    mounted: function() {
        const burger = document.querySelector('.burger')

        burger.addEventListener('click', () => {
            burger.classList.toggle('open')
        })
    }
}
</script>

<template>
    <header>
        <nav>
            <div class="navLinks">
                <button class="burger" type="button" aria-label="Toggle navigation" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="navList">
                    <li><router-link to="/">Accueil</router-link></li>
                    <li><router-link to="/projects">Projets</router-link></li>
                    <li><router-link to="/blog">Blog</router-link></li>
                    <li><router-link to="/about">À propos</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
            </div>
            
            <a href="#" class="navIcon" aria-label="Page d'accueil" aria-current="Page">
                <span>Nathan Schneider</span>
                <img class="logo" src="../android-chrome-512x512.png" alt="Logo" />
            </a>
        </nav>
    </header>

    <main>
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </main>
</template>

<style>
    .logo {
        width: 35px;
        height: 35px;
    }
</style>
