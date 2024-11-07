<script setup>
import { routes } from '@/router/index.js'
import ChatApp from './views/ChatApp/index.vue'
</script>

<template>
<!--    <RouterLink v-for="item in routes" :key="item.name" :to="item.path">{{item.title}}</RouterLink>-->
<!--  <RouterView />-->
  <ChatApp />
</template>

<style scoped>

</style>
