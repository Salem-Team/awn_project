<template>
  <div class="home">
    <DashboardCharitys />
    <StatusInformation />
  </div>
</template>

<script>
import DashboardCharitys from "@/components/DashboardCharitys.vue";
import StatusInformation from "@/components/StatusInformation.vue";

// @ is an alias to /src
export default {
  name: "HomeView",
  components: { DashboardCharitys, StatusInformation },
};
</script>
