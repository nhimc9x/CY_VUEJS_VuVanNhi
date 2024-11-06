<script setup>
import { useProductStore } from '@/views/ListApp/ShopCart/stores/products'
import { defineProps } from 'vue'

const store = useProductStore()
const { addToCart } = store

const props = defineProps({
  dataItem: {
    type: Object,
    required: true,
  },
})

const handleAddToCart = () => {
  const data = {
    id: props.dataItem.id,
    name: props.dataItem.name,
    price: props.dataItem.price,
    image: props.dataItem.image,
  }
  addToCart(data)
}

</script>

<template>
  <div class="h-[400px] w-64 bg-[#191919] flex flex-col rounded-xl shadow-2xl overflow-hidden shadow-[#80f0ff]/10 hover:scale-105 duration-300">
    <div class="h-60 p-6 relative shrink-0">
      <img
        :style="{filter: `drop-shadow(0 0 2.75rem ${dataItem.color})`}"
        :src="dataItem.image"
        alt=""
        class="size-full object-contain"
      />
      <div
        class="absolute top-0 right-4 text-gray-200 px-3 py-0.5 font-semibold rounded-b-md "
        :style="{backgroundColor: dataItem.color}"
      >
        $ {{ dataItem.price }}
      </div>
    </div>
    <div class="flex-1 bg-gradient-to-t from-[#19191b] to-[#49484e] rounded-xl flex flex-col p-3 text-gray-200">
      <div class="flex justify-between basis-3/4">
        <div class="w-[42%] flex flex-col justify-between">
          <div class="font-semibold uppercase tracking-wide text-lg text-right line-clamp-3">{{dataItem.name}}</div>
        </div>
        <div
          class="w-0.5 my-2 rounded-full bg-gray-500/30"
        ></div>
        <div class="w-[42%] flex flex-col justify-between">
          <div class="line-clamp-3 text-sm">{{dataItem.description}}</div>
          <div class="text-sm mb-1">{{dataItem.brand}}</div>
        </div>
      </div>
      <div class="w-full flex-1 flex items-end justify-center">
        <button
          @click="handleAddToCart"
          class="uppercase font-medium px-4 py-1.5 text-sm scale-75 origin-bottom rounded-full"
          :style="{backgroundColor: dataItem.color}"
        >Add to cart</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
