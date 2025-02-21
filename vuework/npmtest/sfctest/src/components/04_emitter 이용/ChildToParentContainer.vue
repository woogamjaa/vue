<template>
    <div>
        <h3>emitter 이용하기</h3>
        <p>
            자식컴포넌트가 부모컴포넌트에 데이터를 전달하기
        </p>
        <ParentComponent/>
    

    </div>
</template>
<script>
import ParentComponent from './01_ParentComponent.vue';
export default {
    
    name:"ChildToParent",
    components:{ParentComponent}
}   
</script>
<style>
    
</style>