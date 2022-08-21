<template>
    <div class="portfolioItem">
        <h1>{{ name }}</h1>
        <h2>{{ description }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'PortfolioItem',
        props: ['name', 'description'],
    }
</script>

<style>
    .portfolioItem {
    width: 100%;
    height: 600px;
    padding: 3%;

    background-color: rgb(255, 238, 218);
}
.portfolioItem:nth-child(even) {
    background-color: rgb(240, 210, 210);
}

.portfolioItem:nth-child(even) :is(h1, h2) {
    text-align: right;
}
</style>