import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from '../components/Product-Detail.vue';
import BuyNow from '../components/BuyNow.vue'

const routes =[

{
  path: '/product/:id',
 name: 'ProductDetail',
component: ProductDetail
},
{
  path: '/buynow',
 name: 'BuyNow',
component: BuyNow
}

];

const router=createRouter({
  history:createWebHistory(),
  routes
});

export default router
