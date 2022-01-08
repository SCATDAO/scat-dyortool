import { createRouter, createWebHistory } from 'vue-router'

import DyorMain from '../pages/DyorMain.vue'
import DyorCreate from '../pages/DyorCreate.vue'
import DyorQuestion from '../pages/DyorQuestion.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/main' },
        { path: '/main', component: DyorMain, name: 'main' },
        { path: '/create', component: DyorCreate, name: 'create' },
        { path: '/research', component: DyorQuestion, name: 'research' },
        { path: '/:notFound(.*)', redirect: '/main' }
    ]
});

export default router