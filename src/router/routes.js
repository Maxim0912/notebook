import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  { 
    path: "/index",
    component: () => import("../views/Index.vue"),
  },
  {
    name: "Edit",
    path: "/index/:id",
    component: () => import('../views/EditNote.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path:'/404',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
  
  export default router;