import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home';

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            alias:['/home','/about'],
            name:'home',
            component:Home
        }
    ]
});

// router.beforeEach((to, from, next)=>{
//     console.log('active router');
// });

export default router;