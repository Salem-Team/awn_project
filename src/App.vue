<template>
    <nav>
        <TheHeader @execute-toggle-theme="toggleTheme" />
    </nav>
    <router-view style="margin-top: 100px !important" />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import "bootstrap/dist/css/bootstrap.css";

export default {
    data() {
        return {
            theme: "",
            modtheme: true,
        };
    },
    components: {
        TheHeader,
    },
    methods: {
        toggleTheme() {
            if (this.modtheme) {
                this.theme = "dark";
                this.modtheme = false;
            } else {
                this.theme = "Light";
                this.modtheme = true;
            }
        },
    },
};
</script>

<style lang="scss">
* {
    direction: rtl !important;
}
:root {
    --main-color: #0088ff;
    --secound-color: #eee;
    --therd-color: #7a7a7a;
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
/* أنماط CSS للثيم المظلم */
.dark-theme {
    background-color: #333;
    color: #fff;
}

/* أنماط CSS للثيم الفاتح */
.light-theme {
    background-color: #fff;
    color: #333;
}
.dach_cher {
    display: none;
    background-color: #ffdddd;
    color: #d8000c;
    border: 1px solid #d8000c;
    padding: 10px;
    margin: 20px 0;
    text-align: center;
    border-radius: 5px;
    font-size: 16px;
}

.dach_cher.show {
    display: block;
    animation: fadeIn 0.5s;
}
p {
    margin: 0;
}
input:focus {
    outline: none;
}
.Vue-Toastification__toast {
    background: var(--main-color);
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
