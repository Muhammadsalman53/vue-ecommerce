import { createRouter, createWebHistory } from 'vue-router'
// import Login from "./components/Login.vue";
// import SignUp from "./components/SignUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   component: Login
    // },
    // {
    //   path: '/signup',

    //   component: SignUp
    // }
  ]
})

export default router
