import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router/index'
import { setupStore } from './store/index'
import { setupAssets } from './plugins/index'

//启动函数
async function setupApp(){
  //引入静态资源
  setupAssets()
  
  const app = createApp(App)

  //注册store
  setupStore(app)
  

  //挂载路由
  await setupRouter(app)

  app.mount('#app')
}

setupApp()
