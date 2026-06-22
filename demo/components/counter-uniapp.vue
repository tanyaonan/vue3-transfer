<template>
  <view class="counter-page">
    <wd-card title="Wot UI Counter">
      <view class="card-header">
        <text class="title">UniApp Transfer Demo</text>
        <wd-tag type="primary">H5 / App / 小程序</wd-tag>
      </view>

      <view class="count-display">
        <text class="count">Count: {{ count }}</text>
      </view>

      <view class="actions">
        <wd-button type="primary" @click="increment">+1</wd-button>
        <wd-button type="warning" @click="decrement">-1</wd-button>
        <wd-button type="info" @click="reset">Reset</wd-button>
      </view>
    </wd-card>

    <view class="section">
      <text class="section-title">内置组件一致性</text>

      <view class="row">
        <text class="label">view hover:</text>
        <view
          class="hover-box"
          hover-class="hover-box-active"
          hover-start-time="20"
          hover-stay-time="100"
        >
          按压我
        </view>
        <view
          class="hover-box"
          hover-class="hover-box-active"
          hover-stop-propagation
          hover-start-time="20"
          hover-stay-time="100"
        >
          不冒泡
        </view>
      </view>

      <view class="row">
        <text class="label">text:</text>
        <text selectable>可选中</text>
        <text space="ensp">a b</text>
        <text space="emsp">a b</text>
        <text decode>&amp;lt;解码&amp;gt;</text>
      </view>

      <view class="row">
        <text class="label">button:</text>
        <button type="primary" size="mini" @click="onPrimaryClick">主要</button>
        <button type="warn" size="mini" plain @click="onWarnClick">警告</button>
        <button type="default" size="mini" loading>加载</button>
        <button type="default" size="mini" disabled>禁用</button>
        <button type="default" size="mini" hover-class="custom-hover">自定义悬停</button>
      </view>

      <view class="row row-top">
        <text class="label">input:</text>
        <view class="input-wrap">
          <input v-model="inputValue" placeholder="普通文本" />
        </view>
        <view class="input-wrap">
          <input type="number" maxlength="6" placeholder="数字6位" @confirm="onInputConfirm" />
        </view>
        <view class="input-wrap">
          <input type="digit" placeholder="digit" />
        </view>
        <view class="input-wrap">
          <input type="tel" placeholder="tel" />
        </view>
        <view class="input-wrap">
          <input
            password
            placeholder="密码"
            placeholder-style="color:#999;font-size:24rpx"
            placeholder-class="demo-placeholder"
            confirm-type="search"
            :focus="inputFocus"
            @focus="onInputFocus"
            @blur="onInputBlur"
            @confirm="onInputConfirm"
          />
        </view>
      </view>

      <view class="row row-top">
        <text class="label">image:</text>
        <image
          class="demo-image"
          :src="localImage"
          mode="aspectFit"
          lazy-load
          @load="onImageLoad"
          @error="onImageError"
        />
        <image
          class="demo-image"
          :src="localImage"
          mode="aspectFill"
          @load="onImageLoad"
        />
        <image
          class="demo-image demo-image-wide"
          :src="localImage"
          mode="widthFix"
          draggable="false"
          @load="onImageLoad"
        />
        <image
          class="demo-image"
          src="https://picsum.photos/200/300"
          mode="scaleToFill"
          @load="onImageLoad"
        />
        <image
          class="demo-image"
          src="https://invalid.example.com/broken.png"
          mode="aspectFit"
          @error="onImageError"
        />
      </view>
    </view>

    <view class="section">
      <text class="section-title">弹窗与反馈</text>
      <view class="actions">
        <button type="default" size="mini" @click="toastSuccess">toast success</button>
        <button type="default" size="mini" @click="toastNone">toast none</button>
        <button type="default" size="mini" @click="toastError">toast error</button>
        <button type="default" size="mini" @click="toastLoadingThenHide">showLoading→hide</button>
        <button type="default" size="mini" @click="toastWithMask">toast mask</button>
        <button type="default" size="mini" @click="modalWithCancel">modal 有取消</button>
        <button type="default" size="mini" @click="modalNoCancel">modal 无取消</button>
        <button type="default" size="mini" @click="modalEditable">modal 可输入</button>
      </view>
    </view>

    <view class="section">
      <text class="section-title">网络请求</text>
      <view class="actions">
        <button type="default" size="mini" @click="requestGet">GET httpbin</button>
        <button type="default" size="mini" @click="requestPost">POST httpbin</button>
        <button type="default" size="mini" @click="requestAbort">请求后 abort</button>
        <button type="default" size="mini" @click="requestTimeout">timeout=1</button>
      </view>
    </view>

    <view class="section">
      <text class="section-title">本地存储</text>
      <view class="row">
        <text class="label">storage:</text>
        <view class="input-wrap">
          <input v-model="storageKey" placeholder="key" />
        </view>
        <view class="input-wrap">
          <input v-model="storageValue" placeholder="value" />
        </view>
      </view>
      <view class="actions">
        <button type="default" size="mini" @click="storageSet">setStorage</button>
        <button type="default" size="mini" @click="storageGet">getStorage</button>
        <button type="default" size="mini" @click="storageRemove">remove</button>
        <button type="default" size="mini" @click="storageClear">clear</button>
      </view>
    </view>

    <view class="section">
      <text class="section-title">导航占位</text>
      <view class="actions">
        <button type="default" size="mini" @click="navigateToDemo">navigateTo</button>
        <button type="default" size="mini" @click="redirectToDemo">redirectTo</button>
        <button type="default" size="mini" @click="switchTabDemo">switchTab</button>
        <button type="default" size="mini" @click="reLaunchDemo">reLaunch</button>
      </view>
    </view>

    <view class="section">
      <text class="section-title">全局事件总线</text>
      <view class="actions">
        <button type="default" size="mini" @click="eventRegister">$on</button>
        <button type="default" size="mini" @click="eventEmit">$emit</button>
        <button type="default" size="mini" @click="eventUnregister">$off</button>
      </view>
    </view>

    <view class="section">
      <text class="section-title">系统信息</text>
      <view class="actions">
        <button type="default" size="mini" @click="showSystemInfoSync">getSystemInfoSync</button>
        <button type="default" size="mini" @click="showSystemInfoAsync">getSystemInfo async</button>
      </view>
    </view>

    <view class="section status-section">
      <text class="section-title">最后结果 / 状态</text>
      <text class="status-text" selectable>{{ status }}</text>
      <view class="check-list">
        <text
          v-for="item in checklist"
          :key="item.name"
          :class="['check-item', item.ok ? 'check-ok' : '']"
        >
          {{ item.ok ? '✓' : '○' }} {{ item.name }}
        </text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const localImage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAIAAAC2BqGFAAACPElEQVR4nO3dzVHDMBBAYYVJE24jTXGkFh9pSmXgEjjCHXIBrd6sVu8d+Zlkv1kcknji28fnV7P5vQC3YUJzudFQQkMJDSU0lNBQQkMJDSU0lNBQQkMJDSU0lNBQQkMJDSU0lNBQ9wb2eG/Z6q/QDd2AN2cf+Xx58bnQSxAz3LOglyOezT3lwXBp5Tbn/sdDr648aYpg6BrKM2aJhK6kHD5RGHQ95di5YqCrKgdO51NwqADo2uscNaMbDTUKvcM6h0zqRkMJvQL0PseN8XndaCihoYSGEhpKaCihoYSGErriCTSDXW9PvnicbYnui/r+/m5y8fu6xE9/OC33Sw3lwd/aF/oa8MppnRH6GpZKaJ0O+goyymadC/oK1UllnQu6cImgrwkLmGepE0HXTujNoK9pf+NJjh5ZoMsnNJTQUEJDCQ0l9GbQx7QX7JO8FZAFunxC7wd9nGWPG7mga5cL+jhrrnM66Bank0o5I3SLMMqmnBS6jUklVM4L3f7rlVM5+ylhx/mHV+7TEi8A/UPQs0mhjtw7u+oxulhCQwkNJTSU0FBCQwkNJfQK0NinXCdpZF43GkroRaD3OXr0sUndaKgA6B2Wug/P6EZDxUDXXuoeMV3YRle17kFzRR466ln3uImCj9GVrHvoLPEPhjWse/QUU/7rWN26T7j/Xitr8WtlLffpx33pq7/lF++VrmdoPgXn8rUOKKGhhIYSGkpoKKGhhIYSGkpoKKGhhIYSGkpoKKGhhIYSGkroxvQNPmh0gWYXLMUAAAAASUVORK5CYII='

const count = ref(0)
const inputValue = ref('')
const inputFocus = ref(false)
const storageKey = ref('demo-key')
const storageValue = ref('demo-value')
const status = ref('等待操作...')

const checklist = ref([
  { name: 'showToast success', ok: false },
  { name: 'showToast none', ok: false },
  { name: 'showToast error', ok: false },
  { name: 'showLoading / hideLoading', ok: false },
  { name: 'showModal with cancel', ok: false },
  { name: 'showModal no cancel', ok: false },
  { name: 'showModal editable', ok: false },
  { name: 'request GET', ok: false },
  { name: 'request POST', ok: false },
  { name: 'request abort', ok: false },
  { name: 'request timeout', ok: false },
  { name: 'storage round-trip', ok: false },
  { name: 'storage remove', ok: false },
  { name: 'storage clear', ok: false },
  { name: 'getSystemInfo sync', ok: false },
  { name: 'getSystemInfo async', ok: false },
  { name: 'navigateTo stub', ok: false },
  { name: 'redirectTo stub', ok: false },
  { name: 'switchTab stub', ok: false },
  { name: 'reLaunch stub', ok: false },
  { name: '$on/$emit/$off', ok: false },
])

function setStatus(msg) {
  status.value = msg
}

function mark(name) {
  const item = checklist.value.find((i) => i.name === name)
  if (item) item.ok = true
}

function increment() {
  count.value++
}

function decrement() {
  count.value--
}

function reset() {
  count.value = 0
  uni.showToast({ title: 'Count 已重置', icon: 'none' })
}

function onPrimaryClick() {
  uni.showToast({ title: '主要按钮', icon: 'success' })
}

function onWarnClick() {
  uni.showToast({ title: '警告按钮', icon: 'none' })
}

function onImageLoad(e) {
  setStatus(`image load: ${e.detail.width}x${e.detail.height}`)
}

function onImageError(e) {
  setStatus(`image error: ${JSON.stringify(e.detail)}`)
}

function onInputFocus(e) {
  setStatus(`input focus: ${e.detail.value}`)
}

function onInputBlur(e) {
  setStatus(`input blur: ${e.detail.value}`)
}

function onInputConfirm(e) {
  setStatus(`input confirm: ${e.detail.value}`)
}

function toastSuccess() {
  uni.showToast({
    title: '操作成功',
    icon: 'success',
    success: () => mark('showToast success'),
  })
}

function toastNone() {
  uni.showToast({
    title: '纯文字提示',
    icon: 'none',
    success: () => mark('showToast none'),
  })
}

function toastError() {
  uni.showToast({
    title: '操作失败',
    icon: 'error',
    success: () => mark('showToast error'),
  })
}

function toastLoadingThenHide() {
  uni.showLoading({ title: '加载中', mask: true })
  setTimeout(() => {
    uni.hideLoading()
    mark('showLoading / hideLoading')
  }, 1200)
}

function toastWithMask() {
  uni.showToast({ title: 'mask 不可穿透', mask: true })
}

function modalWithCancel() {
  uni.showModal({
    title: '提示',
    content: '这是浏览器端还原的 uni.showModal，带取消按钮。',
    success: (res) => {
      setStatus(`modal: confirm=${res.confirm} cancel=${res.cancel}`)
      mark('showModal with cancel')
    },
  })
}

function modalNoCancel() {
  uni.showModal({
    title: '提示',
    content: '只有一个确定按钮',
    showCancel: false,
    success: (res) => {
      setStatus(`modal noCancel: confirm=${res.confirm}`)
      mark('showModal no cancel')
    },
  })
}

function modalEditable() {
  uni.showModal({
    title: '请输入',
    content: '',
    editable: true,
    placeholderText: '在这里输入内容',
    success: (res) => {
      setStatus(`editable modal: confirm=${res.confirm} content=${res.content || ''}`)
      mark('showModal editable')
    },
  })
}

let lastRequestTask = null

function requestGet() {
  lastRequestTask = uni.request({
    url: 'https://httpbin.org/get',
    success: (res) => {
      setStatus(`GET ${res.statusCode}`)
      mark('request GET')
    },
    fail: (err) => setStatus(`GET fail ${JSON.stringify(err)}`),
  })
}

function requestPost() {
  lastRequestTask = uni.request({
    url: 'https://httpbin.org/post',
    method: 'POST',
    data: { foo: 'bar' },
    header: { 'X-Test': '1' },
    success: (res) => {
      setStatus(`POST ${res.statusCode}`)
      mark('request POST')
    },
    fail: (err) => setStatus(`POST fail ${JSON.stringify(err)}`),
  })
}

function requestAbort() {
  const task = uni.request({ url: 'https://httpbin.org/delay/5' })
  setTimeout(() => {
    task.abort()
    setStatus('request aborted')
    mark('request abort')
  }, 50)
}

function requestTimeout() {
  uni.request({
    url: 'https://httpbin.org/delay/5',
    timeout: 1,
    fail: (err) => {
      setStatus(`timeout: ${JSON.stringify(err)}`)
      mark('request timeout')
    },
  })
}

function storageSet() {
  uni.setStorageSync(storageKey.value, storageValue.value)
  setStatus('storage set')
}

function storageGet() {
  const v = uni.getStorageSync(storageKey.value)
  setStatus(`storage get: ${JSON.stringify(v)}`)
  if (v === storageValue.value) mark('storage round-trip')
}

function storageRemove() {
  uni.removeStorageSync(storageKey.value)
  setStatus('storage removed')
  mark('storage remove')
}

function storageClear() {
  uni.clearStorageSync()
  setStatus('storage cleared')
  mark('storage clear')
}

function navigateToDemo() {
  uni.navigateTo({
    url: '/pages/index/index',
    success: () => {
      setStatus('navigateTo stub')
      mark('navigateTo stub')
    },
  })
}

function redirectToDemo() {
  uni.redirectTo({
    url: '/pages/index/index',
    success: () => {
      setStatus('redirectTo stub')
      mark('redirectTo stub')
    },
  })
}

function switchTabDemo() {
  uni.switchTab({
    url: '/pages/index/index',
    success: () => {
      setStatus('switchTab stub')
      mark('switchTab stub')
    },
  })
}

function reLaunchDemo() {
  uni.reLaunch({
    url: '/pages/index/index',
    success: () => {
      setStatus('reLaunch stub')
      mark('reLaunch stub')
    },
  })
}

function showSystemInfoSync() {
  const info = uni.getSystemInfoSync()
  setStatus(
    `sync: ${info.platform} ${info.windowWidth}x${info.windowHeight} dpr=${info.pixelRatio}`,
  )
  mark('getSystemInfo sync')
}

function showSystemInfoAsync() {
  uni.getSystemInfo({
    success: (info) => {
      setStatus(
        `async: ${info.platform} ${info.windowWidth}x${info.windowHeight} dpr=${info.pixelRatio}`,
      )
      mark('getSystemInfo async')
    },
  })
}

let eventCb = null
function eventRegister() {
  eventCb = () => setStatus('event received')
  uni.$on('demo-event', eventCb)
  setStatus('event registered')
}

function eventEmit() {
  uni.$emit('demo-event')
}

function eventUnregister() {
  if (eventCb) {
    uni.$off('demo-event', eventCb)
    eventCb = null
    setStatus('event unregistered')
    mark('$on/$emit/$off')
  }
}
</script>

<style>
page {
  background-color: #f5f5f5;
}
</style>

<style scoped>
.counter-page {
  padding: 24rpx;
  padding-bottom: calc(24rpx + env(safe-area-inset-bottom));
  background: #f5f5f5;
  min-height: 100vh;
  box-sizing: border-box;
}

.counter-page .wd-card {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 34rpx;
  font-weight: 600;
}

.count-display {
  text-align: center;
  margin: 48rpx 0;
}

.count {
  font-size: 52rpx;
  font-weight: 600;
  color: #333;
}

.actions {
  display: flex;
  justify-content: flex-start;
  gap: 16rpx;
  flex-wrap: wrap;
}

.section {
  margin-top: 24rpx;
  padding: 24rpx;
  background: #fff;
  border-radius: 16rpx;
}

.section-title {
  display: block;
  font-size: 30rpx;
  font-weight: 600;
  margin-bottom: 24rpx;
  color: #333;
}

.row {
  display: flex;
  align-items: center;
  gap: 16rpx;
  margin-bottom: 24rpx;
  flex-wrap: wrap;
}

.row-top {
  align-items: flex-start;
}

.label {
  font-size: 28rpx;
  color: #666;
  min-width: 140rpx;
}

.hover-box {
  padding: 12rpx 24rpx;
  background: #e6f7ff;
  border-radius: 8rpx;
  font-size: 28rpx;
}

.hover-box-active {
  background: #1890ff;
  color: #fff;
}

.custom-hover {
  color: #007aff;
  background-color: #e6f7ff;
}

.input-wrap {
  display: flex;
  align-items: center;
  width: 220rpx;
  height: 64rpx;
  padding: 0 16rpx;
  border: 1rpx solid #ddd;
  border-radius: 8rpx;
  box-sizing: border-box;
}

.demo-placeholder {
  color: #999;
  font-size: 24rpx;
}

.demo-image {
  width: 160rpx;
  height: 160rpx;
  background: #eee;
  border-radius: 8rpx;
}

.demo-image-wide {
  width: 200rpx;
  height: auto;
}

.status-section {
  margin-bottom: 24rpx;
}

.status-text {
  display: block;
  font-size: 24rpx;
  color: #666;
  word-break: break-all;
  margin-bottom: 16rpx;
}

.check-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12rpx;
}

.check-item {
  font-size: 22rpx;
  color: #999;
  background: #f5f5f5;
  padding: 6rpx 12rpx;
  border-radius: 6rpx;
}

.check-ok {
  color: #52c41a;
  background: #f6ffed;
}
</style>
