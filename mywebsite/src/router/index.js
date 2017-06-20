import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/main/index.vue';
//膜版测试
import Header from '@/components/template/header/header.vue';
import Footer from '@/components/template/footer/footer.vue';
//完

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/footer',
            name: 'footer',
            component: Footer
        },
        {
            path: '/header',
            name: 'header',
            component: Header
        }
    ]
});