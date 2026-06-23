<template>
  <view
    class="demo-button"
    :class="[`demo-button--${type}`, { 'is-disabled': disabled }]"
    @click="handleClick"
  >
    <text><slot /></text>
  </view>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

function handleClick(e) {
  if (props.disabled) return
  emit('click', e)
}
</script>

<style scoped>
.demo-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12rpx 24rpx;
  border-radius: 8rpx;
  font-size: 28rpx;
}

.demo-button--default {
  background: #fff;
  border: 1rpx solid #dcdfe6;
  color: #606266;
}

.demo-button--primary {
  background: #409eff;
  color: #fff;
}

.demo-button--warning {
  background: #e6a23c;
  color: #fff;
}

.demo-button--info {
  background: #909399;
  color: #fff;
}

.demo-button.is-disabled {
  opacity: 0.6;
}
</style>
