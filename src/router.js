import Vue from "vue";
import Router from "vue-router";
import Index from "./views/index"
import City from './views/city.vue'

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: Index },
        { path: '/city', component: City}
    ]
  });
  