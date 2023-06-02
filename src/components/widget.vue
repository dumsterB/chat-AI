<template>
  <div class="chat-container">
    <transition name="fade">
      <div v-if="isChatOpen" class="chat-overlay" @click="toggleChat"></div>
    </transition>
    <transition name="slide-up">
      <div v-if="isChatOpen" class="chat-messenger">
        <div class="chat-header">
          <h2 class="chat-title">Support Chat</h2>
          <button class="close-button" @click="toggleChat">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="chat-messages">
          <div v-for="message in messages" :key="message.id" class="message">
            <div class="message-sender">{{ message.sender }}</div>
            <div class="message-content">{{ message.content }}</div>
          </div>
        </div>
        <div class="chat-input">
          <input v-model="newMessage" type="text" placeholder="Enter your message" />
          <button @click="sendMessage">Send</button>
        </div>
      </div>
    </transition>
    <button class="chat-toggle-button" @click="toggleChat">
      <i class="fas fa-comment-alt"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Message {
  id: number;
  sender: string;
  content: string;
}

const messages = ref<Message[]>([
  { id: 1, sender: 'Support', content: 'Welcome to the chat!' },
]);

const newMessage = ref('');
const isChatOpen = ref(false);

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value;
};

const sendMessage = () => {
  if (newMessage.value) {
    const newId = messages.value.length + 1;
    messages.value.push({
      id: newId,
      sender: 'Me',
      content: newMessage.value,
    });
    newMessage.value = '';
  }
};
</script>

<style scoped>
.chat-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.chat-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}

.chat-messenger {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 320px;
  background-color: #f0f0f0;
  border-radius: 5px;
  z-index: 9999;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.chat-header {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  display: flex;
  align-items: center;
}

.chat-title {
  margin: 0;
  flex: 1;
}

.close-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px;
  font-size: 18px;
}

.chat-messages {
  max-height: 200px;
  overflow-y: auto;
  padding: 10px;
}

.message {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.message-sender {
  font-weight: bold;
}

.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
}

input[type="text"] {
  flex: 1;
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
}

button {
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.chat-toggle-button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  transition: transform 0.3s;
}

.chat-toggle-button:hover {
  transform: scale(1.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s;
}

.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
