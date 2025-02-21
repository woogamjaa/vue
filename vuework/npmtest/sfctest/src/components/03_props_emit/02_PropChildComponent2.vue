<template>
    <div>
        <h3>부모가 전달한 model 데이터 가져오기</h3>
        <div>
            <p>mydata : {{title}}</p>
            <p>mycontent : {{content}}</p>
            <p>number : {{su}}</p>

        </div>
    </div>
</template>
<script>
export default {
    name:"propsChildComponent2",
    props:["title","content","su"]
}
</script>
<style>
    
</style>