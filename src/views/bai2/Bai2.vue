<script setup>
import { ref, computed } from 'vue'

const squareSize = ref(0)

const changeSize = computed(() => {
  return squareSize.value * squareSize.value
})

</script>

<template>
  <div class="">
    <div class="form">
      <input v-model="squareSize" type="number" placeholder="Enter size">
    </div>
    <div
      class="square"
    >
      <p>{{changeSize}} px<sup>2</sup></p>
    </div>
  </div>
</template>

<style scoped>
.square {
  width: 300px;
  height: 300px;
  background-color: pink;
  display: grid;
  place-content: center;
  margin: 40px auto 0;
  transition: all 0.5s ease-in-out;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 4px;
  > input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
}

</style>
