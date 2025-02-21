<template>
    <div class="test1">
        <div>
            <slot name="test"/>
        </div>
        <div>

        </div>
        <div>
            <slot name="test1"/>
            <slot name="checkbox"/>
        </div>
    </div>
</template>
<script>
export default {
    name:"namedslot",
}
</script>
<style>
    .test1{
        display:flex;
    }
    .test1>div{
        width:40%;
        border:1px solid red;
        height:200px;
    }
</style>