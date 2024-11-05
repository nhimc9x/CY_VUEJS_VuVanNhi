<script setup>
import { routes } from '@/router/index.js'
</script>

<template>
  <nav>
    <RouterLink v-for="item in routes" :key="item.name" :to="item.path">{{ item.title }}</RouterLink>
  </nav>
  <div class="">
    <RouterView />
  </div>
</template>
<style scoped>
nav {
  @apply fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm flex justify-center items-center;
  > a {
    @apply block px-4 py-2 text-xl font-medium uppercase text-accent hover:text-highlight;
  }

}
</style>
