<template>
    <div v-for="item in items" :key="item.id">
        <slot name="icon" :checked="item.checked"></slot>
        <label>
            <input type="checkbox" value="item.id" :checked="item.checked"
            @change="$emit('checkchangedEvent',{id:item.id,checked:$event.target.checked})">
        </label>
        <slot :checked="item.checked" :label="item.label"></slot>
    </div>
</template>
<script>
export default {
    name:"CheckBox",
    props:["items"],
    emits:["checkchangedEvent"],
}
</script>
<style>
    
</style>