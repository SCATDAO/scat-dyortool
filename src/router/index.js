import { createRouter, createWebHistory } from 'vue-router'

import WorkMain from '../pages/work-main/WorkMain.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/main' },
        { path: '/main', component: WorkMain, name: 'main' },
        { path: '/create', component: WorkMain, name: 'create' },
        { path: '/:notFound(.*)', redirect: '/main' }
    ]
});

export default router