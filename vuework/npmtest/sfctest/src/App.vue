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

export default{
    //createApp() 함수에 설정했던 내용을 설정
    //name,data,methods,watch,computed,라이프사이클 ...+ props, inject, provide, emit
    name:"App",
    
    //불러온 컴포넌트 등록하기
    //components속성을 이용해서 등록(객체)처리함
    components:{BasicComponent2,DataMehodUseComponent,ParentComponent}

}
</script>

<style>

</style>