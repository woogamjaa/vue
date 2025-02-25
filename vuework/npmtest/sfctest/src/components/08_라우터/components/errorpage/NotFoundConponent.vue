<template>
    <div>
        <h2>존재하지 않는 주소입니다.</h2>
        <h3>3초 후 이전 페이지로 이동합니다.</h3>
    </div>
</template>
<script>
export default {
    name:"NotFoundComponent",
    mounted(){
        setTimeout((router)=>{
            $router.back();
        },3000,this.$router);
    }
}
</script>
<style>
    
</style>