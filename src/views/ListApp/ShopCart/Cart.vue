<script setup>
import { useProductStore } from '@/views/ListApp/ShopCart/stores/products'
import { storeToRefs } from 'pinia'

const store = useProductStore()
const { cart, totalPrice } = storeToRefs(store)

</script>

<template>
  <div class="w-[400px] bg-white/60 backdrop-blur-2xl fixed top-0 bottom-0 right-0 z-10 py-16">
    <div class="text-4xl font-bold tracking-wider uppercase text-accent text-center">My Cart</div>
    <ul class="mt-6 px-4">
      <li v-if="cart.length === 0">
        <div class="text-xl font-semibold text-center py-20">Chưa thêm sản phẩm</div>
      </li>
      <li v-else v-for="item in cart" :key="item.id" class="flex items-center py-4 border-b border-gray-200">
        <div class="w-20">
          <img class="size-full object-contain"
               :src="item.image"
               alt=""
          >
        </div>
        <div class="text-lg font-semibold">{{ item.name }}</div>
        <div class="text-lg font-semibold ml-auto">$ {{ item.price }}</div>
      </li>
    </ul>
    <div class="text-2xl font-semibold text-accent mt-4 text-center">Total: $ {{ totalPrice }}</div>
  </div>
</template>

<style scoped>

</style>
