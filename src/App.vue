<template>
<el-config-provider>
  <router-view />
</el-config-provider>
</template>


<script setup>
import { useAppStore } from '@/store/index'
const appStore = useAppStore()
console.log(appStore)
</script>