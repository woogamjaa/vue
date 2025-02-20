<template>
    <div>
        <h2>컴포넌트 인스턴스 속성 이용하기</h2>
        <h3>model(data()함수반환객체) 이용하기</h3>
        <P>basicData출력 : {{ basicData }}</P>
        <p v-text="basicData"></p>

        <h2>methods에 등록된 함수이용하기</h2>
        <button @click="clickHandler">클릭해바!</button>

        <h2>디렉티브 이용</h2>
        <label><input type="checkbox" v-model="data.isLoading">보여주기/감추기</label>
        과목입력<input type="text" placeholder="과목" v-model.trim="data.subject">
        {{data.subject}}
        <!-- <button @click="data.subjectList.push(data.subject)">추가</button> 두가지 방법이 존재. -->
        <button @click="addSubject">추가</button>
        <ul v-if="data.isLoading">
            <li v-for="(value,index) in data.subjectList" :key="`${index}_${value}`" v-text="value"></li>
        </ul>

        <h3>DOM에 접근하기 (태그 -> document.getElement~())</h3>

        <p>
            $refs예약어를 이용함.
        </p>
        <span ref="targetSpan">이 태그를 DOM으로 가져오기</span>
        <button @click="domTest">DOM가져오기</button>

        <h3>속성값을 model과 연동하기</h3>
        <img v-bind="img"><br>
        <img v-bind:src="img.src" :alt="img.alt" :width="img.width"><br>
        <input type="text" v-model="img.src">

        <h4>클래스 속성에 적용하기</h4>
        <p :class="classes.sample">class이름으로 적용하기</p>
        <p :class="classes">boolean 적용하기</p>
        <p :class="{test2:classes.test2,font:classes.font}">boolean 적용하기</p>
        <label><input type="checkbox" v-model="classes.test2">test2적용</label>
        <label><input type="checkbox" v-model="classes.font">font적용</label>
        

        <h3>이미지변경하기</h3>
        <!-- <img :class="{img.src1,img.src2,img.src3}"><button @click="iphonepass">이미지변경</button>  -->


        <!-- 강사님 코드 -->
        <img :src="img.src" width="200px">
        <button @click="changeiphone">이미지변경</button> 
        
        
        <h3>라이프사이클 함수, watch함수를 이용하기, computed</h3>
        
        <p>{{ resultNum }}</p>
        <p>{{ resultNum }}</p>
        <p>{{ resultNum }}</p>
        <p>{{ resultNum }}</p>


    </div>
</template>
<script>
const model={
    basicData:"model데이터 이용",
    data:{
        isLoading:false,
        subjectList:["java","oracle","html/css","javascript","jquery","servlet"],
        subject:""
    },
    classes:{
        sample:"test",
        test2:true,
        font:true,
    },

    img:{
        src:"https://www.genia.academy/static/images/common/chunjae-logo.svg",
        alt:"천재교육로고",
        width:"200px"
    },
    imgList:[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3Uauo_si1XljkUHJp7jHGYm0_i18L-cqBg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XTNzPUBmkPan6KjVcNac3ag5FY0L6OEjhg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67y6pOi98sOKDUBnYIubjifbiN6S7HnYHaA&s"
    ],
    // count:0    //  changeiphone count에 this를 사용해야함.


}

export default {
    name : "DataMethodUseComponent",
    data(){
        return model;
    },
    methods:{
        clickHandler(e){
            console.log(e);
            alert("클릭했네!");
        },
        addSubject(){
            this.data.subjectList.push(this.data.subject);
        },
        domTest(){
            console.log(this.$refs.targetSpan);
            this.$refs.targetSpan.innerText="새로운 값으로 변경"
            this.$refs.targetSpan.style.backgroundColor="lightgray"
        },
        // changeiphone(){
        //     let count=0;
        //     this.img.src=this.imgList[this.count++&3];   모델에 카운터를 쓴경우.
        // },
        changeiphone:(function(){
            let count=0;
            return function(e){
            this.img.src=this.imgList[count++&3];
            }
        })(),
        
        //라이프사이클 함수 실행
        },mounted:function(){
            let count=0;
            console.log("실행되니?")
            setInterval(()=>{
                this.img.src=this.imgList[count++%3];
            },500);
        },
        watch:{
            'data.subject':{
                handler:function(c,p){
                    console.log(c);
                    console.log(p);
                },deep:true,
            },  

            'data.subjectList':{
                handler:function(c,p){
                    console.log(c);
                    console.log(p);
                },deep:true,
            }
        },
        computed:{
            resultNum(){
                let total=0;
                for(let i=0;i<100;i++){
                    total+=(i+1);
                }
                return total;
            }
        }
    }
</script>
<style>
    .test{
        background-color:magenta;
    }
    .test2{
        background-color:lime;
    }
    .font{
        color:lightcoral;
        font-size: 30px;
    }
</style>