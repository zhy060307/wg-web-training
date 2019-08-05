<template>
    <div class="content">
        <common-title title="平台访问量"/>
        <div class="container">
            <div class="column" v-for="(dayItem,index) in heatData">

                <heat-item v-for="hourItem in dayItem"
                           :dayOfWeek="hourItem.dayOfWeek"
                           :hour="hourItem.hour"
                           :pv="hourItem.pv"
                />

            </div>
        </div>

    </div>

</template>

<script>
    import CommonTitle from './CommonTitle.vue';
    import HeatItem from './HeatItem.vue';
    import {groupBy, weeks} from '../common/common.js';
    import {heatMap} from '../common/mock.js';

    export default {
        name: "HeapMap",
        components: {CommonTitle, HeatItem},
        data() {
            return {
                heatData: []
            }
        },
        methods: {
            doQuery: function () {
                // fetchheatMap().then(resp => {
                //     console.log(resp);
                // });
                // [0, 0, 404]
                let tempData = [];
                heatMap.result.data[0].rows.forEach((item) => {
                    tempData.push({
                        'dayOfWeek': item[0],
                        'hour': item[1],
                        'pv': item[2]
                    })
                });
                this.heatData = groupBy(tempData, function (item) {
                    return item.dayOfWeek
                });
                console.log(this.heatData)

            },
            weekOfDay: function (index) {
                return weeks[index];
            }
        },


        mounted() {
            this.doQuery()
        }
    }
</script>

<style lang="scss" scoped>

    .content {

        .container {
            display: flex;

            .column {
                display: flex;
                flex-direction: column;
                flex: 1;
            }

        }

    }
</style>
