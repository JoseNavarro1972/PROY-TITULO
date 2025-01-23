import { createRouter, createWebHistory } from 'vue-router';
import Menu from './components/Menu.vue'; // Ruta correcta
import UserLogin from './User_Login.vue'; // Ruta correcta si está en la raíz de src

const routes = [
  {
    path: '/',
    name: 'User_Login',
    component: UserLogin,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
