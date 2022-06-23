import Vue from "vue";
import Router from "vue-router";
import EventCreate from "@/views/eventcreate.vue";
import EventList from "@/views/eventlist.vue";
import EventShow from "@/views/eventshow.vue";
import UserPage from "@/views/user.vue";
//import HomeView from "../views/HomeView.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
  },
  {
    path: "/create",
    name: "event-create",
    component: EventCreate,
  },
  {
    path: "/user/:username",
    name: "user",
    component: UserPage,
    props: true,
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
