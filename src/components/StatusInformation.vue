<template>
    <v-dialog v-model="dialog">
        <v-container style="direction: rtl">
            <v-row>
                <v-col>
                    <v-card>
                        <v-toolbar>
                            <template v-slot:extension>
                                <v-tabs
                                    v-model="tab"
                                    align-tabs="title"
                                    class="tabtest"
                                    color="primary"
                                    style="direction: rtl"
                                >
                                    <v-tab
                                        v-for="head in headers"
                                        :key="head.title"
                                        :value="head.id"
                                        @click="console.log(this.tab.key)"
                                    >
                                        {{ head.title }}
                                    </v-tab>
                                </v-tabs>
                            </template>
                        </v-toolbar>

                        <v-window v-model="tab">
                            <v-window-item
                                v-for="varb in vegetables"
                                :key="varb"
                                :value="varb.id"
                            >
                                <v-card flat v-if="varb.id == 1">
                                    <v-card-text
                                        v-for="jss in this
                                            .productPersonalInformation"
                                        :key="jss"
                                    >
                                        <h3 v-show="jss.namea">
                                            {{
                                                " الاسم ثلاثي" +
                                                " : " +
                                                jss.namea
                                            }}
                                        </h3>
                                        <h3 v-show="jss.nameb">
                                            {{
                                                "اسم الشهره" + " : " + jss.nameb
                                            }}
                                        </h3>
                                        <h3 v-show="jss.cardNumber">
                                            {{
                                                "رقم البطاقه" +
                                                " : " +
                                                jss.cardNumber
                                            }}
                                        </h3>
                                        <h3 v-show="jss.Region">
                                            {{
                                                " المحافظه" + " : " + jss.Region
                                            }}
                                        </h3>
                                        <h3 v-show="jss.HouseNumber">
                                            {{
                                                " رقم المنزل" +
                                                " : " +
                                                jss.HouseNumber
                                            }}
                                        </h3>
                                        <h3 v-show="jss.FloorNumber">
                                            {{
                                                " رقم الدور" +
                                                " : " +
                                                jss.FloorNumber
                                            }}
                                        </h3>
                                        <h3 v-show="jss.theAddress">
                                            {{
                                                " العنوان" +
                                                " : " +
                                                jss.theAddress
                                            }}
                                        </h3>
                                        <h3 v-show="jss.SocialStatus">
                                            {{
                                                " الحاله الاجتماعيه" +
                                                " : " +
                                                jss.SocialStatus
                                            }}
                                        </h3>
                                        <h3 v-show="jss.phoneNumber">
                                            {{
                                                "  رقم التليفون" +
                                                " : " +
                                                jss.phoneNumber
                                            }}
                                        </h3>
                                    </v-card-text>
                                </v-card>
                                <v-card flat v-if="varb.id == 2">
                                    <v-card-text
                                        v-for="jss in this
                                            .productFinancialInformation"
                                        :key="jss"
                                    >
                                        <h3 v-show="jss.Required">
                                            {{
                                                "  المطلوب " +
                                                " : " +
                                                jss.Required
                                            }}
                                        </h3>
                                        <h3 v-show="jss.Inside">
                                            {{
                                                "  الداخل " + " : " + jss.Inside
                                            }}
                                        </h3>
                                        <h3 v-show="jss.Impotence">
                                            {{
                                                "  العجز " +
                                                " : " +
                                                jss.Impotence
                                            }}
                                        </h3>
                                        <h3 v-show="jss.TreatmentExpenses">
                                            {{
                                                "  مصروفات العلاج " +
                                                " : " +
                                                jss.TreatmentExpenses
                                            }}
                                        </h3></v-card-text
                                    > </v-card
                                ><v-card flat v-if="varb.id == 3">
                                    <v-card-text
                                        v-for="jss in this.productSickCases"
                                        :key="jss"
                                    >
                                        <h3 v-show="jss.PatientName">
                                            {{
                                                "اسم المريض" +
                                                " : " +
                                                jss.PatientName
                                            }}
                                        </h3>
                                        <h3 v-show="jss.theDisease">
                                            {{
                                                "المرض " +
                                                " : " +
                                                jss.theDisease
                                            }}
                                        </h3>
                                        <h3 v-show="jss.treatment">
                                            {{
                                                "كيفيه الحصول علي العلاج" +
                                                " : " +
                                                jss.treatment
                                            }}
                                        </h3>
                                        <h3 v-show="jss.Reasontreatment">
                                            {{
                                                "السبب في عد العلاج علي نفقه الدوله" +
                                                " : " +
                                                jss.Reasontreatment
                                            }}
                                        </h3></v-card-text
                                    >
                                </v-card>
                                <v-card flat v-if="varb.id == 4">
                                    <v-card-text
                                        v-for="jss in this
                                            .productHousingCondition"
                                        :key="jss"
                                    >
                                        <h3 v-show="jss.numberRooms">
                                            {{
                                                "عدد الغرف" +
                                                " : " +
                                                jss.numberRooms
                                            }}
                                        </h3>
                                        <h3 v-show="jss.ApartmentType">
                                            {{
                                                "الشقه ملك ام ايجار " +
                                                " : " +
                                                jss.ApartmentType
                                            }}
                                        </h3>
                                        <h3 v-show="jss.BathroomType">
                                            {{
                                                "الحمام خاص ام مشترك " +
                                                " : " +
                                                jss.BathroomType
                                            }}
                                        </h3>
                                        <h3 v-show="jss.FloorType">
                                            {{
                                                "نوع الارضيه" +
                                                " : " +
                                                jss.FloorType
                                            }}
                                        </h3>
                                        <h3 v-show="jss.Descriptionkitchen">
                                            {{
                                                "وصف شامل للمطبخ  " +
                                                " : " +
                                                jss.Descriptionkitchen
                                            }}
                                        </h3>
                                        <h3 v-show="jss.DescriptionRoom1">
                                            {{
                                                "وصف سريع للغرفه رقم 1  " +
                                                " : " +
                                                jss.DescriptionRoom1
                                            }}
                                        </h3>
                                        <h3 v-show="jss.DescriptionRoom2">
                                            {{
                                                "وصف سريع للغرفه رقم 2 " +
                                                " : " +
                                                jss.DescriptionRoom2
                                            }}
                                        </h3>
                                        <h3 v-show="jss.DescriptionRoom3">
                                            {{
                                                "وصف سريع للغرفه رقم 3 " +
                                                " : " +
                                                jss.DescriptionRoom3
                                            }}
                                        </h3>
                                    </v-card-text> </v-card
                                ><v-card flat v-if="varb.id == 5">
                                    <v-card-text
                                        v-for="jss in this.productFamilyNeeds"
                                        :key="jss"
                                    >
                                        <h3 v-show="jss.medical">
                                            {{ "طبي" + " : " + jss.medical }}
                                        </h3>
                                        <h3 v-show="jss.Husband">
                                            {{ "زوج " + " : " + jss.Husband }}
                                        </h3>
                                        <h3 v-show="jss.clothes">
                                            {{ "ملابس" + " : " + jss.clothes }}
                                        </h3>
                                        <h3 v-show="jss.salaries">
                                            {{
                                                "مرتبات" + " : " + jss.salaries
                                            }}
                                        </h3>
                                        <h3 v-show="jss.Blankets">
                                            {{
                                                "بطاطين" + " : " + jss.Blankets
                                            }}
                                        </h3>
                                        <h3 v-show="jss.FoodBag">
                                            {{
                                                "شنطه غذائيه" +
                                                " : " +
                                                jss.FoodBag
                                            }}
                                        </h3>
                                        <h3 v-show="jss.MonthlyWarranty">
                                            {{
                                                "كفاله شهريه" +
                                                " : " +
                                                jss.MonthlyWarranty
                                            }}
                                        </h3>
                                        <h3 v-show="jss.Appliances">
                                            {{
                                                "اجهزه منزليه" +
                                                " : " +
                                                jss.Appliances
                                            }}
                                        </h3>
                                    </v-card-text>
                                </v-card>
                            </v-window-item>
                        </v-window>
                    </v-card>
                </v-col>
            </v-row>
        </v-container></v-dialog
    >
</template>
<script>
export default {
    inject: ["Emitter"],
    data: () => ({
        dialog: false,
        productPersonalInformation: "",
        FinancialInformation: "",
        SickCases: "",
        HousingCondition: "",
        FamilyNeeds: "",
        headers: [
            { title: "المعلومات الشخصيه", key: "personalInformation", id: 1 },
            { title: "المعلومات الماليه", key: "name", id: 2 },
            { title: "الحالات المرضيه", key: "calories", id: 3 },
            { title: "حاله المسكن", key: "fat", id: 4 },
            { title: "احتياجات الاسره", key: "carbs", id: 5 },
        ],
        vegetables: [
            {
                id: 1,
                name: "اسلام ابوسيف",
                calories: 23,
                fat: 0.4,
                carbs: 3.6,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: "اسلام علاء عبدالرحمن" },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "Albuhayra" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "اسلام علاء" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "صفر" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "صفر" },
                ],
            },
            {
                id: 2,
                name: "محمد احمد",
                calories: 23,
                fat: 0.4,
                carbs: 3.6,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: "اسلام علاء عبدالرحمن" },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "Albuhayra" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "اسلام علاء" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "صفر" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "صفر" },
                ],
            },
            {
                id: 3,
                name: "خالد علي",
                calories: 23,
                fat: 0.4,
                carbs: 3.6,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: "خالد علي" },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "البحيره" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "اسلام علاء" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "صفر" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "صفر" },
                ],
            },
            {
                id: 4,
                name: "محمد ابراهيم",
                calories: 23,
                fat: 0.4,
                carbs: 3.6,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: "محمد ابراهيم " },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "Albuhayra" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "اسلام علاء" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "صفر" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "صفر" },
                ],
            },
            {
                id: 5,
                name: "محمد ابراهيم",
                calories: 23,
                fat: 0.4,
                carbs: 3.6,
                protein: 2.9,
                iron: "15%",
                personalInformation: [
                    { namea: "اسلام علاء عبدالرحمن" },
                    { nameb: "اسلام ابوسيف" },
                    { cardNumber: 124445788987 },
                    { Region: "Albuhayra" },
                    { HouseNumber: 4 },
                    { FloorNumber: 2 },
                    { theAddress: "دوله مصر - محافظه البحيره - مركز ابوحمص" },
                    { SocialStatus: "اعزب" },
                    { phoneNumber: "01201253897" },
                ],
                FinancialInformation: [
                    { Required: 2000 },
                    { Inside: 1000 },
                    { Impotence: 500 },
                    { TreatmentExpenses: 200 },
                ],
                SickCases: [
                    { PatientName: "اسلام علاء" },
                    { theDisease: "السكري" },
                    { treatment: "المستشفي" },
                    { Reasontreatment: "عدم القدره الماليه" },
                ],
                HousingCondition: [
                    { numberRooms: 3 },
                    { ApartmentType: "ايجار" },
                    { BathroomType: "مشترك" },
                    { FloorType: "بلاط" },
                    { Descriptionkitchen: "صغير" },
                    { DescriptionRoom1: "صغر" },
                    { DescriptionRoom2: "صغر" },
                    { DescriptionRoom3: "صفر" },
                ],
                FamilyNeeds: [
                    { medical: "صفر" },
                    { Husband: "صفر" },
                    { clothes: "صفر" },
                    { salaries: "صفر" },
                    { Blankets: "صفر" },
                    { FoodBag: "صفر" },
                    { MonthlyWarranty: "صفر" },
                    { Appliances: "صفر" },
                ],
            },
        ],
        tab: null,
        test: "",
    }),
    mounted() {
        this.Emitter.on("openStatusInformation", (data) => {
            this.productPersonalInformation = data.personalInformation;
            this.productFinancialInformation = data.FinancialInformation;
            this.productSickCases = data.SickCases;
            this.productHousingCondition = data.HousingCondition;
            this.productFamilyNeeds = data.FamilyNeeds;
            this.dialog = true;
            this.vegetables.personalInformation =
                this.productPersonalInformation;
            this.vegetables.FinancialInformation =
                this.productFinancialInformation;
            this.vegetables.SickCases = this.productSickCases;
            this.vegetables.HousingCondition = this.productHousingCondition;
            this.vegetables.FamilyNeeds = this.productFamilyNeeds;
        });
    },
};
</script>
<style>
@media (max-width: 778px) {
    .v-slide-group__container {
        direction: ltr !important;
    }
}
.v-toolbar__extension {
    justify-content: flex-end;
}
.v-toolbar__content {
    direction: rtl;
    height: 0px !important;
}
.v-card-text {
    margin-right: 28px !important;
}
</style>
