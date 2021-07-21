import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    
  },
  
  {
    path: "/Props",
    name: "Props",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Props.vue"),
  },
  {
    path: "/Form",
    name: "Form",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Form.vue"),
  },
  {
    path: '/HomeC',
    name : "HomeC",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeC/Index.vue"),
    

    children : [
      {
        path: 'child1',
        name : "child1",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/HomeC/child1.vue"),
        
      },
      {
        path: 'child2',
        name : "child2",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/HomeC/child2.vue"),
        
      },
      {
        path: "cow",
        name : "cowabunga",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/HomeC/cowabunga.vue"),
        
      },
    ]
    
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
