<template>
    <div>
        <h4>레이아웃</h4>
        <header>
            <slot name="header">기본해더</slot>
        </header>
        <section>
            <aside>
                <slot name="aside">aside메뉴</slot>
            </aside>
            <article>
                <slot name="article">article</slot>
            </article>
        </section>
        <footer>

        </footer>
    </div>
</template>
<script>
export default {
    name:"layoutConponent",
}
</script>
<style>
    header{
        width: 100%;
        display: flex;
        height: 80px;
        background-color: lightcoral;
        align-items: center;
        justify-content: center;
    }

    section{
        width: 100%;
        height: 500px;
        display: flex;
        background-color: lightgray;
    }

    section>aside{
        width:25%;
        background-color: lightgreen;
    }
    
    section>article{
        width: 75%;
        background-color: lightblue;
    }

    footer{
        width: 100%;
        height: 80px;
        background-color: lightgoldenrodyellow;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>