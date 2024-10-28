<script setup>

import { computed, ref } from 'vue'

const toggle = ref([])

</script>

<template>
  <div class="favorite">
    <h2>Sở thích</h2>
    <div class="favorite-item">
      <input v-model="toggle" value="1" type="checkbox" id="favorite-item-1">
      <label for="favorite-item-1" :class="toggle.includes('1') ? 'checked' : 'no-checked'">Xem phim</label>
    </div>
    <div class="favorite-item">
      <input v-model="toggle" type="checkbox" value="2" id="favorite-item-2">
      <label for="favorite-item-2" :class="toggle.includes('2') ? 'checked' : 'no-checked'">Đá bóng</label>
    </div>
    <div class="favorite-item">
      <input v-model="toggle" value="3" type="checkbox" id="favorite-item-3">
      <label for="favorite-item-3" :class="toggle.includes('3') ? 'checked' : 'no-checked'">Lập trình</label>
    </div>
    <div class="favorite-item">
      <input v-model="toggle" value="4" type="checkbox" id="favorite-item-4">
      <label for="favorite-item-4" :class="toggle.includes('4') ? 'checked' : 'no-checked'">Chơi game</label>
    </div>
  </div>
</template>
<style scoped>
.favorite {
  width: 300px;
  height: 200px;
  background-color: pink;
  padding: 12px 18px;
  border-radius: 10px;
}
h2 {
  color: deeppink;
  text-align: center;
}
.favorite-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
}
.no-checked {
  color: red;
  font-weight: 400;
}
.checked {
  color: dodgerblue;
  font-weight: 900;
}

</style>
