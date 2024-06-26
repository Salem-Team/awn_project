<template>
    <div class="mian_overlay" @click="close_function_1"></div>
    <div class="main_popup" style="z-index: 11">
        <div class="header mr-4">
            <div style="font-family: 'Cairo', sans-serif; font-size: 20px">
                إضافة حالة
            </div>
            <font-awesome-icon
                :icon="['fas', 'xmark']"
                @click="close_function_1"
            />
        </div>
        <v-divider class="border-opacity-20" color="#7a7a7a"></v-divider>

        <v-stepper editable v-model="e1" alt-labels style="padding: 5px">
            <template v-slot:default="{ prev, next }">
                <v-stepper-header class="stepper_head">
                    <template v-for="n in steps" :key="`${n}-step`">
                        <v-stepper-item
                            class="stepper-width"
                            :ripple="false"
                            style="font-size: 13px; font-weight: bold"
                            :title="title[n]"
                            :complete="e1 > n"
                            :step="`Step ${n}`"
                            :value="n"
                            ref="stepperItems"
                        >
                        </v-stepper-item>
                    </template>
                </v-stepper-header>

                <v-stepper-window class="m-3">
                    <div v-if="e1 === 1" ref="slide1">
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
                                            color="#0088ff"
                                        ></v-text-field>
                                        <span
                                            class="hint"
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
                                            color="#0088ff"
                                        ></v-text-field>
                                        <span
                                            calss="hint"
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
                                            color="#0088ff"
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
                                            color="#0088ff"
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
                                            color="#0088ff"
                                            v-model="
                                                personal_info_1.detailed_address
                                            "
                                            class="mt-2"
                                            style="
                                                width: 100%;
                                                min-height: 70px;
                                            "
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
                                            class="hint"
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
                                            color="#0088ff"
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
                                            color="#0088ff"
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
                                            color="#0088ff"
                                            v-model="
                                                personal_info_1.marital_status
                                            "
                                            class="mt-2"
                                            variant="outlined"
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
                                            color="#0088ff"
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
                    <div v-if="e1 === 2" ref="slide2">
                        <form @submit.prevent="validateForm" action="post">
                            <div class="form">
                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-text-field
                                            color="#0088ff"
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
                                            color="#0088ff"
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
                                            color="#0088ff"
                                            v-model="financial_info_2.deficit"
                                            label="العجز "
                                            class="mt-2"
                                            style="pointer-events: none"
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
                    <div v-if="e1 === 3" ref="slide3">
                        <div class="add_Patient">
                            <div class="Addbtn mb-6" style="width: 250px">
                                <v-btn
                                    append-icon="mdi-plus"
                                    @click="addform_dis"
                                    color="#0088ff"
                                    variant="outlined"
                                    style="
                                        font-size: 15px;
                                        font-family: Cairo;
                                        padding: 5px;
                                        width: 100%;
                                    "
                                >
                                    أضافه حاله مرضيه اخرى
                                </v-btn>
                            </div>
                        </div>
                        <form @submit.prevent="validateForm3" action="post">
                            <div
                                class="bg-[#eee]"
                                v-for="(dis, index) in diseases_3"
                                :key="index"
                            >
                                <!-- first row -->
                                <div class="form">
                                    <div>
                                        <div
                                            class="d-flex flex-column"
                                            style="width: 50%"
                                        >
                                            <v-text-field
                                                v-model="dis.patien_name"
                                                label=" اسم المريض "
                                                variant="outlined"
                                                style="width: 100%"
                                                placeholder="اسم المريض"
                                                color="#0088ff"
                                            ></v-text-field>
                                        </div>
                                        <div
                                            class="d-flex flex-column"
                                            style="width: 50%"
                                        >
                                            <v-text-field
                                                v-model="dis.disease"
                                                label="  المرض "
                                                variant="outlined"
                                                style="width: 100%"
                                                color="#0088ff"
                                                placeholder=" المرض"
                                            ></v-text-field>
                                        </div>
                                    </div>

                                    <div>
                                        <div
                                            class="d-flex flex-column"
                                            style="width: 50%"
                                        >
                                            <v-text-field
                                                v-model="dis.get_treatment"
                                                label="كيفيه الحصول علي العلاج"
                                                variant="outlined"
                                                style="width: 100%"
                                                placeholder="كيفيه الحصول علي العلاج "
                                                color="#0088ff"
                                            ></v-text-field>
                                        </div>

                                        <div
                                            class="d-flex flex-column"
                                            style="width: 50%"
                                        >
                                            <v-text-field
                                                v-model="dis.not_available"
                                                label=" السبب في عدم العلاج علي نفقه الدولة"
                                                variant="outlined"
                                                style="width: 100%"
                                                placeholder="السبب في عدم العلاج علي نفقه الدولة"
                                                color="#0088ff"
                                            ></v-text-field>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div v-if="e1 === 4" ref="slide4">
                        <form @submit.prevent="validateForm4" action="post">
                            <div class="form">
                                <div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-select
                                            color="#0088ff"
                                            variant="outlined"
                                            v-model="
                                                housing_condition_4.number_rooms
                                            "
                                            :items="number_rooms"
                                            class="mt-2"
                                            style="
                                                width: 100%;
                                                border-radius: 0;
                                            "
                                            label=" عدد الغرف"
                                        ></v-select>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-select
                                            color="#0088ff"
                                            variant="outlined"
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
                                            color="#0088ff"
                                            variant="outlined"
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
                                            color="#0088ff"
                                            variant="outlined"
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
                                            color="#0088ff"
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
                                            color="#0088ff"
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
                                            color="#0088ff"
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
                                        color="#0088ff"
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
                                            color="#0088ff"
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
                                        color="#0088ff"
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
                    <div v-if="e1 === 5" ref="slide5">
                        <form @submit.prevent="validateForm5" action="post">
                            <div class="form">
                                <v-divider
                                    class="border-opacity-100"
                                    color="#7a7a7a"
                                ></v-divider>
                                <div class="Case_options">
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="family_needs_Array"
                                            label="طبي"
                                            color="primary"
                                            value="طبي"
                                        ></v-checkbox>
                                    </div>

                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="family_needs_Array"
                                            color="primary"
                                            label="زوج"
                                            value="زوج"
                                            class="larger-checkbox"
                                        ></v-checkbox>
                                    </div>
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            v-model="family_needs_Array"
                                            color="primary"
                                            label="ملابس"
                                            value="ملابس"
                                        ></v-checkbox>
                                    </div>
                                </div>
                                <v-divider
                                    class="border-opacity-100"
                                    color="#7a7a7a"
                                ></v-divider>
                                <div class="Case_options">
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            color="primary"
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
                                            color="primary"
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
                                            color="primary"
                                            v-model="family_needs_Array"
                                            label="شنطه غذائيه"
                                            value="شنطه غذائيه"
                                        ></v-checkbox>
                                    </div>
                                </div>
                                <v-divider
                                    class="border-opacity-100"
                                    color="#7a7a7a"
                                ></v-divider>
                                <div class="Case_options">
                                    <div
                                        class="d-flex flex-column"
                                        style="width: 50%"
                                    >
                                        <v-checkbox
                                            color="primary"
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
                                            color="primary"
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
                                            color="primary"
                                            v-model="family_needs_Array"
                                            label="كفاله "
                                            value="كفاله "
                                            rounded
                                        ></v-checkbox>
                                    </div>
                                </div>
                                <v-divider
                                    class="border-opacity-100"
                                    color="#7a7a7a"
                                ></v-divider>
                            </div>
                            <div class="btn_add">
                                <v-btn
                                    style="font-family: 'Cairo', sans-serif"
                                    class="btn"
                                    @click="Add_Cases"
                                    color="#fff"
                                    append-icon="mdi-account-plus"
                                    ><span>أضف الحالة</span>
                                </v-btn>
                            </div>
                        </form>
                    </div>
                </v-stepper-window>
                <v-stepper-actions
                    class="d-flex justify-center ga-5"
                    :disabled="disabled"
                    @click:next="next"
                    @click:prev="prev"
                    type="submit"
                    style="
                        padding: 0 1.5rem 1rem;
                        /* position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, 576%); */
                    "
                >
                    <template #prev="{ props }">
                        <v-btn
                            class="prev"
                            style="background-color: #eee"
                            @click="() => props.onClick('prev')"
                            rounded="lg"
                            size="large"
                        >
                            <span class="icon2 ml-3"
                                ><font-awesome-icon
                                    icon="chevron-right"
                                    size="lg"
                            /></span>
                            <span> رجوع</span>
                        </v-btn>
                    </template>
                    <template #next="{ props }">
                        <div>
                            <v-btn
                                @click="
                                    () => {
                                        props.onClick('next');
                                        animateSlideChange();
                                    }
                                "
                                rounded="lg"
                                size="large"
                            >
                                <span> التالي</span>
                                <span class="icon1 mr-4">
                                    <font-awesome-icon
                                        icon="chevron-left"
                                        size="lg"
                                /></span>
                            </v-btn>
                        </div>
                    </template>
                </v-stepper-actions>
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
// import Gsap animations
import { gsap } from "gsap";
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
        // animation headers
        animateIcons() {
            this.$refs.stepperItems.forEach((item, index) => {
                gsap.fromTo(
                    item.$el,
                    {
                        opacity: 0, // البداية من opacity 0.5
                        x: 50 * (index + 1), // الوضع الأولي للإحداثي y
                    },
                    {
                        duration: 0.5, // مدة الحركة
                        opacity: 1, // النهاية عند opacity 1
                        x: 0, // النهاية عند الإحداثي y صفر
                        delay: index * 0.2, // تأخير حسب الترتيب
                        ease: "power2.out", // نوع الانتقال
                    }
                );
            });
        },
        // second ani
        animateSlideChange() {
            const slides = [
                this.$refs.slide1,
                this.$refs.slide2,
                this.$refs.slide3,
                this.$refs.slide4,
                this.$refs.slide5,
            ];

            slides.forEach((slide, index) => {
                gsap.fromTo(
                    slide,
                    {
                        opacity: 0.5, // البداية من opacity 0.5
                        x: 100 * (index + 1), // الوضع الأولي للإحداثي y (من الأعلى)
                    },
                    {
                        duration: 0.7, // مدة الحركة
                        opacity: 1, // النهاية عند opacity 1
                        x: 0, // النهاية عند الإحداثي y = 0 (الأسفل)
                        // delay: index * 0.1, // تأخير حسب الترتيب
                        ease: "power2.out", // نوع الانتقال
                    }
                );
            });
        },
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
        e1(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.$nextTick(() => {
                    this.animateSlideChange();
                });
            }
        },
    },
    mounted() {
        this.animateIcons();
        this.animateSlideChange();
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
// .form > div[data-v-2ee767a5] {
//     min-height: 50px !important;
// }
// basics Styles
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
    height: 90%;
    margin: auto;
    border: 2px solid #ddd;
    border-radius: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: auto;
    background: #fff;
    z-index: 4;
    font-family: system-ui;
}
.mian_overlay {
    width: 100%;
    height: 100%;
    z-index: 11;
    position: fixed;
    background: #7f7f7f80;
    top: 0;
    left: 0;
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    overflow: auto;
    padding: 10px;
    font-size: 25px;
    color: #0088ff;
    font-weight: bold;
    svg {
        cursor: pointer;
    }
}

// ُErrors ms
span.hint {
    font-size: 15px !important;
}
.v-messages__message {
    font-size: 14px !important;
}
// Close Popup Icon
.svg-inline--fa.fa-xmark {
    width: 25px;
    height: 25px;
    padding: 10px;
    transition: 0.5s;
    border-radius: 50%;
}
//Hovering Popup Close Icon
.svg-inline--fa.fa-xmark:hover {
    border-radius: 50%;
    background-color: #ddd !important;
    color: #707070 !important;
}

// items in header
button.v-stepper-item.stepper-width {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
}

// When item header Selected
button.v-stepper-item.v-stepper-item--selected {
    border-radius: 2px;
    transition: 0.7s;
    .v-icon.notranslate.v-theme--myCustomLightTheme.v-icon--size-default[data-v-2ee767a5] {
        color: #0088ff !important;
        animation: fadeIn 0.5s infinite ease-in-out alternate;
    }
    ::v-deep.v-stepper-item--selected .v-stepper-item__avatar.v-avatar {
        background-color: #fff !important;
        color: #0088ff;
    }
}

// Styling Form >> Add Casess personal info
::v-deep.v-input--density-default .v-field--variant-outlined,
::v-deep.v-input--density-default .v-field--single-line,
::v-deep.v-input--density-default .v-field--no-label {
    font-family: cairo;
}
.v-sheet.v-theme--myCustomLightTheme.v-stepper.v-stepper--alt-labels {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
}
// Btn Steppers
.v-btn {
    display: flex;
    width: 150px;
    padding: 5px;
    transition: background-color 0.3s, color 0.3s;
    span {
        font-weight: 600 !important;
        font-size: 15px !important;
        margin-right: 5px;
    }
    font-family: "Cairo";
}
.v-btn:hover {
    transition: 0.5;
    background-color: #0088ff;
    color: #ffffff;
}
.v-btn.prev:hover {
    background: #5c5c5c !important;
    color: #fff !important;
    transition: 0.5;
}
.icon2.ml-3 {
    font-size: 15px !important;
}
.v-btn:hover .icon2.ml-3 {
    animation: moveRight 0.5s infinite ease-in-out alternate;
}
.v-btn:hover .icon1.mr-4 {
    animation: moveLift 0.5s infinite ease-in-out alternate;
}

.Addbtn .v-btn {
    transition: 0.4s;
}
.Addbtn:hover .v-btn {
    background-color: #0088ff !important;
    color: #fff !important;
    // transition: 3s;
}
span.v-btn__append {
    margin: 9px !important;
}
::v-deep.focus-effect input:focus {
    border-color: #0088ff !important;
    box-shadow: 0 0 5px #0088ff !important;
    transition: border-color 0.5s, box-shadow 0.5s;
}
// family sections
.v-checkbox {
    font-size: 18px; /* Adjust font size for label (optional) */
}
hr.v-divider.v-theme--myCustomLightTheme.text-info.border-opacity-100 {
    margin: 0 !important;
}
::v-deep .v-label--clickable {
    width: 140px !important;
    font-size: 22px !important;
    font-family: "Cairo" !important;
}
// Add case btn
.btn_add {
    display: flex;
    justify-content: center;
    margin: 100px 0 50px 0;
}
.v-btn.v-btn--elevated.v-theme--myCustomLightTheme.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn:hover {
    transition: 0.5s;
    background-color: #0088ff !important;
    color: #fff !important;
}
.btn_add .v-btn {
    width: 200px !important;
    height: 45px !important;
    padding: 10px !important;
    font-size: 20px !important;
    font-family: "Cairo", sans-serif !important;
    transition: 0.5s;
    border: 1px solid #0088ff;
    color: #0088ff !important;
    position: relative;
    overflow: hidden;
    transition: color 0.5s ease;
}

.btn_add .v-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0088ff;
    transition: transform 0.5s ease;
    transform: scaleX(0);
    transform-origin: right;
    z-index: 0;
}

.btn_add .v-btn:hover::before {
    transition: 0.5s;
    background-color: #0088ff !important;
    color: #fff !important;
    transform: scaleX(1);
}

.btn_add .v-btn span {
    position: relative;
    z-index: 1;
}

.btn_add .v-btn .v-icon {
    position: relative;
    z-index: 1;
}
// Start Edit header items
// The Container Headdr

.v-stepper-header.stepper_head {
    display: flex;
    justify-content: center;
    align-content: space-around;
    flex-wrap: wrap;
    gap: 25px;
    min-height: 70px;
    border: none;
    box-shadow: none;
}
.v-stepper--alt-labels .v-stepper-item .v-stepper-item__title {
    font-size: 13px !important;
}
// The Items Headdr
.v-stepper-item {
    font-family: "Cairo", sans-serif !important;
}
// Number items
::v-deep.v-stepper--alt-labels .v-stepper-item__avatar.v-avatar {
    margin-bottom: 0 !important;
}
.stepper-width {
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    margin: 0 10px;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding: 0 10px;
}
.stepper-width {
    color: #707070; /* Text color */
}
.v-stepper-item.v-stepper-item--selected[data-v-2ee767a5] {
    color: #0088ff;
}

.stepper-width::before {
    content: "";
    position: absolute;
    left: -30px; /* Adjust the position */
    width: 0;
    height: 0;
    border-top: 25px solid transparent; /* Half the height */
    border-bottom: 25px solid transparent; /* Half the height */
    border-right: 30px solid #f0f0f0; /* Same as background color */
}

::v-deep.stepper-width.v-stepper__step--complete::before {
    border-left-color: #1976d2 !important; /* Same as completed background color */
}
.v-window.v-theme--myCustomLightTheme.v-stepper-window.m-3 {
    min-height: auto;
}
// Customize All Media Screen
@media (max-width: 1288px) {
    button.v-stepper-item.stepper-width {
        flex-basis: 169px !important ;
    }
}

@media (max-width: 1258px) {
    button.v-stepper-item.stepper-width {
        flex-basis: 166px !important ;
    }
    button.v-stepper-item.v-stepper-item--selected.stepper-width {
        font-size: 12px !important;
    }
}
@media (max-width: 1238px) {
    button.v-stepper-item.stepper-width {
        flex-basis: 162px !important ;
    }
    button.v-stepper-item.v-stepper-item--selected.stepper-width {
        font-size: 12px !important;
    }
}
@media (max-width: 1218px) {
    button.v-stepper-item.stepper-width {
        flex-basis: 160px !important ;
    }
}
@media (max-width: 1206px) {
    button.v-stepper-item.stepper-width {
        flex-basis: 158px !important ;
    }
    button.v-stepper-item.v-stepper-item--selected.stepper-width {
        font-size: 11px !important;
    }
}
@media (max-width: 1197px) {
    .stepper-width[data-v-2ee767a5]::before {
        display: none;
    }
}

@media screen and (max-width: 700px) {
    button.v-stepper-item.stepper-width {
        flex-basis: 177px !important ;
    }
    .form > div[data-v-2ee767a5] {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important  ;
    }
    ::v-deep label.v-label.v-label--clickable,
    [data-v-d1ccef3e] .v-label--clickable {
        width: 95px !important;
        font-size: 14px !important;
    }
    .form
        > div[data-v-2ee767a5][data-v-2ee767a5]:not(
            .Case_options[data-v-2ee767a5]
        ) {
        flex-direction: column !important;
    }
    ::v-deep.form > .Case_options[data-v-2ee767a5] {
        flex-direction: row !important;
    }
    hr.v-divider.v-theme--myCustomLightTheme.border-opacity-100 {
        display: none !important;
    }
    .btn_add[data-v-2ee767a5] {
        margin: 16px !important;
    }
    .v-input__control,
    .mt-2.d-flex.flex-column,
    .d-flex.flex-column {
        width: 90% !important;
    }
    .add_Patient {
        width: 100%;
        display: flex;
        justify-content: space-around;
        .Addbtn.mb-6 {
            margin-top: 3px !important;
            width: 90% !important;
        }
    }
    .v-stepper-header.stepper_head[data-v-2ee767a5] {
        gap: 8px !important;
    }
}

// All Used Animations
// Animation Fadein
@keyframes fadeIn {
    from {
        transform: scale(1);
        // transform: translateY(0px);
    }
    to {
        transform: scale(1.2);
        // transform: translateY(10px);
    }
}
// Ani MoveOn
@keyframes moveRight {
    from {
        transform: translateX(0);
        // transform: translateY(0px);
    }
    to {
        transform: translateX(-5px);
        // transform: translateY(10px);
    }
}
@keyframes moveLift {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(5px);
    }
}
@keyframes Scale3d {
    from {
        transform: scaleY(1);
    }
    to {
        transform: scaleY(1.1);
    }
}
</style>
