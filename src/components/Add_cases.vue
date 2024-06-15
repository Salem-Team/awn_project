<template>
    <div class="mian_overlay" @click="close_function_1"></div>
    <div class="main_popup">
        <div class="header">
            <div>إضافة حالة</div>
            <font-awesome-icon
                :icon="['fas', 'xmark']"
                @click="close_function_1"
            />
        </div>

        <v-stepper v-model="e1" alt-labels style="padding: 20px">
            <template v-slot:default="{ prev, next }">
                <v-stepper-header>
                    <template v-for="n in steps" :key="`${n}-step`">
                        <v-stepper-item
                            :title="title[n]"
                            :complete="e1 > n"
                            :step="`Step {{ n }}`"
                            :value="n"
                        ></v-stepper-item>

                        <v-divider v-if="n !== steps" :key="n"></v-divider>
                    </template>
                </v-stepper-header>

                <v-stepper-window>
                    <div v-if="e1 === 1">
                        <form @submit.prevent="validateForm" action="post">
                            <div class="form">
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="personal_info_1.name"
                                            label="الاسم ثلاثي"
                                            variant="outlined"
                                            style="width: 100%"
                                            placeholder="الاسم ثلاثي"
                                            @input="
                                                v$.personal_info_1.name.$touch()
                                            "
                                            @focus="isFocused = true"
                                            @blur="isFocused = false"
                                            :error-messages="
                                                v$.personal_info_1.name.$errors.map(
                                                    (e) => e.$message
                                                )
                                            "
                                        ></v-text-field>
                                        <span
                                            v-if="!regex1 && isFocused"
                                            style="
                                                display: block;
                                                margin-right: 15px;
                                                font-size: small;
                                                color: #af0829;
                                            "
                                            >حروف عربية فقط</span
                                        >
                                    </div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="personal_info_1.nick_name"
                                            label="اسم الشهره"
                                            variant="outlined"
                                            style="width: 100%"
                                            @input="
                                                v$.personal_info_1.nick_name.$touch()
                                            "
                                            placeholder="اسم الشهره"
                                            @focus="isFocused = true"
                                            @blur="isFocused = false"
                                            :error-messages="
                                                v$.personal_info_1.nick_name.$errors.map(
                                                    (e) => e.$message
                                                )
                                            "
                                        ></v-text-field>
                                        <span
                                            v-if="!regex2 && isFocused"
                                            style="
                                                display: block;
                                                margin-right: 15px;
                                                font-size: small;
                                                color: #af0829;
                                            "
                                            >حروف عربية فقط</span
                                        >
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="
                                                personal_info_1.national_id
                                            "
                                            label="رقم البطاقه"
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder="رقم البطاقه"
                                            @input="
                                                v$.personal_info_1.national_id.$touch()
                                            "
                                            :error-messages="
                                                v$.personal_info_1.national_id.$errors.map(
                                                    (e) => e.$message
                                                )
                                            "
                                        ></v-text-field>
                                    </div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-select
                                            v-model="
                                                personal_info_1.governorate
                                            "
                                            label="المحافظه"
                                            class="mt-2"
                                            style="width: 100%"
                                            variant="outlined"
                                            placeholder="المحافظه"
                                            @input="
                                                v$.personal_info_1.governorate.$touch()
                                            "
                                            :error-messages="
                                                v$.personal_info_1.governorate.$errors.map(
                                                    (e) => e.$message
                                                )
                                            "
                                            :items="Governorates"
                                        ></v-select>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 100%"
                                    >
                                        <v-textarea
                                            v-model="
                                                personal_info_1.detailed_address
                                            "
                                            class="mt-2"
                                            style="width: 100%"
                                            label=" العنوان"
                                            variant="outlined"
                                            placeholder=" العنوان"
                                            auto-grow
                                            @focus="isFocused = true"
                                            @blur="isFocused = false"
                                            :error-messages="
                                                v$.personal_info_1.detailed_address.$errors.map(
                                                    (e) => e.$message
                                                )
                                            "
                                        ></v-textarea>
                                        <span
                                            v-if="!regex3 && isFocused"
                                            style="
                                                display: block;
                                                margin-right: 15px;
                                                font-size: small;
                                                color: #af0829;
                                            "
                                            >حروف عربية فقط</span
                                        >
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="
                                                personal_info_1.house_number
                                            "
                                            style="width: 100%"
                                            label="رقم المنزل"
                                            variant="outlined"
                                            placeholder="رقم المنزل"
                                            @input="
                                                v$.personal_info_1.house_number.$touch()
                                            "
                                            :error-messages="
                                                v$.personal_info_1.house_number.$errors.map(
                                                    (e) => e.$message
                                                )
                                            "
                                        ></v-text-field>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="
                                                personal_info_1.floor_number
                                            "
                                            label="رقم الدور"
                                            class="mt-2"
                                            style="width: 100%"
                                            variant="outlined"
                                            placeholder="رقم الدور"
                                            @input="
                                                v$.personal_info_1.floor_number.$touch()
                                            "
                                            :error-messages="
                                                v$.personal_info_1.floor_number.$errors.map(
                                                    (e) => e.$message
                                                )
                                            "
                                        ></v-text-field>
                                    </div>
                                </div>

                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-select
                                            v-model="
                                                personal_info_1.marital_status
                                            "
                                            class="mt-2"
                                            style="width: 100%"
                                            :items="SocialStatuss"
                                            label="الحاله الجتماعيه  "
                                            @input="
                                                v$.personal_info_1.marital_status.$touch()
                                            "
                                            :error-messages="
                                                v$.personal_info_1.marital_status.$errors.map(
                                                    (e) => e.$message
                                                )
                                            "
                                        ></v-select>
                                    </div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="personal_info_1.phone"
                                            class="mt-2"
                                            style="width: 100%"
                                            label="رقم التليفون"
                                            variant="outlined"
                                            placeholder="رقم التليفون"
                                            @input="
                                                v$.personal_info_1.phone.$touch()
                                            "
                                            :error-messages="
                                                v$.personal_info_1.phone.$errors.map(
                                                    (e) => e.$message
                                                )
                                            "
                                        ></v-text-field>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div v-if="e1 === 2">
                        <form @submit.prevent="validateForm" action="post">
                            <div class="form">
                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="financial_info_2.required"
                                            label="المطلوب "
                                            class="mt-2"
                                            @input="
                                                v$.financial_info_2.required.$touch()
                                            "
                                            style="width: 100%"
                                            variant="outlined"
                                            placeholder="المطلوب "
                                            :error-messages="
                                                v$.financial_info_2.required.$errors.map(
                                                    (e) => e.$message
                                                )
                                            "
                                        ></v-text-field>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="financial_info_2.incom"
                                            label="الداخل "
                                            class="mt-2"
                                            @input="
                                                v$.financial_info_2.incom.$touch()
                                            "
                                            style="width: 100%"
                                            variant="outlined"
                                            placeholder="الداخل "
                                            :error-messages="
                                                v$.financial_info_2.incom.$errors.map(
                                                    (e) => e.$message
                                                )
                                            "
                                        ></v-text-field>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 100%"
                                    >
                                        <v-text-field
                                            v-model="financial_info_2.deficit"
                                            label="العجز "
                                            class="mt-2"
                                            style="
                                                width: 100%;
                                                pointer-events: none;
                                            "
                                            :value="
                                                financial_info_2.required -
                                                financial_info_2.incom
                                            "
                                            variant="outlined"
                                            placeholder="العجز "
                                        ></v-text-field>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div v-if="e1 === 3">
                        <form @submit.prevent="validateForm3" action="post">
                            <div
                                class="bg-[#eee]"
                                v-for="(dis, index) in diseases_3"
                                :key="index"
                            >
                                <div style="width: 100%">
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 100%"
                                    >
                                        <v-text-field
                                            v-model="dis.patien_name"
                                            label=" اسم المريض "
                                            variant="outlined"
                                            style="width: 100%"
                                            placeholder="اسم المريض"
                                        ></v-text-field>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 100%"
                                    >
                                        <v-text-field
                                            v-model="dis.disease"
                                            label="  المرض "
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder=" المرض"
                                        ></v-text-field>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 100%"
                                    >
                                        <v-text-field
                                            v-model="dis.get_treatment"
                                            label="كيفيه الحصول علي العلاج"
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder="كيفيه الحصول علي العلاج "
                                        ></v-text-field>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 100%"
                                    >
                                        <v-text-field
                                            v-model="dis.not_available"
                                            label=" السبب في عدم العلاج علي نفقه الدولة"
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder="السبب في عدم العلاج علي نفقه الدولة"
                                        ></v-text-field>
                                    </div>
                                </div>
                                <v-divider
                                    :thickness="8"
                                    class="my-5"
                                ></v-divider>
                            </div>
                            <div>
                                <div class="w-25 d-flex">
                                    <v-btn
                                        style="
                                            display: block;
                                            margin-bottom: 20px;
                                            margin-right: 20px;
                                        "
                                        @click="addform_dis"
                                        icon="mdi-plus"
                                        size="small"
                                    >
                                    </v-btn>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div v-if="e1 === 4">
                        <form @submit.prevent="validateForm4" action="post">
                            <div class="form">
                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-select
                                            v-model="
                                                housing_condition_4.number_rooms
                                            "
                                            :items="number_rooms"
                                            class="mt-2"
                                            style="width: 100%"
                                            label=" عدد الغرف"
                                        ></v-select>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-select
                                            v-model="
                                                housing_condition_4.house_type
                                            "
                                            :items="items"
                                            class="mt-2"
                                            style="width: 100%"
                                            label="الشقه ملك ام ايجار"
                                        ></v-select>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-select
                                            v-model="
                                                housing_condition_4.bathroom_type
                                            "
                                            :items="amam"
                                            class="mt-2"
                                            style="width: 100%"
                                            label="الحمام خاص ام مشترك"
                                        ></v-select>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-select
                                            v-model="
                                                housing_condition_4.floor_type
                                            "
                                            :items="kitchen"
                                            class="mt-2"
                                            style="width: 100%"
                                            label="  نوع الارضيه "
                                        ></v-select>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="
                                                housing_condition_4.description_kitchen
                                            "
                                            label="  وصف شامل للمطبخ "
                                            class="mt-2"
                                            style="width: 100%"
                                            variant="outlined"
                                            placeholder="وصف شامل للمطبخ"
                                        ></v-text-field>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="
                                                housing_condition_4.DescriptionRoom1
                                            "
                                            label="  وصف سريع للغرفه رقم 1 "
                                            variant="outlined"
                                            class="mt-2"
                                            style="width: 100%"
                                            placeholder="وصف سريع للغرفه رقم 1 "
                                        ></v-text-field>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="
                                                housing_condition_4.DescriptionRoom2
                                            "
                                            v-show="
                                                housing_condition_4.number_rooms >
                                                1
                                            "
                                            label="  وصف سريع للغرفه رقم 2 "
                                            class="mt-2"
                                            style="width: 100%"
                                            variant="outlined"
                                            placeholder="وصف سريع للغرفه رقم 2 "
                                        ></v-text-field>
                                    </div>

                                    <v-text-field
                                        v-model="
                                            housing_condition_4.DescriptionRoom3
                                        "
                                        label="  وصف سريع للغرفه رقم 3 "
                                        v-show="
                                            housing_condition_4.number_rooms > 2
                                        "
                                        class="mt-2"
                                        style="width: 45%"
                                        variant="outlined"
                                        placeholder="وصف سريع للغرفه رقم 3 "
                                    ></v-text-field>
                                </div>

                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            v-model="
                                                housing_condition_4.DescriptionRoom2
                                            "
                                            v-show="
                                                housing_condition_4.number_rooms >
                                                3
                                            "
                                            label="  وصف سريع للغرفه رقم 4 "
                                            class="mt-2"
                                            style="width: 100%"
                                            variant="outlined"
                                            placeholder="وصف سريع للغرفه رقم 4 "
                                        ></v-text-field>
                                    </div>

                                    <v-text-field
                                        v-model="
                                            housing_condition_4.DescriptionRoom3
                                        "
                                        label="  وصف سريع للغرفه رقم 5 "
                                        v-show="
                                            housing_condition_4.number_rooms > 4
                                        "
                                        class="mt-2"
                                        style="width: 45%"
                                        variant="outlined"
                                        placeholder="وصف سريع للغرفه رقم 5 "
                                    ></v-text-field>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div v-if="e1 === 5">
                        <form @submit.prevent="validateForm5" action="post">
                            <div class="form">
                                <div class="height: 59px;">
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="family_needs_Array"
                                            label="طبي"
                                            value="طبي"
                                        ></v-checkbox>
                                    </div>

                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="family_needs_Array"
                                            label="زوج"
                                            value="زوج"
                                        ></v-checkbox>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="family_needs_Array"
                                            label="ملابس"
                                            value="ملابس"
                                        ></v-checkbox>
                                    </div>
                                </div>
                                <div class="height: 59px;">
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="family_needs_Array"
                                            label="مرتبات"
                                            value="مرتبات"
                                        ></v-checkbox>
                                    </div>

                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="family_needs_Array"
                                            label="بطاطين"
                                            value="بطاطين"
                                        ></v-checkbox>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="family_needs_Array"
                                            label="شنطه غذائيه"
                                            value="شنطه غذائيه"
                                        ></v-checkbox>
                                    </div>
                                </div>
                                <div class="height: 59px;">
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="family_needs_Array"
                                            label="كفاله شهريه"
                                            value="كفاله شهريه"
                                        ></v-checkbox>
                                    </div>

                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="family_needs_Array"
                                            label="اجهزه منزليه"
                                            value="اجهزه منزليه"
                                        ></v-checkbox>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="family_needs_Array"
                                            label="كفاله "
                                            value="كفاله "
                                        ></v-checkbox>
                                    </div>
                                </div>
                            </div>
                            <div class="btn" @click="validateForm">
                                أضف الحالة
                            </div>
                        </form>
                    </div>
                </v-stepper-window>

                <v-stepper-actions
                    :disabled="disabled"
                    @click:next="next"
                    @click:prev="prev"
                    type="submit"
                ></v-stepper-actions>
            </template>
        </v-stepper>
    </div>
</template>
<script>
// Add data
import {
    collection,
    addDoc,
    getFirestore,
    updateDoc,
} from "@firebase/firestore";
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

import useVuelidate from "@vuelidate/core";
import {
    required,
    minLength,
    maxLength,
    numeric,
    helpers,
} from "@vuelidate/validators";

export default {
    props: ["close_function"],
    data() {
        return {
            dis_index: 0,
            dis_1: true,
            dis_2: true,
            dis_3: true,
            regex2: true,
            regex1: true,
            isFocused: false,
            regex3: true,
            close: null,
            diseasesArray: [],
            family_needs_Array: [],
            personal_info_1_State: null,
            formDataArray: [],
            form_dis: 1,
            formError: false,
            formError2: false,
            formError3: false,
            formError4: false,
            formError5: false,
            currentStep: 1,
            e1: 1,
            steps: 5,
            number_rooms: [1, 2, 3, 4, 5],
            title: [
                "",
                "المعلومات الشخصية",
                "المعلومات المالية",
                "الأمراض",
                "حالة المسكن",
                "إحتياجات الأسرة",
            ],
            Case: {
                personal_info: {
                    name: "",
                    nickname: "",
                    nationalID: "",
                    governorate: "",
                },
            },
            Governorates: [
                "القاهرة",
                "الإسكندرية",
                "الجيزة",
                "القليوبية",
                "بورسعيد",
                "السويس",
                "أسيوط",
                "الإسماعيلية",
                "أسوان",
                "الفيوم",
                "دمياط",
                "الدقهلية",
                "الأقصر",
                "البحيرة",
                "المنيا",
                "قنا",
                "الشرقية",
                "سوهاج",
                "المنوفية",
                "الغربية",
                "مطروح",
                "كفر الشيخ",
                "شمال سيناء",
                "الوادي الجديد",
                "البحر الأحمر",
                "جنوب سيناء",
            ],
            showDiv1: false,
            showDiv2: false,
            showDiv3: false,
            showDiv4: false,
            currentForm1: false,
            personal_info_1: {
                name: "محمود علي حسين",
                nick_name: "حودة",
                national_id: "93847683903897",
                governorate: "القاهرة",
                house_number: "33",
                floor_number: "4",
                detailed_address: "المقطم - شارع 9",
                marital_status: "متزوج",
                phone: "01099877833",
            },
            financial_info_2: {
                required: null,
                incom: null,
                deficit: this.required - this.incom,
            },
            diseases_3: [
                {
                    patien_name: "",
                    disease: "",
                    get_treatment: "",
                    not_available: "",
                },
            ],

            housing_condition_4: {
                number_rooms: 1,
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
            family_needs_5: {
                medical: "",
                Husband: "",
                clothes: "",
                salaries: "",
                Blankets: "",
                FoodBag: "",
                MonthlyWarranty: "",
                Appliances: "",
                MonthlyWarranty2: "",
            },
            items: ["ملك", "ايجار"],
            amam: ["مشترك", "خاص"],
            SocialStatuss: [
                "متزوج",
                "مطلق",
                "أعزب",
                "أرمل",
                "مطلقة",
                "عزباء",
                "أرملة",
            ],
            kitchen: ["بلاط", "سراميك", "بورسلين"],

            tab: null,
            testform1: [],
            testform2: [],
            testform3: [],
            testform4: [],
            testform5: [],
        };
    },

    computed: {
        disabled() {
            return this.e1 === 1 ? "prev" : this.e1 === 5 ? "next" : undefined;
        },
    },
    inject: ["Emitter"],
    setup() {
        return { v$: useVuelidate() };
    },

    validations() {
        return {
            personal_info_1: {
                name: {
                    required: helpers.withMessage(
                        " ادخل الاسم ثلاثي ",
                        required
                    ),
                    minLength: helpers.withMessage(
                        "لا يجب ان تقل عن 10 حروف ",
                        minLength(10)
                    ),
                    maxLength: helpers.withMessage(
                        "لا يجب ان يزيد عن 100 حروف ",
                        maxLength(100)
                    ),
                    regex1: function (value) {
                        const regexPattern = /[\u0600-\u06FF\s]+/;
                        const matchResult = regexPattern.test(value);
                        this.regex1 = matchResult;
                        return matchResult;
                    },
                },
                nick_name: {
                    required: helpers.withMessage("ادخل اسم الشهرة ", required),
                    regex2: function (value) {
                        const regexPattern = /[\u0600-\u06FF\s]+/;
                        const matchResult = regexPattern.test(value);
                        this.regex2 = matchResult;
                        return matchResult;
                    },
                    minLength: helpers.withMessage(
                        "لا يجب ان تقل عن 3 حروف ",
                        minLength(3)
                    ),
                    maxLength: helpers.withMessage(
                        "لا يجب ان تزيد عن 10 حروف ",
                        maxLength(10)
                    ),
                },
                national_id: {
                    required: helpers.withMessage(
                        "ادخل الرقم القومي ",
                        required
                    ),
                    numeric: helpers.withMessage(" ادخل أرقام فقط", numeric),
                    minLength: helpers.withMessage(
                        " ادخل عنوان مكون من 14 أرقام على الأقل",
                        minLength(14)
                    ),
                },
                governorate: {
                    required: helpers.withMessage("ادخل المحافظه ", required),
                },
                house_number: {
                    required: helpers.withMessage("ادخل رقم ", required),
                    minLength: helpers.withMessage(
                        " ادخل رقم مكون من 2 أرقام على الأقل",
                        minLength(2)
                    ),
                    maxLength: helpers.withMessage(
                        " لا يجب ان تزيد عن 4 أرقام",
                        maxLength(4)
                    ),
                    numeric: helpers.withMessage(" ادخل أرقام فقط", numeric),
                },
                floor_number: {
                    required: helpers.withMessage("ادخل رقم ", required),
                    maxLength: helpers.withMessage(
                        " لا يجب ان تزيد عن 2 رقمين",
                        maxLength(2)
                    ),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
                },
                detailed_address: {
                    required: helpers.withMessage("ادخل عنوان", required),
                    regex3: function (value) {
                        const regexPattern = /[\u0600-\u06FF\s]+/;
                        const matchResult = regexPattern.test(value);
                        this.regex3 = matchResult;
                        return matchResult;
                    },
                },
                marital_status: {
                    required: helpers.withMessage("ادخل الحالة ", required),
                },
                phone: {
                    required: helpers.withMessage("ادخل رقم ", required),
                    minLength: helpers.withMessage(
                        " ادخل رقم مكون من 8 أرقام على الأقل",
                        minLength(8)
                    ),
                    numeric: helpers.withMessage(" ادخل أرقام فقط", numeric),
                },
            },
            financial_info_2: {
                required: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
                },
                incom: {
                    required: helpers.withMessage("حقل مطلوب", required),
                    numeric: helpers.withMessage(
                        "  يجب ان تكون ارقام فقط",
                        numeric
                    ),
                },
            },
        };
    },
    methods: {
        addform_dis() {
            this.dis_index++;
            this.diseases_3.push({
                patien_name: "",
                disease: "",
                get_treatment: "",
                not_available: "",
            });
        },
        close_function_1() {
            this.close_function();
        },
        checkDataExists() {
            // Perform comparison with existing data
            // Return true if data exists, false otherwise
            return !(
                this.personal_info_1.name == "" &&
                this.personal_info_1.phone == "" &&
                this.personal_info_1.nick_name == "" &&
                this.personal_info_1.governorate == "" &&
                this.personal_info_1.house_number == "" &&
                this.personal_info_1.floor_number == "" &&
                this.personal_info_1.detailed_address == "" &&
                this.personal_info_1.marital_status == ""
            );
        },
        checkDataExists1() {
            // Perform comparison with existing data
            // Return true if data exists, false otherwise
            return !(
                this.financial_info_2.required == null &&
                this.financial_info_2.incom == null
            );
        },

        async Add_Cases() {
            // Add a new document with a generated id.

            const docRef = await addDoc(collection(db, "Cases"), {
                personal_info: {
                    name: this.personal_info_1.name,
                    nick_name: this.personal_info_1.nick_name,
                    national_id: this.personal_info_1.national_id,
                    governorate: this.personal_info_1.governorate,
                    house_number: this.personal_info_1.house_number,
                    floor_number: this.personal_info_1.floor_number,
                    detailed_address: this.personal_info_1.detailed_address,
                    marital_status: this.personal_info_1.marital_status,
                    phone: this.personal_info_1.phone,
                    charity_id: localStorage.getItem("charity_ID"),
                },
                financial_info: {
                    required: this.financial_info_2.required,
                    incom: this.financial_info_2.incom,
                    deficit:
                        this.financial_info_2.required -
                        this.financial_info_2.incom,
                },
                diseases: this.diseases_3,

                housing_condition: {
                    number_rooms: this.housing_condition_4.number_rooms,
                    house_type: this.housing_condition_4.house_type,
                    bathroom_type: this.housing_condition_4.bathroom_type,
                    floor_type: this.housing_condition_4.floor_type,
                    description_kitchen:
                        this.housing_condition_4.description_kitchen,
                    DescriptionRoom1: this.housing_condition_4.DescriptionRoom1,
                    DescriptionRoom2: this.housing_condition_4.DescriptionRoom2,
                    DescriptionRoom3: this.housing_condition_4.DescriptionRoom3,
                    DescriptionRoom4: this.housing_condition_4.DescriptionRoom4,
                    DescriptionRoom5: this.housing_condition_4.DescriptionRoom5,
                },
                family_needs: this.family_needs_Array,
            });
            await updateDoc(docRef, {
                id: docRef.id,
            });
            console.log("Document written with ID: ", docRef.id);
            console.log("validations");
            this.close_function();
        },
        async validateForm() {
            const dataExists = this.checkDataExists();
            const dataExists1 = this.checkDataExists1();
            if (dataExists) {
                this.v$.$validate(); // Validate personal info
                await this.$nextTick(); // Wait for DOM update
                if (!this.v$.$error) {
                    // If no errors, proceed with further processing
                    console.log("Data filled and Form submitted successfully");
                    console.log("personal_info_1", this.personal_info_1);
                    this.v$.$reset(); // Reset validation state
                } else {
                    // If there are validation errors, handle them accordingly
                    console.log("Data not all filled, validation errors found");
                    this.e1 = 1; // Set error code 1
                }
            } else if (dataExists1) {
                this.v$.$validate(); // Validate financial info
                await this.$nextTick(); // Wait for DOM update

                if (!this.v$.$error) {
                    // If no errors, proceed with further processing
                    this.testform2.push({
                        required: this.financial_info_2.required,
                        incom: this.financial_info_2.incom,
                        deficit:
                            this.financial_info_2.required -
                            this.financial_info_2.incom,
                    });
                    console.log("Data filled and Form submitted successfully");
                    console.log("financial_info_2", this.testform2);
                    this.v$.$reset(); // Reset validation state
                } else {
                    // If there are validation errors, handle them accordingly
                    console.log("Data not all filled, validation errors found");
                    this.e1 = 2; // Set error code 2
                }
                this.Add_Cases();
            } else {
                // If neither dataExists nor dataExists1 is true
                console.log("Data required");
                // Set appropriate error code or handle as needed
                this.e1 = 1; // For example, set error code 1
            }
        },

        /*async validateForm1() {
            const res = await this.v$.personal_info_1.$validate();
            if (res) {
                this.testform1.push(
                    { name: this.personal_info_1.name },
                    { nick_name: this.personal_info_1.nick_name },
                    { national_id: this.personal_info_1.national_id },
                    { governorate: this.personal_info_1.governorate },
                    { house_number: this.personal_info_1.house_number },
                    { floor_number: this.personal_info_1.floor_number },
                    { detailed_address: this.personal_info_1.detailed_address },
                    { marital_status: this.personal_info_1.marital_status },
                    { phone: this.personal_info_1.phone }
                );
                // console.log(this.testform1);
                // this.v$.$reset();
                // this.personal_info_1.name = "";
                // this.personal_info_1.nick_name = "";
                // this.personal_info_1.national_id = "";
                // this.personal_info_1.governorate = "";
                // this.personal_info_1.house_number = "";
                // this.personal_info_1.floor_number = "";
                // this.personal_info_1.marital_status = "";
                // this.personal_info_1.phone = "";
                // this.testform1 = [];
                // this.personal_info_1_State = true;
            } else {
                this.e1 = 1;
            }
        },
        async validateForm2() {
            const res = await this.v$.financial_info_2.$validate();
            if (res) {
                this.testform2.push(
                    { required: this.financial_info_2.required },
                    { incom: this.financial_info_2.incom },
                    {
                        deficit:
                            this.financial_info_2.required -
                            this.financial_info_2.incom,
                    }
                );
                this.e1++;
                console.log(this.testform2);

                this.v$.$reset();
                this.financial_info_2.required = "";
                this.financial_info_2.incom = "";
                this.financial_info_2.deficit = "";

                this.testform2 = [];
            }
        },*/
        async validateForm3() {
            const res = await this.v$.diseases_3.$validate();
            if (res) {
                this.testform3.push(
                    { patien_name: this.diseases_3.patien_name },
                    { disease: this.diseases_3.disease },
                    { get_treatment: this.diseases_3.get_treatment },
                    {
                        not_available: this.diseases_3.not_available,
                    }
                );
                this.e1++;
                console.log(this.testform3);
                this.v$.$reset();
                this.diseases_3.patien_name = "";
                this.diseases_3.disease = "";
                this.diseases_3.get_treatment = "";
                this.diseases_3.not_available = "";

                this.testform3 = [];
            }
        },
        async validateForm4() {
            const res = await this.v$.housing_condition_4.$validate();
            if (res) {
                this.testform4.push(
                    { number_rooms: this.housing_condition_4.number_rooms },
                    { house_type: this.housing_condition_4.house_type },
                    { bathroom_type: this.housing_condition_4.bathroom_type },
                    { floor_type: this.housing_condition_4.floor_type },
                    {
                        description_kitchen:
                            this.housing_condition_4.description_kitchen,
                    },
                    {
                        DescriptionRoom1:
                            this.housing_condition_4.DescriptionRoom1,
                    }
                );
                this.e1++;
                if (this.showDiv1) {
                    this.testform4.push({
                        DescriptionRoom2:
                            this.housing_condition_4.DescriptionRoom2,
                    });
                }
                if (this.showDiv2) {
                    this.testform4.push({
                        DescriptionRoom3:
                            this.housing_condition_4.DescriptionRoom3,
                    });
                }
                if (this.showDiv3) {
                    this.testform4.push({
                        DescriptionRoom4:
                            this.housing_condition_4.DescriptionRoom4,
                    });
                }
                if (this.showDiv4) {
                    this.testform4.push({
                        DescriptionRoom5:
                            this.housing_condition_4.DescriptionRoom5,
                    });
                }

                console.log(this.testform4);
                this.v$.$reset();
                this.housing_condition_4.number_rooms = "";
                this.housing_condition_4.house_type = "";
                this.housing_condition_4.bathroom_type = "";
            }
            this.housing_condition_4.floor_type = "";
            this.housing_condition_4.description_kitchen = "";
            this.housing_condition_4.DescriptionRoom1 = "";
            this.housing_condition_4.DescriptionRoom2 = "";
            this.housing_condition_4.DescriptionRoom3 = "";
            this.housing_condition_4.DescriptionRoom4 = "";
            this.housing_condition_4.DescriptionRoom5 = "";

            this.testform4 = [];
        },
        async validateForm5() {
            const res = await this.v$.family_needs_5.$validate();
            if (res) {
                this.testform5.push(
                    { medical: this.family_needs_5.medical },
                    { Husband: this.family_needs_5.Husband },
                    { clothes: this.family_needs_5.clothes },
                    { salaries: this.family_needs_5.salaries },
                    { Blankets: this.family_needs_5.Blankets },
                    { FoodBag: this.family_needs_5.FoodBag },
                    { MonthlyWarranty: this.family_needs_5.MonthlyWarranty },
                    { Appliances: this.family_needs_5.Appliances },
                    { MonthlyWarranty2: this.family_needs_5.MonthlyWarranty2 }
                );
                this.e1++;
                console.log(this.testform5);
                this.v$.$reset();
                this.family_needs_5.medical = "";
                this.family_needs_5.Husband = "";
                this.family_needs_5.clothes = "";
                this.family_needs_5.salaries = "";
                this.family_needs_5.Blankets = "";
                this.family_needs_5.FoodBag = "";
                this.family_needs_5.MonthlyWarranty = "";
                this.family_needs_5.Appliances = "";

                this.testform5 = [];
            }
        },

        reloadPage() {
            window.location.reload();
        },

        toggleDiv1() {
            this.showDiv1 = !this.showDiv1; // تغيير حالة العنصر ما بين الظهور والاختفاء
        },
        toggleDiv2() {
            this.showDiv2 = !this.showDiv2; // تغيير حالة العنصر ما بين الظهور والاختفاء
        },
        toggleDiv3() {
            this.showDiv3 = !this.showDiv3; // تغيير حالة العنصر ما بين الظهور والاختفاء
        },
        toggleDiv4() {
            this.showDiv4 = !this.showDiv4; // تغيير حالة العنصر ما بين الظهور والاختفاء
        },
        calculateDifference() {
            // حساب الفرق بين Required و incom
            this.financial_info_2.deficit =
                this.financial_info_2.Required - this.financial_info_2.incom;
        },
    },
    watch: {
        "financial_info_2.Required": function () {
            this.calculateDifference();
        },
        "financial_info_2.incom": function () {
            this.calculateDifference();
        },
    },
    mounted() {
        // if (this.des_1) {
        // }
        // console.log(this.);
    },
};
</script>
<style lang="scss" scoped>
.form {
    & > div {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        width: 100%;
    }
}
.btn {
    background: #e4e4e4;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    color: #5c5c5c;
}
.main_popup {
    width: 90%;
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 90%;
    overflow: auto;
    background: #fff;
    z-index: 4;
    font-family: system-ui;
}
.mian_overlay {
    width: 100%;
    height: 100%;
    z-index: 0;
    position: fixed;
    background: #7f7f7f80;
    top: 0;
    left: 0;
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // background: #fafafa;
    border-bottom: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    font-size: 25px;
    color: #0088ff;
    font-weight: bold;
    svg {
        cursor: pointer;
    }
}
</style>
