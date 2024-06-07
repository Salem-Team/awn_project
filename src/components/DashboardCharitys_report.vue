<template>
    <Offline_error>
        <template v-slot:default>
            <Empty_error v-if="empty == true" :text="text0" />
            <div style="width: 100%" v-else-if="empty !== true">
                <v-container>
                    <v-text-field
                        v-model="search"
                        label="أبحث"
                        hide-details
                        style="
                            font-family: 'Inter', sans-serif;
                            font-weight: 500;
                            line-height: 18px;
                            text-align: center;
                        "
                    ></v-text-field>
                    <div class="boxes">
                        <div
                            :class="'box ' + Case.personal_info.national_id"
                            v-for="(Case, index) in paginatedCases"
                            :key="Case"
                        >
                            <v-row class="row_chys" style="width: 100%">
                                <v-col
                                    style="
                                        display: flex;
                                        justify-content: start;
                                        align-items: center;
                                    "
                                    class="col_chys"
                                    lg="4"
                                    sm="12"
                                    md="6"
                                >
                                    <div class="About">
                                        <div class="index">
                                            {{
                                                (currentPage - 1) * 5 +
                                                index +
                                                1
                                            }}
                                        </div>
                                        <div class="name">
                                            {{ Case.personal_info.name }}
                                        </div>
                                    </div>
                                </v-col>
                                <v-col lg="4" md="6" sm="12" class="col_chys">
                                    <div class="Financial_details">
                                        <div class="required">
                                            <span
                                                >{{
                                                    Case.financial_info
                                                        .required || 0
                                                }}
                                            </span>
                                            <div>مطلوب</div>
                                        </div>
                                        <div class="incom">
                                            <span
                                                >{{
                                                    Case.financial_info.incom ||
                                                    0
                                                }}
                                            </span>
                                            <div>دخل</div>
                                        </div>
                                        <div class="deficit">
                                            <span
                                                >{{
                                                    Case.financial_info
                                                        .deficit || 0
                                                }}
                                            </span>
                                            <div>عجز</div>
                                        </div>
                                        <!-- Chart -->
                                        <div>
                                            <!-- Progress circular -->
                                            <div class="progress-circular">
                                                <p class="text-center mb-4">
                                                    نسبة إكمال العجز
                                                </p>
                                                <v-progress-circular
                                                    class="mt-0"
                                                    bg-color="#00CCCC"
                                                    :rotate="360"
                                                    :size="90"
                                                    :width="20"
                                                    color="orange"
                                                    style="font-size: 10px"
                                                    :model-value="
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
                                                                ) || 1)) *
                                                                100
                                                        )
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
                                                                        ) ||
                                                                            1)) *
                                                                        100
                                                                )
                                                            }}%
                                                        </strong>
                                                    </template>
                                                </v-progress-circular>
                                            </div>
                                        </div>
                                    </div></v-col
                                >
                                <v-col
                                    lg="4"
                                    md="12"
                                    sm="12"
                                    class="col_chys"
                                    style="
                                        display: flex;
                                        justify-content: end;
                                        align-items: center;
                                    "
                                >
                                    <div
                                        class="details"
                                        @click="Case_Information(Case)"
                                    >
                                        <font-awesome-icon
                                            :icon="['fas', 'circle-info']"
                                        />
                                        <div>التفاصيل</div>
                                        <!--this a dialog to show the case's data-->
                                        <v-dialog
                                            activator="parent"
                                            width="100%"
                                            scrollable
                                        >
                                            <template
                                                v-slot:default="{ isActive }"
                                            >
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
                                                                        :key="n"
                                                                    ></v-divider>
                                                                </template>
                                                            </v-stepper-header>

                                                            <v-stepper-window>
                                                                <div
                                                                    v-if="
                                                                        e1 === 1
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
                                                                        e1 === 2
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
                                                                        e1 === 3
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
                                                                    <div v-else>
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
                                                                        e1 === 4
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
                                                                        e1 === 5
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
                                        </v-dialog></div
                                ></v-col>
                            </v-row>
                        </div>
                    </div>
                </v-container>
                <div>
                    <v-progress-linear
                        color="primary"
                        indeterminate
                        v-if="loading"
                    ></v-progress-linear>
                </div>
                <div class="text-center">
                    <v-pagination
                        v-model="currentPage"
                        next-icon="mdi-menu-left"
                        prev-icon="mdi-menu-right"
                        :length="Math.ceil(filteredCases.length / 5)"
                        :total-visible="5"
                        @input="paginate"
                    ></v-pagination>
                </div>
            </div>
        </template>
    </Offline_error>
</template>
<script scoped>
import Offline_error from "@/components/Offline_error.vue";
import Empty_error from "@/components/Empty_error.vue";
import { ref } from "vue";
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

export default {
    components: { Empty_error, Offline_error },
    inject: ["Emitter"],
    emits: ["child-result1", "child-result"],
    data: () => ({
        text0: "لا توجد بيانات",
        text: "لا توجد معلومات شخصية",
        text1: "لا توجد معلومات مالية",
        text2: "لا توجد أمراض ",
        text3: "لا توجد معلومات عن المسكن",
        text4: "لا توجد معلومات عن احتياجات الأسرة",
        Personal_Information: "",
        FinancialInformation: "",
        SickCases: "",
        HousingCondition: "",
        FamilyNeeds: "",
        tab: null,
        loading: false, // Loading state
        currentPage: 1, // Current page
        pageSize: 5, // Number of cases per page
        Cases_length: 0,
        Cases: [],
        originalCases: [], // Store the original cases
        form: 1,
        isGridView: false,
        search: "",
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
    }),

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
    methods: {
        emitUpdate() {
            this.$emit("updateArray", this.formDataArray);
        },
        paginate(page) {
            this.currentPage = page;
        },
        // Method to check internet connection status
        startInternetCheckerUse() {
            this.Emitter.emit("startInternetChecker");
        },
        Send_Function_To_Perant() {
            this.$emit("Send_Function_To_Perant", this.Get_data());
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
                this.sumFinancialData();
                this.$emit("child-result", this.Cases_length);
                this.loading = false; // Set loading to false after data is loaded
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        },
        // Loop through each case to extract financial_info
        sumFinancialData() {
            this.deficit = 0;
            this.required = 0;
            this.incom = 0;
            this.Cases.forEach((Case) => {
                if (!isNaN(parseInt(Case.financial_info.deficit))) {
                    this.deficit += parseInt(Case.financial_info.deficit);
                }
                if (!isNaN(parseInt(Case.financial_info.required))) {
                    this.required += parseInt(Case.financial_info.required);
                }
                if (!isNaN(parseInt(Case.financial_info.incom))) {
                    this.incom += parseInt(Case.financial_info.incom);
                }
            });

            // إرسال القيمة إلى الأب
            this.$emit("child-result1", this.required - this.incom);
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
    },
    mounted() {
        // Method to check internet connection status
        this.startInternetCheckerUse();
    },
};
</script>
<style lang="scss" scoped>
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
@media (max-width: 768px) {
    .boxes .box .details {
        width: 50% !important;
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
