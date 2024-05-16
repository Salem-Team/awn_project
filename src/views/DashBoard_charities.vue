<template>
    <div class="Dash_board mt-16">
        <!-- NavBar  -->
        <Side_Bar />
        <v-container class="mt-16">
            <v-container>
                <v-row
                    style="
                        padding: 40px;
                        border-radius: 7px 0px 0px 0px;
                        border-radius: 20px;
                        border: 1px solid #ddd;
                    "
                >
                    <v-col lg="5" md="7" sm="12">
                        <!-- Info Status -->
                        <div
                            class="info_stat d-flex justify-space-between align-center ga-4"
                        >
                            <v-chip
                                style="padding: 46px; height: 10px"
                                class="text-center chip_info"
                            >
                                <div class="info">
                                    <div class="num">{{ childResult }}</div>
                                    <span class="text-primary">الحاله</span>
                                </div>
                            </v-chip>
                            <v-chip
                                style="padding: 46px; height: 10px"
                                class="text-center chip_info"
                            >
                                <div class="info">
                                    <div class="num">
                                        {{ childResult1 }}
                                    </div>
                                    <span class="text-primary">عجز</span>
                                </div>
                            </v-chip>
                            <v-chip
                                style="padding: 46px; height: 10px"
                                class="text-center chip_info"
                            >
                                <div class="info">
                                    <div class="num">50</div>
                                    <span class="text-primary"
                                        >حالات مشتركه</span
                                    >
                                </div>
                            </v-chip>
                        </div>
                    </v-col>
                    <v-col
                        lg="7"
                        md="5"
                        sm="12"
                        style="
                            display: flex;
                            justify-content: flex-end;
                            align-items: center;
                        "
                        class="info_col2"
                    >
                        <div class="d-flex ga-3 mb-3">
                            <v-menu>
                                <template v-slot:activator="{ props }">
                                    <v-btn
                                        class="btn_menu"
                                        color="primary"
                                        v-bind="props"
                                    >
                                        ترتيب حسب
                                        <v-icon>mdi-filter-variant</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item>
                                        ابجدى
                                        <v-btn-toggle v-model="isActive1">
                                            <v-btn
                                                small
                                                v-model="isActive"
                                                @click="
                                                    toggleActive('up'),
                                                        funAtZClicked()
                                                "
                                                :class="{
                                                    active: isActive === 'up',
                                                }"
                                            >
                                                <v-icon>mdi-arrow-up</v-icon>
                                            </v-btn>
                                            <v-btn
                                                small
                                                v-model="isActive"
                                                @click="
                                                    toggleActive('down'),
                                                        funZtAClicked()
                                                "
                                                :class="{
                                                    active: isActive === 'down',
                                                }"
                                            >
                                                <v-icon>mdi-arrow-down</v-icon>
                                            </v-btn>
                                        </v-btn-toggle>
                                    </v-list-item>
                                    <!-- العجز بداية ------------------------------------------ -->
                                    <v-list-item>
                                        العجز
                                        <v-btn-toggle v-model="isActive2">
                                            <v-btn
                                                small
                                                v-model="isActive"
                                                @click="
                                                    toggleActive('up'),
                                                        funCards_STL()
                                                "
                                                :class="{
                                                    active: isActive === 'up',
                                                }"
                                            >
                                                <v-icon>mdi-arrow-up</v-icon>
                                            </v-btn>
                                            <v-btn
                                                small
                                                v-model="isActive"
                                                @click="
                                                    toggleActive('down'),
                                                        funCards_LTS()
                                                "
                                                :class="{
                                                    active: isActive === 'down',
                                                }"
                                            >
                                                <v-icon>mdi-arrow-down</v-icon>
                                            </v-btn>
                                        </v-btn-toggle>
                                    </v-list-item>
                                    <!-- العجز نهايه ----------------------------------------------- -->

                                    <!-- الدخل بدايه ------------------------------------------------ -->
                                    <v-list-item>
                                        الدخل
                                        <v-btn-toggle v-model="isActive3">
                                            <v-btn
                                                small
                                                v-model="isActive"
                                                @click="
                                                    toggleActive('up'),
                                                        funFat_STL()
                                                "
                                                :class="{
                                                    active: isActive === 'up',
                                                }"
                                            >
                                                <v-icon>mdi-arrow-up</v-icon>
                                            </v-btn>
                                            <v-btn
                                                small
                                                v-model="isActive"
                                                @click="
                                                    toggleActive('down'),
                                                        funFat_LTS()
                                                "
                                                :class="{
                                                    active: isActive === 'down',
                                                }"
                                            >
                                                <v-icon>mdi-arrow-down</v-icon>
                                            </v-btn>
                                        </v-btn-toggle>
                                    </v-list-item>
                                    <!-- الدخل نهايه---------------------------------------------------- -->
                                    <!-- المطلوب بدايه ------------------------------------------------ -->
                                    <v-list-item>
                                        المطلوب
                                        <v-btn-toggle v-model="isActive4">
                                            <v-btn
                                                small
                                                v-model="isActive"
                                                @click="
                                                    toggleActive('up'),
                                                        funCalories_STL()
                                                "
                                                :class="{
                                                    active: isActive === 'up',
                                                }"
                                            >
                                                <v-icon>mdi-arrow-up</v-icon>
                                            </v-btn>
                                            <v-btn
                                                small
                                                v-model="isActive"
                                                @click="
                                                    toggleActive('down'),
                                                        funCalories_LTS()
                                                "
                                                :class="{
                                                    active: isActive === 'down',
                                                }"
                                            >
                                                <v-icon>mdi-arrow-down</v-icon>
                                            </v-btn>
                                        </v-btn-toggle>
                                    </v-list-item>
                                    <!-- المطلوب نهايه ------------------------------------------------ -->
                                </v-list>
                            </v-menu>
                            <v-btn @click="dialog = true" class="btn_menu">
                                <v-icon style="font-size: 20px !important"
                                    >mdi-plus</v-icon
                                >
                            </v-btn>
                            <v-btn @click="Swap" class="btn_menu">
                                <v-icon>mdi-view-grid-outline</v-icon>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
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
                        <div class="box" @click="close_function">
                            <font-awesome-icon :icon="['fas', 'keyboard']" />
                            <div>يدوي</div>
                        </div>
                        <div class="box" @click="dialog1 = true">
                            <font-awesome-icon :icon="['fas', 'file-excel']" />
                            <div>
                                <div @click="dialog1 = true">اكسل</div>

                                <v-dialog v-model="dialog1" max-width="600">
                                    <template v-slot:default="{ isActive }">
                                        <v-card
                                            rounded="lg"
                                            class="mx-16"
                                            height="400"
                                        >
                                            <v-card-title
                                                class="d-flex justify-space-between align-center"
                                            >
                                                <div
                                                    class="text-h5 text-medium-emphasis ps-2"
                                                >
                                                    اضافه ملف اكسيل
                                                </div>

                                                <v-btn
                                                    icon="mdi-close"
                                                    variant="text"
                                                    @click="
                                                        isActive.value = false
                                                    "
                                                ></v-btn>
                                            </v-card-title>

                                            <v-divider class="mb-4"></v-divider>

                                            <v-card-text
                                                class="d-flex justify-end"
                                            >
                                                <div class="mb-4">
                                                    <v-btn
                                                        rounded="xl"
                                                        size="x-large"
                                                        block
                                                        style="
                                                            font-family: 'Roboto',
                                                                sans-serif !important;
                                                            font-size: 20px;
                                                        "
                                                        >تحميل الملف</v-btn
                                                    >
                                                </div>
                                            </v-card-text>
                                            <div
                                                class="d-flex justify-center align-center"
                                            >
                                                <div
                                                    class="text-medium-emphasis mb-1"
                                                    style="
                                                        display: flex;
                                                        flex-wrap: wrap;
                                                        justify-content: center;
                                                        width: 60%;
                                                        height: 120px;
                                                        border: 3px dashed #777;
                                                        align-content: center;
                                                        justify-content: space-around;
                                                    "
                                                >
                                                    <label
                                                        style="
                                                            width: 200px;
                                                            position: relative;
                                                        "
                                                    >
                                                        <v-icon
                                                            color=""
                                                            style="
                                                                position: absolute;
                                                                right: 37px;
                                                                bottom: 19px;
                                                            "
                                                        >
                                                            mdi-cloud-upload</v-icon
                                                        >
                                                        <input
                                                            type="file"
                                                            id="myinput"
                                                        />

                                                        <span
                                                            style="
                                                                font-family: 'Roboto',
                                                                    sans-serif;
                                                                font-size: 18px;
                                                            "
                                                            >رفع ملف
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <v-card-actions
                                                class="my-2 d-flex justify-end"
                                            >
                                                <v-btn
                                                    style="
                                                        font-size: 27px;
                                                        width: 50%;
                                                        margin: 15px 113px;
                                                    "
                                                    class="text-none"
                                                    color="primary"
                                                    text="تم"
                                                    variant="flat"
                                                    @click="
                                                        To_Json(),
                                                            (isActive.value = false)
                                                    "
                                                ></v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </template>
                                </v-dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </v-dialog>
        </v-container>
        <v-container>
            <div class="Charites d-flex justify-center">
                <DashboardCharitys
                    ref="childComponentRef"
                    @child-result="handleChildResult"
                    @child-result1="handleChildResult1"
                />
            </div>
        </v-container>
        <Add_cases v-if="Show_Add" :close_function="close_function" />
    </div>
</template>

<script>
// import Xlsx File
import readXlsxFile from "read-excel-file";
// import Components
import DashboardCharitys from "@/components/DashboardCharitys.vue";
import Add_cases from "@/components/Add_cases.vue";
import Side_Bar from "@/components/Side_Bar.vue";

export default {
    inject: ["Emitter"],
    name: "Dash_board",
    components: {
        DashboardCharitys,
        Side_Bar,
        Add_cases,
    },
    data() {
        return {
            deficit: 0,
            required: 0,
            incom: 0,
            dialog: false,
            dialog1: false,
            items: [],
            isActive: false,
            isActive1: null,
            isActive2: null,
            isActive3: null,
            isActive4: null,
            Show_Add: null,
            Cases: [],
            childResult: 0,
            childResult1: 0,
        };
    },
    mounted() {
        this.$refs.childComponentRef.Get_data();
    },

    methods: {
        // close function
        close_function() {
            this.Show_Add = !this.Show_Add;
            this.dialog = false;
            this.$refs.childComponentRef.Get_data();
        },
        toggleActive(direction) {
            if (direction === "up") {
                this.isActive = this.isActive === "up" ? null : "up";
            } else if (direction === "down") {
                this.isActive = this.isActive === "down" ? null : "down";
            }
        },
        // change viw
        handleChildResult(result) {
            this.childResult = result;
            console.log("Received result from child:", this.childResult);
        },
        // change viw
        handleChildResult1(result) {
            this.childResult1 = result;
            console.log("Received result from child:", this.childResult1);
        },
        // change view
        Swap() {
            this.Emitter.emit("change_view");
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
            // readXlsxFile(input.files[0]).then((rows) => {
            //     const headers = rows[1];
            //     const data = rows.slice(3);

            //     const objByColumn = {};

            //     headers.forEach((header, index) => {
            //         const columnData = data.map((row) => row[index]);
            //         const adjacentColumnData = data.map((row) => row[index]);

            //         const columnObj = {};
            //         columnData.forEach((value, i) => {
            //             columnObj[value] = adjacentColumnData[i];
            //         });

            //         objByColumn[header] = columnObj;
            //     });

            //     console.log(objByColumn);
            // });
            readXlsxFile(input.files[0]).then((rows) => {
                rows.splice(2, 1);
                console.log(rows);
            });
        },
    },
};
</script>
<style lang="scss" scoped>
// .info_stat .info {
//     font-size: 20px;
//     span {
//         font-size: 25px;
//     }
// }
.Dash_board {
    width: calc(100% - 56px);
    margin-right: auto;
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
    // btn style
}
label input[type="file"] {
    display: none;
}
label span {
    cursor: pointer;
    background: #ddd;
    border: 2px solid #ddd;
    border-radius: 4px;
    padding: 10px 20px;
    display: flex;
    align-items: flex-start;
    align-content: space-around;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    height: 65px;
}
label span:hover {
    border-color: #09f;
}
label span:active {
    box-shadow: 1px 1px 0 #012;
}
// customize list
.v-list-item.v-theme--light.v-list-item--density-default.v-list-item--one-line.rounded-0.v-list-item--variant-text {
    padding-left: 0px !important;
    padding-right: 9px !important;
}
.v-btn-group.v-theme--light.v-btn-group--density-default.v-btn-toggle {
    height: 40px !important;
}
.v-btn-group--density-default.v-btn-group {
    width: 122px !important;
}
.v-btn-group--density-default.v-btn-group {
    padding-bottom: 0 !important;
}
.chip_info {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 1000px) {
    .info_col2 {
        justify-content: center !important;
        font-size: 20px !important;
    }
}
@media (min-width: 400px) {
    .chip_info {
        padding: 42px !important;
        font-size: 14px !important;
    }
}
@media (max-width: 400px) {
    .chip_info {
        padding: 34px !important;
        font-size: 16px !important;
    }
}
@media (max-width: 400px) {
    .btn_menu {
        font-size: 7px !important;
    }
}

@media (min-width: 768px) {
    .chip_info {
        padding: 40px !important;
        font-size: 18px !important;
    }
}
@media (min-width: 1200px) {
    .chip_info {
        padding: 50px !important;
        font-size: 23px !important;
    }
}
@media (max-width: 400px) {
    .info_stat {
        gap: 2px !important;
    }
}
@media (max-width: 400px) {
    .chip_info[data-v-d1ccef3e] {
        font-size: 9px !important;
    }
}
</style>
