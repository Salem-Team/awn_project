<template>
    <nav>
        <TheHeader />
    </nav>
    <router-view style="margin-top: 100px !important" />
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
* {
    direction: rtl !important;
}

body {
    direction: rtl;
    font-family: "Cairo", sans-serif;
    font-variation-settings: "slnt" 0;
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
