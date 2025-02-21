<template>
    <!-- 화면에 출력될 내용 -> html탴그, 콧수염표기법, 디렉티브 등
        template에 작성된 태그는 div태그 내부에 작성을 해야 한다. 
    -->
    <div>
        <h3>나의 첫 화면</h3>
        <p>나의 첫 vue 컴포넌트</p>
        <h2>전역 컴포넌트 사용하기</h2>
        <BasicComponent/>
        <h2>지역 컴포넌트 사용하기</h2>
        <BasicComponent2/>

        <h2>인스턴스이용하기</h2>
        <DataMehodUseComponent/>

        <h2>props활용하기</h2>
        <ParentComponent/>


        <h2>자식컴포넌트가 부모컴포넌트에 데이터 전달</h2>
        <ChildToParent/>

        <h2>provide, inject이용하기</h2>
        <ProvideParentComponent/>

        <h2>공용테이블 사용하기</h2>
        <table>
            <TableHeader :headers="['이름','나이']"/>
            <TableBody :body="[{name:'유병승',age:19},{name:'우민혁',age:33},{name:'김통통',age:33}]"/>
        </table>

        <h2>nav 만들기</h2>
            <Navi :link="links"/>
            <div>
                <input type="text" v-model="link.name" placeholder="메뉴이름"><br>
                <input type="text" v-model="link.path" palceholder="주소">
                <button @click="addLink">추가</button>
            </div>
    </div>
</template>

<script>
//  vue 인스턴스를 이용하는 기능을 작성된
// options API , composition API 방식으로 작성할 수 있음.
// 컴포넌트 불러오기 -> impoet 컴포넌트명()
import BasicComponent2 from './components/01_생성_이용/02_BasicComponent2.vue';
import DataMehodUseComponent from './components/02_인스턴스활용/DataMehodUseComponent.vue';
import ParentComponent from './components/03_props_emit/ParentComponent.vue';
import ParentComponent2 from './components/03_props_emit/ParentComponent.vue';
import ChildToParent from './components/04_emitter 이용/ChildToParentContainer.vue';
import ProvideParentComponent from './components/05_provide_inject/ProvideParentComponent.vue';
import TableBody from './components/sample/TableBody.vue';
import TableHeader from './components/sample/TableHeader.vue';
import Navi from './components/sample/Nav.vue';

export default{
    //createApp() 함수에 설정했던 내용을 설정
    //name,data,methods,watch,computed,라이프사이클 ...+ props, inject, provide, emit
    name:"App",
    
    //불러온 컴포넌트 등록하기
    //components속성을 이용해서 등록(객체)처리함
    components:{BasicComponent2,DataMehodUseComponent,ParentComponent,ChildToParent,ProvideParentComponent,TableHeader,TableBody,Navi},
    data(){
        return {
            links:[],
            link:{name:"",path:""}
        }
    },
    methods:{
        addLink(){
            this.links.push({...this.link});
        }
    }
}
</script>

<style>

</style>