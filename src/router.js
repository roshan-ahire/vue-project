import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue)

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/bootstrap",
      name: "bootstrap",
      component: () => import(/* webpackChunkName: "about" */ "./views/bootstrap.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
