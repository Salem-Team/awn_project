<template>
    <v-container class="p-5 mt-6" v-if="!isInternetAvailable">
        <v-skeleton-loader
            type="image,image,image"
            height="100%"
        ></v-skeleton-loader>
    </v-container>

    <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}
        <template v-slot:actions>
            <v-btn color="blue" variant="text" @click="snackbar = false">
                إغلاق
            </v-btn>
        </template>
    </v-snackbar>

    <slot v-if="isInternetAvailable"></slot>
</template>

<script>
export default {
    data() {
        return {
            snackbar: false,
            text: "لا يوجد انترنت",
            timeout: 4000,
            isInternetAvailable: true,
        };
    },
    mounted() {
        this.startInternetChecker();
    },
    methods: {
        startInternetChecker() {
            // Check if the browser is online
            this.isInternetAvailable = window.navigator.onLine;

            if (this.isInternetAvailable) {
                this.snackbar = false;
                console.log("Internet connected");
                console.log(window.navigator.onLine);
            } else if (!window.navigator.onLine) {
                this.snackbar = true;
                console.log("Internet disconnected");
            }
        },
    },
};
</script>
