<script setup>
import { reactive, computed } from 'vue'

const listProduct = reactive([
  {
    name: 'T-shirt',
    price: 40000,
    quantity: 0
  },
  {
    name: 'Shoes',
    price: 20000,
    quantity: 0
  },
  {
    name: 'Two-piece',
    price: 10000,
    quantity: 0
  },
  {
    name: 'Body',
    price: 5000,
    quantity: 0
  },
  {
    name: 'Long-sleeve',
    price: 30000,
    quantity: 0
  },
  {
    name: 'Double-breasted',
    price: 90000,
    quantity: 0
  }
])

const totalPrice = computed(() => {
  return listProduct.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)
})

</script>

<template>
  <div class="wrapper">
    <div class="product">
      <div>Shopping</div>
      <ul>
        <li v-for="item in listProduct" :key="item.name">
          <div>{{item.name}}</div>
          <input type="number" v-model.number="item.quantity">
          <div>{{item.price}}đ</div>
        </li>
      </ul>
    </div>
    <div class="cart">
      <div>Summary</div>
      <div>
        <div>Total Price</div>
        <div>{{totalPrice}}đ</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 900px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 2fr 1fr;
  overflow: hidden;
}

.product {
  background-color: white;
  padding: 20px 32px;

  > div {
    font-size: 32px;
    font-weight: 800;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }

  > ul {
    list-style: none;
    padding: 0;
    margin: 0;

    > li {
      padding: 10px 20px;
      border-bottom: 1px solid #ccc;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > div {
        &:first-child {
          flex-basis: 200px;
          color: deeppink;
          font-weight: 600;
          font-size: 18px;
        }

        font-size: 14px;
        color: #7b7b7b;
      }

      > input {
        width: 100px;
      }
    }
  }
}

.cart {
  background-color: gray;
  padding: 20px 0;
  > div {
    &:first-child {
      font-size: 32px;
      font-weight: 800;
      color: deeppink;
      border-bottom: 1px solid #ccc;
      padding-bottom: 20px;
      text-align: center;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    font-size: 18px;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
  }

}

</style>
