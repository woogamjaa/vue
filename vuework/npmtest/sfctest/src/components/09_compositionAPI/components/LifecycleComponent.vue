<template>
    <div>
        <h2>라이프사이클 함수 이용하기</h2>
        <input type="text" v-model="data">

    </div>
</template>
<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted , ref} from 'vue';
const data=ref("");
onBeforeMount(()=>{
    console.log("mount되기전에 실행");
});
onBeforeUpdate(()=>{
    console.log(data);
    console.log("수정되기전에 실행");
});
onMounted(()=>{
    console.log("mount 후");
});
</script>
<style>
    
</style>