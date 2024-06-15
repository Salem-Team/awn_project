<template>
    <div class="Dash_board mt-16">
        <!-- NavBar  -->
        <!-- <Side_Bar /> -->
        <Offline_error>
            <template v-slot:default>
                <img
                    style="
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 245px;
                    "
                    v-if="loading"
                    src="../assets/images/Spinner@1x-1.0s-200px-200px.svg"
                    alt=""
                />
                <div class="container_0" v-if="!loading">
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
                                <div class="number">
                                    {{ Cases.length || 0 }}
                                </div>
                                <span>حالة</span>
                            </div>
                            <div class="small_box">
                                <div class="number">
                                    {{ this.required }}

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
                                            :model-value="this.value || 0"
                                        >
                                            <template #default>
                                                <strong>
                                                    {{ this.value || 0 }}%
                                                </strong>
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
                                <img
                                    src="../assets/images/customer.gif"
                                    alt=""
                                    width="50px"
                                    bg-color="var(--secound-color)"
                                />
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

                <Empty_error v-if="empty === true" :text="text0" />
                <div class="cases" v-if="(empty === false, !loading)">
                    <div
                        class="box"
                        :class="'box ' + Case.id"
                        v-for="(Case, index) in paginatedCases"
                        :key="Case.id"
                    >
                        <div class="feat">
                            <span>
                                <div class="number">
                                    {{ (currentPage - 1) * 5 + index + 1 }}
                                </div>
                                <div class="name">
                                    {{ Case.personal_info.name }}
                                </div>
                            </span>
                            <img
                                src="../assets/images/trash.gif"
                                alt=""
                                width="25px"
                                style="cursor: pointer"
                                @click="deleteCase(Case.id)"
                            />
                        </div>
                        <div class="body">
                            <div class="feat">
                                <div class="number">
                                    {{ Case.financial_info.required || 0 }}
                                </div>
                                <div class="title">المطلوب</div>
                            </div>
                            <div class="feat">
                                <div class="number">
                                    {{ Case.financial_info.incom || 0 }}
                                </div>
                                <div class="title">الدخل</div>
                            </div>
                            <div class="feat">
                                <div class="small_box">
                                    <div>
                                        <!-- Progress circular -->
                                        <div class="progress-circular">
                                            <v-progress-circular
                                                class="mt-0"
                                                bg-color="var(--secound-color)"
                                                :rotate="360"
                                                :size="70"
                                                :width="20"
                                                color="var(--main-color)"
                                                style="font-size: 13px"
                                                :model-value="
                                                    Math.round(
                                                        ((parseInt(
                                                            Case.financial_info
                                                                .incom
                                                        ) || 0) /
                                                            (parseInt(
                                                                Case
                                                                    .financial_info
                                                                    .required
                                                            ) || 0)) *
                                                            100
                                                    ) || 0
                                                "
                                            >
                                                <template #default>
                                                    <strong>
                                                        {{
                                                            Math.round(
                                                                ((parseInt(
                                                                    Case
                                                                        .financial_info
                                                                        .incom
                                                                ) || 0) /
                                                                    (parseInt(
                                                                        Case
                                                                            .financial_info
                                                                            .required
                                                                    ) || 0)) *
                                                                    100
                                                            ) || 0
                                                        }}%
                                                    </strong>
                                                </template>
                                            </v-progress-circular>
                                            <p>نسبة إكمال المطلوب</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="feat">
                                <div class="number">لا</div>
                                <div class="title">حالة مشتركة؟</div>
                            </div>
                        </div>
                        <div class="details" @click="Case_Information(Case)">
                            <font-awesome-icon :icon="['fas', 'circle-info']" />
                            <div>التفاصيل</div>
                            <!--this a dialog to show the case's data-->
                            <v-dialog
                                activator="parent"
                                width="100%"
                                scrollable
                            >
                                <template v-slot:default="{ isActive }">
                                    <v-card rounded="lg">
                                        <v-card-title
                                            class="d-flex justify-space-between align-center"
                                        >
                                            <div
                                                class="text-h5 ps-2 text-primary"
                                            >
                                                تفاصيل الحالة
                                            </div>
                                            <v-btn
                                                class="text-primary"
                                                icon="mdi-close"
                                                variant="text"
                                                @click="isActive.value = false"
                                            ></v-btn>
                                        </v-card-title>
                                        <v-stepper
                                            v-model="e1"
                                            alt-labels
                                            style="
                                                padding: 20px;
                                                overflow: auto;
                                            "
                                        >
                                            <template
                                                v-slot:default="{ prev, next }"
                                            >
                                                <v-stepper-header>
                                                    <template
                                                        v-for="n in steps"
                                                        :key="`${n}-step`"
                                                    >
                                                        <v-stepper-item
                                                            :title="title[n]"
                                                            editable
                                                            :complete="e1 > n"
                                                            :step="`Step {{ n }}`"
                                                            :value="n"
                                                        ></v-stepper-item>

                                                        <v-divider
                                                            v-if="n !== steps"
                                                            :key="n"
                                                        ></v-divider>
                                                    </template>
                                                </v-stepper-header>

                                                <v-stepper-window>
                                                    <div v-if="e1 === 1">
                                                        <!-- Show empty error if no data -->
                                                        <Empty_error
                                                            v-if="
                                                                Personal_Information.length ===
                                                                0
                                                            "
                                                            :text="text"
                                                        />
                                                        <div
                                                            v-else-if="
                                                                Personal_Information.length !==
                                                                0
                                                            "
                                                            class="form"
                                                        >
                                                            <div>
                                                                <div
                                                                    class="mt-2 d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            Personal_Information.name
                                                                        "
                                                                        label="الاسم ثلاثي"
                                                                        variant="outlined"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        placeholder="الاسم ثلاثي"
                                                                    ></v-text-field>
                                                                </div>
                                                                <div
                                                                    class="mt-2 d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            Personal_Information.nick_name
                                                                        "
                                                                        label="اسم الشهره"
                                                                        variant="outlined"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        placeholder="اسم الشهره"
                                                                    ></v-text-field>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div
                                                                    class="mt-2 d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            Personal_Information.national_id
                                                                        "
                                                                        label="رقم البطاقه"
                                                                        variant="outlined"
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        placeholder="رقم البطاقه"
                                                                    ></v-text-field>
                                                                </div>
                                                                <div
                                                                    class="mt-2 d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-select
                                                                        v-model="
                                                                            Personal_Information.governorate
                                                                        "
                                                                        label="المحافظه"
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        variant="outlined"
                                                                        placeholder="المحافظه"
                                                                        :items="
                                                                            Governorates
                                                                        "
                                                                    ></v-select>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div
                                                                    class="mt-2 d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-textarea
                                                                        v-model="
                                                                            Personal_Information.detailed_address
                                                                        "
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        label=" العنوان"
                                                                        variant="outlined"
                                                                        placeholder=" العنوان"
                                                                        auto-grow
                                                                    ></v-textarea>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div
                                                                    class="mt-2 d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            Personal_Information.house_number
                                                                        "
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        label="رقم المنزل"
                                                                        variant="outlined"
                                                                        placeholder="رقم المنزل"
                                                                    ></v-text-field>
                                                                </div>
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            Personal_Information.floor_number
                                                                        "
                                                                        label="رقم الدور"
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        variant="outlined"
                                                                        placeholder="رقم الدور"
                                                                    ></v-text-field>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <div
                                                                    class="mt-2 d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-select
                                                                        v-model="
                                                                            Personal_Information.marital_status
                                                                        "
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        :items="
                                                                            SocialStatuss
                                                                        "
                                                                        label="الحاله الجتماعيه  "
                                                                    ></v-select>
                                                                </div>
                                                                <div
                                                                    class="mt-2 d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            Personal_Information.phone
                                                                        "
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        label="رقم التليفون"
                                                                        variant="outlined"
                                                                        placeholder="رقم التليفون"
                                                                    ></v-text-field>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div v-if="e1 === 2">
                                                        <!-- Show empty error if no data -->
                                                        <Empty_error
                                                            v-if="
                                                                Financial_Information.length ===
                                                                0
                                                            "
                                                            :text="text1"
                                                        />
                                                        <div
                                                            v-else-if="
                                                                Financial_Information.length !==
                                                                0
                                                            "
                                                            class="form"
                                                        >
                                                            <div>
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            Financial_Information.required
                                                                        "
                                                                        label="المطلوب "
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        variant="outlined"
                                                                        placeholder="المطلوب "
                                                                    ></v-text-field>
                                                                </div>
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            Financial_Information.incom
                                                                        "
                                                                        label="الداخل "
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        variant="outlined"
                                                                        placeholder="الداخل "
                                                                    ></v-text-field>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            Financial_Information.deficit
                                                                        "
                                                                        label="العجز "
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                            pointer-events: none;
                                                                        "
                                                                        :value="
                                                                            Financial_Information.required -
                                                                            Financial_Information.incom
                                                                        "
                                                                        variant="outlined"
                                                                        placeholder="العجز "
                                                                    ></v-text-field>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div v-if="e1 === 3">
                                                        <!-- Show empty error if no data -->
                                                        <Empty_error
                                                            v-if="
                                                                Disease_Information.length ===
                                                                0
                                                            "
                                                            :text="text2"
                                                        />
                                                        <div v-else>
                                                            <div
                                                                v-for="info in Disease_Information"
                                                                :key="info"
                                                            >
                                                                <div
                                                                    class="bg-[#eee]"
                                                                >
                                                                    <div
                                                                        class="mt-2 d-flex flex-column"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                    >
                                                                        <v-text-field
                                                                            v-model="
                                                                                info.patien_name
                                                                            "
                                                                            label="اسم المريض"
                                                                            variant="outlined"
                                                                            style="
                                                                                width: 100%;
                                                                            "
                                                                            placeholder="اسم المريض"
                                                                        ></v-text-field>
                                                                    </div>
                                                                    <div
                                                                        class="d-flex flex-column"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                    >
                                                                        <v-text-field
                                                                            v-model="
                                                                                info.disease
                                                                            "
                                                                            label="  المرض "
                                                                            variant="outlined"
                                                                            class="mt-2"
                                                                            style="
                                                                                width: 100%;
                                                                            "
                                                                            placeholder=" المرض"
                                                                        ></v-text-field>
                                                                    </div>
                                                                    <div
                                                                        class="mt-2 d-flex flex-column"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                    >
                                                                        <v-text-field
                                                                            v-model="
                                                                                info.get_treatment
                                                                            "
                                                                            label="كيفيه الحصول علي العلاج"
                                                                            variant="outlined"
                                                                            class="mt-2"
                                                                            style="
                                                                                width: 100%;
                                                                            "
                                                                            placeholder="كيفيه الحصول علي العلاج "
                                                                        ></v-text-field>
                                                                    </div>
                                                                    <div
                                                                        class="mt-2 d-flex flex-column"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                    >
                                                                        <v-text-field
                                                                            v-model="
                                                                                info.not_available
                                                                            "
                                                                            label=" السبب في عدم العلاج علي نفقه الدولة"
                                                                            variant="outlined"
                                                                            class="mt-2"
                                                                            style="
                                                                                width: 100%;
                                                                            "
                                                                            placeholder="السبب في عدم العلاج علي نفقه الدولة"
                                                                        ></v-text-field>
                                                                    </div>
                                                                </div>
                                                                <v-divider
                                                                    :thickness="
                                                                        8
                                                                    "
                                                                    class="my-5 mb-5"
                                                                ></v-divider>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div v-if="e1 === 4">
                                                        <!-- Show empty error if no data -->
                                                        <Empty_error
                                                            v-if="
                                                                Housing_Condition.length ===
                                                                0
                                                            "
                                                            :text="text3"
                                                        />
                                                        <div
                                                            v-else-if="
                                                                Housing_Condition.length !==
                                                                0
                                                            "
                                                            class="form"
                                                        >
                                                            <div>
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-select
                                                                        v-model="
                                                                            Housing_Condition.number_rooms
                                                                        "
                                                                        :items="
                                                                            number_rooms
                                                                        "
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        label=" عدد الغرف"
                                                                    ></v-select>
                                                                </div>
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-select
                                                                        v-model="
                                                                            Housing_Condition.house_type
                                                                        "
                                                                        :items="
                                                                            items
                                                                        "
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        label="الشقه ملك ام ايجار"
                                                                    ></v-select>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-select
                                                                        v-model="
                                                                            Housing_Condition.bathroom_type
                                                                        "
                                                                        :items="
                                                                            amam
                                                                        "
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        label="الحمام خاص ام مشترك"
                                                                    ></v-select>
                                                                </div>
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-select
                                                                        v-model="
                                                                            Housing_Condition.floor_type
                                                                        "
                                                                        :items="
                                                                            kitchen
                                                                        "
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        label="  نوع الارضيه "
                                                                    ></v-select>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            Housing_Condition.description_kitchen
                                                                        "
                                                                        label="  وصف شامل للمطبخ "
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        variant="outlined"
                                                                        placeholder="وصف شامل للمطبخ"
                                                                    ></v-text-field>
                                                                </div>
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            Housing_Condition.DescriptionRoom1
                                                                        "
                                                                        label="  وصف سريع للغرفه رقم 1 "
                                                                        variant="outlined"
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        placeholder="وصف سريع للغرفه رقم 1 "
                                                                    ></v-text-field>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            Housing_Condition.DescriptionRoom2
                                                                        "
                                                                        v-show="
                                                                            Housing_Condition.number_rooms >
                                                                            1
                                                                        "
                                                                        label="  وصف سريع للغرفه رقم 2 "
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        variant="outlined"
                                                                        placeholder="وصف سريع للغرفه رقم 2 "
                                                                    ></v-text-field>
                                                                </div>

                                                                <v-text-field
                                                                    v-model="
                                                                        Housing_Condition.DescriptionRoom3
                                                                    "
                                                                    label="  وصف سريع للغرفه رقم 3 "
                                                                    v-show="
                                                                        Housing_Condition.number_rooms >
                                                                        2
                                                                    "
                                                                    class="mt-2"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                    variant="outlined"
                                                                    placeholder="وصف سريع للغرفه رقم 3 "
                                                                ></v-text-field>
                                                            </div>

                                                            <div>
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            Housing_Condition.DescriptionRoom2
                                                                        "
                                                                        v-show="
                                                                            Housing_Condition.number_rooms >
                                                                            3
                                                                        "
                                                                        label="  وصف سريع للغرفه رقم 4 "
                                                                        class="mt-2"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        variant="outlined"
                                                                        placeholder="وصف سريع للغرفه رقم 4 "
                                                                    ></v-text-field>
                                                                </div>

                                                                <v-text-field
                                                                    v-model="
                                                                        Housing_Condition.DescriptionRoom3
                                                                    "
                                                                    label="  وصف سريع للغرفه رقم 5 "
                                                                    v-show="
                                                                        Housing_Condition.number_rooms >
                                                                        4
                                                                    "
                                                                    class="mt-2"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                    variant="outlined"
                                                                    placeholder="وصف سريع للغرفه رقم 5 "
                                                                ></v-text-field>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div v-if="e1 === 5">
                                                        <!-- Show empty error if no data -->
                                                        <Empty_error
                                                            v-if="
                                                                Case_FamilyNeeds.length ===
                                                                0
                                                            "
                                                            :text="text4"
                                                        />
                                                        <div
                                                            v-else-if="
                                                                Case_FamilyNeeds.length !==
                                                                0
                                                            "
                                                            class="form"
                                                        >
                                                            <div class="d-flex">
                                                                <div
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-checkbox
                                                                        v-model="
                                                                            Case_FamilyNeeds
                                                                        "
                                                                        label="طبي"
                                                                        value="طبي"
                                                                    ></v-checkbox>
                                                                </div>

                                                                <div
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-checkbox
                                                                        v-model="
                                                                            Case_FamilyNeeds
                                                                        "
                                                                        label="زوج"
                                                                        value="زوج"
                                                                    ></v-checkbox>
                                                                </div>
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 100%;
                                                                    "
                                                                >
                                                                    <v-checkbox
                                                                        v-model="
                                                                            Case_FamilyNeeds
                                                                        "
                                                                        label="ملابس"
                                                                        value="ملابس"
                                                                    ></v-checkbox>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex">
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 50%;
                                                                    "
                                                                >
                                                                    <v-checkbox
                                                                        v-model="
                                                                            Case_FamilyNeeds
                                                                        "
                                                                        label="مرتبات"
                                                                        value="مرتبات"
                                                                    ></v-checkbox>
                                                                </div>

                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 50%;
                                                                    "
                                                                >
                                                                    <v-checkbox
                                                                        v-model="
                                                                            Case_FamilyNeeds
                                                                        "
                                                                        label="بطاطين"
                                                                        value="بطاطين"
                                                                    ></v-checkbox>
                                                                </div>
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 50%;
                                                                    "
                                                                >
                                                                    <v-checkbox
                                                                        v-model="
                                                                            Case_FamilyNeeds
                                                                        "
                                                                        label="شنطه غذائيه"
                                                                        value="شنطه غذائيه"
                                                                    ></v-checkbox>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex">
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 50%;
                                                                    "
                                                                >
                                                                    <v-checkbox
                                                                        v-model="
                                                                            Case_FamilyNeeds
                                                                        "
                                                                        label="كفاله شهريه"
                                                                        value="كفاله شهريه"
                                                                    ></v-checkbox>
                                                                </div>

                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 50%;
                                                                    "
                                                                >
                                                                    <v-checkbox
                                                                        v-model="
                                                                            Case_FamilyNeeds
                                                                        "
                                                                        label="اجهزه منزليه"
                                                                        value="اجهزه منزليه"
                                                                    ></v-checkbox>
                                                                </div>
                                                                <div
                                                                    class="d-flex flex-column"
                                                                    style="
                                                                        width: 50%;
                                                                    "
                                                                >
                                                                    <v-checkbox
                                                                        v-model="
                                                                            Case_FamilyNeeds
                                                                        "
                                                                        label="كفاله "
                                                                        value="كفاله "
                                                                    ></v-checkbox>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="btn"
                                                            @click="Add_Cases"
                                                        >
                                                            أضف الحالة
                                                        </div>
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
                                    </v-card>
                                </template>
                            </v-dialog>
                        </div>
                    </div>
                </div>
                <div class="text-center" v-if="(!empty, !loading)">
                    <v-pagination
                        v-if="!empty"
                        v-model="currentPage"
                        next-icon="mdi-menu-left"
                        prev-icon="mdi-menu-right"
                        :length="Math.ceil(filteredCases.length / 5)"
                        :total-visible="5"
                    ></v-pagination>
                </div>
            </template>
        </Offline_error>
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
                        <img
                            src="../assets/images/search.gif"
                            alt=""
                            width="50px"
                            style="
                                background: white;
                                padding: 10px;
                                border: 1px solid var(--main-color);
                                cursor: pointer;
                                border-top-left-radius: 5px;
                                border-bottom-left-radius: 5px;
                            "
                            @click="(dialog = false), this.filteredCases"
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
                            <img
                                src="../assets/images/filter.gif"
                                alt=""
                                width="40px"
                                style="background-color: white; color: #0088ff"
                            />
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
                                <v-btn-toggle
                                    v-model="isActive1"
                                    style="padding-left: 150px"
                                >
                                    <v-btn
                                        small
                                        v-model="isActive"
                                        @click="
                                            toggleActive('up'),
                                                funAtZClicked(),
                                                (isActive0 = null),
                                                (isActive2 = null),
                                                (isActive3 = null),
                                                (isActive4 = null),
                                                (dialog_1 = false)
                                        "
                                        :class="{
                                            active: isActive === 'up',
                                        }"
                                        style="margin-left: 10px"
                                    >
                                        <font-awesome-icon
                                            :icon="[
                                                'fas',
                                                'arrow-up-wide-short',
                                            ]"
                                            style="
                                                background: #fff;
                                                width: 50px;
                                                font-weight: bold;
                                                cursor: pointer;
                                                color: var(--main-color);
                                            "
                                        />
                                    </v-btn>
                                    <v-btn
                                        small
                                        v-model="isActive"
                                        @click="
                                            toggleActive('down'),
                                                funZtAClicked(),
                                                (isActive0 = null),
                                                (isActive2 = null),
                                                (isActive3 = null),
                                                (isActive4 = null),
                                                (dialog_1 = false)
                                        "
                                        :class="{
                                            active: isActive === 'down',
                                        }"
                                    >
                                        <font-awesome-icon
                                            :icon="[
                                                'fas',
                                                'arrow-up-short-wide',
                                            ]"
                                            style="
                                                background: #fff;
                                                width: 50px;
                                                font-weight: bold;
                                                cursor: pointer;
                                                color: var(--main-color);
                                            "
                                        />
                                    </v-btn>
                                </v-btn-toggle>
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
                                <v-btn-toggle
                                    v-model="isActive2"
                                    style="padding-left: 150px"
                                >
                                    <v-btn
                                        small
                                        v-model="isActive"
                                        @click="
                                            toggleActive('up'),
                                                funCards_STL(),
                                                (isActive1 = null),
                                                (isActive0 = null),
                                                (isActive3 = null),
                                                (isActive4 = null),
                                                (dialog_1 = false)
                                        "
                                        :class="{
                                            active: isActive === 'up',
                                        }"
                                        style="margin-left: 10px"
                                    >
                                        <font-awesome-icon
                                            :icon="[
                                                'fas',
                                                'arrow-up-wide-short',
                                            ]"
                                            style="
                                                background: #fff;
                                                width: 50px;
                                                font-weight: bold;
                                                cursor: pointer;
                                                color: var(--main-color);
                                            "
                                        />
                                    </v-btn>
                                    <v-btn
                                        small
                                        v-model="isActive"
                                        @click="
                                            toggleActive('down'),
                                                funCards_LTS(),
                                                (isActive1 = null),
                                                (isActive0 = null),
                                                (isActive3 = null),
                                                (isActive4 = null),
                                                (dialog_1 = false)
                                        "
                                        :class="{
                                            active: isActive === 'down',
                                        }"
                                    >
                                        <font-awesome-icon
                                            :icon="[
                                                'fas',
                                                'arrow-up-short-wide',
                                            ]"
                                            style="
                                                background: #fff;
                                                width: 50px;
                                                font-weight: bold;
                                                cursor: pointer;
                                                color: var(--main-color);
                                            "
                                        />
                                    </v-btn>
                                </v-btn-toggle>
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
                                <v-btn-toggle
                                    v-model="isActive3"
                                    style="padding-left: 150px"
                                >
                                    <v-btn
                                        small
                                        v-model="isActive"
                                        @click="
                                            toggleActive('up'),
                                                funFat_STL(),
                                                (isActive1 = null),
                                                (isActive2 = null),
                                                (isActive0 = null),
                                                (isActive4 = null),
                                                (dialog_1 = false)
                                        "
                                        :class="{
                                            active: isActive === 'up',
                                        }"
                                        style="margin-left: 10px"
                                    >
                                        <font-awesome-icon
                                            :icon="[
                                                'fas',
                                                'arrow-up-wide-short',
                                            ]"
                                            style="
                                                background: #fff;
                                                width: 50px;
                                                font-weight: bold;
                                                cursor: pointer;
                                                color: var(--main-color);
                                            "
                                        />
                                    </v-btn>
                                    <v-btn
                                        small
                                        v-model="isActive"
                                        @click="
                                            toggleActive('down'),
                                                funFat_LTS(),
                                                (isActive1 = null),
                                                (isActive2 = null),
                                                (isActive0 = null),
                                                (isActive4 = null),
                                                (dialog_1 = false)
                                        "
                                        :class="{
                                            active: isActive === 'down',
                                        }"
                                    >
                                        <font-awesome-icon
                                            :icon="[
                                                'fas',
                                                'arrow-up-short-wide',
                                            ]"
                                            style="
                                                background: #fff;
                                                width: 50px;
                                                font-weight: bold;
                                                cursor: pointer;
                                                color: var(--main-color);
                                            "
                                        />
                                    </v-btn>
                                </v-btn-toggle>
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
                            <v-btn-toggle
                                v-model="isActive4"
                                style="padding-left: 150px"
                            >
                                <v-btn
                                    small
                                    v-model="isActive"
                                    @click="
                                        toggleActive('up'),
                                            funCalories_STL(),
                                            (isActive1 = null),
                                            (isActive2 = null),
                                            (isActive3 = null),
                                            (isActive0 = null),
                                            (dialog_1 = false)
                                    "
                                    :class="{
                                        active: isActive === 'up',
                                    }"
                                    style="margin-left: 10px"
                                >
                                    <font-awesome-icon
                                        :icon="['fas', 'arrow-up-wide-short']"
                                        style="
                                            background: #fff;
                                            font-weight: bold;
                                            width: 50px;
                                            cursor: pointer;
                                            color: var(--main-color);
                                        "
                                    />
                                </v-btn>
                                <v-btn
                                    small
                                    v-model="isActive"
                                    @click="
                                        toggleActive('down'),
                                            funCalories_LTS(),
                                            (isActive1 = null),
                                            (isActive2 = null),
                                            (isActive3 = null),
                                            (isActive0 = null),
                                            (dialog_1 = false)
                                    "
                                    :class="{
                                        active: isActive === 'down',
                                    }"
                                >
                                    <font-awesome-icon
                                        :icon="['fas', 'arrow-up-short-wide']"
                                        style="
                                            background: #fff;
                                            width: 50px;
                                            font-weight: bold;
                                            cursor: pointer;
                                            color: var(--main-color);
                                        "
                                    />
                                </v-btn>
                            </v-btn-toggle>
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
                                this.Get_data(),
                                (isActive1 = null),
                                (isActive2 = null),
                                (isActive3 = null),
                                (isActive4 = null),
                                (dialog_1 = false)
                        "
                        :class="{
                            active: isActive === 'up',
                        }"
                    >
                        <font-awesome-icon :icon="['fas', 'rotate']" />
                        <div>إعادة ظبط الفلتر</div>
                    </v-btn>
                </v-card>
            </v-dialog>
        </div>
        <v-container v-if="!loading">
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
        <Add_cases v-if="Show_Add" :close_function="close_function" />
    </div>
</template>

<script>
import { ref } from "vue";
import Offline_error from "@/components/Offline_error.vue";
// Get  data
import {
    getFirestore,
    getDocs,
    collection,
    deleteDoc,
    doc,
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

// import Xlsx File
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
// import Components
import Add_cases from "@/components/Add_cases.vue";
import Empty_error from "@/components/Empty_error.vue";
export default {
    inject: ["Emitter"],
    name: "Dash_board",
    components: {
        Add_cases,
        Empty_error,
        Offline_error,
    },
    data() {
        return {
            search: "",
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
            isActive: false,
            isActive0: null,
            isActive1: null,
            isActive2: null,
            isActive3: null,
            isActive4: null,
            Show_Add: null,
            Cases: [],
            Cases_length: 0,
            Personal_Information: "",
            knowledge: 33,
            knowledge_1: 66,
            value: 0,
            FinancialInformation: "",
            SickCases: "",
            HousingCondition: "",
            FamilyNeeds: "",
            text0: "لا توجد بيانات",
            text: "لا توجد معلومات شخصية",
            text1: "لا توجد معلومات مالية",
            text2: "لا توجد أمراض ",
            text3: "لا توجد معلومات عن المسكن",
            text4: "لا توجد معلومات عن احتياجات الأسرة",
            tab: null,
            loading: true, // Loading state
            currentPage: 1, // Current page
            pageSize: 5, // Number of cases per page
            originalCases: [], // Store the original cases
            form: 1,
            isGridView: false,
            newVegetables: [],
            family_needs: ref(["كفالة", "إطعام"]),
            Byasc: [],
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
            currentStep: 1,
            e1: 1,
            steps: 5,
            title: [
                "",
                "المعلومات الشخصية",
                "المعلومات المالية",
                "الأمراض",
                "حالة المسكن",
                "إحتياجات الأسرة",
            ],
            number_rooms: [1, 2, 3, 4, 5],
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

    computed: {
        disabled() {
            return this.e1 === 1 ? "prev" : this.e1 === 5 ? "next" : undefined;
        },
        // Calculate total number of pages based on number of cases and page size
        totalPages() {
            return Math.ceil(this.filteredCases.length / this.pageSize);
        },
        // Filtered cases based on search term
        filteredCases() {
            if (!this.search.trim()) return this.Cases; // If search term is empty, return original Cases
            return this.Cases.filter((Case) =>
                Case.personal_info.name.includes(this.search.trim())
            );
        },

        // Paginated cases based on current page and page size
        paginatedCases() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            return this.filteredCases.slice(
                startIndex,
                startIndex + this.pageSize
            );
        },
    },
    mounted() {
        this.Get_data();
    },
    created() {
        // Initialize originalCases with a copy of Cases
        this.originalCases = [...this.Cases];
    },
    methods: {
        // Method to check internet connection status
        startInternetCheckerUse() {
            this.Emitter.emit("startInternetChecker");
        },
        async Get_data() {
            try {
                this.loading = true; // Set loading to true before fetching data
                this.Cases = [];
                const querySnapshot = await getDocs(collection(db, "Cases"));
                querySnapshot.forEach((doc) => {
                    this.Cases.push(doc.data());
                    this.originalCases = this.Cases;
                });
                this.Cases_length = this.Cases.length;
                console.log("this.Cases", this.Cases);
                if (this.Cases.length === 0) {
                    this.empty = true;
                    // Method to check internet connection status
                    this.startInternetCheckerUse();
                } else {
                    this.empty = false;
                }
                this.$emit("child-result", this.Cases_length);
                this.loading = false; // Set loading to false after data is loaded
                this.sumFinancialData();
            } catch (error) {
                console.error("Error adding document: ", error);
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
            this.dialog_2 = false;
            this.Get_data();
        },
        toggleActive(direction) {
            if (direction === "up") {
                this.isActive = this.isActive === "up" ? null : "up";
            } else if (direction === "down") {
                this.isActive = this.isActive === "down" ? null : "down";
            }
        },
        async deleteCase(caseId) {
            try {
                // Log before attempting to delete
                console.log("Deleting case from Firestore:", caseId);

                // Delete the document from Firestore
                await deleteDoc(doc(db, "Cases", caseId));
                // Log after successful deletion
                console.log(
                    "Case deleted from Firestore successfully:",
                    caseId
                );
                // Find the index of the Case in the Cases array
                const index = this.Cases.findIndex(
                    (Case) => Case.id === caseId
                );

                // If the Case is found in the Cases array, remove it
                if (index !== -1) {
                    this.Cases.splice(index, 1);
                    console.log("Case deleted successfully from Cases array");
                } else {
                    console.log("Case not found in Cases array");
                }
                this.sumFinancialData();
            } catch (error) {
                console.error("Error deleting case:", error);
                // Check if Firestore returned any specific error message
                if (error.code === "permission-denied") {
                    console.error("Permission denied. Check Firestore rules.");
                } else {
                    console.error("Unknown Firestore error:", error);
                }
            }
        },
        // change view
        Swap() {
            document.querySelector(".boxes ").classList.toggle("Change_View");
        },
        //get the data for each case
        Case_Information(Case) {
            this.Personal_Information = Case.personal_info;
            console.log(this.Personal_Information.national_id);
            this.Financial_Information = Case.financial_info;

            this.Disease_Information = Case.diseases;

            this.Housing_Condition = Case.housing_condition;
            this.Case_FamilyNeeds = Case.family_needs;
        },

        // First  Function ordered By >>>> A To Z
        funAtZClicked() {
            this.Cases = [...this.originalCases]; // Restore originalCases
            this.Cases.sort((a, b) =>
                a.personal_info.name.localeCompare(b.personal_info.name)
            );
        },
        // Seconed  Function ordered By >>>> Z To A
        funZtAClicked() {
            this.Cases = [...this.originalCases]; // Restore originalCases
            this.Cases.sort((a, b) =>
                b.personal_info.name.localeCompare(a.personal_info.name)
            );
        },
        //Third Function ordered By deficit >>>> S T L
        funCards_STL() {
            this.Cases = [...this.originalCases]; // Restore originalCases
            this.Cases.sort(
                (a, b) => a.financial_info.deficit - b.financial_info.deficit
            );
        },
        // Fourth  Function ordered By deficit >>>> L T S
        funCards_LTS() {
            this.Cases = [...this.originalCases]; // Restore originalCases
            this.Cases.sort(
                (a, b) => b.financial_info.deficit - a.financial_info.deficit
            );
        },
        // Fivth Function ordered incom >>>> S T L
        funFat_STL() {
            this.Cases = [...this.originalCases]; // Restore originalCases
            this.Cases.sort(
                (a, b) => a.financial_info.incom - b.financial_info.incom
            );
        },
        // Sixth Function ordered incom >>>> L T S
        funFat_LTS() {
            this.Cases = [...this.originalCases]; // Restore originalCases
            this.Cases.sort(
                (a, b) => b.financial_info.incom - a.financial_info.incom
            );
        },
        // seventh Function ordered required >>>>S T L
        funCalories_STL() {
            this.Cases = [...this.originalCases]; // Restore originalCases
            this.Cases.sort(
                (a, b) => a.financial_info.required - b.financial_info.required
            );
        },
        // Eight  Function ordered required >>>>L T S
        funCalories_LTS() {
            this.Cases = [...this.originalCases]; // Restore originalCases
            this.Cases.sort(
                (a, b) => b.financial_info.required - a.financial_info.required
            );
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

@media (max-width: 1060px) {
    .container_0 .statistics .main_box .small_box {
        width: 47%;
    }
}
.Table {
    display: table;
    width: 100%;
}
.Title {
    display: table-caption;
    text-align: center;
    font-weight: bold;
    font-size: larger;
}
.Heading {
    display: table-row;
    font-weight: bold;
    text-align: center;
}
.Row {
    display: table-row;
}
.Cell {
    display: table-cell;
    border: solid;
    border-width: thin;
    padding-left: 5px;
    padding-right: 5px;
}
/* Grid */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 10px;
}

.grid-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
}

.grid-cell {
    padding: 5px;
}
.boxes {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    margin: 10px auto;
    &.Change_View {
        flex-direction: row;
        flex-wrap: wrap;

        .box {
            width: 32%;
            flex-direction: column !important;
            gap: 20px;
            .row_chys {
                flex-direction: column !important;
                flex-wrap: nowrap;
                .col_chys {
                    max-width: 100% !important;
                    flex: 0;
                }
            }
            .About {
                width: 100%;
                justify-content: start;
            }
            .details {
                width: 100%;
            }
        }
    }
    .box {
        width: 100%;
        border: 1px solid #eee;
        border-radius: 5px;
        box-shadow: 0 0 10px #ddd;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: system-ui;

        .About {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            .index {
                padding: 5px 15px;
                border-radius: 5px;
                background: #eee;
                font-weight: bold;
            }
            .name {
                font-size: 20px;
                color: #767676;
                font-weight: bold;
                width: 250px;
            }
        }
        .Financial_details {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30px;
            & > div {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                background: #fafafa;
                padding: 10px 15px;
                border-radius: 5px;
                div {
                    font-size: 12px;
                    font-weight: bold;
                    color: #767676;
                }
                span {
                    color: #0088ff;
                    font-weight: bold;
                    font-size: 20px;
                    width: 70px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;
                }
            }
        }
        .details {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: #0088ff;
            padding: 7px;
            border-radius: 5px;
            color: #fff;
            width: 50% !important;
            font-weight: bold;
            cursor: pointer;
        }
    }
}
.dach_cher {
    display: none;
    background-color: #ffdddd;
    color: #d8000c;
    border: 1px solid #d8000c;
    padding: 10px;
    margin: 20px 0;
    text-align: center;
    border-radius: 5px;
    font-size: 16px;
}

.dach_cher.show {
    display: block;
    animation: fadeIn 0.5s;
}

.cases {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    .box {
        display: flex;
        flex-direction: column;
        gap: 10px;
        border: 1px solid var(--secound-color);
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px #ddd;
        width: 100%;

        & > .feat:first-child {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            margin-bottom: 30px;
            &::before {
                content: "";
                position: absolute;
                bottom: -15px;
                height: 3px;
                width: 100%;
                background: var(--secound-color);
            }
            span {
                display: flex;
                align-items: center;
                gap: 10px;
                .number {
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--main-color);
                    color: #fff;
                    border-radius: 5px;
                    font-size: 20px;
                    font-weight: bold;
                }
                .name {
                    color: var(--therd-color);
                    font-weight: bold;
                }
            }
        }
        .body {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 10px;

            .feat {
                width: 23%;
                border: 1px solid var(--secound-color);
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                gap: 10px;
                padding: 10px;
                border-radius: 5px;
                height: 126px;
                .number {
                    height: 70px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 25px;
                    font-weight: bold;
                    color: var(--therd-color);
                }
                .title {
                    color: var(--main-color);
                    font-weight: bold;
                }
            }
            & > .feat:first-child {
                .number {
                    color: var(--main-color);
                }
                .title {
                    color: var(--therd-color);
                }
            }
        }
        .progress-circular {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            p {
                font-weight: bold;
                color: var(--therd-color);
                text-align: center;
            }
        }
        .details {
            background: var(--main-color);
            border-radius: 5px;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            gap: 5px;
            font-weight: bold;
            margin-top: 10px;
            cursor: pointer;
        }
    }
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@media (max-width: 768px) {
    .boxes .box .details {
        width: 50% !important;
    }
    .cases .box .body .feat {
        height: 145px;
        width: 48%;
    }
}
@media (max-width: 1400px) {
    .boxes.Change_View .box {
        width: 48% !important;
    }
}
@media (max-width: 800px) {
    /* Apply styles for screens up to 800px wide */
    .boxes.Change_View .box {
        width: 100% !important;
    }
}
@media (max-width: 900px) {
    .boxes .box .Financial_details > div[data-v-5f88210f] {
        padding: 0 !important;
        gap: 4px;
    }
    .boxes .box .row_chys .col_chys .details {
        width: 100% !important;
    }
    .boxes .box .row_chys .col_chys .Financial_details {
        gap: 4px !important;
    }
}
@media (max-width: 400px) {
    .chip_info[data-v-d1ccef3e] {
        padding: 5px !important;
        font-size: 16px !important;
    }
}
</style>
