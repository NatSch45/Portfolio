<script setup>
</script>

<template>
    <header>
        <nav>
            <ul class="navlist">
                <li><router-link to="/">Accueil</router-link></li>
                <li><router-link to="/projects">Projets</router-link></li>
                <li><router-link to="/blog">Blog</router-link></li>
                <li><router-link to="/about">À propos</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
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

</style>
