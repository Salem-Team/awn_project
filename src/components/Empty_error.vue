<template>
    <!-- Display a row with a message when there is no data -->
    <v-row>
        <v-col>
            <v-container class="m-auto text-center pa-auto">
                <p>{{ text }}</p>
            </v-container>
        </v-col>
    </v-row>
</template>
<script>
export default {
    props: ["text"],
    data() {
        return {};
    },
};
</script>
