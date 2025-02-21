<template>
    <div>
        <h3>props 값 유효성검사 </h3>
        <p>number : {{number}} </p>
        <p>title : {{title}}</p>

        <h3>부모가 전송한 props값 자식컴포넌트가 수정하기</h3>
        <p>props 고정값 -> readonly값</p>
        <!-- <input type="text" v-model="number">  이건 불가능하다.-->  
         

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
            default:10,
            validator:function(val){console.log(val); return val>300} // 기능을 정의하고 판단해서 출력시켜줌.

        },
        "title":{
            type:String,
            require:true,
            default:"제목없음",  // 기본값.
        }
    } 
}
</script>
<style>
    
</style>