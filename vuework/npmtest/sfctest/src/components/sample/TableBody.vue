<template>
    <tbody>
        <tr v-for="(v,k) in body" :key="`${k}_${v}`">
            <td v-for="d in v">{{d}}</td>
        </tr>
    </tbody>
</template>
<script>
export default {
    name:"TableBody",
    props:{
        "body":{
            type:Array,
            required:true,
        }
    }
}
</script>
<style>
    
</style>