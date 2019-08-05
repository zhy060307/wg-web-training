<template>
    <div class="title">{{title}}</div>
</template>

<script>
    export default {
        name: "common-title",
        props: {
            title: {
                type: String,
                default: ''
            }

        }
    }
</script>

<style scoped>
    .title {
        display: flex;
        align-items: center;
        height: 2rem;
        font-size: 1.125rem;
        font-weight: 500;
        color: #333;
        margin-left: 1.5rem;
    }

</style>
