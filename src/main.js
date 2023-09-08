import AssetDesigner from '@/views/AssetDesigner.vue';
import AssetModels from '@/views/AssetModels.vue';
import Home from '@/views/Home.vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './styles/style.css';
const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    {
      path: '/asset_designer',
      name: 'AssetDesigner',
      component: AssetDesigner,
    },
    {
      path: '/asset_models',
      name: 'AssetModels',
      component: AssetModels,
    },
  ],
});
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
