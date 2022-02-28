import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { constantRoutes } from './routes/index'



//定义方法区分是否设置路由模式
const createHistoryFunc = import.meta.env.VITE_IS_HISTORY ==='1' ? createWebHistory: createWebHashHistory

export const router = createRouter({
  history: createHistoryFunc(import.meta.env.BASE_URL),
  routes: constantRoutes
})

console.log(router)
/* 
注册路由
@param: app vue实例
 */
export async function setupRouter(app){
  console.log(app,router)
  app.use(router)
  await router.isReady()
}

//导出所有路由
export * from './routes/index'