<template>
    <div>
        <h2>자식 컴포넌트에 props로 데이터 전송하기</h2>
        <h3>고정값을 전달하기</h3>
        <PropChildComponet mydata="나의 고정값" num="19"/>
        <!-- <PropChildComponet mydata="오늘 금요일" num="100"/> -->

        <h3>model데이터와 연동하여 데이터 전송하기</h3>
        

    </div>
</template>
<script>
import PropChildComponet from './01_PropChildComponent.vue';
export default {
    name:"propcontainer",
    components:{PropChildComponet}
}
</script>
<style>
    
</style>