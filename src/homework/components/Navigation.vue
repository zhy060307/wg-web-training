<template>
    <div class="navigation">
        <img src="../../assets/logo.png"/>
        <h1>front end training</h1>

        <router-link to="/firstCourse">first course</router-link>
        <router-link to="/secondCourse">second course</router-link>


    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .navigation {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        display: flex;
        flex-direction: column;

        img {
            align-self: center;
        }
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
