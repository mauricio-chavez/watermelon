import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
];

export default new VueRouter({ mode: 'history', routes });
