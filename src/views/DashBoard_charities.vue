<template>
    <div class="Dash_board">
        <!-- NavBar  -->
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <div
                        class="d-flex justify-space-between align-end flex-wrap px-12"
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
                                                ملف اكسل<input
                                                    type="file"
                                                    id="myinput"
                                                    accept=".xlsx"
                                                    @change="To_Json()"
                                                />
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
        <AddCasce />
    </div>
</template>

<script>
// import Xlsx File
import readXlsxFile from "read-excel-file";
// import XLSX from "xlsx";
// import Components
import DashboardCharitys from "@/components/DashboardCharitys.vue";
import StatusInformation from "@/components/StatusInformation.vue";
import AddCasce from "@/components/AddCasce.vue";

export default {
    inject: ["Emitter"],
    name: "Dash_board",
    components: {
        DashboardCharitys,
        StatusInformation,
        AddCasce,
    },
    data() {
        return {
            dialog: false,
            items: [],
        };
    },
    methods: {
        // onFileChange(event) {
        //     const xlsxFile = event.target.files ? event.target.files[0] : null;
        //     if (xlsxFile) {
        //         readXlsxFile(xlsxFile).then((rows) => {
        //             console.log("Rows:", rows);
        //         });
        //     }
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
        To_Json() {
            const input = document.getElementById("myinput");
            readXlsxFile(input.files[0]).then((rows) => {
                const headers = rows[1]; // assuming the first row contains column headers
                const data = rows.slice(2); // data rows
                const objByColumn = {};
                headers.forEach((header, index) => {
                    objByColumn[header] = data.map((row) => row[index]);
                });
                console.log(objByColumn); // output the resulting object
            });
        },
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
