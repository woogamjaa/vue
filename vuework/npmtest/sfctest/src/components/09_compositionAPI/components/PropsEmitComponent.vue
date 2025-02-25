<template>
    <div>
        <h2>props데이터, emit이용하기</h2>
        <PropChildComponent test="testData" data="부모에서 보낸 데이터" @childEvent="increment"/>
        <h3>{{count}}</h3>
        <h3>providedata : {{ prodata}}</h3>
    </div>
</template>
<script setup>
import PropChildComponent from './PropChildComponent.vue';
import {inject, ref} from 'vue';
const prodata=inject("provideKey");
const count=ref(0);
const increment=function(data){
    count.value+=data;
}
</script>
<style>
    
</style>