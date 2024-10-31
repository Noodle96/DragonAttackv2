// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import DragonAttackHome from '../components/DragonAttackHome.vue';
import MathAdventureHome from '../components/MathAdventureHome.vue';
import AboutDragon from '../components/AboutDragon.vue';
import VideosSection from '../components/VideosSection.vue';

const routes = [
  { path: '/', redirect: '/about-dragon' }, // Redirige temporalmente a AboutDragon para probar
  { path: '/dragon-attack', name: 'DragonAttackHome', component: DragonAttackHome },
  { path: '/math-adventure', name: 'MathAdventureHome', component: MathAdventureHome },
  { path: '/about-dragon', name: 'AboutDragon', component: AboutDragon },
  { path: '/videos-section', name: 'VideosSection', component: VideosSection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
