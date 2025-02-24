<template>
    <div>
        <h2>slot태그란</h2>
        <p>
            자식컴포넌트에 부모컴포넌트가 template데이터를 전송하는 기능<br>
            부모가 전달한 template을 자식컴포넌트는 slot태그를 이용해서 출력 <br>
        </p>
        <div class="childcontainer">
            <h2>일반태그 전달하기</h2>
            <p>{{clickCount}}</p>
            <ChildSlotComponent :count="3">
                <button @click="clickHandler">기본버튼태그</button>
            </ChildSlotComponent>
        </div>

        <h2>컴포넌트 전달하기</h2>
        <ChildSlotComponent2>
            <InputComponent :title="checkData"/>
        </ChildSlotComponent2>

        <h2>배열 데이터를 이용해서 출력하기</h2>
        <ChildSlotComponent2>
            <InputComponent v-for="t in titleList" :title="t"></InputComponent>
        </ChildSlotComponent2>

        <h2>이름있는 slot 이용하기</h2>
        <p>
            이름 있는 슬롯은 다수의 슬롯을 자식컴포넌트에 전달하고 이름으로 구분하여 원하는 위치에 배치할 수 있게 함
        </p>

        <NamedSlotComponent>
            <template v-slot:test>
                <p>test슬롯</p>
            </template>
            <template v-slot:test1>
                <p>test1슬롯</p>
            </template> 
            <template v-slot:checkbox>
            <InputComponent v-for="t in titleList" :title="t"/>
            </template>
        </NamedSlotComponent>

        <LayoutComponent>
            <template v-slot:header>
                <HeaderComponent title="나의 slot header" :logo="{src:mylogo,'width':80, 'height':80}"/>
            </template>
            <template v-slot:aside>
                <AsideMenuComponent :menu="menu"/>
            </template>

            <template v-slot:article>
           
            </template>

        </LayoutComponent>

            <h2>슬롯으로 데이터, 이벤트 이용하기</h2>
            <p>
                슬롯으로 자식컴포넌트와 부모컴포넌트가 데이터를 공유할 수 있음<br>
                props방식을 이용<br>
                자식컴포넌트에서 slot태그에 :속성명="값" 설정하면
                부모컴포넌트에서 설정한 속성명의 데이터를 이용할 수 있다.<br>
            </p>

            <DataSlotComponent>
                <template v-slot:test="test">
                    <h4>{{ test.title }}</h4>
                    <h5 v-if="test.show">{{ test.data }}</h5>
                    <h5 v-else> 출력하지마아아</h5>
                </template>
                <template v-slot:test2="test2">
                    <span>{{ test2.count }}</span> &nbsp;
                    <h5 v-if="test2.count==10">10번 눌렀어요 ㅋㅋㅋ</h5>
                </template>
            </DataSlotComponent>

            <h3>slot 이용해서 checkbox만들기</h3>
            <DataSlotCheckBox/>
    </div>
</template>
<script>
import DataSlotCheckBox from './07_DataSlotCheckBox.vue'
import ChildSlotComponent2 from './02_ChildSlotComponent.vue';
import ChildSlotComponent from './01_ChildSlotComponent.vue';
import InputComponent from './03_InputComponent.vue'
import NamedSlotComponent from './04_NamedSlotComponent.vue'
import LayoutComponent from './05_LayoutConponent.vue'
import HeaderComponent from './contentcompoent/HeaderComponent.vue';
import Mylogo from '@/assets/몽몽몽.png';
import AsideMenuComponent from './contentcompoent/AsideMenuComponent.vue';
import DataSlotComponent from './06_DataSlotComponent.vue';
export default {
    name:"slotcontainer",
    components:{ChildSlotComponent,ChildSlotComponent2,InputComponent,NamedSlotComponent,LayoutComponent,HeaderComponent,AsideMenuComponent,DataSlotComponent,DataSlotCheckBox},
    data(){
        return{clickCount:0,
            checkData:"check컴포넌트",
            titleList:["운동","코딩","산책","영화","독서"],
            mylogo:Mylogo,
            menu:[
                {title:"방명록",src:"angry.jpg"},
                {title:"갤러리",src:"babo.png"},
                {title:"일기이",src:"star.png"},
                {title:"자료실",src:"hmm.jpg"},
            ]
        }
    },
    methods:{
        clickHandler(){
            // alert('test')
            this.clickCount++;
        }
    }
}
</script>
<style>

</style>