<script setup>
import { computed, defineProps, onMounted, reactive, ref } from 'vue'
import hotGif from '@/assets/images/hot-gif.gif'
import noHotGif from '@/assets/images/no-hot-gif.gif'
import { formatPrice} from '@/views/ShopApp/components/utils/formatPrice.js'

const props = defineProps({
  dataItem: {
    type: Object,
    required: true
  },
  handleAddToCart: {
    required: true
  }
})
const stateColor = ref({})
const currentQuantity = ref(1)

onMounted(() => {
  stateColor.value = props.dataItem.inStock[0]
})

const changeColor = (color) => {
  stateColor.value = color
}

const formatDate = (date) => new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(new Date(Date.parse(date)))

const processBeforAddToCard = () => {

  const dataAdd = {
    id: props.dataItem.id,
    name: props.dataItem.name,
    price: props.dataItem.price,
    image: props.dataItem.image,
    type: {
      ...stateColor.value,
      buying: currentQuantity.value
    }
  }
  props.handleAddToCart(dataAdd)
}

console.log(props.dataItem.inStock)

</script>

<template>
  <div class="h-[400px] w-64 bg-[#191919] flex flex-col rounded-xl shadow-2xl overflow-hidden shadow-[#80f0ff]/10 hover:scale-105 duration-300">
    <div class="h-48 p-6 relative shrink-0">
      <img
        :style="{filter: `drop-shadow(0 0 2.75rem ${stateColor.color})`}"
        :src="dataItem.image"
        alt=""
        class="size-full object-contain"
      />
      <div
        class="absolute top-0 right-4 text-gray-200 px-3 py-0.5 font-semibold rounded-b-md "
        :style="{backgroundColor: stateColor.color}"
      >
        {{ formatPrice(dataItem.price) }}
      </div>
      <div class="absolute top-0 left-0">
        <img class="size-12" :src="dataItem.hot ? hotGif : noHotGif" alt=""/>
      </div>
    </div>
    <div class="flex gap-2 justify-center items-center py-2">
      <div
        v-for="(color, index) in dataItem.inStock"
        @mouseover="changeColor(color)"
        :key="index"
        :style="{backgroundColor: color.color}"
        class="size-7 rounded-full border-2"
        :class="stateColor.color === color.color ? 'border-white' : 'border-transparent'"
      ></div>
    </div>
    <div class="flex-1 bg-gradient-to-t from-[#19191b] to-[#49484e] rounded-xl flex flex-col p-3 text-gray-200">
      <div class="flex justify-between basis-3/4">
        <div class="w-[42%] flex flex-col justify-between">
          <div class="font-semibold uppercase tracking-wide text-lg text-right line-clamp-3">{{dataItem.name}}</div>
          <div class="text-sm scale-75 origin-right text-right">{{formatDate(dataItem.publicDate)}}</div>
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
          :disabled="stateColor.soldOut"
          @click="processBeforAddToCard"
          class="uppercase font-medium px-4 py-1.5 text-sm scale-75 origin-bottom rounded-full"
          :style="stateColor.soldOut ? {backgroundColor: '#4c4c4c', cursor: 'not-allowed'} : {backgroundColor: stateColor.color}"
        >Add to cart</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
