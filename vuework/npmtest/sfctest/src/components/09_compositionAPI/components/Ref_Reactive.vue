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

        <h3>refreactive()함수를 이용해서 객체데이터 관리하기</h3>
        <p>
            반응성 있는 데이터를 저장할 수 있는 hooks<br>
            매개변수 객체를 대입해서 활용 <br>
            사용법은 ref()함수와 유사, 저장된 값을 이용할 대 value를 사용하지 않음<br>
        </p>
        <ul>
            <li v-for="v in reactiveArr">
                {{ v }}
            </li>
        </ul>
        <ul>
            <li v-for="(v,k) in reactiveObj">
                {{ k }}:{{ v }}
            </li>
        </ul>
    
        <table>
            <thead>
                <tr>
                    <th v-for="(v,k) in reactiveObjArr[0]">{{ v }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="v in reactiveObjArr">
                    <td v-for="b in v">{{ b }}</td>
                </tr>
            </tbody>
        </table>
        <input type="text" v-model.trim="board.title"><br>
        <input type="text" v-model.trim="board.content"><br>
        <button @click="addBoard">추가</button>


        <h4>구조분해 할당한 값 활용</h4>
        <p>title : {{ title }}</p>
        <input type="text" v-model="reactiveObj.title">
        <button @click="changeTitle">title변경.</button>
    </div>
</template>
<script setup>
    //model 데이터 활용하기.
import {ref,reactive} from "vue";
const x=ref(10);
const y=ref(20);
const result=ref(0);
//함수등록하기
const calcAdd=function(){
    result.value=x.value+y.value;
}

const reactiveArr=reactive([10,20,30,40]);
const reactiveObj=reactive({"title":"제목","content":"내용"})
const reactiveObjArr=reactive([
    {"title":"제목","content":"내용"},
    {"title":"제목1","content":"내용1"},
    {"title":"제목2","content":"내용2"},
    ]);

const board=reactive({});
const addBoard=()=>{
    reactiveObjArr.push({...board});
    board.title="";
    board.content="";
}
//구조 분해 할당
//반응성을 잃는다
//title 고정값.
let {title} = reactiveObj;
const changeTitle=(e)=>{
    title='내가 변경한 값';
}
</script>
<style>
    
</style>