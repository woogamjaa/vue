<template>
    <div>
        <label for="">
            <input type="checkbox" v-model="check">{{title}}
        </label>
    </div>
</template>
<script>
export default {
     name:"inputcomponent",
     props:["title"],
     data(){
        return{check:false};
     }
}
</script>
<style>
    
</style>