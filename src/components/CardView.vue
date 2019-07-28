<template>
    <div class="content">
        <div class="head">
            <div class="title">{{title}}</div>
            <div class="present" :class="up?redColor:greenColor">{{percent}}</div>
        </div>

        <div class="total">{{total}}</div>
    </div>
</template>

<script>
    export default {
        name: 'card-view',
        props: {
            title: {
                type: String,
                required: true
            },
            percent: {
                type: String,
                required: true
            },
            total: {
                type: String,
                required: true
            },
            up: {
                type: Boolean,
                required: false,
                default: false
            }

        },

        data() {
            return {
                redColor: 'red',
                greenColor: 'green'
            }
        }
    }
</script>

<style lang="scss" scoped>

    .red {
        color: red;
    }

    .green {
        color: green;
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;

        color: #737373;
        padding: 2.1rem 2.4rem;
        margin: 0;
        min-width: 10rem;
        line-height: 1;

        .head {
            display: flex;
            flex-direction: row;

            .title {
                margin-right: 1.2rem;

            }
        }

        .total {
            margin-top: 1.2rem;
            font-size: 2.4rem;
            color: #333;
        }
    }

</style>
