<template>
    <nav>
        <ul>
            <li v-for="(v,i) in link" :key="`${i}_${v}`">
                <a :href="v.path">{{v.name}}</a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default  {
    name:"nav",
    // props:{
    //     "navs":{
    //         type:Array,
    //         required:true,
    //     }
    // }
    props:["link"],
}
</script>
<style>
    nav>ul{
        display: flex;
        list-style-type: none;
        justify-content: space-between;
        margin:0;
        padding:0;
    }
    ul a {
        text-decoration: none;
    }
</style>