import { createRouter, createWebHistory } from 'vue-router'
import GraphView from '@/views/GraphView.vue'
import AnalyticsView from '@/views/AnalyticsView.vue'
import UsersView from '@/views/UsersView.vue'
import BranchesView from '@/views/BranchesView.vue'
import StyleGuide from '@/views/StyleGuide.vue'
import ExportPage from '@/modules/ExportModule/ExportPage.vue'

const routes = [
  {
    path: '/graph',
    name: 'graph',
    component: GraphView,
    alias: '/'
  },
  {
    path: '/style',
    name: 'style',
    component: StyleGuide,
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: AnalyticsView
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView,
  },
  {
    path: '/branches',
    name: 'branches',
    component: BranchesView
  },
  {
    path: '/export/:start/:end',
    name: 'export',
    component: ExportPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
