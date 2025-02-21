<template>
    <div>
        <h3> 자식컴포넌트가 보낸 데이터를 가져오기</h3>
        <ChildComponent @basicEvent="inputHandler"/>
    </div>
</template>
<script>
import ChildComponent from './02_ChildComponent.vue';

export default {
    name:"ParentComponent",
    emits:["basicEvent"],
    components:{ChildComponent},
    methods:{
        inputHandler(v){
            console.log(v);
        }
    }
}
</script>
<style>
    
</style>