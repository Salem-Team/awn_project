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
            const isConnected = window.navigator.offLine;
            const connectionType = navigator.connection?.type;

            if (isConnected === false || connectionType === "Wi-Fi") {
                this.isInternetAvailable = true;
                this.snackbar = false;
                console.log("Internet connected");
            } else {
                this.isInternetAvailable = false;
                this.snackbar = true;
                console.log("Internet disconnected");
            }
        },
    },
};
</script>
