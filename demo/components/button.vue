<template>
  <button
    class="my-button"
    :class="[`my-button--${type}`, { 'is-disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
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
.my-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;
}

.my-button--default {
  background: #fff;
  border-color: #dcdfe6;
  color: #606266;
}

.my-button--default:hover:not(.is-disabled) {
  color: #409eff;
  border-color: #c6e2ff;
  background: #ecf5ff;
}

.my-button--primary {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}

.my-button--primary:hover:not(.is-disabled) {
  background: #66b1ff;
  border-color: #66b1ff;
}

.my-button--warning {
  background: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}

.my-button--warning:hover:not(.is-disabled) {
  background: #ebb563;
  border-color: #ebb563;
}

.my-button--info {
  background: #909399;
  border-color: #909399;
  color: #fff;
}

.my-button--info:hover:not(.is-disabled) {
  background: #a6a9ad;
  border-color: #a6a9ad;
}

.my-button--danger {
  background: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}

.my-button--danger:hover:not(.is-disabled) {
  background: #f78989;
  border-color: #f78989;
}

.my-button.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
