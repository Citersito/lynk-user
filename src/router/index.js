import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp.vue";
import PayPage from "@/views/PayPage.vue";
import ProductoPage from "@/views/ProductoPage.vue";
import CartPage from "@/views/CartPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: Login },
  { path: "/registro", component: SignUp },
  { path: "/pay", component: PayPage },
  {
    path: "/product/:id", // Ruta dinámica con parámetro ID
    name: "product-detail",
    component: ProductoPage,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
