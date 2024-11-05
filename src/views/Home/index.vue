<script setup>

import { ref } from 'vue'

const userData = ref(JSON.parse(localStorage.getItem('userInfo')) || [])

</script>

<template>
  <div
    style="background-image: url('https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-4.0.3')"
    class="w-full min-h-screen bg-center bg-no-repeat bg-cover grid place-content-center pt-10">
    <div class="w-[600px] min-h-[500px] bg-white/20 backdrop-blur-xl border-2 border-highlight rounded-md py-10 px-14">
      <div class="text-4xl font-bold tracking-widest text-secondary text-center mb-14">User Dashboard</div>
<div class="">{{userData}}</div>
    </div>
  </div>
</template>

<style scoped>

</style>
