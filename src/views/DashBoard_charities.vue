<template>
    <div class="Dash_board mt-16">
        <!-- NavBar  -->
        <!-- <Side_Bar /> -->
        <div class="container_0">
            <div class="statistics">
                <div class="title">
                    <img
                        src="../assets/images/analytics.gif"
                        alt=""
                        width="50px"
                        style="filter: grayscale(1)"
                    />
                    <div>إحصائياتك</div>
                </div>
                <div class="main_box">
                    <div class="small_box">
                        <div class="number">{{ Cases_length || 0 }}</div>
                        <span>حالة</span>
                    </div>
                    <div class="small_box">
                        <div class="number">
                            {{ required }}

                            <!-- <span>جنية</span> -->
                        </div>
                        <span>إجمالي المطلوب</span>
                    </div>
                    <div class="small_box">
                        <div class="number">
                            {{ this.incom }}

                            <!-- <span>جنية</span> -->
                        </div>
                        <span>إجمالي الدخل</span>
                    </div>
                    <div class="small_box">
                        <div class="number">
                            {{ this.required - this.incom }}
                        </div>
                        <span>إجمالي العجز</span>
                    </div>
                    <div class="small_box">
                        <div>
                            <!-- Progress circular -->
                            <div class="progress-circular">
                                <v-progress-circular
                                    class="mt-0"
                                    bg-color="var(--secound-color)"
                                    :rotate="360"
                                    :size="90"
                                    :width="20"
                                    color="var(--main-color)"
                                    style="font-size: 15px"
                                    :model-value="value || 0"
                                >
                                    <template #default>
                                        <strong> {{ value || 0 }}% </strong>
                                    </template>
                                </v-progress-circular>
                                <p>نسبة إكمال المطلوب</p>
                            </div>
                        </div>
                    </div>
                    <div class="small_box">
                        <div>
                            <!-- Progress circular -->
                            <div class="progress-circular">
                                <v-progress-circular
                                    class="mt-0"
                                    bg-color="var(--secound-color)"
                                    :rotate="360"
                                    :size="90"
                                    :width="20"
                                    color="var(--main-color)"
                                    style="font-size: 15px"
                                    :model-value="12"
                                >
                                    <template #default>
                                        <strong> {{ 12 }}% </strong>
                                    </template>
                                </v-progress-circular>
                                <p>نسبة الحالات المشتركة</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="use">
                <div class="title">
                    <div class="right">
                        <font-awesome-icon :icon="['fas', 'users-line']" />
                        <div>الحالات</div>
                    </div>
                    <div class="left">
                        <font-awesome-icon
                            @click="dialog = true"
                            :icon="['fas', 'magnifying-glass']"
                        />

                        <font-awesome-icon
                            @click="dialog_1 = true"
                            :icon="['fas', 'filter']"
                        />
                        <font-awesome-icon
                            @click="dialog_2 = true"
                            :icon="['fas', 'plus']"
                        />
                    </div>
                </div>
            </div>
        </div>

        <DashboardCharitys ref="childComponentRef" :search="search" />
        <Add_cases v-if="Show_Add" :close_function="close_function" />

        <div>
            <v-dialog v-model="dialog" width="auto">
                <v-card width="auto" class="popup">
                    <div
                        class="title"
                        style="
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            color: var(--main-color);
                            font-size: 20px;
                            font-weight: bold;
                        "
                    >
                        <div>البحث</div>
                        <div>
                            <font-awesome-icon
                                :icon="['fas', 'xmark']"
                                @click="dialog = false"
                                style="cursor: pointer"
                            />
                        </div>
                    </div>
                    <span
                        style="
                            width: 100%;
                            height: 4px;
                            background: var(--secound-color);
                            margin: 15px 0;
                        "
                    ></span>
                    <div
                        class="body"
                        style="
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            color: var(--main-color);
                            font-weight: bold;
                            border: 1px solid var(--secound-color);
                            border-radius: 5px;
                        "
                    >
                        <input
                            v-model="search"
                            style="width: 100%; padding: 0 10px"
                            type="text"
                            placeholder="اكتب اسم الحالة"
                        />
                        <font-awesome-icon
                            :icon="['fas', 'magnifying-glass']"
                            style="
                                background: var(--main-color);
                                color: #fff;
                                padding: 10px;
                                cursor: pointer;
                                border-top-left-radius: 5px;
                                border-bottom-left-radius: 5px;
                            "
                            @click="
                                (dialog = false),
                                    this.$refs.childComponentRef.filteredCase()
                            "
                        />
                    </div>
                </v-card>
            </v-dialog>
        </div>
        <div>
            <v-dialog v-model="dialog_1" width="90%">
                <v-card width="100%" class="popup">
                    <div
                        class="title"
                        style="
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            color: var(--main-color);
                            font-size: 20px;
                            font-weight: bold;
                        "
                    >
                        <div
                            style="display: flex; align-items: center; gap: 5px"
                        >
                            <font-awesome-icon :icon="['fas', 'filter']" />
                            <div>الفلتر</div>
                        </div>
                        <div>
                            <font-awesome-icon
                                :icon="['fas', 'xmark']"
                                @click="dialog_1 = false"
                                style="cursor: pointer"
                            />
                        </div>
                    </div>
                    <span
                        style="
                            width: 100%;
                            height: 4px;
                            background: var(--secound-color);
                            margin: 15px 0;
                        "
                    ></span>
                    <div
                        class="body"
                        style="
                            ddisplay: flex;
                            align-items: center;
                            justify-content: space-between;
                            flex-direction: column;
                            gap: 10px;
                        "
                    >
                        <div
                            class="feat"
                            style="
                                padding: 10px;
                                width: 100%;
                                background: rgb(250, 250, 250);
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                border-radius: 5px;
                            "
                        >
                            <div
                                class="name"
                                style="
                                    font-size: 20px;
                                    font-weight: bold;
                                    color: var(--main-color);
                                "
                            >
                                أبجدي
                            </div>
                            <div style="display: flex; gap: 10px">
                                <font-awesome-icon
                                    :icon="['fas', 'arrow-up-wide-short']"
                                    style="
                                        background: #fff;
                                        width: 50px;
                                        padding: 10px;
                                        border-radius: 5px;
                                        font-weight: bold;
                                        cursor: pointer;
                                        color: var(--main-color);
                                    "
                                    v-model="isActive"
                                    @click="
                                        toggleActive('up'),
                                            funAtZClicked(),
                                            (isActive0 = null),
                                            (isActive2 = null),
                                            (isActive3 = null),
                                            (isActive4 = null)
                                    "
                                    :class="{
                                        active: isActive === 'up',
                                    }"
                                />
                                <font-awesome-icon
                                    :icon="['fas', 'arrow-up-short-wide']"
                                    style="
                                        background: #fff;
                                        width: 50px;
                                        padding: 10px;
                                        border-radius: 5px;
                                        font-weight: bold;
                                        cursor: pointer;
                                        color: var(--main-color);
                                    "
                                    v-model="isActive"
                                    @click="
                                        toggleActive('down'),
                                            funZtAClicked(),
                                            (isActive0 = null),
                                            (isActive2 = null),
                                            (isActive3 = null),
                                            (isActive4 = null)
                                    "
                                    :class="{
                                        active: isActive === 'down',
                                    }"
                                />
                            </div>
                        </div>
                        <div
                            class="feat"
                            style="
                                padding: 10px;
                                width: 100%;
                                background: rgb(250, 250, 250);
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                border-radius: 5px;
                            "
                        >
                            <div
                                class="name"
                                style="
                                    font-size: 20px;
                                    font-weight: bold;
                                    color: var(--main-color);
                                "
                            >
                                العجز
                            </div>
                            <div style="display: flex; gap: 10px">
                                <font-awesome-icon
                                    :icon="['fas', 'arrow-up-wide-short']"
                                    style="
                                        background: #fff;
                                        width: 50px;
                                        padding: 10px;
                                        border-radius: 5px;
                                        font-weight: bold;
                                        cursor: pointer;
                                        color: var(--main-color);
                                    "
                                    v-model="isActive"
                                    @click="
                                        toggleActive('up'),
                                            funCards_STL(),
                                            (isActive1 = null),
                                            (isActive0 = null),
                                            (isActive3 = null),
                                            (isActive4 = null)
                                    "
                                    :class="{
                                        active: isActive === 'up',
                                    }"
                                />
                                <font-awesome-icon
                                    :icon="['fas', 'arrow-up-short-wide']"
                                    style="
                                        background: #fff;
                                        width: 50px;
                                        padding: 10px;
                                        border-radius: 5px;
                                        font-weight: bold;
                                        cursor: pointer;
                                        color: var(--main-color);
                                    "
                                    v-model="isActive"
                                    @click="
                                        toggleActive('down'),
                                            funCards_LTS(),
                                            (isActive1 = null),
                                            (isActive0 = null),
                                            (isActive3 = null),
                                            (isActive4 = null)
                                    "
                                    :class="{
                                        active: isActive === 'down',
                                    }"
                                />
                            </div>
                        </div>
                        <div
                            class="feat"
                            style="
                                padding: 10px;
                                width: 100%;
                                background: rgb(250, 250, 250);
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                border-radius: 5px;
                            "
                        >
                            <div
                                class="name"
                                style="
                                    font-size: 20px;
                                    font-weight: bold;
                                    color: var(--main-color);
                                "
                            >
                                الدخل
                            </div>
                            <div style="display: flex; gap: 10px">
                                <font-awesome-icon
                                    :icon="['fas', 'arrow-up-wide-short']"
                                    style="
                                        background: #fff;
                                        width: 50px;
                                        padding: 10px;
                                        border-radius: 5px;
                                        font-weight: bold;
                                        cursor: pointer;
                                        color: var(--main-color);
                                    "
                                    v-model="isActive"
                                    @click="
                                        toggleActive('up'),
                                            funFat_STL(),
                                            (isActive1 = null),
                                            (isActive2 = null),
                                            (isActive0 = null),
                                            (isActive4 = null)
                                    "
                                    :class="{
                                        active: isActive === 'up',
                                    }"
                                />
                                <font-awesome-icon
                                    :icon="['fas', 'arrow-up-short-wide']"
                                    style="
                                        background: #fff;
                                        width: 50px;
                                        padding: 10px;
                                        border-radius: 5px;
                                        font-weight: bold;
                                        cursor: pointer;
                                        color: var(--main-color);
                                    "
                                    v-model="isActive"
                                    @click="
                                        toggleActive('down'),
                                            funFat_LTS(),
                                            (isActive1 = null),
                                            (isActive2 = null),
                                            (isActive0 = null),
                                            (isActive4 = null)
                                    "
                                    :class="{
                                        active: isActive === 'down',
                                    }"
                                />
                            </div>
                        </div>
                        <div
                            class="feat"
                            style="
                                padding: 10px;
                                width: 100%;
                                background: rgb(250, 250, 250);
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                border-radius: 5px;
                            "
                        >
                            <div
                                class="name"
                                style="
                                    font-size: 20px;
                                    font-weight: bold;
                                    color: var(--main-color);
                                "
                            >
                                المطلوب
                            </div>
                            <div style="display: flex; gap: 10px">
                                <font-awesome-icon
                                    :icon="['fas', 'arrow-up-wide-short']"
                                    style="
                                        background: #fff;
                                        width: 50px;
                                        padding: 10px;
                                        border-radius: 5px;
                                        font-weight: bold;
                                        cursor: pointer;
                                        color: var(--main-color);
                                    "
                                    v-model="isActive"
                                    @click="
                                        toggleActive('up'),
                                            funCalories_STL(),
                                            (isActive1 = null),
                                            (isActive2 = null),
                                            (isActive3 = null),
                                            (isActive0 = null)
                                    "
                                    :class="{
                                        active: isActive === 'up',
                                    }"
                                />
                                <font-awesome-icon
                                    :icon="['fas', 'arrow-up-short-wide']"
                                    style="
                                        background: #fff;
                                        width: 50px;
                                        padding: 10px;
                                        border-radius: 5px;
                                        font-weight: bold;
                                        cursor: pointer;
                                        color: var(--main-color);
                                    "
                                    v-model="isActive"
                                    @click="
                                        toggleActive('down'),
                                            funCalories_LTS(),
                                            (isActive1 = null),
                                            (isActive2 = null),
                                            (isActive3 = null),
                                            (isActive0 = null)
                                    "
                                    :class="{
                                        active: isActive === 'down',
                                    }"
                                />
                            </div>
                        </div>
                    </div>
                    <v-btn
                        style="
                            background: var(--main-color);
                            color: rgb(255, 255, 255);
                            padding: 10px;
                            margin-top: 20px;
                            border-radius: 5px;
                            text-align: center;
                            font-weight: bold;
                            display: flex;
                            gap: 5px;
                            justify-content: center;
                            align-items: center;
                        "
                        v-model="isActive"
                        @click="
                            toggleActive('up'),
                                this.$refs.childComponentRef.Get_data(),
                                (isActive1 = null),
                                (isActive2 = null),
                                (isActive3 = null),
                                (isActive4 = null)
                        "
                        :class="{
                            footer,
                            active: isActive === 'up',
                        }"
                    >
                        <font-awesome-icon :icon="['fas', 'rotate']" />
                        <div>إعادة ظبط الفلتر</div>
                    </v-btn>
                </v-card>
            </v-dialog>
        </div>
        <v-container>
            <v-dialog v-model="dialog_2" width="90%">
                <div class="popup bg-white w-100 rounded">
                    <div class="header">
                        <div>إضافة الحالات</div>
                        <font-awesome-icon
                            :icon="['fas', 'xmark']"
                            @click="dialog_2 = false"
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
                                <v-dialog v-model="dialog1" max-width="90%">
                                    <template v-slot:default="{ isActive }">
                                        <v-card
                                            rounded="lg"
                                            class="mx-16"
                                            height="700"
                                            width="90%"
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
                                                class="d-flex flex-column align-center"
                                            >
                                                <div class="mb-4">
                                                    <a
                                                        href="https://docs.google.com/spreadsheets/d/1V5euJ0Yoaw6JDO7ZZwuZ8TYm4SU2Uu1i/edit?usp=sharing&ouid=103544609659766512054&rtpof=true&sd=true"
                                                        download
                                                        target="_blank"
                                                    >
                                                        تحميل ملف Excel</a
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
                                                    @dragover.prevent
                                                    @drop="handleDrop"
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
                                                            mdi-cloud-upload
                                                        </v-icon>
                                                        <input
                                                            type="file"
                                                            id="myinput"
                                                            ref="fileInput"
                                                            style="
                                                                display: none;
                                                            "
                                                            @change="
                                                                handleFileChange
                                                            "
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
                                            <div class="alert">
                                                <v-alert
                                                    v-if="
                                                        validationErrors.length >
                                                        0
                                                    "
                                                    type="error"
                                                    color="red"
                                                    closable
                                                    dismissible
                                                >
                                                    <v-alert
                                                        v-for="(
                                                            error, index
                                                        ) in validationErrors"
                                                        :key="index"
                                                        class="mb-4"
                                                    >
                                                        {{ error }}
                                                    </v-alert>
                                                </v-alert>
                                                <v-alert
                                                    v-if="notExcel"
                                                    type="error"
                                                    color="red"
                                                    closable
                                                    dismissible
                                                >
                                                    خطأ ! رجاء التأكد من صحه
                                                    الملف وعدد الحالات
                                                </v-alert>
                                                <v-alert
                                                    v-if="showSuccessAlert"
                                                    type="success"
                                                    closable
                                                    dismissible
                                                >
                                                    تم اضافه جميع الحالات بنجاح
                                                </v-alert>
                                                <v-alert
                                                    v-if="ExcelFile"
                                                    type="error"
                                                    color="red"
                                                    closable
                                                    dismissible
                                                >
                                                    عذراً، يجب تحميل ملف إكسل
                                                    فقط. الرجاء التأكد من امتداد
                                                    الملف.
                                                </v-alert>
                                            </div>
                                            <v-card-actions
                                                class="my-2 d-flex justify-end"
                                            >
                                                <v-btn
                                                    style="
                                                        font-size: 21px;
                                                        width: 16%;
                                                        height: 50px;
                                                        margin: 30px;
                                                    "
                                                    class="text-none"
                                                    color="primary"
                                                    text="تم"
                                                    variant="flat"
                                                    @click="
                                                        isActive.value = false
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
    </div>
</template>

<script>
// Get  data
import { getFirestore, getDocs, collection } from "@firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDF7ohgD5ohpCZwHQz1wmsPixR7dv19ETo",
    authDomain: "awn--project.firebaseapp.com",
    projectId: "awn--project",
    storageBucket: "awn--project.appspot.com",
    messagingSenderId: "477381368618",
    appId: "1:477381368618:web:8a62011671fc3a3eeb1c53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// import Xlsx File
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
// import Components
// import DashboardCharitys_report from "@/components/DashboardCharitys_report.vue";
import Add_cases from "@/components/Add_cases.vue";
// import Side_Bar from "@/components/Side_Bar.vue";
import DashboardCharitys from "@/components/DashboardCharitys.vue";

export default {
    inject: ["Emitter"],
    name: "Dash_board",
    components: {
        // DashboardCharitys_report,
        // Side_Bar,
        Add_cases,
        DashboardCharitys,
    },
    data() {
        return {
            search: "",
            value: 0,
            text: "لا توجد بيانات",
            empty: false,
            deficit: 0,
            required: 0,
            incom: 0,
            showSuccessAlert: false,
            validationErrors: [], // تخزين الأخطاء لعرضها في v-alert
            nationalIDs: [],
            duplicateNationalIDs: [],
            validationError: false,
            // start vars belong Exel & json files
            ExcelFile: false,
            jsonData: null,
            downloadURL: null,
            // excelFile: null,
            error: null,
            //end vars belong Exel & json files
            dialog: false,
            dialog_1: false,
            dialog_2: false,
            dialog1: false,
            items: [],
            isActive: false,
            isActive0: null,
            isActive1: null,
            isActive2: null,
            isActive3: null,
            isActive4: null,
            Show_Add: null,
            Cases: [],
            Cases_length: 0,
            childResult: 0,
            childResult1: 0,
            case: {
                personal_info_1: {
                    name: "",
                    nick_name: "",
                    national_id: "",
                    governorate: "",
                    house_number: "",
                    floor_number: "",
                    marital_status: "",
                    phone: "",
                },
            },
        };
    },
    mounted() {
        this.Get_data();
        this.$refs.childComponentRef.Get_data();
        this.funLatestClicked(),
            this.funAtZClicked(),
            this.funZtAClicked(),
            this.funCards_STL(),
            this.funCards_LTS(),
            this.funFat_STL(),
            this.funFat_LTS(),
            this.funCalories_STL(),
            this.funCalories_LTS();
        this.$refs.childComponentRef.filteredCase();
    },
    methods: {
        // Method to check internet connection status
        startInternetCheckerUse() {
            this.Emitter.emit("startInternetChecker");
        },
        async Get_data() {
            try {
                this.Cases = [];
                const querySnapshot = await getDocs(collection(db, "Cases"));
                querySnapshot.forEach((doc) => {
                    this.Cases.push(doc.data());
                });
                this.Cases_length = this.Cases.length;
                this.sumFinancialData();
                if (this.Cases.length === 0) {
                    this.empty = true;
                    // Method to check internet connection status
                    this.startInternetCheckerUse();
                } else {
                    this.empty = false;
                }
            } catch (error) {
                console.error("Error adding document: ", error);
                // this.$refs.childComponentRef.startInternetChecke();
            }
        },
        sumFinancialData() {
            this.deficit = 0;
            this.required = 0;
            this.incom = 0;
            this.Cases.forEach((Case) => {
                if (!isNaN(parseInt(Case.financial_info.deficit))) {
                    this.deficit += parseInt(Case.financial_info.deficit || 0);
                }
                if (!isNaN(parseInt(Case.financial_info.required))) {
                    this.required += parseInt(
                        Case.financial_info.required || 0
                    );
                }
                if (!isNaN(parseInt(Case.financial_info.incom))) {
                    this.incom += parseInt(Case.financial_info.incom || 0);
                }
            });
            this.value = Math.round((this.incom / this.required) * 100);
        },

        // start download exsel

        // close function

        close_function() {
            this.Show_Add = !this.Show_Add;
            this.dialog = false;
            this.Get_data();
        },
        toggleActive(direction) {
            if (direction === "up") {
                this.isActive = this.isActive === "up" ? null : "up";
            } else if (direction === "down") {
                this.isActive = this.isActive === "down" ? null : "down";
            }
        },
        // get the cases_number
        handleChildResult(result) {
            this.childResult = result;
            console.log("Received result from child:", this.childResult);
        },
        // get the deficit
        handleChildResult1(result) {
            this.childResult1 = result;
            console.log("Received result from child:", this.childResult1);
        },
        // change view
        Swap() {
            this.Emitter.emit("change_view");
        },

        filteredCases() {
            this.Emitter.emit("filteredCases");
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
        ///
        // Start Convert & Download Excel File
        handleFileChange(event) {
            const file = event.target.files[0];
            const fileName = file.name.toLowerCase();
            if (
                !fileName.endsWith(".xlsx") &&
                !fileName.endsWith(".xlsm") &&
                !fileName.endsWith(".xls")
            ) {
                this.ExcelFile = true;
                setTimeout(() => {
                    this.ExcelFile = true;
                    setTimeout(() => {
                        this.ExcelFile = false;
                    }, 3000);
                });
                return;
            }

            this.jsonData = null; // Reset data and download URL on new file selection
            this.excelFile = file; // Store the uploaded Excel file for download

            const reader = new FileReader();
            reader.onload = (e) => {
                const arrayBuffer = e.target.result;
                const workbook = XLSX.read(arrayBuffer, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, {
                    header: 1,
                });

                this.convertToJSON(jsonData);
            };
            reader.readAsArrayBuffer(file);
        },

        handleDrop(event) {
            event.preventDefault();
            const fileList = event.dataTransfer.files;

            // إعادة تعيين البيانات والأخطاء
            this.jsonData = null;
            this.validationErrors = [];
            this.excelFile = null;

            // تحويل قائمة الملفات إلى مصفوفة
            const filesArray = Array.from(fileList);

            // معالجة كل ملف
            filesArray.forEach((file) => {
                const fileName = file.name.toLowerCase();
                if (
                    !fileName.endsWith(".xlsx") &&
                    !fileName.endsWith(".xlsm") &&
                    !fileName.endsWith(".xls")
                ) {
                    this.ExcelFile = true;
                    setTimeout(() => {
                        this.ExcelFile = false;
                    }, 3000);
                    return;
                }
                const reader = new FileReader();
                reader.onload = (e) => {
                    const arrayBuffer = e.target.result;
                    const workbook = XLSX.read(arrayBuffer, { type: "array" });
                    const sheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[sheetName];
                    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
                        header: 1,
                    });

                    // التحقق من البيانات وتحديث الحالة والتنبيهات
                    // تنفيذ الاختبارات والتحققات هنا
                    const groupedDataObjects = [];
                    for (let i = 0; i < jsonData.length; i += 11) {
                        const chunk = jsonData.slice(i, i + 11);
                        const obj = {
                            Date: chunk[0][0],
                            data: chunk.slice(2),
                        };
                        groupedDataObjects.push(obj);
                    }

                    const titledGroupedData = groupedDataObjects.reduce(
                        (acc, group) => {
                            if (group && group.data && group.data.length > 0) {
                                const data = group.data;
                                let invalid = false;
                                let emptyCells = []; // مصفوفة لتخزين مؤشرات الخلايا الفارغة

                                // التحقق من السلاسل الفارغة وجمع مؤشرات الخلايا الفارغة
                                data.forEach((cell, index) => {
                                    if (!cell[1]) {
                                        emptyCells.push(index);
                                    } else if (
                                        typeof cell[1] !== "string" &&
                                        (index === 2 || index === 8)
                                    ) {
                                        invalid = true;
                                    }
                                });

                                // التحقق من أنواع البيانات المحددة وأطوالها
                                if (
                                    typeof data[4][1] !== "number" ||
                                    typeof data[5][1] !== "number" ||
                                    typeof data[2][1] !== "string" ||
                                    data[2][1].length !== 14 ||
                                    typeof data[8][1] !== "string" ||
                                    data[8][1].length !== 11
                                ) {
                                    invalid = true;
                                }

                                // التحقق من تكرار الرقم القومي
                                if (
                                    data[2][1] &&
                                    this.nationalIDs.includes(data[2][1])
                                ) {
                                    this.duplicateNationalIDs.push(data[2][1]);
                                    this.showSuccessAlert = false;
                                    this.validationErrors.push(
                                        `تم العثور على  رقم قومي مكرر: في ${group.Date}  :   ${data[2][1]} `
                                    );
                                } else {
                                    this.nationalIDs.push(data[2][1]);
                                }
                                if (data[2][1] && data[2][1].length < 14) {
                                    invalid = true;
                                    this.showSuccessAlert = false;
                                    this.validationErrors.push(
                                        `تم العثور على رقم قومي أقل من 14 رقمًا : ${data[2][1]} في : ${group.Date}`
                                    );
                                }

                                // إذا كان هناك خطأ في التحقق أو وجود خلايا فارغة أو أرقام قومية مكررة
                                if (
                                    invalid ||
                                    emptyCells.length > 0 ||
                                    this.duplicateNationalIDs.length > 0
                                ) {
                                    this.validationError = true;

                                    // طباعة مؤشرات الخلايا الفارغة إذا لم تكن الـ array فارغة
                                    if (emptyCells.length > 0) {
                                        invalid = true;
                                        this.showSuccessAlert = false;
                                        this.validationErrors.push(
                                            `تم العثور على بيانات فارغه فى ${
                                                group.Date
                                            } وهى ${emptyCells
                                                .map((index) => data[index][0])
                                                .join(", ")}`
                                        );
                                    }

                                    // طباعة مؤشرات الأرقام القومية المكررة إذا لم تكن الـ array فارغة

                                    setTimeout(() => {
                                        this.validationErrors = [];
                                    }, 300000);
                                } else {
                                    this.showSuccessAlert = true;
                                }
                                // بقية الكود...

                                const obj = {
                                    personal_info: {
                                        name: data[0][1],
                                        nick_name: data[1][1],
                                        national_id: data[2][1],
                                        governorate: data[3][1],
                                        house_number: data[4][1],
                                        floor_number: data[5][1],
                                        address: data[6][1],
                                        marital_status: data[7][1],
                                        phone: data[8][1],
                                    },
                                    financial_info: {
                                        required: "",
                                        income: "",
                                        deficit: "",
                                    },
                                    diseases: {
                                        patient_name: "",
                                        disease: "",
                                        get_treatment: "",
                                        not_available: "",
                                    },
                                    housing_condition: {
                                        number_rooms: "",
                                        house_type: "",
                                        bathroom_type: "",
                                        floor_type: "",
                                        description_kitchen: "",
                                        DescriptionRoom1: "",
                                        DescriptionRoom2: "",
                                        DescriptionRoom3: "",
                                        DescriptionRoom4: "",
                                        DescriptionRoom5: "",
                                    },
                                    family_needs: "",
                                };
                                acc[group.Date] = obj; // استخدام التاريخ كمفتاح
                            } else {
                                console.error(
                                    "خطأ: المصفوفة group غير متكاملة"
                                );
                            }
                            return acc;
                        },
                        {}
                    );
                    console.log("Titled Grouped Data:", titledGroupedData);
                    if (jsonData.length < 110 || jsonData.length > 110) {
                        let MsErros = true;
                        this.validationErrors = [];
                        if (MsErros) {
                            this.notExcel = true;
                            setTimeout(() => {
                                this.notExcel = false;
                            }, 3000);
                            return;
                        }
                    }
                    // مثال تحديث الحالة
                    this.jsonData = jsonData;
                    this.excelFile = file;
                    this.jsonData = titledGroupedData;
                    this.convertToJSON(jsonData); // تحويل الملف Excel إلى JSON وتنفيذ عملية التحميل تلقائياً
                };
                reader.readAsArrayBuffer(file);
            });
        },
        convertToJSON(jsonData) {
            this.validationError = false;
            this.validationErrors = [];
            this.duplicateNationalIDs = [];
            this.nationalIDs = [];
            this.showSuccessAlert = true;

            const groupedDataObjects = [];
            for (let i = 0; i < jsonData.length; i += 11) {
                const chunk = jsonData.slice(i, i + 11);
                const obj = {
                    Date: chunk[0][0],
                    data: chunk.slice(2),
                };
                groupedDataObjects.push(obj);
            }

            const result = [];
            groupedDataObjects.forEach((group) => {
                if (group && group.data && group.data.length > 0) {
                    const data = group.data;
                    let invalid = false;
                    let emptyCells = [];

                    data.forEach((cell, index) => {
                        if (!cell[1]) {
                            emptyCells.push(index);
                        } else if (
                            typeof cell[1] !== "string" &&
                            (index === 2 || index === 8)
                        ) {
                            invalid = true;
                        }
                    });

                    if (
                        typeof data[4][1] !== "number" ||
                        typeof data[5][1] !== "number" ||
                        typeof data[2][1] !== "string" ||
                        data[2][1].length !== 14 ||
                        typeof data[8][1] !== "string" ||
                        data[8][1].length !== 11
                    ) {
                        invalid = true;
                    }

                    if (data[2][1] && this.nationalIDs.includes(data[2][1])) {
                        this.duplicateNationalIDs.push(data[2][1]);
                        this.showSuccessAlert = false;
                        this.validationErrors.push(
                            `تم العثور على رقم قومي مكرر: في ${group.Date} : ${data[2][1]}`
                        );
                    } else {
                        this.nationalIDs.push(data[2][1]);
                    }

                    if (data[2][1] && data[2][1].length < 14) {
                        invalid = true;
                        this.showSuccessAlert = false;
                        this.validationErrors.push(
                            `تم العثور على رقم قومي أقل من 14 رقمًا: ${data[2][1]} في: ${group.Date}`
                        );
                    }

                    if (
                        invalid ||
                        emptyCells.length > 0 ||
                        this.duplicateNationalIDs.length > 0
                    ) {
                        this.validationError = true;

                        if (emptyCells.length > 0) {
                            invalid = true;
                            this.showSuccessAlert = false;
                            this.validationErrors.push(
                                `تم العثور على بيانات فارغة في ${
                                    group.Date
                                } وهي ${emptyCells
                                    .map((index) => data[index][0])
                                    .join(", ")}`
                            );
                        }
                    }

                    const obj = {
                        personal_info: {
                            name: data[0][1],
                            nick_name: data[1][1],
                            national_id: data[2][1],
                            governorate: data[3][1],
                            house_number: data[4][1],
                            floor_number: data[5][1],
                            address: data[6][1],
                            marital_status: data[7][1],
                            phone: data[8][1],
                        },
                        financial_info: {
                            required: "",
                            income: "",
                            deficit: "",
                        },
                        diseases: {
                            patient_name: "",
                            disease: "",
                            get_treatment: "",
                            not_available: "",
                        },
                        housing_condition: {
                            number_rooms: "",
                            house_type: "",
                            bathroom_type: "",
                            floor_type: "",
                            description_kitchen: "",
                            DescriptionRoom1: "",
                            DescriptionRoom2: "",
                            DescriptionRoom3: "",
                            DescriptionRoom4: "",
                            DescriptionRoom5: "",
                        },
                        family_needs: "",
                    };

                    result.push(obj);
                } else {
                    console.error("خطأ: المصفوفة group غير متكاملة");
                }
            });

            if (jsonData.length < 110 || jsonData.length > 110) {
                this.validationErrors.push("عدد الصفوف في الملف غير صحيح.");
                this.validationError = true;
            }

            if (!this.validationError) {
                this.jsonData = result;
                console.log("Processed Data:", result);

                // حفظ الملف JSON باستخدام FileSaver.js
                const jsonString = JSON.stringify(result, null, 2);
                const blob = new Blob([jsonString], {
                    type: "application/json",
                });
                saveAs(blob, "data.json");
            } else {
                this.showSuccessAlert = false;
            }
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
    // width: calc(100% - 56px);
    // margin-right: auto;
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
            justify-content: center;
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
@media (max-width: 801px) {
    /* Apply styles for screens wider than 800px */
    #Swap {
        display: none;
    }
}
.container_0 {
    padding: 20px;

    .statistics {
        .title {
            padding: 20px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 0 10px #ddd;
            font-size: 20px;
            color: var(--main-color);
            font-weight: bold;
        }
        .main_box {
            display: flex;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
            margin-top: 25px;
            justify-content: space-between;
            .small_box {
                width: 15%;
                box-shadow: 0 0 10px #ddd;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                // gap: 5px;
                height: 155px;
                border-radius: 5px;
                border: 1px solid #ddd;
                .number {
                    font-size: 35px;
                    font-weight: bold;
                    height: 90px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: var(--main-color);
                }
                span {
                    // font-size: 20px;
                    font-weight: bold;
                    color: var(--therd-color);
                }
            }
            .progress-circular {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                gap: 10px;
                p {
                    font-size: 15px;
                    font-weight: bold;
                    color: var(--therd-color);
                    text-align: center;
                }
            }
        }
    }
    .use {
        .title {
            margin-top: 40px;
            background: var(--secound-color);
            padding: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 5px;
            color: var(--main-color);
            font-weight: bold;
            font-size: 20px;
            & > div {
                display: flex;
                align-items: center;
                gap: 10px;
                &.left {
                    svg {
                        cursor: pointer;
                        transition: 0.3s;
                        background: #fff;
                        padding: 10px;
                        border-radius: 5px;
                        &:hover {
                            color: var(--therd-color);
                        }
                    }
                }
            }
        }
    }
    .popup {
        padding: 20px;
        .title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: var(--main-color);
            font-size: 20px;
            font-weight: bold;
        }
    }
}
.v-dialog > .v-overlay__content {
    min-width: auto !important;
    max-width: 100% !important;
}
.feat {
    svg {
        transition: 0.3s;
        &:hover {
            background: var(--main-color);
            color: #fff;
        }
    }
}
@media (max-width: 1060px) {
    .container_0 .statistics .main_box .small_box {
        width: 47%;
    }
}
</style>
