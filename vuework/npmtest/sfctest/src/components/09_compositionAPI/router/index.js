import { createRouter,createWebHistory } from "vue-router";
import Ref_Reactive from "../components/Ref_Reactive.vue";
import Computed_Watch from "../components/Computed_Watch.vue";
import PropsEmitComponent from "../components/PropsEmitComponent.vue";
import LifecycleComponent from "../components/LifecycleComponent.vue";


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/refreactive",component:Ref_Reactive},
        {path:"/computedwatch",component:Computed_Watch},
        {path:"/lifecycle",component:LifecycleComponent},
        {path:"/propsemit",component:PropsEmitComponent},
        {}
    ]
});


export default router;