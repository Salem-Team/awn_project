<template>
  <v-container style="direction: rtl">
    <v-row>
      <v-col>
        <v-card>
          <v-table
            height="82vh"
            hover
            fixed-header
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 500;
              line-height: 18px;
              text-align: center;
            "
          >
            <thead>
              <tr style="font-size: 30px">
                <th v-for="head in headers" :key="head.title">
                  {{ head.title }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                style="font-size: 25px"
                v-for="vege in vegetables"
                :key="vege.name"
              >
                <td style="text-align: start">
                  {{ vege.id }}
                </td>
                <td style="text-align: start">
                  {{ vege.name }}
                </td>
                <td style="text-align: start">
                  {{ vege.calories }}
                </td>
                <td style="text-align: start">
                  {{ vege.fat }}
                </td>
                <td style="text-align: start">
                  {{ vege.carbs }}
                </td>
                <td style="text-align: start">
                  <v-btn
                    @click="openStatusInformation(vege)"
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 600;
                      line-height: 18px;
                      text-align: center;
                      font-size: 25px;
                    "
                    >عرض التفاصيل</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  inject: ["Emitter"],
  methods: {
    openStatusInformation(product) {
      this.Emitter.emit("openStatusInformation", product);
    },
  },
  data: () => ({
    headers: [
      { title: "الترتيب", key: "id" },
      { title: "الاسم", key: "name" },
      { title: "مطلوب", key: "calories" },
      { title: "داخل", key: "fat" },
      { title: "عجز", key: "carbs" },
      { title: "التفاصيل", key: "protein" },
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
          { namea: "اسلام ابوسيف" },
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
        id: 2,
        name: "محمد احمد",
        calories: 23,
        fat: 0.4,
        carbs: 3.6,
        protein: 2.9,
        iron: "15%",
        personalInformation: [
          { namea: " محمد احمد " },
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
          { PatientName: "خالد علي" },
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
        name: "خالد محمود",
        calories: 23,
        fat: 0.4,
        carbs: 3.6,
        protein: 2.9,
        iron: "15%",
        personalInformation: [
          { namea: "خالد محمود" },
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
          { Blankets: "1" },
          { FoodBag: "صفر" },
          { MonthlyWarranty: "صفر" },
          { Appliances: "صفر" },
        ],
      },
      {
        id: 6,
        name: "محمد محمود",
        calories: 23,
        fat: 0.4,
        carbs: 3.6,
        protein: 2.9,
        iron: "15%",
        personalInformation: [
          { namea: " محمد محمود" },
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
          { Blankets: "1" },
          { FoodBag: "صفر" },
          { MonthlyWarranty: "صفر" },
          { Appliances: "صفر" },
        ],
      },
      {
        id: 7,
        name: "محمد شاهين",
        calories: 23,
        fat: 0.4,
        carbs: 3.6,
        protein: 2.9,
        iron: "15%",
        personalInformation: [
          { namea: "محمد شاهين" },
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
          { Blankets: "1" },
          { FoodBag: "صفر" },
          { MonthlyWarranty: "صفر" },
          { Appliances: "صفر" },
        ],
      },
      {
        id: 8,
        name: "محمد سمير",
        calories: 23,
        fat: 0.4,
        carbs: 3.6,
        protein: 2.9,
        iron: "15%",
        personalInformation: [
          { namea: "محمد سمير" },
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
          { Blankets: "1" },
          { FoodBag: "صفر" },
          { MonthlyWarranty: "صفر" },
          { Appliances: "صفر" },
        ],
      },
      {
        id: 9,
        name: "محمد علي",
        calories: 23,
        fat: 0.4,
        carbs: 3.6,
        protein: 2.9,
        iron: "15%",
        personalInformation: [
          { namea: "محمد علي " },
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
          { Blankets: "1" },
          { FoodBag: "صفر" },
          { MonthlyWarranty: "صفر" },
          { Appliances: "66" },
        ],
      },
    ],
  }),
};
</script>
