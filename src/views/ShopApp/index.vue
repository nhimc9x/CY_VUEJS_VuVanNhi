<script setup>
import CardProduct from '@/views/ShopApp/components/CardProduct.vue'
import cartIC from '@/assets/images/cart-svgrepo-com.svg'
import { shopData } from '@/views/ShopApp/data'
import { computed, reactive, ref } from 'vue'
import Cart from '@/views/ShopApp/components/Cart.vue'

const listProduct = reactive(shopData)
const showCart = ref(false)

const stateMyCart = reactive([])

const handleToggle = () => {
  showCart.value = !showCart.value
}

const handleAddToCart = (data) => {
  console.log(stateMyCart)
  const checkUnique = stateMyCart.some(item => item.id === data.id && item.type.name === data.type.name)
  if(checkUnique) {
    const productSame = stateMyCart.find(item => item.id === data.id && item.type.name === data.type.name)
    if (productSame.type.quantity === productSame.type.buying) {
      // listProduct.find(item => item.name === productSame.name && item.inStock.name === productSame.type.name).inStock.soldOut = true
      listProduct.find(item => item.id === productSame.id).inStock.find(item => item.name === productSame.type.name).soldOut = true
      alert('Out of product')
      return
    }
    productSame.type.buying++
    return
  }
  stateMyCart.push(data)
}

const notifyCart = computed(() => stateMyCart.length)

</script>

<template>
  <div class="w-full bg-[#1d2238] min-h-screen">
    <div class="bg-[#191a1a]/90 backdrop-blur-sm h-20 fixed top-0 right-0 left-0 z-30">
      <div class="flex items-center justify-between max-w-[1280px] mx-auto px-10 h-full">
        <div class="text-3xl italic font-bold tracking-widest text-pink-500">Nhideveloper</div>
        <div @click="handleToggle" class="h-full p-4 relative cursor-pointer">
          <img :src="cartIC" alt="" class="size-full">
          <div
            class="absolute text-white bg-black size-7 border-2 border-white rounded-full grid place-content-center top-2 right-2">
            {{ notifyCart }}
          </div>
        </div>
      </div>
    </div>

    <Cart :handleToggle="handleToggle" :showCart="showCart" :stateMyCart="stateMyCart" />

    <div class="max-w-[1280px] mx-auto w-full bg-[#262d47]">
      <div class="grid grid-cols-3 w-max gap-10 mx-auto py-32 ">
        <div v-for="item in listProduct" :key="item.id">
          <CardProduct :dataItem="item" :handleAddToCart="handleAddToCart" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
