<template>
  <div class="app-wapper">
    <Sidebar />
    <div class="main-container">
      <div class="header">
        <Breadcrumb />
        <TagsView />
      </div>
      <AppMain />
    </div>
  </div>
</template>
<script setup>
import Sidebar from './sidebar/index.vue'
import Breadcrumb from './breadcrumb/index.vue'
import TagsView from './tagsView/index.vue'
import AppMain from './appMain/index.vue'
</script>
<style lang="scss" scoped>
.app-wapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  .main-container {
    flex: 1;
    flex-shrink: 0;
    height: 100%;
    .header {
      width: 100%;
      border-right: 1px solid var(--global-border-color);
    }
  }
}
</style>