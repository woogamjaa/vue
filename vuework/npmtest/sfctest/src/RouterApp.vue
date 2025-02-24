<template>
    <div>
        <NavComponent/>
        <router-view></router-view>
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