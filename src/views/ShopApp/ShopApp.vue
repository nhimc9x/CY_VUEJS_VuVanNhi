<script setup>
import { computed, reactive, ref, watch } from 'vue'

const shopData = reactive(
  {
    cart: [],
    products: [
      {
        id: 1,
        name: 'PS5',
        price: 5555,
        publicDate: '05-05-2021',
        image:
          'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
        hot: true
      },
      {
        id: 2,
        name: 'PS4',
        price: 4444,
        publicDate: '04-04-2021',
        image:
          'https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$',
        hot: true
      },
      {
        id: 3,
        name: 'PS3',
        price: 3333,
        publicDate: '03-03-2021',
        image:
          'https://shopmaygame.com/wp-content/uploads/2018/04/ps31.png',
        hot: false
      }
    ],
    paymentMethods: [
      { text: 'COD', value: 1 },
      { text: 'Banking', value: 2 },
      { text: 'Ứng dụng bên thứ 3', value: 3 }
    ],
    selectedPayment: 2
  }
)

const paymentMethod = ref(shopData.paymentMethods[1].value)

const showModalCart = ref(false)

const handleShowModalCart = () => {
  showModalCart.value = !showModalCart.value
}

const productsHot = computed(() => shopData.products.filter(item => item.hot))

const handleAddToCard = (item) => {
  if (shopData.cart.includes(item)) return
  shopData.cart.push(item)
}

const handleRemoveFromCart = (item) => {
  shopData.cart.splice(shopData.cart.indexOf(item), 1)
}

watch(paymentMethod, () => {
  alert('Bạn vừa đổi phương thức thanh toán')
})


</script>

<template>
  <div class="w-full min-h-screen bg-gray-100 py-10">
    <div class="max-w-[960px] mx-auto">
      <div class="w-full bg-white rounded-md">
        <div class="text-xl font-semibold text-[#f5402d] uppercase p-4">Tất cả sản phẩm</div>
        <div class="h-96 grid grid-cols-3 gap-5 px-10 py-4">
          <div v-for="item in shopData.products" :key="item.id"
               class="h-80 flex flex-col pb-4 pt-2 border border-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-lg duration-300 relative">
            <div class="flag-sale bg-red-500 w-10 h-10 top-0 text-white grid place-content-center absolute"
                 v-if="item.price>4000">Max
            </div>
            <div class="bg-white h-3/5">
              <img :src="item.image" class="h-full object-contain mx-auto" alt="">
            </div>
            <div class="px-6 py-4 flex justify-between">
              <div class="text-xl font-semibold">{{ item.name }}</div>
              <div class="text-[#f5402d]">$ {{ item.price }}</div>
            </div>
            <div
              @click="handleAddToCard(item)"
              class="hover:bg-[#f5402d]/70 mx-auto w-max px-4 py-1 rounded mt-auto hover:text-white cursor-pointer duration-200 text-blue-600">
              {{ shopData.cart.includes(item) ? 'Đã thêm' : 'Thêm vô giỏ' }}
            </div>
          </div>
        </div>
      </div>

      <div class="w-full bg-white rounded-md">
        <div class="text-xl font-semibold text-[#f5402d] uppercase p-4">Sản phẩm hot</div>
        <div class="h-96 grid grid-cols-3 gap-5 px-10 py-4">
          <div v-for="item in productsHot" :key="item.id"
               class="h-80 flex flex-col pb-4 pt-2 border border-gray-100 rounded-md overflow-hidden shadow-none hover:shadow-lg duration-300 relative">
            <div class="flag-sale bg-red-500 w-10 h-10 top-0 text-white grid place-content-center absolute"
                 v-if="item.price>4000">Max
            </div>
            <div class="bg-white h-3/5">
              <img :src="item.image" class="h-full object-contain mx-auto" alt="">
            </div>
            <div class="px-6 py-4 flex justify-between">
              <div class="text-xl font-semibold">{{ item.name }}</div>
              <div class="text-[#f5402d]">$ {{ item.price }}</div>
            </div>
            <div
              @click="handleAddToCard(item)"
              class="hover:bg-[#f5402d]/70 mx-auto w-max px-4 py-1 rounded mt-auto hover:text-white cursor-pointer duration-200 text-blue-600">
              {{ shopData.cart.includes(item) ? 'Đã thêm' : 'Thêm vô giỏ' }}
            </div>
          </div>
        </div>
      </div>

    </div>

    <div @click="handleShowModalCart"
         class="fixed bottom-10 right-10 bg-red-500 size-16 p-2 rounded cursor-pointer z-10">
      <div
        class="absolute text-xl font-bold text-white bg-blue-500 size-8 rounded-full grid place-content-center -top-3 -right-3">
        {{ shopData.cart.length }}
      </div>
      <img src="@/assets/icons/cart.svg" alt="" class="" />
    </div>

    <div v-if="showModalCart" class="fixed bg-black/20 inset-0 grid place-content-center">
      <div class="w-[400px] bg-white rounded-md py-4 px-2">
        <div class="text-center text-2xl font-medium uppercase">Giỏ hàng</div>
        <ul class="py-6">
          <li v-if="shopData.cart.length === 0" class="text-center text-gray-400">Không có sản phẩm nào trong giỏ hàng
          </li>
          <li v-for="item in shopData.cart" :key="item.id" class="flex items-center justify-between py-2 px-4">
            <div class="text-xl font-semibold">{{ item.name }}</div>
            <div class="text-sm text-gray-500">$ {{ item.price }}</div>
            <div @click="handleRemoveFromCart" class="text-sm text-red-500 cursor-pointer">Delete</div>
          </li>
        </ul>
        <div class="text-lg px-2">
          <div>Phương thức thanh toán</div>
          <select class="my-2 py-1 border w-full" v-model="paymentMethod" :value="paymentMethod">
            <option v-for="(item, index) in shopData.paymentMethods" :value="item.value">{{ item.text }}</option>
          </select>
        </div>
        <div class="bg-blue-600 text-white py-2 mx-2 rounded text-center">Thanh toán</div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
