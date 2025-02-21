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

    </div>
</template>
<script>
export default {
    name:"ChildComponent",
}
</script>
<style scoped>
    .container{
        border:1px solid magenta;
    }

</style>