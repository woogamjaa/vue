<template>
    <div>
        <h3>Router객체확인</h3>
        <p>
            Router객체는 url주소를 조작할 수 있는 함수를 제공하는 객체<br>
            **url주소를 변경해서 다른 컴포넌트를 랜더링시킴
            this.$router를 이용해서 객체에 접근할 수 있음
        </p>
        <ul>
            <li v-for="(v,k) in this.$router">
                <span>{{ k }}</span> : <span>{{ v }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>