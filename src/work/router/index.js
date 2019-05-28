import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/index',
            name: 'zhuye',
            component: () => import("../page/zhuye/index.vue")
        }
    ]
});
