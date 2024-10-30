<script setup>
import { computed, defineProps, ref } from 'vue'
import closeBtn from '@/assets/images/close.svg'
import ListCart from '@/views/ShopApp/components/ListCart.vue'
import { formatPrice} from '@/views/ShopApp/components/utils/formatPrice.js'


const props = defineProps({
  handleToggle: {
    required: true
  },
  showCart: {
    type: Boolean,
    required: true
  },
  stateMyCart: {
    type: Object
  }
})

const totalPrice = computed(() => formatPrice(props.stateMyCart.reduce((acc, item) => acc + item.price * item.type.buying, 0)))

</script>

<template>
  <div v-if="showCart" class="fixed inset-0 z-50 grid place-content-center">
    <div class="w-[600px] h-[500px] bg-[#1d2238]/60 backdrop-blur-2xl rounded-xl text-[#80f0ff] px-6 py-10 relative">
      <div @click="handleToggle" class="absolute size-10 top-2 right-2 cursor-pointer">
        <img class="size-full" :src="closeBtn" alt="">
      </div>
      <div class="text-2xl tracking-wider border-b pb-3">Order</div>
      <ul class="space-y-4 py-4 max-h-[340px] overflow-y-auto">
        <ListCart :stateMyCart="stateMyCart" />
      </ul>
      <div v-if="stateMyCart.length !== 0" class="mt-4 flex justify-center">
        <button
          class="bg-[#80f0ff] w-max text-gray-700 text-xl px-4 py-2 rounded-md font-medium duration-200 hover:bg-pink-500 hover:text-[#80f0ff]">
          Thanh toán {{ totalPrice }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
