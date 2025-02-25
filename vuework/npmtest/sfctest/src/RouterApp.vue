<template>
    <div>
        <NavComponent/>
        <router-view name="test"></router-view>
        <router-view name="test2"></router-view>
    </div>
</template>
<script>
import NavComponent from './components/08_라우터/components/NavComponent.vue';

export default {
    name:"RouterApp",
    components:{NavComponent},
}
</script>
<style>
    
</style>