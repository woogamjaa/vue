<template>
    <div>
        <h3>querystring 값 이용하기</h3>
        <h4>전달받은 갓 출력: {{ this.$route.query.data }} </h4>
        <h4>전달받은 갓 출력: {{ this.$route.query.age }} </h4>
        <div v-if="member!=null">
        <p>{{member.name}}</p>
        <p>{{member.team}}</p>
        </div>
    </div>
</template>
<script>
import members from '@/resources/member'; 
export default {
    name : "QueryStringComponent",
    data(){
        return{
            member:null,
        }
    },
    mounted() {
        const id=this.$route.query.no;
        this.member=members.find(member=>member.id==id);
    },
}
</script>
<style>
    
</style>