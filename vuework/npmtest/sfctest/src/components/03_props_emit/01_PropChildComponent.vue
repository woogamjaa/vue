<template>
    <div>
        <h3> props를 잉요하는 자식 컴포넌트</h3>
        <p>
            props로 전송된 데이터는 model데이터와 동일하게 사용할 수 있음 <br>
            export default{}에 props속성으로 설정을 해줘야 사용할 수 있음<br>
            이 컴포넌트를 이용할 때 구성하는 데이터가 필요하다.
        </p>

        <h4>부모가 전달한 props값 출력하기</h4>
        <p>{{mydata}}</p>
        <p>{{num}}</p>

    </div>
</template>
<script>
export default {
    name:"propsChild",
    props:["mydata","num"]
}
</script>
<style>
    
</style>