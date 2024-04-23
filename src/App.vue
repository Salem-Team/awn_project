<template>
    <nav>
        <TheHeader />
    </nav>
    <router-view />
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";

export default {
    components: {
        TheHeader,
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    direction: rtl;
    font-family: "DM Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}
ul {
    margin: 0;
    list-style: none;
    padding: 0;
}
a {
    text-decoration: none;
}
.container {
    width: 90%;
    margin: auto;
}
</style>
