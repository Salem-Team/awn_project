<template>
    <div class="Dash_board">
        <!-- navigation-drawer  -->
        <Side_Bar />
        <v-container>
            <v-row>
                <v-col cols="12">
                    <div
                        class="d-flex justify-space-between align-end flex-wrap px-12"
                        style="padding: 1px 16px 1px 0px; height: 115px"
                    >
                        <h1>
                            {{ tab }}
                        </h1>
                        <!-- Info Status -->
                        <div class="d-flex ga-3 mb-3">
                            <v-menu>
                                <template v-slot:activator="{ props }">
                                    <v-btn color="primary" v-bind="props">
                                        ترتيب حسب
                                        <v-icon>mdi-filter-variant</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item @click="funLatestClicked">
                                        <v-list-item-title>
                                            الاحدث للاقدم
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="funAtZClicked">
                                        <v-list-item-title>
                                            أبجدى تصاعدى
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="funZtAClicked">
                                        <v-list-item-title>
                                            أبجدى تنازلى</v-list-item-title
                                        >
                                    </v-list-item>
                                    <v-list-item @click="funCards_STL">
                                        <v-list-item-title
                                            >تصاعدى حسب العجز
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="funCards_LTS">
                                        <v-list-item-title>
                                            ننازلى حسب العجز
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="funFat_STL">
                                        <v-list-item-title>
                                            تصاعدى حسب الدخل
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="funFat_LTS">
                                        <v-list-item-title>
                                            تنازلى حسب الدخل
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="funCalories_STL">
                                        <v-list-item-title>
                                            تصاعدى حسب المطلوب
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="funCalories_LTS">
                                        <v-list-item-title>
                                            تنازلى حسب المطلوب
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <v-btn>
                                <v-icon
                                    style="font-size: 20px !important"
                                    @click="dialog = true"
                                    >mdi-plus</v-icon
                                >
                            </v-btn>
                            <v-btn @click="Swap">
                                <v-icon>mdi-view-grid-outline</v-icon>
                            </v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-dialog v-model="dialog" width="90%">
                <div class="popup bg-white w-100 rounded">
                    <div class="header">
                        <div>إضافة الحالات</div>
                        <font-awesome-icon
                            :icon="['fas', 'xmark']"
                            @click="dialog = false"
                        />
                    </div>
                    <div class="body">
                        <div class="box">
                            <font-awesome-icon :icon="['fas', 'keyboard']" />
                            <div>يدوي</div>
                        </div>
                        <div class="box">
                            <font-awesome-icon :icon="['fas', 'file-excel']" />
                            <div>إكسل</div>
                        </div>
                    </div>
                </div>
            </v-dialog>
        </v-container>
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <div class="px-12">
                        <v-card>
                            <v-tabs v-model="tab" bg-color="grey-lighten-3">
                                <v-tab value="المحتاجين">المحتاجين</v-tab>
                                <v-tab value="الجمعيات">الجمعيات</v-tab>
                            </v-tabs>
                        </v-card>
                        <v-window v-model="tab">
                            <v-window-item value="المحتاجين">
                                <DashboardCharitys /> <StatusInformation
                            /></v-window-item>

                            <v-window-item value="الجمعيات">
                                <CharityView />
                            </v-window-item>
                        </v-window>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import DashboardCharitys from "@/components/DashboardCharitys.vue";
import StatusInformation from "@/components/StatusInformation.vue";
import CharityView from "@/components/Charity_View.vue";
import Side_Bar from "@/components/Side_Bar.vue";

export default {
    inject: ["Emitter"],
    name: "HomeView",
    components: {
        DashboardCharitys,
        StatusInformation,
        CharityView,
        Side_Bar,
    },
    data() {
        return {
            dialog: false,
            tab: null,
            User: {
                User_State: true,
                User_name: "",
                User_FullName: "",
            },
        };
    },
    methods: {
        // Sign_Out() {
        //     localStorage.removeItem("id");
        //     this.User.User_State = true;
        // },
        Swap() {
            this.Emitter.emit("swapView");
        },
        // / Firts Function ordered By >>>> Swap BT Latest && Oldest
        funLatestClicked() {
            this.Emitter.emit("FunLatest");
        },
        // / Seconed  Function ordered By >>>> A To Z
        funAtZClicked() {
            this.Emitter.emit("FunATZ");
        },
        // / Third  Function ordered By >>>> Z To A
        funZtAClicked() {
            this.Emitter.emit("FunZTA");
        },
        // / Fourth  Function ordered By Cards >>>> S T L
        funCards_STL() {
            this.Emitter.emit("CardsAscending");
        },
        funCards_LTS() {
            this.Emitter.emit("CardsDesaending");
        },
        // / Sixth  Function ordered Fat >>>> S T L
        funFat_STL() {
            this.Emitter.emit("FatAscending");
        },
        // / seventh  Function ordered Fat >>>> L T Z
        funFat_LTS() {
            this.Emitter.emit("fatDesaending");
        },
        // / Eight  Function ordered calories >>>>S T L
        funCalories_STL() {
            this.Emitter.emit("caloriesAscending");
        },
        // / nine  Function ordered calories >>>>S T L
        funCalories_LTS() {
            this.Emitter.emit("caloriesDesaending");
        },
    },
};
</script>
<style lang="scss" scoped>
* {
    direction: rtl !important;
}
.info_stat .info {
    font-size: 20px;
    span {
        font-size: 25px;
    }
}
.popup {
    padding: 20px;
    font-family: system-ui;
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fafafa;
        border-radius: 5px;
        padding: 10px;
        font-size: 21px;
        color: #0088ff;
        font-weight: bold;
        svg {
            cursor: pointer;
        }
    }
    .body {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        .box {
            cursor: pointer;
            width: 48%;
            background: #fafafa;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 20px;
            border-radius: 5px;
            transition: 0.3s;
            &:hover {
                box-shadow: 0 0 10px #ddd;
                color: #0088ff;
            }
        }
    }
}
</style>
