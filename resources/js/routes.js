import VueRouter from 'vue-router';
import Home from './components/WebsiteSearchComponent.vue';

let routes = [
    { path: '/', component: Home },
];

export default new VueRouter({
    routes,
    linkActiveClass: 'active'
});
