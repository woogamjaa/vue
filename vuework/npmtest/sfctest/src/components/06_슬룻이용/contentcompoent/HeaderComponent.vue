<template>
    <div class="header-container">
        <img :src="logo.src" alt="로고" :width="logo.width" :height="logo.height">
        <h2>{{title}}</h2>
        <div>
            <InputMakeComponent :input="inputData" btntitle="로그인"/>
        </div>
    </div>
   
</template>
<script>
import InputMakeComponent from './InputMakeComponent.vue';
import defaultLogo from '@/assets/몽몽.png';
import mylogo from '@/assets/몽몽몽.png';

export default {
    name:"headerComponent",
    components:{InputMakeComponent},
    props:{
        logo:{
            type:Object,
            default:{src:defaultLogo,width:100,height:100},
            required:true,
        },
        title:{
            type:String,
            default:"감자뭉",
            required:true
        }
    },
    data(){
        return{
            input:[
                {type:"text", placeholder:"아이디입력" , id:"userId"},
                {type:"password", placeholder:"비밀번호입력" , id:"password"}
            ],
        };
    }
}
</script>
<style>
    .header-container{
        width:100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .header-container>img{
        width:15%;
        border-radius: 50px;
    }
    .header-container>h2{
        width: 50%;
        text-align: center;
    }
</style>