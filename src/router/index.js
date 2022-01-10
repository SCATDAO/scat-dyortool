import { createRouter, createWebHashHistory } from 'vue-router'

import DyorMain from '../pages/DyorMain.vue'
import DyorCreate from '../pages/DyorCreate.vue'
import DyorQuestion from '../pages/DyorQuestion.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/main' },
        { path: '/main', component: DyorMain },
        { path: '/create', component: DyorCreate },
        { path: '/research', component: DyorQuestion },
        { path: '/:notFound(.*)', redirect: '/main' }
    ]
});

export default router