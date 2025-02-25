import { createRouter,createWebHistory } from "vue-router";
import Ref_Reactive from "../components/Ref_Reactive.vue";
import Computed_Watch from "../components/Computed_Watch.vue";


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/refreactive",component:Ref_Reactive},
        {path:"/computedwatch",component:Computed_Watch},
    ]
});


export default router;