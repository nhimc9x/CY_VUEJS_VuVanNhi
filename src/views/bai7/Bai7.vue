<script setup>
import { ref, watch } from 'vue'

const validPass = ref('')
const isDisabled = ref(false)
const messageErrorPassword = ref('')

watch(validPass, () => {
  if (validPass.value.length < 8) {
    messageErrorPassword.value = 'Password must be at least 8 characters long'
    isDisabled.value = true
  }
  else {
    messageErrorPassword.value = ''
    isDisabled.value = false
  }
}, { immediate: true })

const submitForm = () => {
  alert("Form đã hoàn tất")
}

</script>

<template>
  <div class="box">
    <form id="form" @submit="submitForm">
      <h2>SIGNUP</h2>

      <div class="row">
        <label for="name">Full Name</label>
        <input type="text" id="fullname" name="fullname" required>
        <small></small>
      </div>

      <div class="row">
        <label for="email">Email</label>
        <input type="text" id="email" name="email" required>
        <small></small>
      </div>

      <div class="row">
        <label for="name">Phone Number</label>
        <input type="text" id="phone" name="phone" required>
        <small></small>
      </div>

      <div class="row">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" v-model="validPass" required>
        <small>{{messageErrorPassword}}</small>
      </div>

      <div class="row">
        <label for="re-password">Re-Password</label>
        <input type="password" id="re-password" name="re-password" required>
        <small></small>
      </div>

      <div style="display: flex; justify-content: center">
        <button :disabled="isDisabled" :class="{'disabled': isDisabled}" >Signup</button>
      </div>

    </form>
  </div>
</template>

<style scoped>
.disabled {
  background-color: #323232;
}
.box {
  background-color: #2c3e50;
  border-radius: 10px;
  padding: 20px 80px;
  backdrop-filter: blur(6px);
  color: turquoise;
}
h2 {
  text-align: center;
  margin-bottom: 40px;
}

.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
}

small {
  padding-top: 2px;
  align-self: flex-start;
  grid-row: 2;
  grid-column: 2 / 4;
  color: rgb(255, 8, 8);
  font-size: 14px;
  font-weight: 600;
}

input {
  grid-column: 2 / 4;
  padding: 8px 12px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.5);
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
}

label {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  margin-right: 16px;
}

button {
  margin: 0 auto;
  background: cyan;
  border-radius: 6px;
  padding: 8px 20px;
  outline: none;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  border: none;
}
</style>
