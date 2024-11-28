import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp.vue";
import CartPage from "@/views/CartPage.vue";
import PayPage from "@/views/PayPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: Login },
  { path: "/registro", component: SignUp },
  { path: "/cart", component: CartPage },
  { path: "/pay", component: PayPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
