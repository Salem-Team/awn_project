<template>
    <div class="Dash_board mt-16">
        <!-- NavBar  -->
        <Side_Bar />
        <v-container fluid>
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
                        <div v-if="tab === 'المحتاجين'">
                            <v-btn @click="Swap" id="Swap">
                                <v-icon>mdi-view-grid-outline</v-icon>
                            </v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
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
                                <DashboardCharitys ref="childComponentRef" />
                            </v-window-item>

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
// import Xlsx File
import readXlsxFile from "read-excel-file";
// import Components
import CharityView from "@/components/Charity_View.vue";
import DashboardCharitys from "@/components/DashboardCharitys.vue";
import Side_Bar from "@/components/Side_Bar.vue";

export default {
    inject: ["Emitter"],
    name: "Dash_board",
    components: {
        DashboardCharitys,
        Side_Bar,
        CharityView,
    },
    data() {
        return {
            items: [],
            isActive: false,
            Cases: [],
            tab: null,
        };
    },
    mounted() {
        this.$nextTick(() => {
            if (this.$refs.childComponentRef) {
                this.$refs.childComponentRef.Get_data();
            } else {
                console.error("Child component reference not found.");
            }
        });
    },
    methods: {
        // change view
        Swap() {
            this.Emitter.emit("change_view");
        },
        To_Json() {
            const input = document.getElementById("myinput");
            readXlsxFile(input.files[0]).then((rows) => {
                const headers = rows[1];
                const data = rows.slice(3);

                const objByColumn = {};

                headers.forEach((header, index) => {
                    const columnData = data.map((row) => row[index]);
                    const adjacentColumnData = data.map((row) => row[index]);

                    const columnObj = {};
                    columnData.forEach((value, i) => {
                        columnObj[value] = adjacentColumnData[i];
                    });

                    objByColumn[header] = columnObj;
                });

                console.log(objByColumn);
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.info_stat .info {
    font-size: 20px;
    span {
        font-size: 25px;
    }
}
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
@media (max-width: 801px) {
    /* Apply styles for screens wider than 800px */
    #Swap {
        display: none;
    }
}
</style>
