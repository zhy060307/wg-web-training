<template>
    <div>
        <div class="card-head-title">访问分析</div>
        <div class="card-tabs">

            <card-view v-for="(tab,idx) in tabs"
                       :key="tab.index"
                       :title="tab.title"
                       :percent="tab.percent"
                       :total="tab.total"
                       :selected="idx==selectedIndex"
                       @onSelectTab="onSelectTab"/>
        </div>


    </div>
</template>

<script>
    import CardView from "./CardView.vue";

    export default {
        components: {CardView},
        data() {
            return {
                tabs: [{
                    index: 0,
                    title: "访问总量",
                    percent: -26,
                    total: "22,621"
                }, {
                    index: 1,
                    title: "访问课数",
                    percent: -11,
                    total: "947"
                }, {
                    index: 2,
                    title: "访问总时长",
                    percent: 26,
                    total: "1,781:35:53",
                }],
                selectedIndex: 0
            }
        },
        methods: {
            onSelectTab: function (index) {
                this.selectedIndex = index
            }
        }

    }
</script>
<style lang="scss">

    .card-head-title {
        padding: 1.9rem 2.4rem;
        border-bottom: 1px solid #e8e8e8;
        background-color: #fff;
    }

    .card-tabs {
        display: flex;
        flex-direction: row;
    }
</style>
