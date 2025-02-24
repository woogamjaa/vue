<template>
    <div>
        <h3>slot 에서 데이터 전송하기</h3>
        <slot name="test" :title="`첫 번째`" :data="slotData" :show="false"></slot>
        <slot name="test2" :count="count"></slot>
        <button @click="count++">증가</button>
    </div>
</template>
<script>
export default {
    name:"dataslot",
    data(){
        return {
                slotData:"slot데이터",
                count:0
            }
        }
    }
</script>
<style>
    
</style>