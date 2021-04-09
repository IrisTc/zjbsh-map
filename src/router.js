import Vue from "vue";
import Router from "vue-router";
import Index from "./views/index"
import City from './views/city.vue'

Vue.use(Router);

export default new Router({
    routes: [
        { name:'index', path: '/', component: Index },
        { name:'city', path: '/city', component: City}
    ]
  });
  