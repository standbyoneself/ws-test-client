import { RouteRecordRaw } from 'vue-router';
import Auth from '@/views/Auth.vue';
import Home from '@/views/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

export default routes;
