import { createApp } from "vue";
import "../src/assets/css/style.css";
import App from "./App.vue";
import About from "./pages/about/about.vue";
import Home from "./pages/home/home.vue";
import Contact from "./pages/contact/contact.vue";
import Portfolio from "../src/pages/portfolio/portfolio.vue";
import PortfolioDetails from "../src/pages/portfolioDetails/portfolioDetails.vue";
import ServiceList from "../src/pages/service/service.vue";
import DefaultLayout from "./layout/layout.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        component: Home,
        meta: {
          isWhite: true,
          withContact: true,
        },
      },
      {
        path: "/about",
        component: About,
        meta: {
          isWhite: false,
          withContact: true,
        },
      },
      {
        path: "/contact",
        component: Contact,
        meta: {
          isWhite: false,
          withContact: false,
        },
      },
      {
        path: "/portfolio",
        component: Portfolio,
        meta: {
          isWhite: false,
          withContact: false,
        },
      },
      {
        path: "/portfolio/:slug",
        component: PortfolioDetails,
        meta: {
          isWhite: false,
          withContact: false,
        },
      },
      {
        path: "/services",
        component: ServiceList,
        meta: {
          isWhite: false,
          withContact: true,
        },
      },
    ],
  },

  // Add your other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
