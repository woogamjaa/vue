<template>
    <div>
        <h3>props 값 유효성검사 </h3>
        <p>number : {{number}} </p>
        <p>title : {{title}}</p>
    </div>
</template>
<script>
export default {
    name : "check",
    // props : ["number","title"],
    props:{ //추가적인 설정이 필요할땐 객체로 들어가라.
        "number":{
            type:Number, //경고를 띄워준다.
            require:true,

        },
        "title":{
            type:String,
            require:true,
        }
    } 
}
</script>
<style>
    
</style>