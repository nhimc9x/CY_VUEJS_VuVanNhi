<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import { getCurrenciesLocation, getCurrencyExchange } from '@/views/ListApp/CurrencyExchange/api'

const inputMoney = ref(0)
const currenciesState = ref([])
const selectFrom = ref('')
const selectTo = ref('')
const result = ref(0)

onMounted(async () => {
  const response = await getCurrenciesLocation()
  currenciesState.value = Object.keys(response.currencies)
  selectFrom.value = Object.keys(response.currencies)[0]
  selectTo.value = Object.keys(response.currencies)[1]
})

const handleConvert = async () => {
  const response = await getCurrencyExchange(selectFrom.value, selectTo.value, inputMoney.value)
  result.value = response.result[selectTo.value]
}

</script>

<template>
  <div class="w-full min-h-screen bg-[#1d2238] pt-10">
    <div class="max-w-[1280px] mx-auto w-full bg-[#262d47] py-10">
      <div class="text-4xl font-bold tracking-widest text-accent text-center mb-14">Currency Exchange</div>
      <form
        @submit.prevent="handleConvert"
        class="flex justify-center max-w-[680px] gap-4 mx-auto">
        <input type="number" placeholder="Số tiền"
               v-model.number.trim="inputMoney"
               class="p-2 text-xl text-white bg-black/70 rounded-md max-w-[400px] block">
        <select
          v-model="selectFrom"
          class="p-2 text-xl text-white bg-black/70 rounded-md max-w-[400px] block">
          <option v-for="(item, index) in currenciesState" :key="index" :value="item">{{ item }}</option>
        </select>
        <select
          v-model="selectTo"
          class="p-2 text-xl text-white bg-black/70 rounded-md max-w-[400px] block">
          <option v-for="(item, index) in currenciesState" :key="index" :value="item">{{ item }}</option>
        </select>
        <button
          class="px-4 text-xl bg-highlight outline-accent border border-highlight font-medium rounded-md text-accent">
          Convert
        </button>
      </form>
      <div class="bg-black/70 max-w-[600px] text-center text-white mx-auto mt-6 py-4 rounded-md">
        <div class="text-xl">Kết quả</div>
        <div class="flex w-[60%] mx-auto justify-between items-center text-lg py-4">
          <div class="">{{ inputMoney }} {{ selectFrom }}</div>
          <div class="">=</div>
          <div class="">{{ result }} {{ selectTo }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
