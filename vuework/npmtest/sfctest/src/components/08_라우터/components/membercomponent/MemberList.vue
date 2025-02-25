<template>
    <div class="container">
        <div>
            <h3>선수 목록</h3>
                <table>
                <!--  테이블 템플릿을 사용해보자. -->
                    <TableHeader :headers="['id','프로필','이름','팀']"/> 
                    <!-- <TableBody :body="members"/>  이미지 출력을 못함. -->
                    <tbody>
                        <tr v-for="(v,k) in members">
                            <td>{{ v.id }}</td>
                            <td>
                                <img :src="v.profile" alt="프로필" width="100px" height="100">
                            </td>
                            <td><router-link :to="`/dynamicpath/${v.id}`">{{v.name}}</router-link></td> <!--a 링크랑 똑같음.-->
                            <td>{{v.team}}</td>
                        </tr>
                    </tbody>
            </table>
        </div>
        <div>
            <h3>자식라우터출력</h3>
            <router-view></router-view>
        </div>
        <div>
            <h3>test라우터출력</h3>
            <router-view name="test"></router-view>
        </div>
        <div>
            <h3>test라우터출력</h3>
            <router-view name="test2"></router-view>
        </div>
    </div>
</template>
<script>
import TableBody from '@/components/sample/TableBody.vue';
import TableHeader from '@/components/sample/TableHeader.vue';
import members from '@/resources/member'
export default {
    name:"MemberList",
    components:{TableHeader,TableBody},
    data(){
        return {
            members:members
        }
    },
    beforeRouteEnter(to,from,next){
        console.log("컴포넌트엔터 다음",to);
        console.log("컴포넌트엔터 이전",from);
        // next(false);
        // next({path:"/querystring",query:{data:"minyoung",age:3,no:3}});
        next();
    },
    beforeRouteLeave(to,from){
        console.log("컴포넌트엔터 다음",to);
        console.log("컴포넌트엔터 이전",from);
        // next(false);
    },x
}
</script>
<style scoped>
    .container{
        display: flex;
        justify-content: space-evenly;
    }
    
</style>