<script setup>
import { ref } from 'vue'
import Header from '@/views/DragDrop/components/Header.vue'
import SideBar from '@/views/DragDrop/components/SideBar.vue'

const categories = ref([
  {
    id: 1,
    name: 'Clothing',
    products: [
      { id: 1, name: 'NikeOne', price: 100, brand: 'Nike' },
      { id: 2, name: 'Bomber', price: 200, brand: 'Adidas' },
      { id: 3, name: 'Air Jordan', price: 300, brand: 'Puma' },
      { id: 4, name: 'Nike Air Max', price: 400, brand: 'L’Oreal' },
      { id: 5, name: 'Nike Air Max 97', price: 500, brand: 'Adidas' }
    ]
  },
  {
    id: 2,
    name: 'Shoes',
    products: [
      { id: 1, name: 'Sneakers', price: 100, brand: 'Nike' },
      { id: 2, name: 'Running Shoes', price: 200, brand: 'Adidas' },
      { id: 3, name: 'Sneakers', price: 300, brand: 'Puma' },
      { id: 4, name: 'Sneakers', price: 400, brand: 'L’Oreal' },
      { id: 5, name: 'Sneakers', price: 500, brand: 'Adidas' }
    ]
  },
  {
    id: 3,
    name: 'Accessories',
    products: [
      { id: 1, name: 'Watch', price: 100, brand: 'Nike' },
      { id: 2, name: 'Alarm Clock', price: 200, brand: 'Adidas' },
      { id: 3, name: 'One Piece', price: 300, brand: 'Puma' },
      { id: 4, name: 'Pikachu', price: 400, brand: 'L’Oreal' },
      { id: 5, name: 'Alan Walker', price: 500, brand: 'Adidas' }
    ]
  },
  {
    id: 4,
    name: 'Electronics',
    products: [
      { id: 1, name: 'Bag LV', price: 100, brand: 'Nike' },
      { id: 2, name: 'Sports', price: 500, brand: 'Adidas' }
    ]
  }
])

</script>

<template>
  <div class="w-full min-h-screen bg-primary">
    <div class="max-w-[1280px] mx-auto w-full">

      <Header />

      <div class="flex w-full h-[680px] justify-between *:bg-secondary *:rounded-xl">

        <SideBar />
        <div class="w-[78%] bg-red-500 flex py-3 px-6">

          <div
            id="board"
            class="py-3 flex gap-6 overflow-x-auto overflow-y-hidden"
          >
            <div
              v-for="category in categories"
              :key="category.id"
              class="w-[280px] flex flex-col flex-shrink-0 h-full bg-third rounded-lg py-4 px-1 relative">
              <div id="column-drag-handle"
                   class="text-pink-400 cursor-move absolute z-10 top-3 right-2 text-3xl font-bold">⚡
              </div>

              <div
                class="text-xl text-center text-highlight brightness-200 font-semibold tracking-wide border-b pb-2 border-highlight">
                {{ category.name }}
              </div>

              <div
                class="space-y-3 py-4 px-1 overflow-y-auto overflow-x-hidden min-h-[300px]"
              >
                <div
                  v-for="card in category.products"
                  :key="card.id"
                  class="w-full rounded-[6px] cursor-grab overflow-hidden p-[1px] bg-highlight text-white">
                  <div class="bg-pink-500 rounded-t-[5px] w-full p-2 text-lg font-medium">{{ card.name }}</div>
                  <div class="px-4 py-2 text-secondary">
                    <div class="">Brand: {{ card.brand }}</div>
                    <div class="">Price: {{ card.price }}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  @apply h-2 w-1.5;
}

::-webkit-scrollbar-track {
  @apply rounded-2xl bg-gray-500/10;
}

::-webkit-scrollbar-thumb {
  @apply rounded-2xl bg-highlight;
}
</style>
