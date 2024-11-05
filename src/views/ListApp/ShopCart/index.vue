<script setup>
import { ref } from 'vue'
import ProductCard from '@/views/ListApp/ShopCart/ProductCard.vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/views/ListApp/ShopCart/stores/products'

const store = useProductStore()
const { products } = storeToRefs(store)

</script>

<template>
<div class="w-full min-h-screen bg-[#1d2238] pt-10">
  <div class="max-w-[1280px] mx-auto w-full py-10">
    <div class="text-4xl font-bold tracking-widest text-accent text-center mb-14">Shop Cart</div>
    <div class="grid grid-cols-3 w-max gap-10 mx-auto">
      <div v-for="item in products" :key="item.id">
        <ProductCard :dataItem="item" />
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
