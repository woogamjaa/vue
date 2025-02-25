<template>
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
    }

}
</script>
<style>
    
</style>