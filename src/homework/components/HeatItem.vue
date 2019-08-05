<template>
    <div class="heat-item"></div>

</template>

<script>
    import {weeks} from '../common/common.js';

    export default {
        name: "HeatItem",
        props: {
            dayOfWeek: {
                type: Number,
                default: 0
            },
            hour: {
                type: Number,
                default: ''
            },
            pv: {
                type: Number,
                default: 0
            }
        },
        methods: {
            formatDay: function (index) {
                return weeks[index];
            },
            formatHour: function (hour) {
                if (hour < 10) {
                    return '0' + hour + ':00';
                } else {
                    return hour + ':00';
                }
            }

        }
    }
</script>

<style lang="scss" scoped>
    .heat-item {
        display: flex;
        flex: 1;
        background-color: rgb(217, 245, 245);
        margin: 0.5rem;
    }


</style>
