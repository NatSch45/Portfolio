<template>
    <div class="blogItem">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        
        <div class="read">
            <p>Lire</p>
            <font-awesome-icon icon="fa-solid fa-angles-right" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BlogItem',
        props: ['title', 'subtitle']
    }
</script>

<style>
    .blogItem {
        width: 90%;
        height: 350px;
        padding: 3%;
        border-radius: 15px;
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
        cursor: pointer;

        background-color: #fff;
        transition: box-shadow .4s, transform .4s, background-color .4s;
    }   
    .blogItem:hover {
        background-color: #BEF8E6;
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
        transform: scale(1.05);
    }

    .read {
        opacity: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        transition: opacity .4s;
    }
    .read p {
        font-size: 30px;
        color: #00BD7E;
    }
    .read svg {
        font-size: 38px;
    }
    .blogItem:hover .read {
        opacity: 1;
    }
</style>