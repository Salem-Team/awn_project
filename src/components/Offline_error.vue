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
import isOnline from "is-online";
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
    async created() {
        const online = await isOnline();
        if (!online) {
            console.log("انت غير متصل بالإنترنت");
            this.snackbar = true;
            this.isInternetAvailable = false;
            console.log("Internet disconnected");
        }
    },
    methods: {},
};
</script>
