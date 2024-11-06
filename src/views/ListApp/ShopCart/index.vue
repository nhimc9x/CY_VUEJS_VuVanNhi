<script setup>
import ProductCard from '@/views/ListApp/ShopCart/ProductCard.vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/views/ListApp/ShopCart/stores/products'
import Cart from '@/views/ListApp/ShopCart/Cart.vue'
import { ref } from 'vue'

const store = useProductStore()
const { products } = storeToRefs(store)
const showCart = ref(false)

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

    <div class="fixed bottom-4 right-4 z-30">
      <div
        @click="showCart = !showCart"
        class="size-16 bg-accent rounded-lg p-2 text-white grid place-items-center cursor-pointer"
      >
        <v-icon name="hi-solid-shopping-cart" scale="2" />
      </div>
    </div>

    <Cart v-if="showCart" />

  </div>
</template>

<style scoped>

</style>
