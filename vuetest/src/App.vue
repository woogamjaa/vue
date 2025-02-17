<script>
  export default{
    name:"App",
    data:function(){
      return {
        testData:"나의 첫 vue데이터"
      }
    },methods:{
      clickHabdler:function(){
        this.testData="내가 수정했지롱!";
        alert("클릭했지 ! ");
      }
    }
  }
</script>

<template>
  <h2> 나의 첫번째 vue component</h2>
  <h3>{{testData}}</h3>
  <button @click="clickHabdler">클릭해봐!</button>
</template>

<style scoped>

</style>
