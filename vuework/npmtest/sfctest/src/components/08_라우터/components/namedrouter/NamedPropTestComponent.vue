<template>
    <div>
        <h3>라우터에서 전달한 props값 이용하기</h3>
        <p>라우터에서 속성으로 전달된 값을 기존방식대로 이용할 수 있다.</p>
        <h3 v-if="test">test가 true, 이거 출력해</h3>
        <h3 v-if="test1">test가 false, 이거 듀 </h3>
        <p>{{data}}</p>
        <p>{{ this.$route.params }}</p>
        <p>{{ this.$route.query }}</p>

    </div>
</template>
<script>
export default {
    name:"NamedPropTestComponent",
    props:["test","test1","data"]
}
</script>
<style>
    
</style>