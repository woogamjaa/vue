<template>
    <div class="container1">
        <h3> 자식컴포넌트가 보낸 데이터를 가져오기</h3>
        <ChildComponent @basicEvent="inputHandler"
                        @eventObjEvent="eventObjHandler"
                        @allDataEvent="allDataHanlder"/>
    </div>
</template>
<script>
import ChildComponent from './02_ChildComponent.vue';

export default {
    name:"ParentComponent",
    emits:["basicEvent","eventObjEvent","allDataEvent"],
    components:{ChildComponent},
    methods:{
        inputHandler(v){
            console.log(v);
            this.childData=v;
        },
        eventObjHandler(e){
            console.log(e);
            console.log(e.target);
            e.target.innerText="변경";
        },
        allDataHanlder(e,v){
            console.log(e);
            console.log(v);
        }
    },
    data(){
        return{
            childData:"",
        }
    }
}
</script>
<style scoped>
    .container1{
        border:1px solid lime;
    }
</style>