import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import CreateComponent from "../components/CreateComponent.vue";
import ListComponent from "../components/ListComponent.vue";
import EditComponent from "../components/EditComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: CreateComponent,
  },
  {
    path: "/view",
    name: "view",
    component: ListComponent,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: EditComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
