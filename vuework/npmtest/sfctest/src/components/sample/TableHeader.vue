<template>
    <thead>
        <tr>
            <th v-for="(v,i) in headers" :key="`${i}_${v}`">{{ v }}</th>
        </tr>
    </thead>
</template>
<script>
export default {
    name:"TableHeader",
    props:{
        "headers":{
            type:Array,
            required:true,
            validator:function(val){
                return val.length>0
            }
        }
    }
}
</script>
<style>
    
</style>