import { nextTick } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app-store', {
  state: ()=>({
    // 是否重载页面
    reloadFlag: true
  }),
  actions: {
    async reloadPage(duration = 0) {
      this.reloadFlag = false;
      await nextTick();
      if (duration) {
        setTimeout(() => {
          this.reloadFlag = true;
        }, duration);
      } else {
        this.reloadFlag = true;
      }
      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 });
      }, 100);
    },
  }
})