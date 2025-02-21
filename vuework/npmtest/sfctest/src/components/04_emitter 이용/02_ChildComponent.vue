<template>
    <div class="container">
        <h3>자식컴포넌트</h3>
        <p>
            자식컴포넌트에서 $emit() 함수를 이용해서 부모컴포넌트에 데이터를 전송할 수 있다 <br>
            $emit() 함수는 특정 태그의 이벤트핸들러에서 호출함<br>
            $emit("이벤트명",이벤트핸들러의 인자값 설정.) 함수 : 이벤트를 발생시키는 함수. <!--특정명칭의.-->

        </p>

        <h4>input태그에 입력된 값 전달하기</h4>
        <input type="text" @input="$emit('basicEvent',$event.target.value)">

        <h4>input태그에서 발생한 이벤트 전달하기</h4>
        <button @click="$emit('eventObjEvent',$event)">전달~</button>

        <h4>이벤트객체, 추가값을 전달하기(다수)</h4>
        <input type="text" @input="$emit('allDataEvent',$event,$event.target.value)"/>

        <h4>model데이터와 연동한 값 전달하기</h4>
        <button @click="moduleDataSend">전달하기</button>

    </div>
</template>
<script>
//공통 제네레이터 사용. 뷰가 돌아갈때.
// const geneatorNum=function* (title){
//     let count=0;
//     while(true){
//         yield `${title}_${count++}`;
//     }
// }
import {geneatorNum } from '@/resources/Dataresources.js';
const sequenceNum=geneatorNum("board");

export default {
    name:"ChildComponent",
    data:function(){
        return {
            objArrData:[
            {no:sequenceNum.next().value,title:"첫번째제목",content:"첫번째 내용",date:new Date()},
            {no:sequenceNum.next().value,title:"두번째제목",content:"두번째 내용",date:new Date()},
            {no:sequenceNum.next().value,title:"세번째제목",content:"세번째 내용",date:new Date()},
            {no:sequenceNum.next().value,title:"네번째제목",content:"네번째 내용",date:new Date()},
            {no:sequenceNum.next().value,title:"다섯번째제목",content:"다섯번째 내용",date:new Date()},
        ],
        }
    },
}
</script>
<style scoped>
    .container{
        border:1px solid magenta;
    }

</style>