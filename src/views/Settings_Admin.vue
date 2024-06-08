<template>
    <div class="My_profile">
        <!-- <Side_Bar /> -->
        <div class="container_0">
            <div class="profile">
                <img
                    src="../assets/images/social-page.gif"
                    alt=""
                    width="50px"
                    style="filter: grayscale(1)"
                />
                <div class="title">الملف الشخصي</div>
            </div>
            <div>
                <div>
                    <div
                        v-if="loader"
                        style="
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 70%;
                        "
                    >
                        <div
                            v-if="offline"
                            style="
                                display: flex;
                                align-items: center;
                                flex-direction: column;
                                gap: 10px;
                                justify-content: center;
                                position: fixed;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                width: 245px;
                            "
                        >
                            <img
                                src="../assets/images/no-internet.png"
                                alt=""
                                width="150px"
                            />
                            <div
                                style="
                                    color: var(--main-color);
                                    font-size: 20px;
                                    font-weight: bold;
                                "
                            >
                                تحقق من إتصالك بالإنترنت!
                            </div>
                        </div>
                        <img
                            style="
                                position: fixed;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                width: 245px;
                            "
                            v-if="Loading"
                            src="../assets/images/Spinner@1x-1.0s-200px-200px.svg"
                            alt=""
                            width="150px"
                        />
                    </div>
                    <div v-else>
                        <v-tabs-window v-model="tab_1">
                            <v-tabs-window-item value="one">
                                <div class="form">
                                    <div
                                        style="
                                            display: flex;
                                            justify-content: space-between;
                                            align-items: center;
                                        "
                                    >
                                        <div
                                            class="mt-2 d-flex flex-column"
                                            style="
                                                width: 48%;
                                                position: relative;
                                            "
                                        >
                                            <v-text-field
                                                v-model="User_Data.name"
                                                label="الإسم"
                                                variant="outlined"
                                                style="width: 100%"
                                                placeholder="الاسم "
                                            >
                                                <font-awesome-icon
                                                    :icon="[
                                                        'fas',
                                                        'file-signature',
                                                    ]"
                                                />
                                            </v-text-field>
                                        </div>
                                        <div
                                            class="mt-2 d-flex flex-column"
                                            style="
                                                width: 48%;
                                                position: relative;
                                            "
                                        >
                                            <v-text-field
                                                v-model="User_Data.email"
                                                label="الإيميل"
                                                variant="outlined"
                                                style="width: 100%"
                                                placeholder=" الإيميل"
                                            >
                                                <font-awesome-icon
                                                    :icon="['fas', 'at']"
                                                />
                                            </v-text-field>
                                        </div>
                                    </div>
                                    <div
                                        style="
                                            display: flex;
                                            justify-content: space-between;
                                            align-items: center;
                                        "
                                    >
                                        <div
                                            v-for="(
                                                phone, index
                                            ) in User_Data.phones"
                                            :key="phone"
                                            style="
                                                width: 48%;
                                                position: relative;
                                            "
                                        >
                                            <div
                                                class="mt-2 d-flex flex-column"
                                                style="width: 100%"
                                            >
                                                <v-text-field
                                                    v-model="
                                                        User_Data.phones[index]
                                                    "
                                                    label="التليفون "
                                                    variant="outlined"
                                                    class="mt-2"
                                                    style="width: 100%"
                                                    placeholder=" التليفون"
                                                >
                                                    <font-awesome-icon
                                                        :icon="[
                                                            'fas',
                                                            'phone',
                                                        ]"
                                                /></v-text-field>
                                            </div>
                                        </div>
                                        <div
                                            style="
                                                width: 48%;
                                                position: relative;
                                            "
                                            class="mt-2 d-flex flex-column"
                                        >
                                            <v-text-field
                                                v-model="User_Data.nationalID"
                                                style="width: 100%"
                                                label="الرقم القومي"
                                                variant="outlined"
                                                placeholder="الرقم القومي"
                                            >
                                                <font-awesome-icon
                                                    :icon="[
                                                        'fas',
                                                        'id-card-clip',
                                                    ]"
                                            /></v-text-field>
                                        </div>
                                    </div>
                                    <div class="save_btn">حفظ التعديلات</div>
                                </div>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="two">
                                <div
                                    class="mt-2 d-flex flex-column"
                                    style="width: 100%; gap: 20px"
                                >
                                    <v-text-field
                                        :append-inner-icon="
                                            showPassword
                                                ? 'mdi-eye'
                                                : 'mdi-eye-off'
                                        "
                                        @click:append-inner="toggleShowPassword"
                                        :rules="[rules.required, rules.min]"
                                        :type="inputType"
                                        hint="At least 8 characters"
                                        v-model="form2.password"
                                        label=" كلمة المرور الحالية"
                                        name="input-10-1"
                                        counter
                                    >
                                        <font-awesome-icon
                                            :icon="['fas', 'lock']"
                                    /></v-text-field>
                                    <v-text-field
                                        :append-inner-icon="
                                            showPassword2
                                                ? 'mdi-eye'
                                                : 'mdi-eye-off'
                                        "
                                        @click:append-inner="
                                            toggleShowPassword2
                                        "
                                        :rules="[rules.required, rules.min]"
                                        :type="inputType2"
                                        hint="At least 8 characters"
                                        v-model="form2.Newpassword"
                                        label="كلمة المرور الجديدة"
                                        name="input-10-1"
                                        counter
                                        ><font-awesome-icon
                                            :icon="['fas', 'lock']"
                                    /></v-text-field>
                                    <v-text-field
                                        :append-inner-icon="
                                            showPassword3
                                                ? 'mdi-eye'
                                                : 'mdi-eye-off'
                                        "
                                        @click:append-inner="
                                            toggleShowPassword3
                                        "
                                        :rules="[rules.required, rules.min]"
                                        :type="inputType3"
                                        hint="At least 8 characters"
                                        v-model="form2.Newpassword2"
                                        label="تاكيد كلمة المرور الجديدة"
                                        name="input-10-1"
                                        counter
                                        ><font-awesome-icon
                                            :icon="['fas', 'lock']"
                                    /></v-text-field>
                                </div>
                                <div class="save_btn">حفظ التعديلات</div>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="three">
                                <div
                                    class="mt-2 d-flex flex-column"
                                    style="width: 100%; gap: 20px"
                                >
                                    <div
                                        style="
                                            widht: 100%;
                                            display: flex;
                                            justify-content: space-between;
                                            align-items: center;
                                        "
                                    >
                                        <div
                                            class="mt-2 d-flex flex-column"
                                            style="
                                                width: 48%;
                                                position: relative;
                                            "
                                        >
                                            <v-text-field
                                                v-model="User_Charity.title"
                                                label=" اسم الجمعية"
                                                placeholder=" اسم الجمعية"
                                                type="tel"
                                                variant="outlined"
                                                ><font-awesome-icon
                                                    :icon="[
                                                        'fas',
                                                        'file-signature',
                                                    ]"
                                            /></v-text-field>
                                        </div>
                                        <div
                                            class="mt-2 d-flex flex-column"
                                            style="
                                                width: 48%;
                                                position: relative;
                                            "
                                        >
                                            <v-text-field
                                                v-model="User_Charity.phone"
                                                label=" تليفون الجمعية"
                                                placeholder="تليفون الجمعية"
                                                type="tel"
                                                variant="outlined"
                                                ><font-awesome-icon
                                                    :icon="['fas', 'phone']"
                                            /></v-text-field>
                                        </div>
                                    </div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 100%; position: relative"
                                    >
                                        <v-textarea
                                            row-height="25"
                                            auto-grow
                                            rows="4"
                                            variant="outlined"
                                            v-model="User_Charity.description"
                                            placeholder="وصف قصير للجمعية"
                                            label="وصف قصير للجمعية"
                                            ><font-awesome-icon
                                                :icon="['fas', 'circle-info']"
                                        /></v-textarea>
                                    </div>
                                    <div
                                        class="mt-2 d-flex flex-column"
                                        style="width: 100%; position: relative"
                                    >
                                        <v-text-field
                                            variant="outlined"
                                            label="العنوان"
                                            placeholder="العنوان"
                                            v-model="User_Charity.address"
                                            ><font-awesome-icon
                                                :icon="['fas', 'location-dot']"
                                        /></v-text-field>
                                    </div>
                                    <div
                                        style="
                                            widht: 100%;
                                            display: flex;
                                            justify-content: space-between;
                                            align-items: center;
                                        "
                                    >
                                        <div
                                            class="mt-2 d-flex flex-column"
                                            style="
                                                width: 48%;
                                                position: relative;
                                            "
                                        >
                                            <v-text-field
                                                variant="outlined"
                                                v-model="
                                                    User_Charity.Fame_number
                                                "
                                                placeholder="رقم الشهرة"
                                                label="رقم الشهرة"
                                            ></v-text-field>
                                        </div>
                                        <div
                                            class="mt-2 d-flex flex-column"
                                            style="
                                                width: 48%;
                                                position: relative;
                                            "
                                        >
                                            <v-text-field
                                                variant="outlined"
                                                style="margin-right: 20px"
                                                v-model="User_Charity.Fame_year"
                                                placeholder="لسنة"
                                                label="لسنة"
                                            ></v-text-field>
                                        </div>
                                    </div>
                                    <div class="save_btn">حفظ التعديلات</div>
                                </div>
                            </v-tabs-window-item>
                            <v-tabs-window-item value="four">
                                <div class="header">
                                    <div class="right">
                                        <font-awesome-icon
                                            :icon="['fas', 'users']"
                                        />
                                        <div>
                                            المساعدين ({{
                                                All_Assistant.length || 0
                                            }})
                                        </div>
                                    </div>
                                    <div class="left">
                                        <div class="pluse">
                                            <v-col cols="12" md="6">
                                                <v-dialog
                                                    transition="dialog-bottom-transition"
                                                    width="90%"
                                                >
                                                    <template
                                                        v-slot:activator="{
                                                            props: activatorProps,
                                                        }"
                                                    >
                                                        <div
                                                            v-bind="
                                                                activatorProps
                                                            "
                                                            block
                                                        >
                                                            <!-- <font-awesome-icon
                                                                :icon="[
                                                                    'fas',
                                                                    'plus',
                                                                ]"
                                                            /> -->
                                                            <img
                                                                class="add_img"
                                                                src="../assets/images/add.gif"
                                                                alt=""
                                                                style="
                                                                    filter: grayscale(
                                                                        1
                                                                    );
                                                                "
                                                            />
                                                        </div>
                                                    </template>

                                                    <template
                                                        v-slot:default="{
                                                            isActive,
                                                        }"
                                                    >
                                                        <v-card>
                                                            <div
                                                                class="the_header"
                                                            >
                                                                <div>
                                                                    إضافة مساعد
                                                                </div>
                                                                <font-awesome-icon
                                                                    @click="
                                                                        isActive.value = false
                                                                    "
                                                                    style="
                                                                        font-size: 26px;
                                                                    "
                                                                    :icon="[
                                                                        'fas',
                                                                        'xmark',
                                                                    ]"
                                                                />
                                                            </div>
                                                            <div
                                                                class="the_body"
                                                            >
                                                                <div
                                                                    style="
                                                                        display: flex;
                                                                        justify-content: space-between;
                                                                        align-items: center;
                                                                    "
                                                                >
                                                                    <div
                                                                        class="mt-2 d-flex flex-column"
                                                                        style="
                                                                            width: 48%;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <v-text-field
                                                                            v-model="
                                                                                AssistantName
                                                                            "
                                                                            label="الإسم"
                                                                            variant="outlined"
                                                                            style="
                                                                                width: 100%;
                                                                            "
                                                                            :rules="[
                                                                                required1,
                                                                            ]"
                                                                            placeholder="الاسم "
                                                                        >
                                                                            <font-awesome-icon
                                                                                :icon="[
                                                                                    'fas',
                                                                                    'file-signature',
                                                                                ]"
                                                                            />
                                                                        </v-text-field>
                                                                    </div>
                                                                    <div
                                                                        class="mt-2 d-flex flex-column"
                                                                        style="
                                                                            width: 48%;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <v-text-field
                                                                            v-model="
                                                                                AssistantEmail
                                                                            "
                                                                            :rules="[
                                                                                required3,
                                                                            ]"
                                                                            type="email"
                                                                            label="الإيميل"
                                                                            variant="outlined"
                                                                            style="
                                                                                width: 100%;
                                                                            "
                                                                            placeholder=" الإيميل"
                                                                        >
                                                                            <font-awesome-icon
                                                                                :icon="[
                                                                                    'fas',
                                                                                    'at',
                                                                                ]"
                                                                            />
                                                                        </v-text-field>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    style="
                                                                        display: flex;
                                                                        justify-content: space-between;
                                                                        align-items: center;
                                                                    "
                                                                >
                                                                    <div
                                                                        style="
                                                                            width: 48%;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <div
                                                                            class="mt-2 d-flex flex-column"
                                                                            style="
                                                                                width: 100%;
                                                                            "
                                                                        >
                                                                            <v-text-field
                                                                                v-model="
                                                                                    AssistantPhoneNumber
                                                                                "
                                                                                label="التليفون "
                                                                                variant="outlined"
                                                                                class="mt-2"
                                                                                style="
                                                                                    width: 100%;
                                                                                "
                                                                                :rules="[
                                                                                    required2,
                                                                                ]"
                                                                                placeholder=" التليفون"
                                                                            >
                                                                                <font-awesome-icon
                                                                                    :icon="[
                                                                                        'fas',
                                                                                        'phone',
                                                                                    ]"
                                                                            /></v-text-field>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        style="
                                                                            width: 48%;
                                                                            position: relative;
                                                                        "
                                                                        class="mt-2 d-flex flex-column"
                                                                    >
                                                                        <v-text-field
                                                                            v-model="
                                                                                nationalNumberAssistant
                                                                            "
                                                                            style="
                                                                                width: 100%;
                                                                            "
                                                                            :rules="[
                                                                                required4,
                                                                            ]"
                                                                            label="الرقم القومي"
                                                                            variant="outlined"
                                                                            placeholder="الرقم القومي"
                                                                        >
                                                                            <font-awesome-icon
                                                                                :icon="[
                                                                                    'fas',
                                                                                    'id-card-clip',
                                                                                ]"
                                                                        /></v-text-field>
                                                                    </div>
                                                                </div>
                                                                <v-select
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                    chips
                                                                    :rules="[
                                                                        required,
                                                                    ]"
                                                                    v-model="
                                                                        AssistantPowerss
                                                                    "
                                                                    label="الصلاحيات"
                                                                    :items="[
                                                                        'اضافه الحالات من الفورم',
                                                                        'اضافه الحالات من الاكسيل',
                                                                        'الاطلاع علي تقارير',
                                                                    ]"
                                                                    variant="solo-filled"
                                                                ></v-select>
                                                                <v-text-field
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                    v-model="
                                                                        this
                                                                            .randomPassword
                                                                    "
                                                                    label="كلمة المرور"
                                                                    placeholder="كلمة المرور"
                                                                    clearable
                                                                ></v-text-field>

                                                                <v-btn
                                                                    class="add"
                                                                    @click="
                                                                        isActive.value = false
                                                                    "
                                                                    @click.prevent="
                                                                        Add_Assistant
                                                                    "
                                                                >
                                                                    إضافة
                                                                </v-btn>
                                                            </div>
                                                        </v-card>
                                                    </template>
                                                </v-dialog>
                                            </v-col>
                                        </div>
                                    </div>
                                </div>

                                <div class="body">
                                    <div
                                        class="not-found"
                                        v-if="All_Assistant.length === 0"
                                    >
                                        لا يوجد مساعدين حالياً!
                                    </div>
                                    <div
                                        class="box"
                                        v-for="(item, index) in All_Assistant"
                                        :key="index"
                                    >
                                        <div class="Row">
                                            <span>
                                                <div class="number">
                                                    {{ index + 1 }}
                                                </div>
                                                <div class="name">
                                                    {{ item.name }}
                                                </div>
                                            </span>
                                            <div class="delete">
                                                <font-awesome-icon
                                                    @click="removeItem(index)"
                                                    :icon="['fas', 'trash-can']"
                                                />
                                            </div>
                                        </div>
                                        <div class="Row">
                                            <div class="permissions">
                                                <div class="permissions_1">
                                                    الصلاحية :
                                                </div>
                                                <div class="permissions_2">
                                                    {{ item.permissions }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </v-tabs-window-item>
                        </v-tabs-window>
                    </div>
                </div>
            </div>
        </div>
        <v-tabs
            v-model="tab_1"
            style="
                position: fixed;
                width: 100%;
                bottom: 0px;
                background: var(--main-color);
                color: rgb(255, 255, 255);
            "
        >
            <v-tab value="one">
                <v-row class="fill-height" align="center" justify="center">
                    <v-col
                        cols="12"
                        class="d-flex flex-column align-center justify-center"
                    >
                        <font-awesome-icon :icon="['fas', 'id-card']" />
                        <div class="name_of_tap">معلومات شخصية</div>
                    </v-col>
                </v-row>
            </v-tab>
            <v-tab value="two">
                <v-row class="fill-height" align="center" justify="center">
                    <v-col
                        cols="12"
                        class="d-flex flex-column align-center justify-center"
                    >
                        <font-awesome-icon :icon="['fas', 'user-lock']" />
                        <div class="name_of_tap">الحماية</div>
                    </v-col>
                </v-row>
            </v-tab>
            <v-tab value="three">
                <v-row class="fill-height" align="center" justify="center">
                    <v-col
                        cols="12"
                        class="d-flex flex-column align-center justify-center"
                    >
                        <font-awesome-icon
                            :icon="['fas', 'hand-holding-heart']"
                        />
                        <div class="name_of_tap">جمعيتك</div>
                    </v-col>
                </v-row>
            </v-tab>
            <v-tab value="four">
                <v-row class="fill-height" align="center" justify="center">
                    <v-col
                        cols="12"
                        class="d-flex flex-column align-center justify-center"
                    >
                        <font-awesome-icon :icon="['fas', 'users']" />
                        <div class="name_of_tap">المساعدين</div>
                    </v-col>
                </v-row>
            </v-tab>
        </v-tabs>
    </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";

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
import {
    getFirestore,
    getDoc,
    doc,
    collection,
    addDoc,
    updateDoc,
    getDocs,
} from "@firebase/firestore";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import isOnline from "is-online";

export default {
    data: () => ({
        All_Assistant: [],
        Charity_id: "",
        offline: null,
        loader: true,
        User_Charity: "",
        User_Data: "",
        randomPassword: "",
        passwordsMatchError: false,
        passwordsMatchError2: false,
        showPassword: false,
        showPassword2: false,
        showPassword3: false,
        User_Type: null,
        owneerform: [],
        isEditing: null,
        isEditing2: null,
        isEditing3: null,
        isEditing4: null,
        isEditing5: null,
        isEditing6: true,
        form: false,
        storedArray: [],
        namemosed2: null,
        formmosed2: [],
        AssistantName: null,
        AssistantEmail: null,
        nationalNumberAssistant: null,
        AssistantPhoneNumber: null,
        numbercardmosed: null,
        AssistantPowerss: null,
        Loading: true,
        tab: "option-1",
        tab_1: null,
        rules: {
            required: (value) => !!value || "Required.",
            min: (v) => v.length >= 8 || "Min 8 characters",
            emailMatch: () => `The email and password you entered don't match`,
        },
        form1: {
            name: "",
            email: "",
            phoneNumber: "",
            cardNumber: "",
        },
        form2: {
            password: "",
            Newpassword: "",
            Newpassword2: "",
        },
        isFormEmpty1: true,
        isFormEmpty2: true,
        isFormEmpty3: true,
        isFormEmpty4: true,
        isFormEmpty5: true,
        form3: {
            title: "",
            Social_media: [],
            phone: "",
            description: "",
            address: "",
            Fame_number: "",
            Charities_specialty: [],
            Package_type: "",
            Fame_year: "",
            Facebook: "",
            Twitter: "",
            whatsapp: "",
            Youtube: "",
        },
        validationRules: {
            facebookRule: [
                (v) =>
                    /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i.test(v) ||
                    "Enter a valid Facebook link",
            ],
            twitterRule: [
                (v) =>
                    /^(https?:\/\/)?((w{3}\.)?)twitter.com\/.*/i.test(v) ||
                    "Enter a valid Twitter link",
            ],
            whatsappRule: [
                (v) =>
                    /^(https?:\/\/)?((w{3}\.)?)wa.me\/.*/i.test(v) ||
                    "Enter a valid WhatsApp link",
            ],
            youtubeRule: [
                (v) =>
                    /^(https?:\/\/)?((w{3}\.)?)youtube.com\/.*/i.test(v) ||
                    "Enter a valid YouTube link",
            ],
        },
        form4: {},

        form5: {
            toggle5000: 500,
            cardnumber: "",
        },
        numberRooms: ["تليفون", "كمبيوتر"],
        select: null,
        checkbox: false,
        theme: "",
        modtheme: true,
        testform1: [],
        testform2: [],
        testform3: [],
        testform4: [],
        testform5: [],
        activities: ["إطعام", "كفالة", "زواج", "علاج"],

        items: [
            {
                color: "red-lighten-2",
            },
            {
                color: "purple-lighten-2",
            },
            {
                color: "green-lighten-1",
            },
            {
                color: "indigo-lighten-2",
            },
        ],
        Charities: {},
        Cases: [],
    }),
    setup() {
        return { v$: useVuelidate() };
    },
    // components: { Side_Bar },
    validations() {
        return {
            form1: {
                name: {},
                email: {},
                phoneNumber: {},
                cardNumber: {},
            },
            form2: {
                password: {},
                Newpassword: {},
                Newpassword2: {},
            },
            form3: {
                title: {},
                phone: {},
                address: {},
                description: {},
                Fame_number: {},
                Charities_specialty: {},
                Fame_year: {},
                activitiesc_chertes: {},
                Facebook: {},
                Twitter: {},
                whatsapp: {},
                Youtube: {},
            },
            form4: {
                FirstPerson: {},
                TwoPerson: {},
                ThreePerson: {},
                FourPerson: {},
            },
        };
    },
    computed: {
        inputType() {
            return this.showPassword ? "text" : "password";
        },
        inputType2() {
            return this.showPassword2 ? "text" : "password";
        },
        inputType3() {
            return this.showPassword3 ? "text" : "password";
        },
    },
    watch: {
        "form1.name": function () {
            this.updateFormEmpty1();
        },
        "form1.email": function () {
            this.updateFormEmpty1();
        },
        "form1.cardNumber": function () {
            this.updateFormEmpty1();
        },
        "form1.phoneNumber": function () {
            this.updateFormEmpty1();
        },

        "form2.password": function () {
            this.updateFormEmpty2();
        },
        "form2.Newpassword": function () {
            this.updateFormEmpty2();
        },
        "form2.Newpassword2": function () {
            this.updateFormEmpty2();
        },

        "form3.title": function () {
            this.updateFormEmpty3();
        },
        "form3.phone": function () {
            this.updateFormEmpty3();
        },
        "form3.address": function () {
            this.updateFormEmpty3();
        },

        "form3.description": function () {
            this.updateFormEmpty3();
        },
        "form3.Fame_number": function () {
            this.updateFormEmpty3();
        },
        "form3.Charities_specialty": function () {
            this.updateFormEmpty3();
        },
        "form3.Fame_year": function () {
            this.updateFormEmpty3();
        },

        "form3.activitiesc_chertes": function () {
            this.updateFormEmpty3();
        },
        "User_Charity.Facebook": function () {
            this.updateFormEmpty3();
        },
        "User_Charity.Twitter": function () {
            this.updateFormEmpty3();
        },
        "User_Charity.whatsapp": function () {
            this.updateFormEmpty3();
        },
        "User_Charity.Youtube": function () {
            this.updateFormEmpty3();
        },
    },
    async created() {
        const online = await isOnline();
        if (!online) {
            console.log("انت غير متصل بالإنترنت");
            this.loader = true;
            this.offline = true;
            this.Loading = false;
        }
    },
    methods: {
        async Get_Assistant() {
            this.All_Assistant = [];
            const querySnapshot = await getDocs(collection(db, "Users"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                if (
                    doc.data().charity_ID === this.Charity_id &&
                    doc.data().type === "assistant"
                ) {
                    console.log(doc.id, " => ", doc.data());
                    this.All_Assistant.push(doc.data());
                }
            });
        },
        async Add_Assistant() {
            console.log("Add_Assistant");

            // Add a new document with a generated id.
            const docRef = await addDoc(collection(db, "Users"), {
                name: this.AssistantName,
                nationalID: this.nationalNumberAssistant,
                phone: this.AssistantPhoneNumber,
                email: this.AssistantEmail,
                type: "assistant",
                password: this.randomPassword,
                permissions: this.AssistantPowerss,
                charity_ID: this.Charity_id,
            });
            await updateDoc(docRef, {
                id: docRef.id,
            });
            console.log("Document written with ID: ", docRef.id);
            this.Get_Assistant();
        },
        async Check_User() {
            if (localStorage.getItem("id")) {
                const docRef = doc(db, "Users", localStorage.getItem("id"));
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    this.User_Data = docSnap.data();
                    console.log(this.User_Data);
                    if (docSnap.data().type === "owner") {
                        this.User_Type = "owner";
                        this.Charity_id = docSnap.data().charity_ID;
                        const docRef_Charities = doc(
                            db,
                            "Charities",
                            docSnap.data().charity_ID
                        );
                        const docSnap_Charities = await getDoc(
                            docRef_Charities
                        );
                        console.log("Charitie =>  ", docSnap_Charities.data());
                        console.log(this.User_Type);
                        this.User_Charity = docSnap_Charities.data();
                    } else if (docSnap.data().type === "admin") {
                        this.User_Type = "admin";
                    } else if (docSnap.data().type === "assistant") {
                        this.User_Type = "assistant";
                    }
                    this.loader = false;
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }
            }
        },

        triggerToggleTheme() {
            this.$emit("execute-toggle-theme"); // إرسال حدث لتنفيذ دالة toggleTheme
        },
        updateFormEmpty1() {
            // تحقق من إذا كان أي حقل فارغ
            this.isFormEmpty1 = !(
                this.form1.name ||
                this.form1.email ||
                this.form1.cardNumber ||
                this.form1.phoneNumber
            );
        },
        updateFormEmpty2() {
            // تحقق من إذا كان أي حقل فارغ
            this.isFormEmpty2 = !(
                this.form2.password ||
                this.form2.Newpassword ||
                this.form2.Newpassword2
            );
        },
        updateFormEmpty3() {
            this.isFormEmpty3 = !(
                this.form3.title ||
                this.form3.phone ||
                this.form3.password ||
                this.form3.address ||
                this.form3.description ||
                this.form3.Fame_number ||
                this.form3.Charities_specialty ||
                this.form3.Fame_year ||
                this.form3.activitiesc_chertes ||
                this.User_Charity.Facebook ||
                this.User_Charity.Twitter ||
                this.User_Charity.whatsapp ||
                this.User_Charity.Youtube
            );
        },
        toggleTheme() {
            if (this.modtheme) {
                this.theme = "dark";
                this.modtheme = false;
            } else {
                this.theme = "Light";
                this.modtheme = true;
            }
        },
        toggleShowPassword() {
            this.showPassword = !this.showPassword;
        },
        toggleShowPassword2() {
            this.showPassword2 = !this.showPassword2;
        },
        toggleShowPassword3() {
            this.showPassword3 = !this.showPassword3;
        },
        async validateForm1() {
            const res = await this.v$.form1.$validate();
            if (res) {
                this.testform1.push(
                    { name: this.form1.name },
                    { email: this.form1.email },
                    { phoneNumber: this.form1.phoneNumber },
                    { cardNumber: this.form1.cardNumber }
                );
                this.owneerform.push({ Generalinformation: this.testform1 });
                const arr = document.querySelectorAll(
                    ".v-slide-group__content .v-btn"
                )[1];
                arr.click();
                this.v$.$reset();
                this.form1.name = "";
                this.form1.email = "";
                this.form1.phoneNumber = "";
                this.form1.cardNumber = "";

                this.testform1 = [];
            }
        },
        async validateForm2() {
            const res = await this.v$.form2.$validate();
            if (this.form2.password === this.form2.Newpassword) {
                this.passwordsMatchError = true;
                return;
            } else if (this.form2.Newpassword !== this.form2.Newpassword2) {
                this.passwordsMatchError2 = true;
                return;
            }
            if (res) {
                this.testform2.push(
                    { password: this.form2.password },
                    { Newpassword: this.form2.Newpassword },
                    { Newpassword2: this.form2.Newpassword2 }
                );

                this.owneerform.push({ Protectioninformation: this.testform2 });
                const arr = document.querySelectorAll(
                    ".v-slide-group__content .v-btn"
                )[2];
                arr.click();

                this.v$.$reset();
                this.form2.password = "";

                this.testform2 = [];
            }
        },
        async validateForm3() {
            const res = await this.v$.form3.$validate();
            if (res) {
                this.testform3.push(
                    { Charities_title: this.form3.title },
                    { Charities_Social_media: this.User_Charity.Social_media },
                    { Charities_phone: this.form3.phone },
                    { Charities_descripetion: this.form3.description },
                    { Charities_address: this.form3.address },
                    {
                        Charities_Charities_specialty:
                            this.form3.Charities_specialty,
                    },
                    { Charities_Package_type: this.form3.Package_type },
                    { Charities_Fame_year: this.form3.Fame_year },
                    {
                        Facebook: this.User_Charity.Facebook,
                    },
                    {
                        Twitter: this.User_Charity.Twitter,
                    },
                    {
                        whatsapp: this.User_Charity.whatsapp,
                    },
                    {
                        Youtube: this.User_Charity.Youtube,
                    }
                );
                this.owneerform.push({
                    AssociationInformation: this.testform3,
                });

                const arr = document.querySelectorAll(
                    ".v-slide-group__content .v-btn"
                )[3];
                arr.click();
                console.log(this.testform3);

                this.v$.$reset();
                this.form3.title = "";
                this.User_Charity.Social_media = "";
                this.form3.phone = "";
                this.form3.description = "";
                this.form3.address = "";
                this.form3.Charities_specialty = "";
                this.form3.Package_type = "";
                this.form3.Fame_year = "";
                this.form3.activitiesc_chertes = "";
                this.User_Charity.Facebook = "";
                this.User_Charity.Twitter = "";
                this.User_Charity.whatsapp = "";
                this.User_Charity.Youtube = "";

                this.testform3 = [];
            }
        },
        async validateForm4() {
            const res = await this.v$.form4.$validate();
            if (res) {
                this.testform4.push(this.storedArray);

                this.owneerform.push({ Helpers: this.testform4 });
                console.log(this.testform4);

                this.v$.$reset();
                this.form4.AssistantPowers = "";
            }

            this.testform4 = [];
        },

        async validate() {
            const { valid } = await this.$refs.form.validate();

            if (valid) alert("Form is valid");
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
        reloadPage() {
            window.location.reload();
        },

        onSubmit() {
            if (!this.form) return;

            const oldData =
                JSON.parse(localStorage.getItem("formmosed2")) || [];

            // إضافة القيمة الجديدةة إلى القيمة الحاليةة
            oldData.push(
                this.namemosed != ""
                    ? {
                          Assistantname: this.AssistantName,
                          AssistantEmail: this.AssistantEmail,
                          nationalNumberAssistant: this.nationalNumberAssistant,
                          AssistantPowers: this.AssistantPowerss,
                          AssistantPhoneNumber: this.AssistantPhoneNumber,
                          randomPassword: this.randomPassword,
                      }
                    : ""
            );

            // حفظ القيمة المحدثة في localStorage
            localStorage.setItem("formmosed2", JSON.stringify(oldData));
            this.storedArray = oldData;
            this.AssistantName = "";
            this.AssistantEmail = "";
            this.nationalNumberAssistant = "";
            this.AssistantPhoneNumber = "";
            this.AssistantPowerss = "";
            this.randomPassword = this.generateRandomPassword();
            console.log(this.s1);
        },
        required(v) {
            return !!v || "الحقل مطلوب";
        },
        required1(v) {
            return (
                (!!v && /^[\u0600-\u06FF\s]+$/.test(v)) ||
                "الحقل مطلوب ويجب أن يحتوي على حروف عربية فقط"
            );
        },
        required2(v) {
            return (
                (!!v && /^\d+$/.test(v)) ||
                "الحقل مطلوب ويجب أن يحتوي على أرقام فقط"
            );
        },
        required3(v) {
            return (
                (!!v && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v)) ||
                "الحقل مطلوب ويجب أن يحتوي على بريد إلكتروني صالح"
            );
        },
        required4(v) {
            return (
                (!!v && /^\d{14,}$/.test(v)) ||
                "الحقل مطلوب ويجب أن يحتوي على أرقام فقط ولا يقل عن 14 رقمًا"
            );
        },
        removeItem(index) {
            this.storedArray.splice(index, 1);
            localStorage.setItem(
                "formmosed2",
                JSON.stringify(this.storedArray)
            );
        },
        generateRandomPassword() {
            // توليد كلمة مرور عشوائية
            const characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let password = "";
            for (let i = 0; i < 8; i++) {
                password += characters.charAt(
                    Math.floor(Math.random() * characters.length)
                );
            }
            // تحديث حالة المكون لعرض الكلمة المرور الجديدةة
            this.randomPassword = password;
            return this.randomPassword;
        },
    },
    mounted() {
        const oldData = JSON.parse(localStorage.getItem("formmosed2")) || [];
        localStorage.setItem("formmosed2", JSON.stringify(oldData));
        this.storedArray = oldData;
        this.generateRandomPassword();

        this.Check_User();
        this.Get_Assistant();
    },
};
</script>

<style lang="scss">
/* Start Friends Page */
.friends-page {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
@media (max-width: 767px) {
    .friends-page {
        grid-template-columns: minmax(200px, 1fr);
        margin-left: 10px;
        margin-right: 10px;
        gap: 10px;
    }
}
.friends-page .contact {
    position: absolute;
    left: 10px;
    top: 10px;
}
.friends-page .contact i {
    background-color: #eee;
    padding: 10px;
    border-radius: 50%;
    color: #666;
    font-size: 13px;
    cursor: pointer;
    transition: 0.3s;
}
.friends-page .contact i:hover {
    background-color: var(--blue-color);
    color: white;
}
.friends-page .friend .icons {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-top: 15px;
    margin-bottom: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
}
.friends-page .friend .icons i {
    margin-right: 5px;
}
.friends-page .friend .icons .vip {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 40px;
    opacity: 0.2;
}
.v-input__control {
    color: black !important;
}
/* End Friends Page */
.container_0 {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    background-image: url("../assets/images/_40ae7a5a-5aea-43c7-a95e-de3ca51ab30b.jpg");
    background-size: cover;
    background-position: right top;
    background-attachment: fixed;
    min-height: 84vh;
    padding-bottom: 80px;
    .profile {
        display: flex;
        align-items: center;
        gap: 5px;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            height: 6px;
            width: 100%;
            background: #eee;
            bottom: -13.5px;
        }
    }
}
.title {
    font-size: 20px;
    color: var(--main-color);
    font-weight: bold;
}
.v-tab__slider {
    top: 0;
}
.v-slide-group__content {
    display: flex;
    align-items: center;
    justify-content: center;
}
.v-field__input {
    padding-right: 30px !important;

    svg {
        position: absolute;

        right: 8px;
        top: 50%;
        transform: translate(0%, -50%);
    }
}
.v-field--center-affix .v-label.v-field-label {
    margin: 0 30px 0 20px !important;
}
.save_btn {
    font-size: 16px;
    padding: 10px 20px;
    border: 1px solid var(--main-color);
    border-radius: 5px;
    width: fit-content;
    color: var(--main-color);
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        color: #fff;
        background: var(--main-color);
    }
}
.v-slide-group__content > button {
    width: 25%;
}

.header {
    color: var(--main-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .right {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 18px;
        font-weight: bold;
    }
    .left svg {
        padding: 10px;
        background: #fafafa8c;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 10px #ddd;
        font-weight: bold;
        font-size: 20px;
        transition: 0.3s;
        &:hover {
            filter: grayscale(1);
        }
    }
}
.body {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    .box {
        width: 32%;
        background: #eee;
        padding: 10px;
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 5px;
        gap: 30px;
        .Row {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            &:last-child::before {
                content: "";
                position: absolute;
                top: -15px;
                left: 0;
                width: 100%;
                height: 4px;
                background: #ddd;
            }
            span {
                display: flex;
                align-items: center;
                gap: 10px;
                .number {
                    width: 30px;
                    height: 30px;
                    background: #fafafa;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 18px;
                    color: var(--main-color);
                    border-radius: 5px;
                    box-shadow: 0 0 10px #ddd;
                }
                .name {
                    font-weight: bold;
                    color: #7a7a7a;
                }
            }
            .delete {
                color: var(--main-color);
                cursor: pointer;
            }
            .permissions {
                display: flex;
                gap: 10px;
                flex-direction: column;
                width: 100%;
                .permissions_1 {
                    font-size: 14px;
                    font-weight: bold;
                    color: #7a7a7a;
                }
                .permissions_2 {
                    width: 100%;
                    background: #fafafa;
                    text-align: center;
                    padding: 10px;
                    border-radius: 5px;
                    font-weight: bold;
                    color: var(--main-color);
                    box-shadow: 0 0 10px #ddd;
                }
            }
        }
    }
}
.the_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
    color: var(--main-color);
    position: relative;
    &::before {
        height: 4px;
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: calc(100% - 40px);
        background: #ddd;
        transform: translateX(-50%);
    }
    svg {
        cursor: pointer;
    }
}
.the_body {
    padding: 20px;
}
.add_img {
    width: 45px;
    cursor: pointer;
    border-radius: 50%;
    transition: 0.3s;
    &:hover {
        box-shadow: 0 0 10px #ddd;
        filter: grayscale(1);
    }
}
button.add {
    width: 100%;

    height: 45px !important;
    color: var(--main-color);
    font-weight: bold;
    transition: 0.3s;
    &:hover {
        background: var(--main-color);
        color: #fff;
    }
}
.not-found {
    background: #fafafa8f;
    padding: 20px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: #686868;
}
@media (max-width: 600px) {
    .v-btn__content svg {
        font-size: 25px;
    }
    .name_of_tap {
        display: none;
    }
    .body .box {
        width: 100%;
    }
}
</style>
