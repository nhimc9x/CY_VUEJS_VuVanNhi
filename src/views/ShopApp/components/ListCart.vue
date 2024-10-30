<script setup>
import { defineProps, onMounted, ref } from 'vue'
import { formatPrice} from '@/views/ShopApp/components/utils/formatPrice.js'

const props = defineProps({
  stateMyCart: {
    required: true
  }
})

const handleIncrease = (item) => {
  if(item.type.buying >= item.type.quantity) {
    alert('Out of product')
    return
  }
  item.type.buying++
}

const handleDecrease = (item) => {
  if(item.type.buying === 1) {
    props.stateMyCart.splice(props.stateMyCart.indexOf(item), 1)
    return
  }
  item.type.buying--
}

</script>

<template>
  <li v-if="stateMyCart.length === 0" class="text-xl tracking-wider text-center py-16">
    Không có sản phẩm trong giỏ hàng
  </li>
  <li v-for="(item, index) in stateMyCart" :key="index" class="flex gap-4 items-center pl-1 pr-4">
    <div class="size-16">
      <img class="size-full object-contain" :src="item.image"
           alt="">
    </div>
    <div class="">
      <div class="text-xl font-medium">{{ item.name }}</div>
      <div class="capitalize" :style="{color: item.type.color}">{{item.type.name}}</div>
    </div>
    <div class="flex items-center gap-2 ml-auto">
      <button @click="handleDecrease(item)" class="text-3xl px-2 text-red-500">-</button>
      <input class="w-10 p-1 text-pink-600" id="" type="number" placeholder="0" :value="item.type.buying" readonly>
      <button @click="handleIncrease(item)" class="text-3xl px-2 text-green-500">+</button>
    </div>
    <div class="text-xl tracking-wider">{{ formatPrice(item.price) }}</div>
  </li>
</template>

<style scoped>

</style>
