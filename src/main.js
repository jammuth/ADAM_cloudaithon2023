import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
import Home from "@/views/Home.vue";
import EntityDesigner from "@/views/EntityDesigner.vue";
import AssetModeling from "@/views/AssetModeling.vue";
import "./styles/style.css";
const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/entity_designer",
      name: "EntityDesigner",
      component: EntityDesigner,
    },
    {
      path: "/asset_models",
      name: "AssetModeling",
      component: AssetModeling,
    },
  ],
});
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
