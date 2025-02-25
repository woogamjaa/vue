<template>
    <div>
        <ul>
            <li v-for="link in links" :key="link.link">
                <router-link :to="link.link">
                    {{ link.label }}
                </router-link>
                <!-- 이제 a 태그를 사용하면 안댐. - 라우터를 사용하면 a태그가 아닌 라우터링크를 사용. -->
            </li>
        </ul>
        <h3>이름설정한 라우터 이용하기</h3>
        <ul>
            <li v-for="link in namedLink" :key="link.link">
                <router-link :to="link.link">
                    {{ link.label }}
                </router-link>
                <!-- 이제 a 태그를 사용하면 안댐. - 라우터를 사용하면 a태그가 아닌 라우터링크를 사용. -->
            </li>
        </ul>
        <h3>함수를 이용해서 컴포넌트 변경하기</h3>
        <p>
            this.$router 객체가 제공하는 함수를 이용해서 url를 변경할 수 있음<br>
            push(), forward(), back(), go(), replace() <br>
            이벤트와 연동해서 페이지 변경할때 ->동적으로 설정<br>
        </p>
        <div class="innercontainer">
            <div>
            <h4>버튼으로 이동 : forward, back</h4>
            <button @click="moveBack()">이전</button>
            <button @click="moveForward()">다음</button>
            </div>
        
        <div>
            <h4>히스토리에 저장된 순번으로 이동 : go </h4>
            <p>일반적으로 -1,1 을 이용해서 이동 </p>
            <input type="text" v-model="historyNum" size="5">
            <button @click="moveGo">history이동</button>
        </div>
        <div>
            <h4>원하는 주소로 이동 : push, replace</h4>
            <p>
                push : 이동이력을 history남김<br>
                replace: 이동이력을 htistory에 남기지 않음<br>
            </p>
            <select id="path" @change="movePush">
                <option :value="v.link" v-for="v in [...links,...namedLink]">{{ v.label }}</option>
            </select>
        </div>
    </div>

    <h3>중첩라우터 적용하기</h3>
    <p>
        부모컴포넌트와 자식컴포넌트에 주소를 중복해서 선언할때 사용<br>
        부모라우터에서 children 속성을 이용해서 자식라우터를 설정<br>
        자식라우터의 주소는 부모꺼를 생략하고 작성<br>
        부모 : /members 자식 : /members/:id -> :id
    </p>
    <ul>
        <!-- <li>
            <router-link to="/members2">회원리스트</router-link>
        </li>
        <li>
            <router-link to="/members2/1">양민혁</router-link>
        </li> -->
        <li v-for="(v) in members"> 
            <router-link :to="`/members2/${v.id}`">{{ v.name }}</router-link>
        </li>
        <li>
            <router-link to="/members2/named">named페이지</router-link>
        </li>
        <li>
            <router-link to="/members2/components">이름으로 라우터연결</router-link>
        </li>
    </ul>

    <h3>연결되지 않은 주소요청</h3>
        <ul>
            <li v-for="link in extra" :key="link.link">
                <router-link :to="link.link">
                    {{ link.label }}
                </router-link>
                <!-- 이제 a 태그를 사용하면 안댐. - 라우터를 사용하면 a태그가 아닌 라우터링크를 사용. -->
            </li>
        </ul>

</div>
</template>
<script>
import members from "@/resources/member";

const model={
    links:[
        {label:"메인화면",link:"/"},
        {label:"route객체정보",link:"/route?data=123&number=bslove#1234"},
        {label:"router객체정보",link:"/router"},
        {label:"동적경로",link:"/dynamicpath/1"},
        {label:"동적경로1",link:"/dynamicpath/4"}, //아이디에 들어간다.
        {label:"쿼리스트링값 활용",link:"/querystring?data=bslove&age=19&no=5"}, //아이디에 들어간다.
        {label:"선수목록",link:"/members"}
       
    ],
    //등록된 router를 이름으로 호출하기
    //index.js에 routes:[{path,component,name="이름"}] 
    namedLink:[
        //to속성에 대입되는 값을 객체로 설정
        {label:"이름으로 연결",link:{name:"namedtest"}},
        {label:"props값 이용하기",link:{name:"namedpropstest"}},
        //동적경로에 대한 값을 params속성을 이용해서 설정.
        {label:"동적경로 이름으로 연결",link:{name:"nameddynamictest",params:{test:"mylove"},query:{name:"minyoung",value:"love"}}},
        {label:"components속성 이용하기",link:"/usecomponents"},
    ],
    historyNum:1,
    members:members,
    extra:[
        {label:"등록되지 않은 주소",link:"/11111"}
    ]
}

export default {
    name:"NavComponent",
    data(){
        return model;
    },
    methods:{
         moveForward(){
            this.$router.forward();
         },
         moveBack(){
            this.$router.back();
         },
         moveGo(){
            console.log(window.history);
            console.log(this.$router.options.history);

            this.$router.go(this.historyNum);
            
         },
         movePush(e){
            const path=e.target.value;
            this.$router.push(path);
         },
    }
}
</script>
<style scoped>
    ul{
        padding:0;
        margin:0;
        display: flex;
        list-style-type: none;
        width:100%;
        justify-content: space-evenly;
    }
    li{
        font-size: 20px;
        font-weight: bolder;
        cursor: pointer;
    }
    .container{
        display:flex;
        flex-direction: column;
    }
    .innercontainer{
        display: flex;
        justify-content: space-around;
    }
    .linked{
        background-color: lightblue;
        border-radius: 100px;
    }
</style>