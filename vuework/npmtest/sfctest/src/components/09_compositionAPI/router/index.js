import { createRouter,createWebHistory } from "vue-router";
import Ref_Reactive from "../components/Ref_Reactive.vue";

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/refreactive",component:Ref_Reactive},
    ]
});


export default router;