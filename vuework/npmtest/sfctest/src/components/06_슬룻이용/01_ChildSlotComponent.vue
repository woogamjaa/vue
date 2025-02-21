<template>
    <div class="container">
        <h3>기본 태그 slot으로 가져오기</h3>
        <p>부모 컴포넌트가 전달한 기본태그를 출력해보자</p>
        <slot></slot>

        <h4>전달된 탬플릿 반복출력하기</h4>
        <ul>
            <li v-for="n in 5">
                <slot></slot>
            </li>
        </ul>

        <h4>props값을 전달받아 처리하기</h4>
        <div v-for="n in count">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:"childslot",
    props:["count"],
}
</script>
<style>
    .container{
        border:1px solid lightblue;
    }
</style>