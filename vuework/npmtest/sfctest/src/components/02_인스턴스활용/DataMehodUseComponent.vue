<template>
    <div>
        <h2>컴포넌트 인스턴스 속성 이용하기</h2>
        <h3>model(data()함수반환객체) 이용하기</h3>
        <P>basicData출력 : {{ basicData }}</P>
        <p v-text="basicData"></p>

        <h2>methods에 등록된 함수이용하기</h2>
        <button @click="clickHandler">클릭해바!</button>
    </div>
</template>
<script>
const model={
    basicData:"model데이터 이용",
}

export default {
    name : "DataMethodUseComponent",
    data(){
        return model;
    },
    methods:{
        clickHandler(e){
            console.log(e);
            alert("클릭했네!");
        }
    }
}
</script>
<style>
    
</style>