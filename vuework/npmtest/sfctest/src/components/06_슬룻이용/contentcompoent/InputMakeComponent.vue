<template>
    <div class="input-container">
        <input v-for="v in input" :key="v.id" :type="v.type" :placeholder="v.placeholder" v-model="inputData[v.id]">
        <button @click="loginRequest">{{ btntitle }}</button> 
    </div>
</template>
<script>
import { loginRequuest } from '@/resources/requestAPI';

export default {
    mame:"inputMake",
    props:{
        input:{
            type:Object,
            default:[{
                type:"text", id:"default", placeholder:"기본설정"
            }]
        },
        btntitle:{
            type:String,
            default:"기본버튼"
        },
    },
    methods: {
        loginRequest(){
            loginRequuest(this.inputData);
        }
    },
    data(){
        return{
            inputData:{ 

            }
        }
    },
    watch:{
        inputData:{
            handler:function(cur,ori){
                console.log(cur);
            },
            deep:true,
        }
    }
}
</script>
<style>
    .input-container{
        display: flex;
        justify-content: end;
        flex-direction: column;
    }
    .input-container>button{
        margin-top:3%;
    }
</style>