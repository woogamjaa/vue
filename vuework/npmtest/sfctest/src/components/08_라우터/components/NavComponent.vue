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
    </div>
</template>
<script>
const model={
    links:[
        {label:"메인화면",link:"/"},
        {label:"route객체정보",link:"/route?data=123&number=bslove#1234"},
        {label:"router객체정보",link:"/router"},
        {label:"동적경로",link:"/dynamicpath/1"},
        {label:"동적경로1",link:"/dynamicpath/4"}, //아이디에 들어간다.
        {label:"쿼리스트링값 활용",link:"/querystring?data=bslove&age=19&no=5"}, //아이디에 들어간다.
       
    ],
    //등록된 router를 이름으로 호출하기
    //index.js에 routes:[{path,component,name="이름"}] 
    namedLink:[
        //to속성에 대입되는 값을 객체로 설정
        {label:"이름으로 연결",link:{name:"namedtest"}},
        {label:"props값 이용하기",link:{name:"namedpropstest"}},
        //동적경로에 대한 값을 params속성을 이용해서 설정.
        {label:"동적경로 이름으로 연결",link:{name:"nameddynamictest",params:{test:"mylove"},query:{name:"minyoung",value:"love"}}},
    ]
}

export default {
    name:"NavComponent",
    data(){
        return model;
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