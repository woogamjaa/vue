<template>
    <div>
        <h2>provide를 이용해서 공용 데이터 제공하기</h2>
        <p>{{refData}}</p>
        <FirstChildComponent/>
    </div>
</template>
<script>
import FirstChildComponent from './FirstChildComponent.vue';
import {ref} from "vue";
export default {
    name:"provideparentcomponent",
    components:{FirstChildComponent},
    data(){
        return {
            refData:"수정가능",
        }
    },
    provide:function(){
        return {
            // parentData:"부모데이터",
            parentData:ref(this.refData),//반응성이 있는 데이터로 설정.
            names:["유병숭","홍길동","이순신"]
        }
    }
    
}
</script>
<style>
    
</style>