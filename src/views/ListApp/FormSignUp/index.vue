<script setup>
import { ref, watch } from 'vue'

const inputValue = ref({
  username: '',
  email: '',
  password: ''
})

const messageError = ref({
  email: '',
  password: ''
})

const checkEmail = (email) => {
  const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  if(email.length === 0) {
    messageError.value.email = 'Email không được để trống'
    return false
  }
  if (!regexEmail.test(email)) {
    messageError.value.email = 'Email không hợp lệ'
    return false
  }
  messageError.value.email = ''
  return true
}
const checkPassword = (password) => {
  if(password.length < 6) {
    messageError.value.password = 'Password phải tối thiểu 6 ký tự'
    return false
  }
  messageError.value.password = ''
  return true
}

watch(inputValue, () => {
  checkEmail(inputValue.value.email)
  checkPassword(inputValue.value.password)
}, {deep: true})

const handleSubmit = () => {
  if(checkEmail(inputValue.value.email) && checkPassword(inputValue.value.password)) {
    alert('SignUp ooke')
  }
  else {
    alert('Vui lòng kiểm tra lại các điều kiện')
  }
}

</script>

<template>
  <div
    style="background-image: url('https://images.newscientist.com/wp-content/uploads/2024/07/19161752/SEI_213395994.jpg')"
    class="w-full min-h-screen bg-center bg-no-repeat bg-cover grid place-content-center pt-10">
    <div class="w-[500px] h-[600px] bg-white/20 backdrop-blur-xl border-2 border-highlight rounded-md py-10 px-14">
      <div class="text-4xl font-bold tracking-widest text-primary text-center mb-14">SignUp</div>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="relative pb-4">
          <input type="text" placeholder="Username"
                 v-model.trim="inputValue.username"
                 class="w-full p-4 text-xl bg-white/15 outline-accent border border-highlight rounded-md placeholder-secondary/40 text-primary">
          <small class="text-red-500 text-lg min-h-4 h-4 absolute bottom-0 left-2"></small>
        </div>
        <div class="relative pb-4">
          <input type="email" placeholder="Email"
                 v-model.trim="inputValue.email"
                 class="w-full p-4 text-xl bg-white/15 outline-accent border border-highlight rounded-md placeholder-secondary/40 text-primary">
          <small class="text-red-500 text-lg min-h-4 h-4 absolute bottom-0 left-2">{{ messageError.email }}</small>
        </div>
        <div class="relative pb-4">
          <input type="password" placeholder="Password"
                 v-model.trim="inputValue.password"
                 class="w-full p-4 text-xl bg-white/15 outline-accent border border-highlight rounded-md placeholder-secondary/40 text-primary">
          <small class="text-red-500 text-lg min-h-4 h-4 absolute bottom-0 left-2">{{ messageError.password }}</small>
        </div>
        <button
          class="w-full p-4 text-xl bg-highlight outline-accent border border-highlight font-medium rounded-md text-accent"
        >SignUp
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
