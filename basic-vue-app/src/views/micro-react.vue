<template>
    <h1>Vue主应用</h1>
    <div class="box">
        <button @click="clickBtn">当前值：{{state.count}}，数字加1</button>
    </div>
    <h1>React微应用</h1>
    <div class="box" id="react-app-container" />
</template>
<script setup>
import { reactive } from "vue"
import { initGlobalState } from 'qiankun'
const state = reactive({
    count: 0
})

const action = initGlobalState(state)
action.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    // console.log(state, prev)
})

const clickBtn = () => {
    state.count += 1
    action.setGlobalState(state)
}
</script>

<style scoped>
.box {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #646cff;
}
</style>