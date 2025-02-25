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
import NamedPropTestComponent from "../components/namedrouter/NamedPropTestComponent.vue";
import NamedRouterA from "../components/namedrouter/NamedRouterA.vue";
import NamedDefaultComponent from "../components/namedrouter/NamedDefaultComponent.vue";
import NamedRouterB from "../components/namedrouter/NamedRouterB.vue";
import MemberList from "../components/membercomponent/MemberList.vue";
import NotFoundComponent from "../components/errorpage/NotFoundConponent.vue";
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
        {path:"/namedpropstest",name:"namedpropstest",component:NamedPropTestComponent,props:{test:true,test1:false,data:{name:"minyoung",value:"love"}}},
        //named 동적경로 호출하기
        {path:"/namedpropstest2/:test", name:"nameddynamictest",component:NamedPropTestComponent},

        //라우터주소에 여러 컴포넌트 연결하기
        //components속성을 이용 -> key(이름):value(component) 로 설정
        {path:"/usecomponents", name:"usecomponents",components:{default:NamedDefaultComponent, test:NamedRouterA, test2:NamedRouterB}},
        
        //멤버리스트 컴포넌트
        {path:"/members" ,component:MemberList},


        //중첩라우터 설정하기 
        {path:"/members2",component:MemberList,
            children:[
                // /members2/:id
                {path:":id",component:MemberView},
                {path:"named",component:NamedComponent},
                {path:"components", components:{
                    default:NamedDefaultComponent, test:NamedRouterA, test2:NamedRouterB
                }}
            ]
        },

        //없는 주소로 접근했을때 에러컴포넌트로 연결하기
        {path:"/:pathMath(.*)*",component:NotFoundComponent}

    ]
});

export default router; //중괄호 생략 해서 가져옴.  
