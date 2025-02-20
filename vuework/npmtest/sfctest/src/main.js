import { createApp } from 'vue'

//생성한 컴포넌트 불러오기
import App from './App.vue';
import BasicComponent from './components/01_생성_이용/01_BasicComponent.vue'; //베이직컴포넌트 파일 불러오기.

createApp(App)
.component("BasicComponent",BasicComponent) //키 , 벨류 형식으로 넣어 이용한다. 선언.
.mount('#app')
