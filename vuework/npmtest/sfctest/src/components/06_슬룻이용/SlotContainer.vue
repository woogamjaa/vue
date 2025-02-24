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
            <InputComponent v-for="t in titleList" :title="t"></InputComponent>
            </template>
        </NamedSlotComponent>

        <LayoutComponent>

        </LayoutComponent>

    </div>
</template>
<script>
import ChildSlotComponent2 from './02_ChildSlotComponent.vue';
import ChildSlotComponent from './01_ChildSlotComponent.vue';
import InputComponent from './03_InputComponent.vue'
import NamedSlotComponent from './04_NamedSlotComponent.vue'
import LayoutComponent from './05_LayoutConponent.vue'
export default {
    name:"slotcontainer",
    components:{ChildSlotComponent,ChildSlotComponent2,InputComponent,NamedSlotComponent,LayoutComponent},
    data(){
        return{clickCount:0,
            checkData:"check컴포넌트",
            titleList:["운동","코딩","산책","영화","독서"],
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