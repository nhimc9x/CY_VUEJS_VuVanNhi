<script setup>
import { computed, reactive, ref } from 'vue'

const minPrice = ref(0)

const product = reactive([
  {
    id: 1,
    name: 'Head phones',
    price: 400
  },
  {
    id: 2,
    name: 'Iphone 14',
    price: 790
  },
  {
    id: 3,
    name: 'Mi band 7',
    price: 199
  },
  {
    id: 4,
    name: 'PS5',
    price: 2199
  },
  {
    id: 5,
    name: 'Head phones 6',
    price: 100
  },
  {
    id: 6,
    name: 'PS10',
    price: 10000
  }
])

const filterProduct = computed(() => product.filter(item => item.price >= minPrice.value))

</script>

<template>
  <div class="w-full min-h-screen bg-[#1d2238] pt-10">
    <div class="max-w-[1280px] mx-auto w-full bg-[#262d47] py-10">
      <input type="text" placeholder="Price min"
             v-model="minPrice"
             class="w-full p-2 text-xl text-white bg-black/70 rounded-md max-w-[600px] mx-auto block">
      <div class="max-w-[800px] mx-auto py-10">
        <div class="text-xl uppercase font-semibold text-white">List Product</div>
        <ul class="space-y-4 pl-4">
          <li>
            <div class="flex justify-between text-accent my-2">
              <div class="text-xl font-medium">Name</div>
              <div class="text-xl font-medium">Price</div>
            </div>
          </li>
          <li v-for="item in filterProduct" :key="item.id">
            <div class="flex justify-between text-highlight">
              <div class="font-medium">{{ item.name }}</div>
              <div class="font-medium">{{ item.price }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
