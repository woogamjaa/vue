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

        <PropChildComponet2 :mydata :mycontent :number/>

    </div>
</template>
<script>
import PropChildComponet from './01_PropChildComponent.vue';
import PropChildComponet2 from './02_PropChildComponent2.vue';

const model={
    mydata:"제목입니다.",
    mycontent:"내용을 처리",
    number:200,
}
export default {
    name:"propcontainer",
    components:{PropChildComponet,PropChildComponet2},
    data(){
        return model;
    }
}
</script>
<style>
    
</style>