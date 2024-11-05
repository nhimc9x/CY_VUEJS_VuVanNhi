<script setup>
import { login } from '@/services/authSevice.js'
import { ref } from 'vue'
import router from '@/router/index.js'

const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  const data = {
    email: email.value,
    password: password.value
  }
  try {
    const response = await login(data)
      localStorage.setItem('token', response.token)
      localStorage.setItem('userInfo', JSON.stringify(response.user))
      await router.push({
        name: 'Home',
      })
  } catch (error) {
    console.log('error: ', error)
  }
}

</script>

<template>
  <div
    style="background-image: url('https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-4.0.3')"
    class="w-full min-h-screen bg-center bg-no-repeat bg-cover grid place-content-center pt-10">
    <div class="w-[500px] min-h-[500px] bg-white/20 backdrop-blur-xl border-2 border-highlight rounded-md py-10 px-14">
      <div class="text-4xl font-bold tracking-widest text-secondary text-center mb-14">SignIn</div>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="relative pb-4">
          <input type="email" placeholder="Email"
                v-model.trim="email"
                 class="w-full p-4 text-xl bg-white/15 outline-accent border border-highlight rounded-md placeholder-secondary/60 text-primary">
        </div>
        <div class="relative pb-4">
          <input type="password" placeholder="Password"
                 v-model.trim="password"
                 class="w-full p-4 text-xl bg-white/15 outline-accent border border-highlight rounded-md placeholder-secondary/60 text-primary">
        </div>
        <button
          class="bg-secondary active:scale-105 border-2 border-highlight rounded-lg text-white w-full py-4 text-base hover:border-accent cursor-pointer transition"
        >
          SignIn
        </button>

      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
