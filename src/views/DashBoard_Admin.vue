<template>
    <div class="Dash_board">
        <!-- NavBar  -->
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
                                <v-tab class="mahtagn_tap" value="المحتاجين"
                                    >المحتاجين</v-tab
                                >
                                <v-tab class="mahtagn_tap" value="الجمعيات"
                                    >الجمعيات</v-tab
                                >
                            </v-tabs>
                        </v-card>
                        <v-window v-model="tab">
                            <v-window-item value="المحتاجين">
                                <Offline_error>
                                    <template v-slot:default>
                                        <Empty_error
                                            v-if="empty === true"
                                            :text="text0"
                                        />
                                        <div
                                            class="cases"
                                            v-else-if="empty !== true"
                                        >
                                            <div
                                                class="box"
                                                :class="'box ' + Case.id"
                                                v-for="(
                                                    Case, index
                                                ) in paginatedCases"
                                                :key="Case.id"
                                            >
                                                <div class="feat">
                                                    <span>
                                                        <div class="number">
                                                            {{
                                                                (currentPage -
                                                                    1) *
                                                                    5 +
                                                                index +
                                                                1
                                                            }}
                                                        </div>
                                                        <div class="name">
                                                            {{
                                                                Case
                                                                    .personal_info
                                                                    .name
                                                            }}
                                                        </div>
                                                    </span>
                                                    <img
                                                        src="../assets/images/trash.gif"
                                                        alt=""
                                                        width="20px"
                                                        style="cursor: pointer"
                                                        @click="
                                                            deleteCase(Case.id)
                                                        "
                                                    />
                                                </div>
                                                <div class="body">
                                                    <div class="feat">
                                                        <div class="number">
                                                            {{
                                                                Case
                                                                    .financial_info
                                                                    .required ||
                                                                0
                                                            }}
                                                        </div>
                                                        <div class="title">
                                                            المطلوب
                                                        </div>
                                                    </div>
                                                    <div class="feat">
                                                        <div class="number">
                                                            {{
                                                                Case
                                                                    .financial_info
                                                                    .incom || 0
                                                            }}
                                                        </div>
                                                        <div class="title">
                                                            الدخل
                                                        </div>
                                                    </div>
                                                    <div class="feat">
                                                        <div class="small_box">
                                                            <div>
                                                                <!-- Progress circular -->
                                                                <div
                                                                    class="progress-circular"
                                                                >
                                                                    <v-progress-circular
                                                                        class="mt-0"
                                                                        bg-color="var(--secound-color)"
                                                                        :rotate="
                                                                            360
                                                                        "
                                                                        :size="
                                                                            70
                                                                        "
                                                                        :width="
                                                                            20
                                                                        "
                                                                        color="var(--main-color)"
                                                                        style="
                                                                            font-size: 13px;
                                                                        "
                                                                        :model-value="
                                                                            Math.round(
                                                                                ((parseInt(
                                                                                    Case
                                                                                        .financial_info
                                                                                        .incom
                                                                                ) ||
                                                                                    0) /
                                                                                    (parseInt(
                                                                                        Case
                                                                                            .financial_info
                                                                                            .required
                                                                                    ) ||
                                                                                        0)) *
                                                                                    100
                                                                            ) ||
                                                                            0
                                                                        "
                                                                    >
                                                                        <template
                                                                            #default
                                                                        >
                                                                            <strong>
                                                                                {{
                                                                                    Math.round(
                                                                                        ((parseInt(
                                                                                            Case
                                                                                                .financial_info
                                                                                                .incom
                                                                                        ) ||
                                                                                            0) /
                                                                                            (parseInt(
                                                                                                Case
                                                                                                    .financial_info
                                                                                                    .required
                                                                                            ) ||
                                                                                                0)) *
                                                                                            100
                                                                                    ) ||
                                                                                    0
                                                                                }}%
                                                                            </strong>
                                                                        </template>
                                                                    </v-progress-circular>
                                                                    <p>
                                                                        نسبة
                                                                        إكمال
                                                                        المطلوب
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="feat">
                                                        <div class="number">
                                                            لا
                                                        </div>
                                                        <div class="title">
                                                            حالة مشتركة؟
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="details"
                                                    @click="
                                                        Case_Information(Case)
                                                    "
                                                >
                                                    <font-awesome-icon
                                                        :icon="[
                                                            'fas',
                                                            'circle-info',
                                                        ]"
                                                    />
                                                    <div>التفاصيل</div>
                                                    <!--this a dialog to show the case's data-->
                                                    <v-dialog
                                                        activator="parent"
                                                        width="100%"
                                                        scrollable
                                                    >
                                                        <template
                                                            v-slot:default="{
                                                                isActive,
                                                            }"
                                                        >
                                                            <v-card
                                                                rounded="lg"
                                                            >
                                                                <v-card-title
                                                                    class="d-flex justify-space-between align-center"
                                                                >
                                                                    <div
                                                                        class="text-h5 ps-2 text-primary"
                                                                    >
                                                                        تفاصيل
                                                                        الحالة
                                                                    </div>
                                                                    <v-btn
                                                                        class="text-primary"
                                                                        icon="mdi-close"
                                                                        variant="text"
                                                                        @click="
                                                                            isActive.value = false
                                                                        "
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
                                                                        v-slot:default="{
                                                                            prev,
                                                                            next,
                                                                        }"
                                                                    >
                                                                        <v-stepper-header>
                                                                            <template
                                                                                v-for="n in steps"
                                                                                :key="`${n}-step`"
                                                                            >
                                                                                <v-stepper-item
                                                                                    :title="
                                                                                        title[
                                                                                            n
                                                                                        ]
                                                                                    "
                                                                                    editable
                                                                                    :complete="
                                                                                        e1 >
                                                                                        n
                                                                                    "
                                                                                    :step="`Step {{ n }}`"
                                                                                    :value="
                                                                                        n
                                                                                    "
                                                                                ></v-stepper-item>

                                                                                <v-divider
                                                                                    v-if="
                                                                                        n !==
                                                                                        steps
                                                                                    "
                                                                                    :key="
                                                                                        n
                                                                                    "
                                                                                ></v-divider>
                                                                            </template>
                                                                        </v-stepper-header>

                                                                        <v-stepper-window>
                                                                            <div
                                                                                v-if="
                                                                                    e1 ===
                                                                                    1
                                                                                "
                                                                            >
                                                                                <!-- Show empty error if no data -->
                                                                                <Empty_error
                                                                                    v-if="
                                                                                        Personal_Information.length ===
                                                                                        0
                                                                                    "
                                                                                    :text="
                                                                                        text
                                                                                    "
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
                                                                            <div
                                                                                v-if="
                                                                                    e1 ===
                                                                                    2
                                                                                "
                                                                            >
                                                                                <!-- Show empty error if no data -->
                                                                                <Empty_error
                                                                                    v-if="
                                                                                        Financial_Information.length ===
                                                                                        0
                                                                                    "
                                                                                    :text="
                                                                                        text1
                                                                                    "
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
                                                                            <div
                                                                                v-if="
                                                                                    e1 ===
                                                                                    3
                                                                                "
                                                                            >
                                                                                <!-- Show empty error if no data -->
                                                                                <Empty_error
                                                                                    v-if="
                                                                                        Disease_Information.length ===
                                                                                        0
                                                                                    "
                                                                                    :text="
                                                                                        text2
                                                                                    "
                                                                                />
                                                                                <div
                                                                                    v-else
                                                                                >
                                                                                    <div
                                                                                        v-for="info in Disease_Information"
                                                                                        :key="
                                                                                            info
                                                                                        "
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

                                                                            <div
                                                                                v-if="
                                                                                    e1 ===
                                                                                    4
                                                                                "
                                                                            >
                                                                                <!-- Show empty error if no data -->
                                                                                <Empty_error
                                                                                    v-if="
                                                                                        Housing_Condition.length ===
                                                                                        0
                                                                                    "
                                                                                    :text="
                                                                                        text3
                                                                                    "
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
                                                                            <div
                                                                                v-if="
                                                                                    e1 ===
                                                                                    5
                                                                                "
                                                                            >
                                                                                <!-- Show empty error if no data -->
                                                                                <Empty_error
                                                                                    v-if="
                                                                                        Case_FamilyNeeds.length ===
                                                                                        0
                                                                                    "
                                                                                    :text="
                                                                                        text4
                                                                                    "
                                                                                />
                                                                                <div
                                                                                    v-else-if="
                                                                                        Case_FamilyNeeds.length !==
                                                                                        0
                                                                                    "
                                                                                    class="form"
                                                                                >
                                                                                    <div
                                                                                        class="d-flex"
                                                                                    >
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
                                                                                    <div
                                                                                        class="d-flex"
                                                                                    >
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
                                                                                    <div
                                                                                        class="d-flex"
                                                                                    >
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
                                                                                    @click="
                                                                                        Add_Cases
                                                                                    "
                                                                                >
                                                                                    أضف
                                                                                    الحالة
                                                                                </div>
                                                                            </div>
                                                                        </v-stepper-window>

                                                                        <v-stepper-actions
                                                                            :disabled="
                                                                                disabled
                                                                            "
                                                                            @click:next="
                                                                                next
                                                                            "
                                                                            @click:prev="
                                                                                prev
                                                                            "
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

                                        <div class="text-center">
                                            <v-pagination
                                                v-model="currentPage"
                                                next-icon="mdi-menu-left"
                                                prev-icon="mdi-menu-right"
                                                :length="
                                                    Math.ceil(
                                                        filteredCases.length / 5
                                                    )
                                                "
                                                :total-visible="5"
                                            ></v-pagination>
                                        </div>
                                    </template>
                                </Offline_error>
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
                                                        Cases_length
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
import Offline_error from "@/components/Offline_error.vue";
import Empty_error from "@/components/Empty_error.vue";
import { ref } from "vue";
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
// import Components
import CharityView from "@/components/Charity_View.vue";
//import DashboardCharitys from "@/components/DashboardCharitys.vue";
//import Side_Bar from "@/components/Side_Bar.vue";

export default {
    inject: ["Emitter"],
    name: "Dash_board",

    components: {
        Empty_error,
        Offline_error,
        //DashboardCharitys,
        //Side_Bar,
        CharityView,
    },
    data() {
        return {
            search: "",
            childResult1: null,
            isActive: false,
            Personal_Information: "",
            knowledge: 33,
            knowledge_1: 66,
            value: 50,
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
            Cases_length: 0,
            Cases: [],
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
            empty: false,
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
            } catch (error) {
                console.error("Error adding document: ", error);
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
        //get the data for each case
        Case_Information(Case) {
            this.Personal_Information = Case.personal_info;
            console.log(this.Personal_Information.national_id);
            this.Financial_Information = Case.financial_info;

            this.Disease_Information = Case.diseases;

            this.Housing_Condition = Case.housing_condition;
            this.Case_FamilyNeeds = Case.family_needs;
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
