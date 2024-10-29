<script setup>
import { routes } from '@/router/index.js'
</script>

<template>
  <nav>
    <RouterLink v-for="item in routes" :key="item.name" :to="item.path">{{ item.title }}</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  @apply fixed top-0 left-0 bg-white bottom-0 h-full w-16 flex items-center flex-col shadow-md py-4;
  > a {
    @apply text-xl font-semibold text-gray-600 hover:text-blue-500 cursor-pointer w-max h-max py-2;
  }
}

</style>
