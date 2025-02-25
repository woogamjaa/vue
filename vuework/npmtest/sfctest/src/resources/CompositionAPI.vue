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

    const nav=[
        {label:"반응성 데이터 활용",path:"/refreactive"},
    ]
</script>
<style>
</style>