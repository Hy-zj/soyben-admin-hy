import Layout from '@/layouts/index.vue'
export const constantRoutes = [{
  path: '/',
  component: Layout,
  redirect:'/dashboard',
  meta: {
    title: 'Root'
  },
  children: [{
    name: 'dashboard',
    path: 'dashboard',
    component: ()=>import('../../views/dashboard/workbench/index.vue'),
    meta: {
      title: '主页'
    },
  }]
}]