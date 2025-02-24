//라우터를 설정하는 설정파일.
//vue-router모듈에서 제공하는 createRouter() 함수를 이용해서 
//라우터 설정을 함.
import { createRouter,createWebHistory } from "vue-router";
import HomeComponent from "@/components/08_라우터/components/HomeComponent.vue";
import RouteinfoComponert from "../components/RouteinfoComponert.vue";
import RouterInfoComponent from "../RouterInfoComponent.vue";
// export default router=createRouter
const router=createRouter({
    history:createWebHistory(),
    //특정 url주소와 컴ㄴ포넌트를 연결해주는 설정
    routes:[
        {path:"/",component:HomeComponent},
        {path:"/route",component:RouteinfoComponert},
        {path:"/router",component:RouterInfoComponent},
    ]
});

export default router; //중괄호 생략 해서 가져옴.  
