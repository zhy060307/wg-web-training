<template>
    <div class="content" :class='selected?"selected":""' @click="onSelectTab(index)">
        <div class="head">
            <div class="title">{{title}}</div>
            <div class="present" :class="percent>0?redColor:greenColor">{{percent}}%</div>
        </div>

        <div class="total">{{total}}</div>
    </div>
</template>

<script>
    export default {
        name: 'card-view',
        props: {
            index: {
                type: Number,
                default: 0
            },
            selected: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                required: true
            },
            percent: {
                type: Number,
                required: true
            },
            total: {
                type: String,
                required: true
            }

        },

        data() {
            return {
                redColor: 'red',
                greenColor: 'green'
            }
        },
        methods: {
            onSelectTab: function (index) {
                this.$emit("onSelectTab", index)
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
        cursor: pointer;
        background-color: #f7f7f7;
        border-top: 1px solid #e8e8e8;


        &.selected {
            background-color: #ffffff;
        }

        &:not(:last-child) {
            border-right: 1px solid #dfdfdf;
        }

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
