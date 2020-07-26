import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PasswordReset from '../views/PasswordReset.vue';
import Profile from '../views/Profile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/reset',
    name: 'Password Reset',
    component: PasswordReset,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
