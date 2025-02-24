<template>
    <div class="input-container">
        <input v-for="v in input" :key="v.id" :type="v.type" :placeholder="v.placeholder">
        <button>{{ btntitle }}</button>
    </div>
</template>
<script>
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