import { createPinia } from 'pinia'

/* 
注册store
@param: app vue实例
 */
export function setupStore(app){
  let store = createPinia()
  app.use(store)
}

export * from './modules'