<template>
    <div>
        <h3>첫번째 자식 컴포넌트</h3>
        <p>{{parentData}}</p>
        <SecondChildComponent/>
    </div>
</template>
<script>
import SecondChildComponent from './SecondChildComponent.vue';
export default {
    name:"firstchild",
    components:{SecondChildComponent},
    inject:["parentData"],
}
</script>
<style>
    
</style>