<template>
    <div>
        <img :src="logo" alt="로고" width="100px" height="100px"><br>
        <img :src="logo2" alt="로고" width="100px" height="100px">
    </div>
</template>
<script>
import mong from '@/assets/몽2.png';
import mong2 from '@/assets/몽몽.png';
export default {
    name:"NamedRouterA",
    data(){
        return {
            logo:mong,
            logo2:mong2,
        }
    }

}
</script>
<style>
    
</style>