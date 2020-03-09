import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main/apply',
    component: () =>import('@/views/main.vue')
  },
  {
    path: '/main',
    name: 'main',
    redirect: '/main/apply',
    component: () =>import('@/views/main.vue'),
    meta: {
      name: '功能页面入口'
    },
    children: [
      {
        path: 'apply',
        name: 'apply',
        component: () =>import('@/views/apply/index.vue'),
        meta: {
          name: '发起申请'
        }
      },
      {
        path: 'applyer',
        name: 'applyer',
        component: () =>import('@/views/applyer/index.vue'),
        meta: {
          name: '我发起的'
        }
      },
      {
        path: 'approver',
        name: 'approver',
        component: () =>import('@/views/approver/index.vue'),
        meta: {
          name: '我审批的'
        }
      },
      {
        path: 'copyer',
        name: 'copyer',
        component: () =>import('@/views/copyer/index.vue'),
        meta: {
          name: '抄送我的'
        }
      },
      {
        path: 'draft',
        name: 'draft',
        component: () =>import('@/views/draft/index.vue'),
        meta: {
          name: '草稿箱'
        }
      },
      {
        path: 'datamgt',
        name: 'datamgt',
        component: () =>import('@/views/datamgt/index.vue'),
        meta: {
          name: '数据管理'
        }
      }
    ]
  },
  {
    path: '/403',
    component: {
      template: `<h1>403 您没有权限访问该页面</h1>`
    }
  },
  {
    path: '*',
    component: {
      template: `<h1>404 您的页面已丢失</h1>`
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
