// import { createApp } from 'vue'

// //생성한 컴포넌트 불러오기
// import App from './App.vue';
// import BasicComponent from './components/01_생성_이용/01_BasicComponent.vue'; //베이직컴포넌트 파일 불러오기.

// createApp(App)
// .component("BasicComponent",BasicComponent) //키 , 벨류 형식으로 넣어 이용한다. 선언.
// .mount('#app')


//라우터 방식
import { createApp } from "vue";
import RouterApp from "./RouterApp.vue";
import router from "./components/08_라우터/router";

const app=createApp(RouterApp);// 메인이 이걸로 바뀐다.

//라우터 적용하기
app.use(router);

//마운트 저장 시키기.
app.mount("#app");