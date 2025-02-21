<template>
    <div>
        <h3>부모가 전달한 model 데이터 가져오기</h3>
        <div>
            <p>mydata : {{title}}</p>
            <p>mycontent : {{content}}</p>
            <p>number : {{su}}</p>
            
            <h4>객체 데이터</h4>
            <p>arrData : {{arrData}}</p>
            <p>objData : {{objData}}</p>

            <h4>배열데이터 처리하기</h4>
            <ul>
                <li v-for="subject in arrData" :key="subject">{{subject}}</li>
            </ul>

            <h4>객체 데이터 처리하기</h4>
            <table>
                <thead>
                    <th v-for="(v,k) in objdata"> {{k}}</th>
                </thead>
                <tbody>
                    <td v-for="(v,k) in objdata"> {{v}}</td>
                </tbody>
            </table>

        </div>
    </div>
</template>
<script>
export default {
    name:"propsChildComponent2",
    props:["title","content","su","arrData","objData"]
}
</script>
<style>
    
</style>