<template>
    <!-- Display a skeleton loader if internet is not available -->
    <v-container class="p-5 mt-6" v-if="!isInternetAvailable">
        <v-skeleton-loader
            type="image,list-item-two-line,list-item-two-line"
            height="100%"
        ></v-skeleton-loader>
    </v-container>

    <!-- Snackbar to display internet status -->
    <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}
        <template v-slot:actions>
            <v-btn color="blue" variant="text" @click="snackbar = false">
                إغلاق
            </v-btn>
        </template>
    </v-snackbar>

    <!-- Render the slot content if internet is available -->
    <slot v-if="isInternetAvailable"></slot>
</template>

<script>
export default {
    inject: ["Emitter"],
    data() {
        return {
            snackbar: false,
            text: "لا يوجد انترنت",
            timeout: 4000,
            isInternetAvailable: true, // Internet availability flag
        };
    },
    mounted() {
        // Start internet checker on component mount
        this.Emitter.on("startInternetChecker", () => {
            // Method to check internet connection status
            // Check if the browser is online
            this.isInternetAvailable = window.navigator.onLine;
            // Update UI based on internet status
            if (this.isInternetAvailable) {
                // If internet is available, hide the snackbar
                this.snackbar = false;
                console.log("Internet connected");
                console.log(window.navigator.onLine);
            } else {
                // If internet is not available, show the snackbar
                this.snackbar = true;
                console.log("Internet disconnected");
            }
        });
    },
    methods: {},
};
</script>
