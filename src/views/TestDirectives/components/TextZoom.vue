<script setup>
const vZoom = {
  mounted(element) {
    element.addEventListener('scroll', () => {
      element.style.fontSize = (element.scrollTop/10 + 10) + 'px'
    })
  },
  unMounted(element) {
    element.removeEventListener('scroll')
  }
}
</script>

<template>
  <h1 v-zoom class="h-[100px] p-4 bg-pink-600 w-[400px] overflow-y-auto"><slot></slot></h1>
</template>

<style scoped>

</style>
