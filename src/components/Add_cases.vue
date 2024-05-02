<template>
    <div>
        <!-- <v-card class="mb-4">
            <v-card-text>
                <v-select
                    v-model="steps"
                    :items="[2, 3, 4, 5, 6]"
                    label="# of steps"
                ></v-select>
            </v-card-text>
        </v-card> -->

        <v-stepper v-model="e1" alt-labels>
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
                        <div class="form">
                            <div>
                                <v-text-field
                                    v-model="Case.personal_info.name"
                                    variant="outlined"
                                    label="الإسم ثلاثي"
                                    class="mt-2"
                                    style="width: 45%"
                                ></v-text-field>
                                <v-text-field
                                    v-model="Case.personal_info.nickname"
                                    variant="outlined"
                                    label="اسم الشهرة"
                                    class="mt-2"
                                    style="width: 45%"
                                ></v-text-field>
                            </div>
                            <div>
                                <v-text-field
                                    v-model="Case.personal_info.nationalID"
                                    variant="outlined"
                                    label="الرقم القومي"
                                    class="mt-2"
                                    style="width: 45%"
                                ></v-text-field>
                                <v-select
                                    style="width: 45%"
                                    v-model="Case.personal_info.governorate"
                                    :items="Governorates"
                                    label="المحافظة"
                                ></v-select>
                            </div>
                        </div>
                    </div>
                    <div v-if="e1 === 2">number -2</div>
                    <div v-if="e1 === 3">number -3</div>
                    <div v-if="e1 === 4">number -4</div>
                    <div v-if="e1 === 5">number -5</div>
                </v-stepper-window>

                <v-stepper-actions
                    :disabled="disabled"
                    @click:next="next"
                    @click:prev="prev"
                ></v-stepper-actions>
            </template>
        </v-stepper>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
        };
    },

    computed: {
        disabled() {
            return this.e1 === 1
                ? "prev"
                : this.e1 === this.steps
                ? "next"
                : undefined;
        },
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
</style>
