<template>
    <header class="header" :theme="triggerToggleTheme">
        <div class="container">
            <div class="logo">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    viewBox="0 0 1024.000000 1024.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g
                        transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                        stroke="none"
                    >
                        <path
                            d="M5055 8744 c-325 -35 -591 -98 -845 -199 -1010 -405 -1713 -1340 -1841 -2450 -6 -55 -12 -198 -13 -318 l-2 -218 -109 -64 c-59 -35 -141 -89 -181 -120 -72 -56 -194 -172 -194 -186 0 -4 33 11 73 33 265 147 595 274 822 315 128 24 390 24 510 0 545 -110 1080 -430 1389 -832 38 -49 73 -94 76 -98 7 -8 243 136 460 280 333 220 584 334 875 395 147 31 443 33 575 5 244 -53 455 -168 609 -332 92 -99 157 -211 196 -339 l21 -69 36 79 c77 170 185 522 204 664 9 70 22 42 23 -50 2 -160 -63 -418 -145 -583 -82 -162 -221 -392 -273 -449 -3 -4 -6 39 -7 95 -1 187 -69 342 -214 487 -268 268 -697 318 -1110 131 -117 -52 -240 -128 -430 -265 -283 -204 -420 -291 -595 -379 -360 -181 -757 -237 -1115 -157 -281 62 -523 192 -716 384 -106 107 -169 194 -233 322 -53 107 -61 142 -16 69 129 -210 283 -350 499 -455 146 -72 235 -96 111 -31 -210 111 -417 285 -528 443 -52 73 -122 214 -132 264 -6 31 -6 31 51 43 79 15 80 15 95 -21 44 -112 206 -300 339 -392 267 -187 616 -290 920 -272 94 6 297 40 309 52 13 13 -187 190 -334 296 -286 205 -573 339 -857 400 -79 16 -138 22 -253 22 -154 1 -236 -12 -343 -52 -55 -21 -181 -93 -218 -125 l-26 -22 26 -102 c39 -154 99 -311 191 -498 229 -466 567 -824 1028 -1089 193 -111 420 -200 623 -245 481 -107 1091 8 1659 313 292 156 582 394 703 576 84 126 102 226 56 318 -31 63 -59 86 -131 109 -47 15 -63 15 -124 5 -143 -25 -212 -74 -469 -331 -287 -288 -392 -368 -635 -491 -256 -130 -564 -201 -859 -199 l-91 0 125 43 c278 95 529 224 741 382 125 93 160 122 404 335 263 229 368 307 505 375 252 124 490 105 643 -52 212 -218 147 -534 -180 -870 -245 -253 -636 -493 -992 -611 -45 -14 -79 -28 -77 -31 8 -7 271 38 395 68 500 122 922 361 1288 727 309 310 532 695 662 1141 39 135 66 251 59 256 -1 1 -21 16 -43 33 -63 48 -223 146 -435 266 -512 288 -762 455 -1133 756 -93 75 -174 140 -182 145 -14 10 -31 -3 -215 -160 -253 -215 -601 -468 -858 -623 -138 -83 -433 -238 -554 -292 l-97 -43 42 -35 c96 -80 195 -182 273 -280 46 -58 82 -107 79 -109 -7 -7 -206 137 -380 274 -378 298 -686 467 -1026 562 l-96 27 176 183 c97 100 183 182 191 182 8 0 155 -141 327 -312 217 -218 317 -312 330 -310 96 18 453 157 658 256 317 153 731 419 1076 692 l65 52 40 -30 c77 -59 473 -317 626 -409 384 -230 606 -337 1163 -559 182 -73 390 -161 463 -195 125 -60 131 -62 112 -35 -49 69 -194 182 -357 278 l-112 67 -1 220 c0 241 -15 397 -55 597 -211 1041 -949 1892 -1930 2223 -314 106 -543 145 -885 150 -129 2 -253 1 -275 -1z m497 -309 c338 -39 671 -145 953 -303 229 -127 404 -259 589 -440 217 -214 377 -435 517 -712 175 -350 264 -693 276 -1072 l6 -167 -69 21 c-388 115 -860 391 -1373 801 -95 76 -178 136 -185 134 -6 -3 -56 -45 -111 -94 -225 -201 -496 -406 -762 -576 -145 -92 -410 -232 -519 -273 l-65 -24 -37 34 c-20 18 -89 80 -152 137 -64 57 -262 239 -441 404 -179 165 -335 308 -347 319 -25 22 -2 39 -356 -283 -319 -290 -470 -408 -623 -484 -58 -30 -170 -77 -180 -77 -9 0 -1 215 12 322 101 865 641 1650 1408 2049 264 137 455 202 754 259 217 41 486 51 705 25z m636 -2612 l-3 -68 -75 -1 c-41 -1 -81 1 -87 3 -9 3 -13 27 -13 69 l0 64 90 0 91 0 -3 -67z m320 0 l-3 -68 -87 -3 -88 -3 0 71 0 70 90 0 91 0 -3 -67z m-318 -253 l0 -70 -84 0 -84 0 -4 66 c-1 36 -1 68 1 70 2 2 42 4 88 4 l83 0 0 -70z m320 0 l0 -70 -90 0 -90 0 0 70 0 70 90 0 90 0 0 -70z m-1149 -1337 c-10 -19 -104 -112 -211 -208 -322 -291 -690 -426 -1069 -394 -259 22 -498 128 -673 299 -71 70 -72 71 -28 46 104 -58 365 -140 515 -161 356 -51 728 22 1115 218 125 63 286 159 331 196 30 25 32 25 20 4z"
                        />
                        <path
                            d="M5164 7485 c-99 -21 -172 -62 -244 -134 -77 -78 -116 -146 -135 -238 -40 -189 4 -344 134 -474 76 -76 145 -112 251 -135 251 -52 507 111 575 367 71 265 -107 558 -372 614 -82 18 -128 18 -209 0z"
                        />
                        <path
                            d="M2885 5393 c-123 -26 -175 -43 -263 -86 -56 -28 -109 -59 -118 -69 -11 -12 1 -8 37 12 69 37 214 85 315 105 44 9 140 19 214 23 110 5 126 8 85 13 -54 8 -238 9 -270 2z"
                        />
                        <path
                            d="M5893 5065 c-102 -39 -251 -119 -365 -197 -59 -40 -185 -126 -280 -190 -368 -249 -657 -372 -992 -423 -55 -8 -102 -17 -105 -21 -9 -10 224 6 312 22 111 19 233 57 368 115 225 96 372 185 734 445 161 115 268 187 375 252 45 28 30 27 -47 -3z"
                        />
                        <path
                            d="M2995 2798 c-14 -32 -145 -365 -211 -538 -18 -47 -69 -177 -114 -290 -45 -113 -99 -251 -121 -308 -74 -193 -111 -255 -184 -309 l-30 -22 183 -1 c100 0 182 2 182 5 0 3 -8 17 -17 32 -30 46 -20 117 34 249 l49 119 280 2 279 3 18 -39 c55 -121 87 -202 93 -237 7 -50 -12 -93 -52 -114 l-27 -15 34 -5 c19 -3 151 -3 294 0 250 5 259 6 229 22 -43 23 -91 75 -124 133 -25 44 -277 645 -493 1173 l-70 172 -109 0 -108 0 -15 -32z m175 -676 c50 -117 90 -217 90 -223 0 -5 -88 -9 -216 -9 l-215 0 7 23 c3 12 22 63 41 112 19 50 54 142 78 205 24 63 51 135 61 159 l18 44 23 -49 c13 -27 64 -145 113 -262z"
                        />
                        <path
                            d="M3860 2822 c0 -4 23 -18 52 -32 75 -36 150 -115 192 -202 19 -40 102 -248 186 -463 241 -619 352 -885 370 -885 4 0 28 46 53 103 46 104 444 1076 512 1247 20 52 45 104 55 114 18 18 19 18 52 0 51 -30 104 -148 337 -754 239 -621 273 -706 286 -703 13 2 41 69 291 688 118 292 236 581 261 643 48 117 110 204 160 223 51 19 21 29 -92 29 -133 0 -187 -15 -204 -58 -10 -25 -273 -725 -308 -819 -9 -24 -19 -43 -23 -43 -3 0 -34 69 -67 153 -95 236 -249 628 -264 671 -8 22 -26 52 -41 68 l-26 28 -284 0 -285 0 -16 -37 c-9 -21 -90 -231 -181 -468 l-164 -429 -17 39 c-22 53 -165 416 -250 635 -38 96 -77 187 -87 201 -36 53 -67 59 -292 59 -113 0 -206 -3 -206 -8z"
                        />
                        <path
                            d="M7740 2825 c0 -3 22 -28 49 -55 31 -31 58 -70 72 -107 23 -56 24 -70 27 -412 l3 -354 -79 74 c-205 190 -782 728 -822 766 l-45 42 -5 -612 c-5 -552 -8 -617 -24 -666 -21 -65 -59 -124 -95 -148 l-26 -18 35 -5 c19 -3 123 -4 230 -2 l196 3 -46 47 c-79 82 -84 107 -88 471 l-3 314 53 -48 c29 -26 148 -132 263 -234 301 -266 609 -545 613 -553 18 -41 22 61 22 595 0 633 3 683 47 774 10 21 37 57 60 81 24 23 43 45 43 47 0 3 -108 5 -240 5 -132 0 -240 -2 -240 -5z"
                        />
                    </g>
                </svg>
            </div>
            <div class="div" style="display: flex; justify-content: end">
                <v-fade-transition @click="triggerToggleTheme" leave-absolute>
                    <v-icon v-if="this.themesun"
                        >mdi-moon-waning-crescent</v-icon
                    >

                    <v-icon v-else>mdi-weather-sunny</v-icon>
                </v-fade-transition>
            </div>
            <nav>
                <ul>
                    <li>
                        <router-link to="/">الرئيسية</router-link>
                    </li>
                    <li>
                        <a href="#About">عنا</a>
                    </li>
                    <li>
                        <a href="#Connect_Us">تواصل معنا</a>
                    </li>
                </ul>
            </nav>
            <div class="Login_Register">
                <div class="login" v-if="User.User_State">
                    تسجيل دخول
                    <TheSignin :Check_User="Check_User" />
                </div>
                <div class="register" v-if="User.User_State">
                    حساب جديد
                    <TheRegister />
                </div>
                <div
                    class="User_box"
                    v-if="!User.User_State"
                    @click="drawer = !drawer"
                >
                    <div
                        @click="Box_User = !Box_User"
                        @click.stop="drawer = !drawer"
                        id="menu-activator"
                    >
                        {{ User.User_name }}
                    </div>
                    <div class="User_box">
                        <v-menu
                            transition="scale-transition"
                            activator="#menu-activator"
                        >
                            <v-list nav>
                                <v-list-item>
                                    مرحباً {{ User_FullName }}</v-list-item
                                >
                                <v-list-item
                                    v-if="User.type === 'owner'"
                                    @click="
                                        $router.push('/DashBoard_charities')
                                    "
                                >
                                    إدارة الحالات</v-list-item
                                >
                                <v-list-item
                                    v-if="User.type === 'admin'"
                                    @click="$router.push('/DashBoard_Admin')"
                                >
                                    إدارة الموقع
                                </v-list-item>
                                <v-list-item
                                    link
                                    v-if="User.type === 'admin'"
                                    @click="$router.push('/Report_DashBoard1')"
                                >
                                    التقارير
                                </v-list-item>
                                <v-list-item
                                    link
                                    @click="$router.push('/Report_DashBoard')"
                                    v-if="User.type === 'owner'"
                                >
                                    التقارير
                                </v-list-item>
                                <v-list-item
                                    link
                                    @click="$router.push('/Settings_Admin')"
                                    v-if="User.type === 'owner'"
                                >
                                    الاعدادات
                                </v-list-item>
                                <v-list-item @click="Sign_Out"
                                    ><v-icon>mdi-export</v-icon> تسجيل
                                    خروج</v-list-item
                                >
                            </v-list>
                        </v-menu>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import TheRegister from "@/components/The_Register.vue";
import TheSignin from "@/components/The_Signin.vue";
import { ref } from "vue";

// firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

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

export default {
    name: "TheHeader",
    components: { TheRegister, TheSignin },
    inject: ["Emitter"],
    mounted() {
        this.Check_User();
    },
    data() {
        return {
            drawer: ref(false),
            Box_User: null,
            User: {
                User_State: true,
                User_name: "",
                User_FullName: "",
                type: "",
            },
            themesun: true,
        };
    },
    methods: {
        triggerToggleTheme() {
            this.$emit("execute-toggle-theme");
            this.themesun = !this.themesun; // إرسال حدث لتنفيذ دالة toggleTheme
        },
        Sign_Out() {
            localStorage.removeItem("id");
            localStorage.removeItem("charity_ID");
            this.User.User_State = true;
            this.$router.push("/");
        },
        async Check_User() {
            if (localStorage.getItem("id")) {
                const docRef = doc(db, "Users", localStorage.getItem("id"));
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    this.User.User_State = false;
                    let name = docSnap.data().name;
                    this.User_FullName = docSnap.data().name;
                    if (docSnap.data().type === "owner") {
                        this.User.type = "owner";
                        console.log(this.User.type);
                    } else if (docSnap.data().type === "admin") {
                        this.User.type = "admin";
                    } else if (docSnap.data().type === "assistant") {
                        this.User.type = "assistant";
                    }
                    this.User.User_name = name
                        .split(" ")
                        .map(function (name) {
                            return name.charAt(0);
                        })
                        .join(" ");
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 0 10px white;
    z-index: 10;
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
            width: 100px;
        }
        nav {
            ul {
                display: flex;
                gap: 10px;
                align-items: center;
                a {
                    font-size: 20px;
                    color: #4a3aff;
                }
            }
        }
        .Login_Register {
            display: flex;
            gap: 10px;
            align-items: center;
            & > div {
                background: white;
                padding: 10px;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }
}
</style>
