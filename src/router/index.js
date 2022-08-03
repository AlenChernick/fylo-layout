import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import featuresPage from '../views/features-page.vue'
import teamPage from '../views/team-page.vue'
import signinPage from '../views/sign-in-page.vue'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: homePage
    },
    {
      path: '/features',
      name: 'features-page',
      component: featuresPage
    },
    {
      path: '/team',
      name: 'team-page',
      component: teamPage
    },
    {
      path: '/signin',
      name: 'sign-in-page',
      component: signinPage
    }
  ]
})

export default router
