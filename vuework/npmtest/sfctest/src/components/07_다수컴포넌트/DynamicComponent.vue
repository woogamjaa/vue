<template>
    <div>
        <h3>다수의 컴포넌트를 출력하기</h3>
        <p>
            component 태그의 is속성을 이용해서 출력할 컴포넌트를 설정할 수 이따,
            <br>
            페이지에 출력할 모든 컴포넌트를 import, components속성에 등록<br>
            is속성에 컴포넌트 이름을 설정해서 특정 컴포넌트를 출력할 수 있다.

        </p>

        <div class="menu-container">
            <ul>
                <li v-for="(v,index) in components"
                @click="clickTab(v.id)">{{ v.label }}</li>
            </ul>
        </div>
        <component :is="menuTab" :title="`우와`" :number="200"></component>
    </div>
</template>
<script>
import DataSlotCheckBox from '@/components/06_슬룻이용/07_DataSlotCheckBox.vue';
import DataMehodUseComponent from '../02_인스턴스활용/DataMehodUseComponent.vue';
import ProvideParentComponent from '../05_provide_inject/ProvideParentComponent.vue';
import CheckPropChildComponent from '@/components/03_props_emit/03_ChecKPropChildComponent.vue';
import {components} from '@/resources/Dataresources.js';
export default {
    name:"dynamicComponent",
    components:{
        DataSlotCheckBox,DataMehodUseComponent,ProvideParentComponent,CheckPropChildComponent
    },

    data(){
        return {
            menuTab:"DataSlotCheckBox",
            components:{...components},
        }
    },
    methods:{
        clickTab(componentName){
            this.menuTab=componentName;
        }
    }
}
</script>
<style>
    .menu-container>ul{
        display: flex;
        list-style-type: none;
        padding:0;
    }
    .menu-container li{
        margin-right:3%;
        cursor: pointer;
        font-weight:bolder;
        font-size:18px;
        color:lightpink;
    }
</style>