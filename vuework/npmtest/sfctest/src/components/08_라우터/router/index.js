//라우터를 설정하는 설정파일.
//vue-router모듈에서 제공하는 createRouter() 함수를 이용해서 
//라우터 설정을 함.
import { createRouter,createWebHistory } from "vue-router";
import HomeComponent from "@/components/08_라우터/components/HomeComponent.vue";
import RouteinfoComponert from "../components/RouteinfoComponert.vue";
import RouterInfoComponent from "../RouterInfoComponent.vue";
import MemberView from "../components/membercomponent/MemberView.vue";
import QueryStringComponent from "../components/QueryStringComponent.vue";
import NamedComponent from "../components/namedrouter/NamedComponent.vue";
// export default router=createRouter
const router=createRouter({
    history:createWebHistory(),
    //특정 url주소와 컴ㄴ포넌트를 연결해주는 설정
    routes:[
        {path:"/",component:HomeComponent},
        {path:"/route",component:RouteinfoComponert},
        {path:"/router",component:RouterInfoComponent},
        {path:"/dynamicpath/:id",component:MemberView},  //동적인 경로가 되는 것
        {path:"/querystring", component:QueryStringComponent},
        //라우터에 이름설정하기
        {path:"/namedtest", name:"namedtest", component:NamedComponent},
        //라우터 연결시 컴포넌트에 props전달하기
        {path:"namedpropstest",name:"namedpropstest",component:, props:{test:true,test1:false,data:{name:"bsyoo",value:"love"}}}
    ]
});

export default router; //중괄호 생략 해서 가져옴.  
