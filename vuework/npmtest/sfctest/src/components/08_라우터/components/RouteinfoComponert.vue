<template>
    <div class="container">
        <h3>route 객체 정보 확인</h3>
        <p>
            route url주소에 대한 정보를 저장하고 있는 객체<br>
            this.$route 객체를 사용할 수 있다.
        </p>
        <ul>
            <li v-for="(v,k) in this.$route">
                <span>{{ k }}</span>
                <span>{{ v }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"RouteInfoComponent",
    
}
</script>
<style lang="">
    
</style>