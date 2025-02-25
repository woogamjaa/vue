<template>
    <div>
        <h2>props데이터 출력하기</h2>
        <p>defineProps함수를 이용해서 props값을 설정</p>
        <p>{{ props.test }}</p>
        <p>{{ props.data }}</p>

        <p>
            defineEmites함수를 이용해서 등록하고 사용
        </p>

        <button @click="handler">increment</button>
        <h3>provideData : {{ provideData }}</h3>
    </div>
</template>
<script setup>
import {defineProps,defineEmits,inject} from 'vue';
const provideData=inject("provideKey");
const props=defineProps(["test","data"]);
const emit=defineEmits(["childEvent"]);
const handler=()=>{
    emit("childEvent",1);
}

</script>
<style>
    
</style>