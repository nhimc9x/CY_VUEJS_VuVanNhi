<script setup>
import { reactive, computed, onMounted } from 'vue'

const product = reactive({
  image: 'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
  imageAlt: 'ps5 alt',
  product: 'ps5',
  productLink: 'https://bachtungps.com.vn/may-sony-playstation-5-ps5-1',
  quantity: 10,
  price: 10000,
  description: 'Sony PS5 - 1',
  discount: 0.2,
  inStock: true,
  classObject: {
    'bg-green': true,
    'bg-blue': false
  }
})

const afterSale = () => {
  return product.price - (product.price * product.discount)
}

const description = computed(() => {
  return product.description = "Đây là một mô tả mới"
})

const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
}

</script>

<template>
<div class="">
  <a href={{product.productLink}} target="_blank" class="card" :class="product.classObject">
    <div class="card-img">
      <img v-bind:src="product.image" v-bind:alt="product.imageAlt">
    </div>
    <div class="card-title" :class="product.inStock ? 'is-inStock' : 'text-white'">{{product.product}}</div>
    <div class="card-subtitle">{{description}}</div>
    <hr class="card-divider">
    <div class="card-footer">
      <div class="card-price">{{formatCurrency(afterSale())}}</div>
      <button class="card-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
      </button>
    </div>
  </a>
</div>
</template>

<style scoped>
.card {
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  --main-focus: #2d8cf0;
  width: 230px;
  height: 300px;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  gap: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.bg-green {
  background-color: #c2ffc2;
}
.bg-blue {
  background-color: blue;
}
.is-inStock {
  color: red;
}
.text-white {
  color: white;
}
.card:last-child {
  justify-content: flex-end;
}

.card-img {
  /* clear and add new css */
  transition: all 0.5s;
  display: flex;
  justify-content: center;
}

.card-img img {
  width: 100px;
  height: 100px;
}

.card-title {
  font-size: 20px;
  font-weight: 500;
  text-align: center;
}

.card-subtitle {
  font-size: 14px;
  font-weight: 400;
  color: var(--font-color-sub);
}

.card-divider {
  width: 100%;
  border: 1px solid var(--main-color);
  border-radius: 50px;
}

.card-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.card-price {
  font-size: 20px;
  font-weight: 500;
  color: var(--font-color);
}

.card-price span {
  font-size: 20px;
  font-weight: 500;
  color: var(--font-color-sub);
}

.card-btn {
  height: 35px;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 5px;
  padding: 0 15px;
  transition: all 0.3s;
}

.card-btn svg {
  width: 100%;
  height: 100%;
  fill: var(--main-color);
  transition: all 0.3s;
}

.card-btn:hover {
  border: 2px solid var(--main-focus);
}

.card-btn:hover svg {
  fill: var(--main-focus);
}

.card-btn:active {
  transform: translateY(3px);
}

</style>
