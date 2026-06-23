<template>
  <el-card class="counter-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <span>Element Plus Counter</span>
        <el-tag type="success">Vue Transfer Demo</el-tag>
      </div>
    </template>

    <div class="count-display">
      <el-text size="large" type="primary">Count: {{ count }}</el-text>
    </div>

    <div class="actions">
      <MyButton type="primary" @click="increment">+1</MyButton>
      <MyButton type="warning" @click="decrement">-1</MyButton>
      <MyButton type="info" @click="reset">Reset</MyButton>
    </div>
  </el-card>
</template>

<script setup>
import { ElCard, ElTag, ElText, ElMessage } from 'element-plus'
import { ref } from 'vue'
import MyButton from './button.vue'

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}

function reset() {
  count.value = 0
  ElMessage.info('Count 已重置')
}
</script>

<style scoped>
.counter-card {
  max-width: 420px;
  margin: 40px auto;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.count-display {
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin: 24px 0;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
