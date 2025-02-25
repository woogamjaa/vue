<template>
    <div>
        <h2>compositionAPI활용하기</h2>
        <ul>
            <li v-for="l in nav">
                <RouterLink :to="l.path">{{l.label}}</RouterLink>
            </li>
        </ul>
        <RouterView></RouterView>
    </div>
</template>
<script setup>
    import { provide } from 'vue';
    provide("provideKey",{"name":"minyoung", value:"love"});
    
    const nav=[
        {label:"반응성 데이터 활용",path:"/refreactive"},
        {label:"칼크데이타 활용",path:"/computedwatch"},
        {label:"라이프사이클이용하기",path:"/lifecycle"},
        {label:"propsemit이용하기",path:"/propsemit"},
    ]
</script>
<style>
</style>