<script setup>
const vHighLight = {
  mounted(element) {
    element.addEventListener('mouseover', () => {
      element.style.color = 'red'
    })
    element.addEventListener('mouseout', () => {
      element.style.color = ''
    })
  }
}
</script>

<template>
  <h1 v-high-light ><slot></slot></h1>
</template>

<style scoped>

</style>
