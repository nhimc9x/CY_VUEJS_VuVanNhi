<script setup>
import JSConfetti from 'js-confetti'
import { ref, watch } from 'vue'

const jsConfetti = new JSConfetti()
const timer = ref(null)
const count = ref(0)
const stateCount = ref(0)
const isStart = ref(false)

const handleStart = () => {
  if(count.value === 0 && typeof count.value !== 'number') {
    alert('Vui lòng nhập số giây')
    return
  }
  jsConfetti.clearCanvas()
  isStart.value = true
  stateCount.value = count.value
  timer.value = setInterval(() => {
    stateCount.value--
  }, 1000)
}

watch(stateCount, () => {
  if(stateCount.value === 0) {
    jsConfetti.addConfetti()
    clearInterval(timer.value)
    isStart.value = false
  }
})

</script>

<template>
  <div class="w-full min-h-screen bg-[#1d2238] pt-10">
    <div class="max-w-[1280px] mx-auto w-full bg-[#262d47] py-10">
      <div class="text-4xl font-bold tracking-widest text-accent text-center mb-14">CountDown</div>
      <form v-show="!isStart"  @submit.prevent="handleStart" class="flex justify-center mb-6 gap-4">
        <input type="number" placeholder="Nhập số giây"
               v-model.number.trim="count"
               class="w-full p-2 text-xl text-white bg-black/70 rounded-md max-w-[400px] block">
        <button class="px-4 text-xl bg-highlight outline-accent border border-highlight font-medium rounded-md text-accent">Start</button>
      </form>
      <div class="flex justify-center text-highlight">
        <div class="text-3xl font-bold text-center space-x-1">
          <span>{{ stateCount }}</span>
          <span>s</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
