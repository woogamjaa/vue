<template>
    <div>
        <CheckBoxList :items="items" @checkchangedEvent="checkBoxChanged">
            <template v-slot:icon="p1">
                <i v-if="p1.checked" class="far fa-grin-beam"></i>
                <i v-else class="far fa-frown"></i>

            </template>
            <template v-slot:default="p2">
                <span v-if="p2.checked" style="color:blue;text-decoration: underline;"><i>{{p2.label}}</i></span>
                <span v-else style="color:gray">{{p2.label}}</span>
            </template>
        </CheckBoxList>  
    </div>
</template>
<script>
import CheckBoxList from './contentcompoent/CheckBoxList.vue'
import {items} from '@/resources/Dataresources.js';
export default {
    name:"dataSoltCheckbox",
    components:{CheckBoxList},
    methods:{
        checkBoxChanged(e){
            let item=this.items.find(item=>item.id===e.id);
            item.checked=e.checked;
        }
    },
    data(){
        return{
            items:items,
        }
    }
}
</script>
<style>
       @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");
</style>