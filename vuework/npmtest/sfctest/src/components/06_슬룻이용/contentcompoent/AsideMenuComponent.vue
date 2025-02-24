<template>
    <div class="aside-menu">
        <ul>
            <li v-for="(v,i) in menu" :key="`${i}_${v}`">
                <div class="menu-content">
                    <img :src="v.src===''?defaultImg:`/${v.src}`" width="50px" height="50px">&nbsp;
                    <h3>{{ v.title }}</h3>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import defalutImg from '@/assets/menu-content.jpg';
export default {
    mame:"asideMenu",
    props:{
        menu:{
            type:Object,
            default:[{title:"메뉴샘플1",src:""},{title:"메뉴샘플2",src:""},{title:"메뉴샘플3",src:""},{title:"메뉴샘플4",src:""}],
            required:true
        }
    },
    data(){
        return{
            defaultImg:defalutImg,
        }
    }
}
</script>
<style>
    .aside-menu{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height:500px;
    }
    .aside-menu>ul{
        list-style-type: none;
        padding:0;
    }
    .aside-menu>ul>li{
        margin:0;
        margin-bottom:10%;
        text-align: center;
    }
    .menu-content{
        display: flex;
        align-items: center;
        justify-self: center;
    }
    .menu-content>img{
        border-radius: 50px;
    }
</style>