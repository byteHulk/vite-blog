import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory

const router = createRouter({
  history: createWebHashHistory() || createWebHistory(),
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      redirect: '/article'
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      children: [
        {
          path: '/article',
          name: 'article',
          component: () => import('../components/Article.vue')
        },
        {
          path: '/work',
          name: 'work',
          component: () => import('../components/Work.vue')
        }
      ]
    }
    ,
    {
      path: '/content/:id',
      name: 'content',
      component: () => import('../views/Content.vue'),
    }

  ],
})

export default router