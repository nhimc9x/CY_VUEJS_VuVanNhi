<script setup>
import Item from '@/views/Bai1/Item.vue'
import { reactive } from 'vue'
import Check from '@/views/Bai1/Check.vue'
const dataProduct = reactive([
  {
    id: 1,
    name: 'Head phones',
    price: 400,
    isCheck: false,
  },
  {
    id: 2,
    name: 'Television',
    price: 10000,
    isCheck: true,

  },
  {
    id: 3,
    name: 'Speaker',
    price: 400,
    isCheck: true,
  },
  {
    id: 4,
    name: 'Head phones 4',
    price: 400,
    isCheck: false,
  },
  {
    id: 5,
    name: 'Head phones 6',
    price: 400,
    isCheck: false,
  },
])

const handleCheck = (item) => {
  alert(JSON.stringify(item))
  dataProduct.find(itemL => itemL.id === item.id).isCheck = true
}

</script>

<template>
<div class="">
  <Item :dataItem="dataProduct" @handleCheck="handleCheck" />
  <Check :dataItem="dataProduct" />
</div>
</template>

<style scoped>

</style>
