<template>
    <div>
        <h4>objDataList 출력하기</h4>
            <table>
                <thead>
                    <th v-for="(v,k) in objDataList[0]"> {{k}}</th>
                </thead>
                <tbody>
                    <tr v-for="(v,k) in objDataList">
                        <td v-for="index in v">{{index}}</td>
                        <!-- <td>{{ v.no }}</td>
                        <td>{{ v.title }}</td> -->
                    </tr>
                </tbody>
            </table>
    </div>
</template>
<script>
export default {
    name:"MypropsChildComponent2",
    props:["objDataList"]
}
</script>
<style>
    
</style>