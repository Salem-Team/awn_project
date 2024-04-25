<template>
    <div class="Dash_board">
        <!-- NavBar  -->
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <div
                        class="d-flex justify-space-between align-center flex-wrap px-12"
                        style="
                            position: relative;
                            padding: 1px 16px 1px 0px;
                            margin-left: 50px;
                            border-radius: 7px 0px 0px 0px;
                            border-radius: 20px;
                            height: 115px;
                            border: 1px solid #ddd;
                        "
                    >
                        <!-- Info Status -->
                        <div
                            class="info_stat d-flex justify-space-between align-center ga-12"
                        >
                            <div class="info">
                                <div class="num">750</div>
                                <span>الحاله</span>
                            </div>
                            <div class="info">
                                <div class="num">30000</div>
                                <span>عجز</span>
                            </div>
                            <div class="info">
                                <div class="num">50</div>
                                <span>حالات مشتركه</span>
                            </div>
                        </div>
                        <div class="d-flex ga-3">
                            <v-text-field
                                append-inner-icon="mdi-magnify"
                                density="compact"
                                label="أبحث عن"
                                variant="solo"
                                hide-details
                                single-line
                                style="
                                    display: inline-block;
                                    width: 350px;
                                    height: 40px;
                                    padding-right: 30px;
                                    padding-left: 10px;
                                "
                            >
                            </v-text-field>

                            <v-btn variant="tonal"
                                ><font-awesome-icon icon="list-ul"
                            /></v-btn>
                            <v-btn>
                                <v-icon
                                    style="font-size: 20px !important"
                                    @click="dialog = true"
                                    >mdi-plus</v-icon
                                >
                            </v-btn>
                            <v-btn>
                                <v-icon>mdi-view-grid-outline</v-icon>
                            </v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-dialog v-model="dialog" width="auto">
                <v-card
                    class="d-flex flex-column jusrify-center"
                    width="800"
                    prepend-icon="mdi-update"
                    title="إضــــافه"
                >
                    <v-item-group selected-class="bg-primary">
                        <v-container>
                            <v-row class="mydailog justify-center">
                                <v-col
                                    cols="12"
                                    class="d-flex justify-center ga-6"
                                >
                                    <v-item>
                                        <v-card
                                            style="cursor: pointer"
                                            :class="[
                                                'd-flex align-center',
                                                selectedClass,
                                            ]"
                                            height="200"
                                            width="200"
                                            dark
                                            @click="toggle"
                                        >
                                            <div
                                                class="text-h3 flex-grow-1 text-center"
                                            >
                                                اضافه
                                            </div>
                                        </v-card>
                                    </v-item>
                                    <v-item>
                                        <v-card
                                            style="cursor: pointer"
                                            :class="[
                                                'd-flex align-center',
                                                selectedClass,
                                            ]"
                                            height="200"
                                            width="200"
                                            dark
                                            @click="toggle"
                                        >
                                            <div
                                                class="text-h3 flex-grow-1 text-center"
                                            >
                                                ملف اكسل
                                            </div>
                                        </v-card>
                                    </v-item>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-item-group>
                    <template v-slot:actions>
                        <v-btn
                            class="ms-auto"
                            text="Ok"
                            @click="dialog = false"
                        ></v-btn>
                    </template>
                </v-card>
            </v-dialog>
        </v-container>
        <v-container fluid>
            <div class="Charites d-flex justify-center">
                <DashboardCharitys />
                <StatusInformation />
            </div>
        </v-container>
        <AadCasce />
    </div>
</template>

<script>
import DashboardCharitys from "@/components/DashboardCharitys.vue";
import StatusInformation from "@/components/StatusInformation.vue";
import AadCasce from "@/components/AadCasce.vue";

export default {
    name: "Dash_board",
    components: {
        DashboardCharitys,
        StatusInformation,
        AadCasce,
    },
    data() {
        return {
            dialog: false,
        };
    },
};
</script>
<style lang="scss">
* {
    direction: rtl !important;
}
.info_stat .info {
    font-size: 20px;
    span {
        font-size: 25px;
    }
}
</style>
