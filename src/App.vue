<script setup>
import { routes } from '@/router/index.js'

</script>

<template>
  <div class="header">
    <RouterLink v-for="item in routes" :key="item.name" :to="item.path">{{item.title}}</RouterLink>
  </div>
  <RouterView />
</template>

<style scoped>
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: #2c3e50;
}
</style>
