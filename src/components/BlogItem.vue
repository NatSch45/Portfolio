<template>
    <div class="blogItem">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>

        <img :src="'src/assets/'+image" :alt="image">
        
        <div class="read">
            <p>Lire</p>
            <font-awesome-icon icon="fa-solid fa-angles-right" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BlogItem',
        props: ['title', 'subtitle', 'image']
    }
</script>

<style>
    .blogItem {
        position: relative;
        width: 90%;
        height: 350px;
        padding: 3%;
        border-radius: 15px;
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        overflow: hidden;

        transition: box-shadow .4s, transform .4s, background-color .4s;
    }
    .blogItem:hover {
        background-color: #BEF8E6;
        box-shadow: 0px 8px 12px rgba(4, 65, 18, 0.5);
        transform: scale(1.05);
    }
    .blogItem img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .4;
        transition: transform .4s;
    }
    .blogItem:hover img {
        transform: scale(1.05);
    }
    .blogItem h1, .blogItem h2 {
        position: relative;
        color: black;
    }

    .read {
        position: absolute;
        bottom: 10px;
        right: 10px;
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