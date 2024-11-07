<script setup>
import { onMounted, ref } from 'vue'

const messages = ref([])
const newMessage = ref('')

// Hàm gửi tin nhắn
function sendMessage() {
  // if (newMessage.value.trim() !== "") {
  //   await addDoc(collection(db, "messages"), {
  //     text: newMessage.value,
  //     timestamp: Date.now(),
  //     user: "Username" // Thay bằng tên người dùng thực tế nếu có
  //   });
  //   newMessage.value = "";
  // }
  const utterance = new SpeechSynthesisUtterance("Hello, World!")
  utterance.lang = 'vi-VN'
  utterance.voice = window.speechSynthesis.getVoices()[0]
  utterance.rate = 0.5; // Tốc độ đọc, bạn có thể điều chỉnh (0.5 - 2)
  utterance.pitch = 0.5; // Tông giọng, cũng có thể điều chỉnh
  speechSynthesis.speak(utterance)
}

// Hàm lắng nghe tin nhắn mới theo thời gian thực
onMounted(() => {
  // const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
  // onSnapshot(q, (querySnapshot) => {
  //   messages.value = querySnapshot.docs.map(doc => doc.data());
  // });
})
</script>

<template>
  <div class="chat-container">
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <strong>{{ message.user }}:</strong> {{ message.text }}
      </div>
    </div>
    <input
      v-model="newMessage"
      @keyup.enter="sendMessage"
      placeholder="Nhập tin nhắn..."
    />
    <button @click="sendMessage">Gửi</button>
  </div>
</template>

<style scoped>

</style>
