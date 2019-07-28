<template>
    <div>
        <div class="card-head-title">访问分析</div>
        <div class="card-tabs">
            <card-view title="访问总量" percent="-26%" total="22,621"/>
            <card-view title="访问课数" percent="-11%" total="947"/>
            <card-view title="访问总时长" percent="26%" up="true" total="1,781:35:53"/>
        </div>


    </div>
</template>

<script>
    import CardView from "./CardView.vue";

    export default {
        components: {CardView},
        data() {
            return {}
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
