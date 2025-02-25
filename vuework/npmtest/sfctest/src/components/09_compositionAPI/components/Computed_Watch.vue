<template>
    <div>
        <h2>computed 이용하기</h2>
        <input type="text" v-model="su">
        <p>{{calcData}}</p>
        <p>{{calcData}}</p>
        <p>{{calcData}}</p>
        <p>{{calcData}}</p>

        <h2>일반 함수로 랜더링 </h2>
        <p>{{calcData2()}}</p>
        <p>{{calcData2()}}</p>
        <p>{{calcData2()}}</p>
        <p>{{calcData2()}}</p>

        <h3>watch적용하기</h3>
        <input type="text" v-model="strData">
        <p>{{ strData }}</p> 

    </div>
</template>
<script setup>
    import {ref, computed, watch} from 'vue';
    const su=ref(0);
    
    
    const calcData=computed(()=>{
        console.log("computed calcData실행");
        return Number(su.value)*10});


    const test=computed(()=>{
        return "123";
    })   

    const calcData2=()=>{
        console.log("computed calcData2실행");
        return Number(su.value)*10;}

    const strData=ref("");
    watch(strData,(cur,ori)=>{
        console.log(cur);
        console.log(ori);
        su.value+=cur;
    });
</script>
<style>
    
</style>