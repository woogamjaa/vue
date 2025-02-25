<template>
    <div>
        <h2>회원 상세</h2>
        <div class="memberview" v-if="member!=null">
            <div>
                <h3>{{ member.name }}</h3>
                <img :src="member.profile" alt="프로필" with="100" height="100">
                <h4>포지션 : {{ member.position }}</h4>
                <h4>팀 : {{ member.team }} </h4>
            </div>
            <div>
                <iframe width="100%" height="300" :src="`https://www.youtube.com/embed/${member.video}`"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>
<script>
import members from "@/resources/member";
export default {
    name:"MemberView",
    data(){
        return{
            member:null
        };
    },
    // mounted() {
    //     const id=this.$route.params.id;
    //     this.member=members.find(member=>member.id==id);
    // },
    watch:{
        '$route.params.id':{  // this.$route.params.id; 이게 바뀌어야만 변경을 감지한다?
            handler:function(cur,ori) {
                this.member=members.find(member=>member.id==cur);
            },
            immediate:true,
        }
    }


}
</script>
<style scoped>
    .memberview{
        padding:3%;
        display:flex;
        width:100%;
        justify-content: space-between;
    }
    .memberview>div{
        width:50%;
    }
</style>