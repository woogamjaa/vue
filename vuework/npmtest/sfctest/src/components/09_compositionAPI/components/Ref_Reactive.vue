<template>
    <div>
        <h3>ref데이터활용하기</h3>
        <p>
            ref()함수(hooks)를 이용해서 반응성이 있는 데이터를 활용<br>
            매개변수 : 단일값을 전달 <br>
            저장된 값을 이용할 때는 반드시 value속성으로 접근해서 이용<br>
        </p>

        <p> x 값 : {{ x }}</p>
        <p> y 값 : {{ y }}</p>
        x : <input type="text" v-model.number="x">
        y : <input type="text" v-model.number="y">
        <button @click="calcAdd()">계산하기</button>
        <p> result 값 : {{ result }}</p>
    </div>
</template>
<script setup>
    //model 데이터 활용하기.
import {ref} from "vue";
const x=ref(10);
const y=ref(20);
const result=ref(0);
//함수등록하기
const calcAdd=function(){
    result.value=x.value+y.value;
}
</script>
<style>
    
</style>