import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./style.css";
import Calculation from "./components/pages/mainPages/calculation.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: App },
    { path: "/calculation", component: Calculation },
  ],
});

const app = createApp(App);
app.use(router).mount("#app");
