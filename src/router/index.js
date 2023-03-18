import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import AboutPage from '../views/AboutPage'
import NotFound from '../views/NotFound' 

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // name: 'Home',
      component: HomePage

    },
    {
      path: '/About',
      // name: 'About',
      component: AboutPage
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound
    },


  ]
})


export default router