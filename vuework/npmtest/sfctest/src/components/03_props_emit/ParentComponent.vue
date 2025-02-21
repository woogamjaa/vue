<template>
    <div>
        <h2>자식 컴포넌트에 props로 데이터 전송하기</h2>
        <h3>고정값을 전달하기</h3>
        <PropChildComponet mydata="나의 고정값" num="19"/>
        <!-- <PropChildComponet mydata="오늘 금요일" num="100"/> -->

        <h3>model데이터와 연동하여 데이터 전송하기</h3>
        <p>
            v-bind: , : 속성명을 이용해서 전달할 수 있음<br>
            전달하는 데이터의 타입은 모두 가능 ( 기본, 객체, 배열 등)
        </p>

        <PropChildComponet2 v-bind:title="mydata" :content="mycontent" :su="number" 
        :arrData="subjectList" :objData="objData"/>


        <MyPropChildComponent v-bind:objDataList="objDataList"/>

        <h3>부모컴포넌트가 데이터를 수정하기</h3>
        <p>
            model로 연결된 props데이터를 수정하면 자식컴포넌트를 재 랜더링 한다.
            -> 데이터가 수정된것으로 반영됨.
        </p>
        제목<input type="text" v-model="board.title"><br>
        내용<input type="text" v-model="board.content"><br>
        <button @click="addBoard">추가</button>

        <h3>props데이터 유효성검사</h3>
        <div>
            <p>
                자식 컴포넌트에서 전달되는 데이터(props)에 대한 추가설정<br>
                타입, 필수값여부, 기본값을 설정<br>
            </p>
            <check number="number" title="제목있음"/>
        </div>
    </div>
</template>
<script>
import PropChildComponet from './01_PropChildComponent.vue';
import PropChildComponet2 from './02_PropChildComponent2.vue';
import MyPropChildComponent from './MyPropChildComponent.vue';
import check from './03_ChecKPropChildComponent.vue';

const model={
    mydata:"제목입니다.",
    mycontent:"내용을 처리",
    number:200,
    subjectList:["html","css","javascript","jquery","vue"],
    objData:{no:1,title:"첫번째 제목",content:"첫번째 내용",date:new Date()},
    //MyPropChildComponent를 만들어서 아래 데이터로 테이블을 완성하기
    objDataList:[
        {no:1,title:"첫번째 제목",content:"첫번째 내용",date:new Date()},
        {no:2,title:"두번째 제목",content:"두번째 내용",date:new Date()},
        {no:3,title:"세번째 제목",content:"세번째 내용",date:new Date()},
        {no:4,title:"네번째 제목",content:"네번째 내용",date:new Date()}
    ],
    board:{no:0,title:"",content:"",date:""}, //objDataList 넣을 배열.
}
export default {
    name:"propcontainer",
    components:{PropChildComponet,PropChildComponet2,MyPropChildComponent,check},
    data(){
        return model;
    },
    methods:{
        addBoard(){
            this.objDataList.push({...this.board, date:new Date()});
        }
    }
}
</script>
<style>
    
</style>