<template>
    <div class="Dash_board">
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
                                <DashboardCharitys
                                    ref="childComponentRef"
                                    @child-result="handleChildResult"
                                />
                            </v-window-item>

                            <v-window-item value="الجمعيات">
                                <CharityView
                                    @child-result1="handleChildResult1"
                                >
                                    <template v-slot:default>
                                        <!-- Display statistics -->
                                        <v-container
                                            class="d-flex justify-space-evenly mb-4 mt-16"
                                        >
                                            <!-- Card for number of cases -->
                                            <v-card
                                                class="card text-center mt-3 bg-grey-lighten-3"
                                                prepend-icon="mdi-account"
                                            >
                                                <v-card-title
                                                    >عدد الحالات</v-card-title
                                                >
                                                <v-card-text
                                                    class="text-center"
                                                    >{{
                                                        childResult
                                                    }}</v-card-text
                                                >
                                            </v-card>
                                            <!-- Card for number of charities -->
                                            <v-card
                                                class="card text-center mt-3 bg-grey-lighten-3"
                                                prepend-icon="mdi-charity"
                                            >
                                                <v-card-title
                                                    >عدد الجمعيات</v-card-title
                                                >
                                                <v-card-text
                                                    class="text-center"
                                                    >{{
                                                        childResult1
                                                    }}</v-card-text
                                                >
                                            </v-card>
                                        </v-container>
                                    </template>
                                </CharityView>
                            </v-window-item>
                        </v-window>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script scoped>
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
            childResult: null,
            childResult1: null,
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
        // Define handleChildResult method to handle events from child components
        handleChildResult(result) {
            this.childResult = result;
            console.log("Received result from child:", this.childResult);
        },
        // Define handleChildResult1 method to handle events from another child component
        handleChildResult1(result) {
            this.childResult1 = result;
            console.log("Received result from child:", this.childResult1);
        },
        // change view
        Swap() {
            this.Emitter.emit("change_view");
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
