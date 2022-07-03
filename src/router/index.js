import { createRouter, createWebHistory } from "vue-router";
import HeaderComponent from "../components/HeaderComponent.vue";

const routes = [
  {
    path: "/",
    name: "HeaderComponent",
    component: HeaderComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
