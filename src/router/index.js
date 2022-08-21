import { createRouter, createWebHistory } from "vue-router"
import Main from "../views/Main.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main,
        },
        {
            path: '/projects',
            name: 'Projects',
            component: () => import('../views/Projects.vue')
        },
        {
            path: '/projects/:id',
            name: 'Project',
            component: () => import('../views/Project.vue')
        },
        {
            path: '/blog',
            name: 'Blog',
            component: () => import('../views/Blog.vue')
        },
        {
            path: '/blog/:id',
            name: 'Article',
            component: () => import('../views/Article.vue')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue')
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('../views/Contact.vue')
        },
    ]
})

export default router;